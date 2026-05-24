"use client";

import { motion } from "framer-motion";
import { navItems } from "@/lib/content";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto mt-5 flex w-[min(1100px,92%)] items-center justify-between rounded-full border border-white/55 bg-[#fdf8fc]/85 px-6 py-3 shadow-[0_10px_35px_-20px_rgba(108,108,168,0.35)] backdrop-blur-xl">
        <a href="#" className="text-sm uppercase tracking-[0.25em] text-[#695a8e]">
          Кочнева Мария
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] text-[#3f3a5a] transition-colors hover:text-[#7f72b2]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="https://t.me/MariaSportick"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#d5c9ec] bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#5d4f86] transition-all hover:bg-[#f0e9fb]"
        >
          Записаться
        </a>
      </nav>
    </motion.header>
  );
}
