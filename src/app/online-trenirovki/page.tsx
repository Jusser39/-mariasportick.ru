import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Онлайн-тренировки с персональным тренером",
  description:
    "Персональные онлайн-тренировки с Марией Кочневой: техника, прогресс, контроль нагрузки и понятный план под ваш график.",
  alternates: {
    canonical: "/online-trenirovki"
  }
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Персональные онлайн-тренировки",
  provider: {
    "@type": "Person",
    name: "Мария Кочнева",
    url: "https://mariasportick.ru"
  },
  areaServed: "RU",
  serviceType: "Personal training online",
  url: "https://mariasportick.ru/online-trenirovki",
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    price: "2000",
    availability: "https://schema.org/InStock"
  }
};

export default function OnlineTrainingPage() {
  return (
    <main className="mx-auto w-[min(960px,92%)] py-28 text-[#2a2440]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <h1 className="text-4xl font-semibold md:text-5xl">Персональные онлайн-тренировки</h1>
      <p className="mt-6 text-lg leading-relaxed text-[#4f466f]">
        Формат для тех, кто хочет устойчивый результат без хаоса: регулярные занятия, корректная техника, контроль нагрузки и
        поддержка между тренировками. Работаем через видеосвязь, программа адаптируется под ваш уровень и цели.
      </p>

      <section className="mt-10 grid gap-6 rounded-3xl border border-[#e6dcf7] bg-[#fcfaff] p-6 md:grid-cols-2">
        <article>
          <h2 className="text-2xl font-medium">Что входит</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#5f5782]">
            <li>Персональная программа под ваш ритм жизни</li>
            <li>Онлайн-контроль техники в реальном времени</li>
            <li>План прогрессии нагрузки на 4-8 недель</li>
            <li>Рекомендации по восстановлению</li>
          </ul>
        </article>
        <article>
          <h2 className="text-2xl font-medium">Стоимость и старт</h2>
          <p className="mt-4 text-[#5f5782]">Одна персональная тренировка: 2000 рублей.</p>
          <p className="mt-3 text-[#5f5782]">
            Для старта оставьте заявку на главной странице, после чего мы согласуем цель, график и ближайшее время первой сессии.
          </p>
          <Link href="/#lead" className="mt-6 inline-flex rounded-full bg-[#8ec5eb] px-6 py-3 text-sm font-medium text-white">
            Оставить заявку
          </Link>
        </article>
      </section>
    </main>
  );
}
