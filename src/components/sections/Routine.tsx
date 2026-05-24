"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";

export function Routine() {
  return (
    <section id="ritual" className="bg-[#eef4ff]/75 py-24 md:py-32">
      <div className="mx-auto grid w-[min(1120px,92%)] gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#6b4c36]">Мой подход</p>
          <h2 className="mt-4 max-w-[18ch] text-4xl leading-[1.03] text-[#6b4c36] md:text-5xl">
            Помогаю развивать выносливость, строить рельефное и гармоничное тело.
          </h2>

          <ul className="mt-8 space-y-4">
            <motion.li initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0 }} className="flex items-start gap-3 rounded-2xl border border-white/55 bg-white/55 px-4 py-3 text-[#6b4c36] backdrop-blur">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#bfa88a]" />
              <span>Силовые и функциональные тренировки для выносливости и рельефа</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.08 }} className="flex items-start gap-3 rounded-2xl border border-white/55 bg-white/55 px-4 py-3 text-[#6b4c36] backdrop-blur">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#bfa88a]" />
              <span>Stretching и мобильность для гибкости и лёгкости</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.16 }} className="flex items-start gap-3 rounded-2xl border border-white/55 bg-white/55 px-4 py-3 text-[#6b4c36] backdrop-blur">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#bfa88a]" />
              <span>Корректировка питания для энергии и восстановления</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.24 }} className="flex items-start gap-3 rounded-2xl border border-white/55 bg-white/55 px-4 py-3 text-[#6b4c36] backdrop-blur">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#bfa88a]" />
              <span>Формирование здоровых привычек и дисциплины без жёстких ограничений</span>
            </motion.li>
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/55 p-3 shadow-[0_24px_55px_-35px_rgba(66,83,129,0.55)] backdrop-blur">
            <div className="relative h-[480px] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_18%_25%,rgba(209,235,255,0.72),transparent_52%),linear-gradient(150deg,#f7fbff_0%,#e8f3fc_55%,#dbeafa_100%)] p-8">
              <div className="rounded-3xl border border-white/70 bg-white/72 p-6 backdrop-blur">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#4f7394]">Персональная схема</p>
                <h3 className="mt-3 text-3xl leading-tight text-[#35536e]">8 недель</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#4b667f]">
                  Силовой блок, stretching, дыхание и восстановление собраны в одном персональном ритме без перегруза.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#a7cde8] to-transparent" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#5a7c99]">Выносливость • Гибкость • Эстетика</p>
              </div>
              <div className="absolute -bottom-16 -right-12 h-52 w-52 rounded-full bg-[#9bc9eb]/30 blur-2xl" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
