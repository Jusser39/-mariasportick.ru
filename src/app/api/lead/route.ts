import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  goal?: string;
  contact?: string;
  schedule?: string;
};

type QueueItem = {
  id: string;
  submittedAt: string;
  name: string;
  goal: string;
  contact: string;
  schedule: string;
};

const targetEmail = "rabochaya_veb_pochta@mail.ru";
const backupDir = path.join(process.cwd(), "var");
const backupFile = path.join(backupDir, "leads-backup.jsonl");
const queueFile = path.join(backupDir, "leads-queue.json");

function sanitize(input: unknown): string {
  return typeof input === "string" ? input.trim() : "";
}

async function writeBackup(entry: Record<string, unknown>) {
  await mkdir(backupDir, { recursive: true });
  await appendFile(backupFile, `${JSON.stringify(entry)}\n`, "utf8");
}

async function readQueue(): Promise<QueueItem[]> {
  try {
    const raw = await readFile(queueFile, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((item): item is QueueItem => {
      if (!item || typeof item !== "object") {
        return false;
      }

      const candidate = item as Partial<QueueItem>;
      return (
        typeof candidate.id === "string" &&
        typeof candidate.submittedAt === "string" &&
        typeof candidate.name === "string" &&
        typeof candidate.goal === "string" &&
        typeof candidate.contact === "string" &&
        typeof candidate.schedule === "string"
      );
    });
  } catch {
    return [];
  }
}

async function writeQueue(queue: QueueItem[]) {
  await mkdir(backupDir, { recursive: true });
  await writeFile(queueFile, JSON.stringify(queue), "utf8");
}

async function sendToFormSubmit(item: QueueItem) {
  const payload = {
    name: item.name,
    goal: item.goal,
    contact: item.contact,
    schedule: item.schedule,
    _subject: "Новая заявка с сайта mariasportick.ru",
    _template: "table",
    _captcha: "false"
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    const body = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      body
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

async function flushQueue(currentQueue: QueueItem[]) {
  const remaining: QueueItem[] = [];
  const deliveredIds = new Set<string>();

  for (const item of currentQueue) {
    try {
      const result = await sendToFormSubmit(item);

      if (result.ok) {
        deliveredIds.add(item.id);
        await writeBackup({
          id: item.id,
          submittedAt: item.submittedAt,
          deliveredAt: new Date().toISOString(),
          deliveryStatus: "delivered",
          upstreamStatus: result.status,
          name: item.name,
          contact: item.contact,
          goal: item.goal,
          schedule: item.schedule,
          upstreamBody: result.body
        });
        continue;
      }

      remaining.push(item);
      await writeBackup({
        id: item.id,
        submittedAt: item.submittedAt,
        checkedAt: new Date().toISOString(),
        deliveryStatus: "queued",
        upstreamStatus: result.status,
        name: item.name,
        contact: item.contact,
        goal: item.goal,
        schedule: item.schedule,
        upstreamBody: result.body
      });
    } catch {
      remaining.push(item);
      await writeBackup({
        id: item.id,
        submittedAt: item.submittedAt,
        checkedAt: new Date().toISOString(),
        deliveryStatus: "queued",
        upstreamStatus: null,
        name: item.name,
        contact: item.contact,
        goal: item.goal,
        schedule: item.schedule,
        upstreamBody: "request_failed"
      });
    }
  }

  await writeQueue(remaining);
  return { remaining, deliveredIds };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;
    const name = sanitize(body.name);
    const contact = sanitize(body.contact);
    const goal = sanitize(body.goal) || "-";
    const schedule = sanitize(body.schedule) || "-";

    if (!name || !contact) {
      return NextResponse.json({ ok: false, message: "Заполните обязательные поля: имя и контакт." }, { status: 400 });
    }

    const currentLead: QueueItem = {
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      name,
      contact,
      goal,
      schedule
    };

    const queue = await readQueue();
    queue.push(currentLead);
    await writeQueue(queue);

    await writeBackup({
      id: currentLead.id,
      submittedAt: currentLead.submittedAt,
      deliveryStatus: "queued",
      name,
      contact,
      goal,
      schedule,
      upstreamBody: "queued_for_delivery"
    });

    const { remaining, deliveredIds } = await flushQueue(queue);
    const isDelivered = deliveredIds.has(currentLead.id) && !remaining.some((item) => item.id === currentLead.id);

    if (isDelivered) {
      return NextResponse.json({ ok: true, message: "Заявка отправлена. С вами свяжутся в ближайшее время." });
    }

    return NextResponse.json(
      {
        ok: true,
        queued: true,
        message:
          "Заявка принята и сохранена. Канал отправки временно перегружен, но заявка не потеряется и будет обработана."
      },
      { status: 202 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "Сервис заявок временно недоступен. Попробуйте еще раз через минуту." },
      { status: 500 }
    );
  }
}
