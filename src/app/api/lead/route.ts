import { NextResponse } from "next/server";

const targetEmail = "rabochaya_veb_pochta@mail.ru";

type LeadPayload = {
  name?: string;
  goal?: string;
  contact?: string;
  schedule?: string;
};

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректные данные формы." }, { status: 400 });
  }

  const name = payload.name?.trim() || "-";
  const goal = payload.goal?.trim() || "-";
  const contact = payload.contact?.trim() || "-";
  const schedule = payload.schedule?.trim() || "-";

  if (name === "-" || contact === "-") {
    return NextResponse.json({ error: "Укажите имя и контакт." }, { status: 400 });
  }

  const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name,
      goal,
      contact,
      schedule,
      _subject: "Новая заявка с сайта mariasportick.ru",
      _template: "table",
      _captcha: "false"
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Не удалось отправить заявку." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}