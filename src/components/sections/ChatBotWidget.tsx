"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type QuickReply = {
  title: string;
  answer: string;
};

const quickReplies: QuickReply[] = [
  {
    title: "Сколько стоит тренировка?",
    answer: "Персональная online live-тренировка: 2000 руб. Подберу удобный формат и расписание."
  },
  {
    title: "Как проходит online формат?",
    answer: "Занятие идет в прямом эфире с обратной связью по технике и корректировкой нагрузки в моменте."
  },
  {
    title: "С чего начать?",
    answer: "Напишите в Telegram, и я задам 3-4 вопроса, после чего предложу персональный план старта."
  }
];

export function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState(quickReplies[0]?.answer ?? "");

  const telegramLink = useMemo(() => "https://t.me/MariaSportick", []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            className="fixed bottom-24 right-4 z-[70] w-[min(92vw,360px)] rounded-3xl border border-white/70 bg-white/90 p-4 shadow-[0_22px_55px_-32px_rgba(66,118,165,0.55)] backdrop-blur-xl md:right-8"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-[#35536e]">Fitness Assistant</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-[#e6f3fb] px-2 py-1 text-xs text-[#4f7394]"
                aria-label="Закрыть чат"
              >
                Закрыть
              </button>
            </div>

            <p className="rounded-2xl bg-[#edf7ff] px-3 py-2 text-sm leading-relaxed text-[#466783]">{activeAnswer}</p>

            <div className="mt-3 grid gap-2">
              {quickReplies.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveAnswer(item.answer)}
                  className="rounded-xl border border-[#d3e8f8] bg-white px-3 py-2 text-left text-xs text-[#45617a] transition hover:bg-[#f3faff]"
                >
                  {item.title}
                </button>
              ))}
            </div>

            <a
              href={telegramLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#8ec5eb] px-4 py-2 text-xs uppercase tracking-[0.16em] text-white"
            >
              Перейти в Telegram
            </a>
          </motion.aside>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="fixed bottom-5 right-4 z-[71] rounded-full bg-[#8ec5eb] px-5 py-3 text-xs uppercase tracking-[0.16em] text-white shadow-[0_18px_35px_-20px_rgba(63,119,165,0.72)] md:right-8"
      >
        {isOpen ? "Свернуть чат" : "Чат-бот"}
      </motion.button>
    </>
  );
}
