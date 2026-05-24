import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  goal?: string;
  contact?: string;
  schedule?: string;
};

const targetEmail = "rabochaya_veb_pochta@mail.ru";
const backupDir = path.join(process.cwd(), "var");
const backupFile = path.join(backupDir, "leads-backup.jsonl");

function sanitize(input: unknown): string {
  return typeof input === "string" ? input.trim() : "";
}

async function writeBackup(entry: Record<string, unknown>) {
  await mkdir(backupDir, { recursive: true });
  await appendFile(backupFile, `${JSON.stringify(entry)}\n`, "utf8");
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

    const payload = {
      name,
      goal,
      contact,
      schedule,
      _subject: "Новая заявка с сайта mariasportick.ru",
      _template: "table",
      _captcha: "false"
    };

    const submittedAt = new Date().toISOString();

    let deliveryStatus: "delivered" | "queued" = "queued";
    let upstreamStatus: number | null = null;
    let upstreamBody = "";

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      upstreamStatus = response.status;
      upstreamBody = await response.text();

      if (response.ok) {
        deliveryStatus = "delivered";
      }
    } catch {
      deliveryStatus = "queued";
    }

    await writeBackup({
      submittedAt,
      deliveryStatus,
      upstreamStatus,
      name,
      contact,
      goal,
      schedule,
      upstreamBody
    });

    if (deliveryStatus === "delivered") {
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
