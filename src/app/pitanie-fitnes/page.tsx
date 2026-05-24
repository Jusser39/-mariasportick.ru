import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Питание и фитнес без жестких диет",
  description:
    "Поддержка по питанию для тренировок: рацион без экстремальных ограничений, энергия, восстановление и контроль прогресса.",
  alternates: {
    canonical: "/pitanie-fitnes"
  }
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Поддержка по питанию для фитнеса",
  provider: {
    "@type": "Person",
    name: "Мария Кочнева",
    url: "https://mariasportick.ru"
  },
  areaServed: "RU",
  serviceType: "Nutrition coaching",
  url: "https://mariasportick.ru/pitanie-fitnes"
};

export default function NutritionFitnessPage() {
  return (
    <main className="mx-auto w-[min(960px,92%)] py-28 text-[#2a2440]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <h1 className="text-4xl font-semibold md:text-5xl">Питание и фитнес без жестких диет</h1>
      <p className="mt-6 text-lg leading-relaxed text-[#4f466f]">
        Питание должно поддерживать тренировки, а не превращаться в стресс. Мы выстраиваем реалистичный рацион под ваш день,
        чтобы были энергия, восстановление и стабильный прогресс в форме.
      </p>

      <section className="mt-10 rounded-3xl border border-[#e6dcf7] bg-[#fcfaff] p-6">
        <h2 className="text-2xl font-medium">Принципы работы</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[#5f5782]">
          <li>Без экстремальных диет и резких ограничений</li>
          <li>Фокус на пищевые привычки, которые реально удерживать</li>
          <li>Коррекция рациона под цели: рельеф, снижение веса, поддержание формы</li>
          <li>Связка питания с тренировочным планом и режимом сна</li>
        </ul>
        <Link href="/#lead" className="mt-6 inline-flex rounded-full bg-[#8ec5eb] px-6 py-3 text-sm font-medium text-white">
          Получить консультацию
        </Link>
      </section>
    </main>
  );
}
