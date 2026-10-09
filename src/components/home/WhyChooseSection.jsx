/**
 * HOME › WHY CHOOSE WASEELA
 * The six points from the admissions poster. Edit them in `whyChooseUs` (data/schoolData.js).
 */
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { whyChooseUs } from "../../data/schoolData";

export default function WhyChooseSection() {
  return (
    <section aria-labelledby="why-heading" className="section bg-white">
      <div className="container-site">
        <SectionHeading
          id="why-heading"
          label="Why Choose Waseela"
          heading="Six Reasons Families Trust Us"
          text="Everything a young learner needs, at a fee structure designed for families in Anantapur."
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 80}>
              <article className="flex h-full gap-5 rounded-2xl border border-navy-900/[0.07] bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-dark">
                  <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
                </span>
                <div>
                  <h3 className="font-sans text-[1.05rem] font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
