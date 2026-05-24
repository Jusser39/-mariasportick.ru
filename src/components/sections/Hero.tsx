"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

function Dumbbell3D({ className = "", tone = "rose" }: { className?: string; tone?: "rose" | "ice" }) {
  const bodyTone =
    tone === "rose"
      ? "from-[#ffcad9] via-[#f4a6be] to-[#d987a5] border-[#ffdbe6]/70"
      : "from-[#d8ecff] via-[#a9d0ef] to-[#86b5db] border-[#edf6ff]/70";

  return (
    <div className={`absolute ${className}`} aria-hidden="true">
      <div className="relative h-10 w-36">
        <div className="absolute left-[22%] right-[22%] top-1/2 h-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-white/70 via-white/35 to-white/70 shadow-[0_2px_6px_rgba(33,52,71,0.3)]" />
        <div className={`absolute left-[14%] top-1/2 h-8 w-4 -translate-y-1/2 rounded-md border bg-gradient-to-b ${bodyTone} shadow-[0_6px_12px_-8px_rgba(16,30,44,0.9)]`} />
        <div className={`absolute left-[2%] top-1/2 h-10 w-5 -translate-y-1/2 rounded-lg border bg-gradient-to-b ${bodyTone} shadow-[0_8px_16px_-10px_rgba(16,30,44,0.95)]`} />
        <div className={`absolute right-[14%] top-1/2 h-8 w-4 -translate-y-1/2 rounded-md border bg-gradient-to-b ${bodyTone} shadow-[0_6px_12px_-8px_rgba(16,30,44,0.9)]`} />
        <div className={`absolute right-[2%] top-1/2 h-10 w-5 -translate-y-1/2 rounded-lg border bg-gradient-to-b ${bodyTone} shadow-[0_8px_16px_-10px_rgba(16,30,44,0.95)]`} />
      </div>
    </div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const visualY = useTransform(scrollY, [0, 650], [0, 80]);

  return (
    <section className="relative isolate min-h-screen overflow-hidden px-4 pb-14 pt-28 md:px-8">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_14%_16%,rgba(255,214,158,0.45),transparent_40%),radial-gradient(circle_at_86%_14%,rgba(126,185,214,0.32),transparent_44%),linear-gradient(140deg,#f7eee5_12%,#e2edf3_55%,#d8e8f1_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(122deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_36%,rgba(112,154,183,0.08)_74%,rgba(255,255,255,0.1))]" />
      <div className="grain-overlay absolute inset-0 -z-10 opacity-35" />
      <div className="pointer-events-none absolute -left-16 top-20 z-0 h-52 w-52 rounded-full border border-white/35 bg-white/20 blur-xl" />
      <div className="pointer-events-none absolute -right-20 bottom-14 z-0 h-56 w-56 rounded-full border border-white/30 bg-[#e3f0f8]/28 blur-xl" />

      <div className="mx-auto grid w-[min(1240px,100%)] gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
        <div className="space-y-8 lg:space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[16ch] text-[clamp(2rem,5.4vw,5.1rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-[#21384d]"
          >
            Мария Кочнева:
            <span className="mt-2 block bg-gradient-to-r from-[#24506f] via-[#436f91] to-[#728ea6] bg-clip-text text-transparent">
              Движение. Сила. Гибкость
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.15 }}
            className="max-w-[56ch] rounded-3xl border border-white/55 bg-white/40 px-6 py-5 text-base leading-relaxed text-[#2d4c62] shadow-[0_26px_54px_-30px_rgba(31,64,91,0.5)] [backdrop-filter:blur(20px)_saturate(135%)] md:text-lg"
          >
            Дисциплина, баланс и контроль над телом - фундамент моей экспертной методики. Мы работаем над созданием сильного,
            гибкого и выносливого тела без лишней эмоциональности, фокусируясь на видимом прогрессе.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
          >
            <MagneticButton
              href="https://t.me/MariaSportick"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/50 bg-[linear-gradient(112deg,rgba(39,75,104,0.9),rgba(63,99,126,0.86))] px-8 py-3 text-xs uppercase tracking-[0.24em] text-[#f7fbff] shadow-[0_18px_30px_-20px_rgba(17,51,80,0.82)] [backdrop-filter:blur(8px)_saturate(120%)] transition-transform hover:-translate-y-0.5"
              aria-label="Записаться на тренировку"
            >
              Записаться на тренировку
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          style={{ y: visualY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.2 }}
          className="relative z-10 mx-auto w-full max-w-[520px] lg:max-w-none"
        >
          <div className="relative min-h-[510px] rounded-[2.4rem] border border-white/55 bg-[linear-gradient(160deg,rgba(255,255,255,0.44),rgba(214,232,244,0.18)_48%,rgba(186,210,228,0.25))] p-5 shadow-[0_44px_86px_-54px_rgba(12,38,56,0.88)] [backdrop-filter:blur(24px)_saturate(138%)] md:min-h-[560px]">
            <div className="pointer-events-none absolute inset-5 rounded-[2rem] border border-white/45" />
            <div className="pointer-events-none absolute left-8 right-8 top-6 h-20 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.48),rgba(255,255,255,0))] blur-md" />

            <div className="pointer-events-none absolute bottom-[7%] left-1/2 -translate-x-1/2 text-[clamp(7rem,23vw,13.2rem)] font-black leading-[0.88] tracking-[0.14em] text-[#dfeef8] [text-shadow:0_2px_0_#bfd7e9,0_4px_0_#a8c5db,0_9px_16px_rgba(28,67,95,0.45),0_25px_35px_rgba(26,56,80,0.38)]">
              MK
            </div>

            <div className="relative z-20 mx-auto mt-10 h-[458px] w-full max-w-[362px] md:h-[510px]">
              <Image
                src="/photos/maria-new-1.jpg"
                alt="Мария Кочнева"
                fill
                sizes="(max-width: 1024px) 85vw, 36vw"
                priority
                className="object-contain object-bottom [filter:drop-shadow(0_18px_30px_rgba(33,63,87,0.34))_drop-shadow(0_54px_66px_rgba(13,30,47,0.35))]"
              />
            </div>

            <Dumbbell3D className="left-2 top-20 rotate-[22deg] scale-95" tone="rose" />
            <Dumbbell3D className="right-0 top-36 -rotate-[18deg] scale-[0.9]" tone="ice" />
            <Dumbbell3D className="-left-5 bottom-16 -rotate-[14deg] scale-[1.05]" tone="rose" />
            <Dumbbell3D className="right-2 bottom-8 rotate-[12deg] scale-[0.98]" tone="ice" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
