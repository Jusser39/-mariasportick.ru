"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto w-[min(1120px,92%)] py-24 md:py-32">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#8f74ba]">Отзывы</p>
        <h2 className="mt-4 max-w-[14ch] text-4xl leading-[1.03] text-[#2a2440] md:text-5xl">
          Реальные изменения: выносливость, рельеф и гибкость.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.author} delay={index * 0.08} className="h-full">
            <motion.article
              whileHover={{ y: -7 }}
              transition={{ duration: 0.45 }}
              className="h-full rounded-3xl border border-[#e8dff7] bg-[#fffdff] p-7 shadow-[0_22px_45px_-35px_rgba(84,69,136,0.45)]"
            >
              <p className="leading-relaxed text-[#4f466f]">&quot;{item.quote}&quot;</p>
              <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[#75609f]">{item.author}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

