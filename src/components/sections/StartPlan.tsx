import { Reveal } from "@/components/animations/Reveal";

const startSteps = [
  {
    title: "Заявка и знакомство",
    text: "Вы оставляете заявку, я уточняю цель, текущий уровень и комфортный график."
  },
  {
    title: "Персональный план",
    text: "Подбираю формат тренировок, нагрузку, питание и восстановление под ваш ритм жизни."
  },
  {
    title: "Первая тренировка",
    text: "Проводим занятие онлайн с корректировкой техники в моменте и понятными рекомендациями."
  },
  {
    title: "Сопровождение 8 недель",
    text: "Отслеживаем прогресс, корректируем программу и закрепляем устойчивые привычки."
  }
] as const;

export function StartPlan() {
  return (
    <section id="start" className="mx-auto w-[min(1120px,92%)] py-24 md:py-32">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#8f74ba]">Как проходит старт</p>
        <h2 className="mt-4 max-w-[16ch] text-4xl leading-[1.03] text-[#2a2440] md:text-5xl">
          Понятный путь к результату без перегруза.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {startSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <article className="h-full rounded-3xl border border-[#e6dcf7] bg-[#fcfaff] p-7 shadow-[0_20px_45px_-35px_rgba(76,66,121,0.45)]">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f72b2]">Шаг {index + 1}</p>
              <h3 className="mt-3 text-2xl leading-tight text-[#312952]">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-[#5f5782]">{step.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
