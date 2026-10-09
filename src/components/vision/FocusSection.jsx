/** VISION › SIX COMMITMENTS — items from `vision.focus` in data/schoolData.js. */
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { vision } from "../../data/schoolData";

export default function FocusSection() {
  return (
    <section aria-labelledby="focus-heading" className="section bg-white">
      <div className="container-site">
        <SectionHeading
          id="focus-heading"
          label="What We Focus On"
          heading="Six Commitments for Every Child"
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vision.focus.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 90}>
              <article className="h-full rounded-2xl border border-navy-900/[0.07] bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                <span className="font-serif text-4xl font-bold text-gold" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-sans text-[1.15rem] font-bold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
