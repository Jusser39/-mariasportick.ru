import { Reveal } from "@/components/animations/Reveal";
import { results } from "@/lib/content";

export function Results() {
  return (
    <section id="results" className="mx-auto w-[min(1120px,92%)] py-24 md:py-32">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#8f74ba]">Результаты</p>
        <h2 className="mt-4 max-w-[16ch] text-4xl leading-[1.03] text-[#2a2440] md:text-5xl">
          Элегантный прогресс без жесткого фитнес-шума.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {results.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08} className="h-full">
            <article className="h-full rounded-3xl border border-[#e6dcf7] bg-[#fcfaff] p-7 shadow-[0_20px_45px_-35px_rgba(76,66,121,0.45)]">
              <p className="text-4xl text-[#2e2650] md:text-5xl">{item.metric}</p>
              <h3 className="mt-4 text-xl text-[#3f3667]">{item.label}</h3>
              <p className="mt-3 leading-relaxed text-[#655b8a]">{item.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
