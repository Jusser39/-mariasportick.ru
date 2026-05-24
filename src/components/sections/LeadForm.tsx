"use client";

import { FormEvent, useMemo, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";

type FormState = {
  name: string;
  goal: string;
  contact: string;
  schedule: string;
};

const initialState: FormState = {
  name: "",
  goal: "",
  contact: "",
  schedule: ""
};

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const telegramLink = useMemo(() => "https://t.me/MariaSportick", []);
  const targetEmail = useMemo(() => "rabochaya_veb_pochta@mail.ru", []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("send_failed");
      }

      setForm(initialState);
      setFeedback(`Заявка отправлена на ${targetEmail}.`);
    } catch {
      setFeedback("Не удалось отправить заявку автоматически. Попробуйте Telegram ниже.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="lead" className="mx-auto w-[min(1120px,92%)] py-24 md:py-32">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#8f74ba]">Заявка</p>
        <h2 className="mt-4 max-w-[15ch] text-4xl leading-[1.03] text-[#2a2440] md:text-5xl">
          Оставьте заявку и получите персональный план старта.
        </h2>
      </Reveal>

      <Reveal delay={0.08} className="mt-10">
        <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-white/65 bg-white/70 p-6 shadow-[0_22px_45px_-35px_rgba(84,69,136,0.45)] md:grid-cols-2 md:p-8">
          <label className="grid gap-2 text-sm text-[#4f466f]">
            Имя
            <input
              required
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="rounded-xl border border-[#ddd3ef] bg-white px-4 py-3 text-[#312952] outline-none transition focus:border-[#a78fd1]"
              placeholder="Как к вам обращаться"
              autoComplete="name"
            />
          </label>

          <label className="grid gap-2 text-sm text-[#4f466f]">
            Контакт
            <input
              required
              value={form.contact}
              onChange={(event) => setForm((prev) => ({ ...prev, contact: event.target.value }))}
              className="rounded-xl border border-[#ddd3ef] bg-white px-4 py-3 text-[#312952] outline-none transition focus:border-[#a78fd1]"
              placeholder="Telegram или телефон"
              autoComplete="tel"
            />
          </label>

          <label className="grid gap-2 text-sm text-[#4f466f]">
            Цель
            <input
              value={form.goal}
              onChange={(event) => setForm((prev) => ({ ...prev, goal: event.target.value }))}
              className="rounded-xl border border-[#ddd3ef] bg-white px-4 py-3 text-[#312952] outline-none transition focus:border-[#a78fd1]"
              placeholder="Похудение, рельеф, гибкость"
            />
          </label>

          <label className="grid gap-2 text-sm text-[#4f466f]">
            Удобное время
            <input
              value={form.schedule}
              onChange={(event) => setForm((prev) => ({ ...prev, schedule: event.target.value }))}
              className="rounded-xl border border-[#ddd3ef] bg-white px-4 py-3 text-[#312952] outline-none transition focus:border-[#a78fd1]"
              placeholder="Будни 19:00-21:00"
            />
          </label>

          <div className="md:col-span-2 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex rounded-full border border-[#c7def2] bg-[#8ec5eb] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#f8fcff]"
            >
              {isSubmitting ? "Отправляем..." : "Отправить заявку"}
            </button>
            <a
              href={telegramLink}
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.18em] text-[#5d537d] underline-offset-4 hover:underline"
            >
              Или написать напрямую в Telegram
            </a>
            {feedback && <p className="text-sm text-[#3a6b8f]">{feedback}</p>}
          </div>
        </form>
      </Reveal>
    </section>
  );
}
