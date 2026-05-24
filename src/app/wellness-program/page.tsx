import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wellness-программа: тренировки и восстановление",
  description:
    "Комплексная wellness-программа: персональные тренировки, stretching, восстановление и питание для устойчивого результата.",
  alternates: {
    canonical: "/wellness-program"
  }
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Комплексная wellness-программа",
  provider: {
    "@type": "Person",
    name: "Мария Кочнева",
    url: "https://mariasportick.ru"
  },
  areaServed: "RU",
  serviceType: "Wellness coaching",
  url: "https://mariasportick.ru/wellness-program"
};

export default function WellnessProgramPage() {
  return (
    <main className="mx-auto w-[min(960px,92%)] py-28 text-[#2a2440]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <h1 className="text-4xl font-semibold md:text-5xl">Wellness-программа</h1>
      <p className="mt-6 text-lg leading-relaxed text-[#4f466f]">
        Это формат сопровождения, где объединяются тренировки, мобильность, восстановление и питание. Подходит тем, кто хочет
        не разовый рывок, а системные изменения в самочувствии и внешней форме.
      </p>

      <section className="mt-10 rounded-3xl border border-[#e6dcf7] bg-[#fcfaff] p-6">
        <h2 className="text-2xl font-medium">Что получаете</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[#5f5782]">
          <li>Индивидуальную тренировочную стратегию</li>
          <li>План восстановления и мобильности</li>
          <li>Рекомендации по рациону и режиму</li>
          <li>Контроль прогресса и корректировки по ходу программы</li>
        </ul>
        <Link href="/#lead" className="mt-6 inline-flex rounded-full bg-[#8ec5eb] px-6 py-3 text-sm font-medium text-white">
          Обсудить программу
        </Link>
      </section>
    </main>
  );
}
