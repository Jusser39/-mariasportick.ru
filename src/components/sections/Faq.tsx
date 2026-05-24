import { Reveal } from "@/components/animations/Reveal";

const faqItems = [
  {
    question: "Сколько стоит персональная тренировка?",
    answer: "Персональная онлайн-тренировка стоит 2000 рублей. Формат сопровождения на несколько недель обсуждаем индивидуально."
  },
  {
    question: "Подойдет ли формат новичкам?",
    answer: "Да. Программа адаптируется под ваш уровень, состояние спины, подвижность и текущую выносливость."
  },
  {
    question: "Сколько тренировок в неделю оптимально?",
    answer: "Обычно стартуем с 2-3 тренировок в неделю и добавляем короткие блоки мобильности между занятиями."
  },
  {
    question: "Можно ли совмещать с домашними тренировками?",
    answer: "Да, я даю рекомендации по самостоятельной нагрузке и восстановлению, чтобы не было перегруза."
  }
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export function Faq() {
  return (
    <section id="faq" className="bg-[#f5f0fb]/70 py-24 md:py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mx-auto w-[min(1120px,92%)]">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8f74ba]">FAQ</p>
          <h2 className="mt-4 max-w-[14ch] text-4xl leading-[1.03] text-[#2a2440] md:text-5xl">
            Частые вопросы перед стартом.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.06}>
              <details className="group rounded-2xl border border-white/60 bg-white/70 p-5 text-[#4f466f] shadow-[0_14px_35px_-30px_rgba(84,69,136,0.45)]">
                <summary className="cursor-pointer list-none text-lg font-medium text-[#312952] marker:content-none">
                  {item.question}
                </summary>
                <p className="mt-3 leading-relaxed text-[#5f5782]">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
