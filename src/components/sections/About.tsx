import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto w-[min(1120px,92%)] py-24 md:py-32">
      <Reveal className="mb-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#8f74ba]">Обо мне</p>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <Reveal>
            <h2 className="text-4xl leading-[1.03] text-[#6b4c36] md:text-5xl">
              Мария Кочнева Fitness & Stretching Instructor
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="space-y-4 text-[#564d72]">
            <p className="leading-relaxed">
              Я — сертифицированный тренер с опытом работы более 6 лет. Помогаю женщинам раскрывать силу, гибкость и уверенность в себе через персональные тренировки и stretching.
            </p>
            <p className="leading-relaxed">
              Моя миссия — вдохновлять на движение, поддерживать на пути к гармоничному, рельефному и выносливому телу. Вместе мы создаём не просто форму, а стиль жизни, в котором тренировки становятся любимой привычкой.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="w-full lg:pt-1">
          <div className="relative ml-auto h-[460px] w-full max-w-[380px] overflow-hidden bg-transparent shadow-none">
            <Image
              src="/photos/maria-2.jpg"
              alt="Мария Кочнева в студии stretching"
              fill
              sizes="(max-width: 1024px) 92vw, 380px"
              className="object-contain object-center"
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25} className="mt-8">
        <div className="rounded-3xl border border-white/60 bg-white/65 p-5 shadow-[0_20px_45px_-35px_rgba(84,69,136,0.5)]">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8f74ba]">Сертификат</p>
          <h3 className="mt-3 text-2xl text-[#35536e]">Диплом</h3>
          <div className="mt-4 rounded-2xl border border-[#d6e7f4] bg-[#f4f9ff] p-5 md:p-6">
            <p className="text-sm leading-relaxed text-[#45617a]">
              Нажмите кнопку ниже, чтобы открыть фото диплома в полном размере.
            </p>
            <a
              href="/docs/diplom-photo-optimized.jpg"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full bg-[#8ec5eb] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white"
            >
              Открыть диплом
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
