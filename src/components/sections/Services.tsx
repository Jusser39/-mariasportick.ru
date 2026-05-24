"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="bg-[#f5f0fb]/70 py-24 md:py-32">
      <div className="mx-auto w-[min(1120px,92%)]">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8f74ba]">Услуги</p>
          <h2 className="mt-4 max-w-[14ch] text-4xl leading-[1.03] text-[#2a2440] md:text-5xl">
            Персональный формат под ваш ритм жизни.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full rounded-3xl border border-white/60 bg-white/55 p-7 shadow-[0_18px_45px_-30px_rgba(92,77,145,0.45)] backdrop-blur-xl"
              >
                <p className="mb-6 text-[10px] uppercase tracking-[0.22em] text-[#8b74b7]">{service.detail}</p>
                <h3 className="text-2xl leading-tight text-[#312952]">{service.title}</h3>
                {service.title === "Персональные онлайн-тренировки" && (
                  <p className="mt-3 inline-flex rounded-full bg-[#d8ecfa] px-3 py-1 text-sm text-[#3a6b8f]">2000 ₽ / тренировка</p>
                )}
                <p className="mt-4 leading-relaxed text-[#5f5782]">{service.description}</p>
                <div className="mt-6 h-[2px] w-12 bg-[#8aa7df] transition-all duration-500 group-hover:w-20" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
