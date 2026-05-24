"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/animations/Reveal";

export function Cta() {
  return (
    <section id="cta" className="px-4 pb-20 pt-6 md:px-8 md:pb-28">
      <Reveal>
        <motion.div
          initial={{ opacity: 0.5, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="mx-auto overflow-hidden rounded-[2.2rem] border border-white/70 bg-[radial-gradient(circle_at_18%_20%,rgba(224,244,255,0.75),transparent_48%),radial-gradient(circle_at_82%_10%,rgba(188,225,250,0.55),transparent_46%),linear-gradient(130deg,#dff2ff_0%,#acd7f5_46%,#8ec5eb_100%)] p-10 text-[#2f5878] shadow-[0_35px_80px_-55px_rgba(63,119,165,0.55)] md:w-[min(1120px,100%)] md:p-16"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#4f7394]">Начнем ваш путь</p>
          <h2 className="mt-5 max-w-[15ch] text-4xl leading-[1.03] md:text-6xl">
            Фитнес и stretching
            <br />
            с заботой о вас.
          </h2>
          <p className="mt-6 max-w-[54ch] leading-relaxed text-[#3c6788]">
            Оставьте заявку на первую консультацию, и я подберу для вас персональный формат тренировок и восстановления.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#lead"
              className="inline-flex rounded-full border border-[#c7def2] bg-[#8ec5eb] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#f8fcff]"
            >
              Оставить заявку
            </MagneticButton>
            <a
              href="https://t.me/MariaSportick"
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.18em] text-[#3c6788] underline-offset-4 hover:underline"
            >
              Написать в Telegram
            </a>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
