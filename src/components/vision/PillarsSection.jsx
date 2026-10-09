/** VISION › OUR PILLARS — items from `pillars` in data/schoolData.js. */
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { pillars } from "../../data/schoolData";

export default function PillarsSection() {
  return (
    <section aria-labelledby="pillars-heading" className="section bg-peach">
      <div className="container-site">
        <SectionHeading id="pillars-heading" label="Our Pillars" heading="Quality · Values · Future" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="h-full rounded-2xl bg-white p-8 text-center shadow-card">
                <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-soft text-gold-dark">
                  <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
