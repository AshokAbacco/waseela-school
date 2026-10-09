/** MISSION › FIVE PROMISES — items from `mission.points` in data/schoolData.js. */
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { mission, photos } from "../../data/schoolData";

export default function PromisesSection() {
  return (
    <section aria-labelledby="mission-heading" className="section bg-white">
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="mission-heading"
            align="left"
            label="What We Do"
            heading="Five Promises We Keep"
            text="Our mission is how our vision becomes real in the classroom, on the playground and at the lunch table."
          />
          <Reveal className="mt-10">
            <img
              src={photos.classroom}
              alt="A bright Waseela classroom"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[24px] object-cover shadow-lift"
            />
          </Reveal>
        </div>
        <ol className="space-y-4">
          {mission.points.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 60}>
              <article className="card card-hover flex gap-6 p-7 sm:p-8">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold font-serif text-lg font-bold text-navy-950"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-sans text-[1.15rem] font-bold">{m.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{m.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
