"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-14 pt-28 md:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_25%,rgba(211,233,250,0.75),transparent_48%),radial-gradient(circle_at_78%_14%,rgba(233,244,255,0.9),transparent_44%),linear-gradient(130deg,#eef8ff_20%,#e5f2fb_100%)]" />
      <div className="grain-overlay absolute inset-0 -z-10 opacity-30" />

      <motion.div style={{ y: imageY }} className="pointer-events-none absolute inset-y-0 right-0 -z-[5] hidden w-[56%] lg:block">
        <div className="absolute bottom-8 right-[10%] h-[78%] w-[62%] rounded-full bg-[radial-gradient(circle,rgba(147,197,232,0.36),transparent_68%)] blur-2xl" />
        <Image
          src="/photos/maria-1.jpg"
          alt="Мария Кочнева, фото со спины"
          fill
          sizes="56vw"
          priority
          className="object-contain object-bottom mix-blend-multiply opacity-95 [filter:drop-shadow(0_18px_28px_rgba(56,101,136,0.28))_drop-shadow(0_52px_70px_rgba(44,83,114,0.24))_contrast(1.12)_saturate(1.06)]"
        />
      </motion.div>

      <div className="mx-auto grid w-[min(1200px,100%)] gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div className="space-y-9 pb-4 pt-8 md:pt-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex rounded-full border border-white/70 bg-white/75 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#4f7394] backdrop-blur"
          >
            Fitness & Stretching Instructor
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.85rem,5.7vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[#35536e]"
          >
            Изящные формы. Гибкость. Энергия.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.35 }}
            className="max-w-[52ch] text-base leading-relaxed text-[#45617a]"
          >
            Я, Мария Кочнева, помогаю выстроить красивую фигуру, здоровую осанку и уверенность в теле через фитнес и stretching.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="flex flex-wrap items-center gap-5"
          >
            <MagneticButton
              href="https://t.me/MariaSportick"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#8ec5eb] px-7 py-3 text-xs uppercase tracking-[0.22em] text-[#f8fcff] shadow-[0_18px_30px_-20px_rgba(65,123,170,0.45)] transition-shadow hover:shadow-[0_24px_36px_-20px_rgba(65,123,170,0.55)]"
              aria-label="Записаться на тренировку"
            >
              Записаться на тренировку
            </MagneticButton>
            <a
              href="#about"
              className="text-xs uppercase tracking-[0.2em] text-[#4f7394] underline-offset-4 transition hover:underline"
            >
              О моем подходе
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative w-full lg:justify-self-end"
        >
          <div className="ml-auto w-full max-w-sm rounded-3xl border border-white/65 bg-white/62 p-6 text-right backdrop-blur-xl lg:w-[340px] lg:max-w-none lg:min-w-[340px]">
            <p className="text-2xl leading-tight text-[#35536e]">Мария Кочнева</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#4f7394]">Fitness & Stretching Instructor</p>
            <p className="mt-4 text-sm leading-relaxed text-[#4b667f]">Проработанная эстетика тела, гибкость и уверенная пластика.</p>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-8 h-[58vh] min-h-[420px] lg:hidden">
        <div className="absolute bottom-8 left-1/2 h-[74%] w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(147,197,232,0.32),transparent_70%)] blur-2xl" />
        <Image
          src="/photos/maria-1.jpg"
          alt="Мария Кочнева, фото со спины"
          fill
          sizes="92vw"
          className="object-contain object-bottom mix-blend-multiply [filter:drop-shadow(0_15px_24px_rgba(56,101,136,0.24))_drop-shadow(0_40px_55px_rgba(44,83,114,0.2))_contrast(1.1)_saturate(1.06)]"
        />
      </div>
    </section>
  );
}
