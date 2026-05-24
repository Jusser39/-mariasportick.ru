import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ по онлайн-тренировкам и stretching",
  description:
    "Ответы на частые вопросы: стоимость, формат занятий, график, питание и результаты персональных онлайн-тренировок.",
  alternates: {
    canonical: "/faq-fitnes"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько стоит персональная тренировка?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Персональная онлайн-тренировка стоит 2000 рублей."
      }
    },
    {
      "@type": "Question",
      name: "Можно ли начать с нуля без опыта?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, программа адаптируется под ваш текущий уровень и состояние тела."
      }
    },
    {
      "@type": "Question",
      name: "Сколько тренировок в неделю нужно?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Обычно стартуем с 2-3 тренировок в неделю и добавляем короткие блоки мобильности."
      }
    },
    {
      "@type": "Question",
      name: "Нужно ли строгое питание?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Используем реалистичный формат питания без экстремальных диет."
      }
    }
  ]
};

export default function FaqFitnessPage() {
  return (
    <main className="mx-auto w-[min(960px,92%)] py-28 text-[#2a2440]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <h1 className="text-4xl font-semibold md:text-5xl">FAQ по онлайн-тренировкам и stretching</h1>
      <div className="mt-10 grid gap-5">
        <article className="rounded-2xl border border-[#e6dcf7] bg-white/70 p-5">
          <h2 className="text-2xl">Сколько стоит персональная тренировка?</h2>
          <p className="mt-3 text-[#5f5782]">Персональная онлайн-тренировка стоит 2000 рублей.</p>
        </article>
        <article className="rounded-2xl border border-[#e6dcf7] bg-white/70 p-5">
          <h2 className="text-2xl">Можно ли начать без опыта?</h2>
          <p className="mt-3 text-[#5f5782]">Да. Программа строится с учетом вашего уровня, подвижности и самочувствия.</p>
        </article>
        <article className="rounded-2xl border border-[#e6dcf7] bg-white/70 p-5">
          <h2 className="text-2xl">Как быстро виден результат?</h2>
          <p className="mt-3 text-[#5f5782]">
            При регулярных тренировках и соблюдении рекомендаций первые изменения обычно заметны через 3-4 недели.
          </p>
        </article>
      </div>
      <Link href="/#lead" className="mt-8 inline-flex rounded-full bg-[#8ec5eb] px-6 py-3 text-sm font-medium text-white">
        Задать свой вопрос
      </Link>
    </main>
  );
}
