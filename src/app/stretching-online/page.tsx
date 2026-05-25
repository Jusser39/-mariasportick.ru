import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stretching онлайн и мобильность в Калининграде и по России",
  description:
    "Stretching онлайн с тренером для клиентов из Калининграда и всей России: безопасная растяжка, мобильность суставов, улучшение осанки и снижение скованности.",
  alternates: {
    canonical: "/stretching-online"
  }
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Stretching онлайн и мобильность",
  provider: {
    "@type": "Person",
    name: "Мария Кочнева",
    url: "https://mariasportick.ru"
  },
  areaServed: "RU",
  serviceType: "Stretching and mobility training",
  url: "https://mariasportick.ru/stretching-online"
};

export default function StretchingOnlinePage() {
  return (
    <main className="mx-auto w-[min(960px,92%)] py-28 text-[#2a2440]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <h1 className="text-4xl font-semibold md:text-5xl">Stretching онлайн и мобильность</h1>
      <p className="mt-6 text-lg leading-relaxed text-[#4f466f]">
        Растяжка и мобильность помогают улучшить амплитуду движений, снять зажимы и сделать тело более свободным в быту и в
        тренировках. Программа строится мягко: без боли и без перегруза.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[#5f5782]">
        По запросам «stretching Калининград» и «онлайн растяжка Россия» вы получаете персональную программу с понятной
        прогрессией, чтобы улучшать гибкость без травмоопасных нагрузок.
      </p>

      <section className="mt-10 grid gap-6 rounded-3xl border border-[#e6dcf7] bg-[#fcfaff] p-6 md:grid-cols-2">
        <article>
          <h2 className="text-2xl font-medium">Кому подойдет</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#5f5782]">
            <li>Тем, кто чувствует скованность и усталость в теле</li>
            <li>Тем, кто хочет улучшить осанку и легкость движений</li>
            <li>Тем, кто совмещает силовые тренировки и восстановление</li>
            <li>Новичкам, которым важен безопасный формат</li>
          </ul>
        </article>
        <article>
          <h2 className="text-2xl font-medium">Как проходят занятия</h2>
          <p className="mt-4 text-[#5f5782]">
            Встречаемся онлайн, работаем по индивидуальному плану, корректируем технику и постепенно увеличиваем подвижность.
            Отслеживаем динамику и переносим результат в повседневность.
          </p>
          <Link href="/#lead" className="mt-6 inline-flex rounded-full bg-[#8ec5eb] px-6 py-3 text-sm font-medium text-white">
            Хочу на stretching
          </Link>
        </article>
      </section>
    </main>
  );
}
