import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[#e6def7] bg-[#f6f2ff] py-12">
      <div className="mx-auto grid w-[min(1120px,92%)] gap-8 md:grid-cols-3 md:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[#736099]">Кочнева Мария</p>
          <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-[#5f557f]">
            Персональный fitness и stretching инструктор. Индивидуальный путь к сильному, гибкому и здоровому телу.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:justify-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] text-[#5d537d] transition-colors hover:text-[#7f72b2]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 md:justify-end">
          <a href="https://instagram.com/kmaria.31" className="text-sm text-[#5d537d] transition hover:text-[#7f72b2]">
            Instagram: kmaria.31
          </a>
          <a href="https://t.me/MariaSportick" className="text-sm text-[#5d537d] transition hover:text-[#7f72b2]">
            Telegram
          </a>
          <a href="mailto:coach@lenavale.com" className="text-sm text-[#5d537d] transition hover:text-[#7f72b2]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
