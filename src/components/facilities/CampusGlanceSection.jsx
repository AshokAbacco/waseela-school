/**
 * FACILITIES › CAMPUS AT A GLANCE  (first section after the page header)
 * Animated crest + short intro, then a row of icon chips for every facility.
 * Chips come from `facilities` in data/schoolData.js.
 */
import Reveal from "../ui/Reveal";
import AnimatedCrest from "../ui/AnimatedCrest";
import { facilities, school } from "../../data/schoolData";

export default function CampusGlanceSection() {
  return (
    <section
      aria-labelledby="glance-heading"
      className="relative overflow-hidden bg-cream py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="dots-gold absolute left-8 top-10 hidden h-24 w-24 opacity-40 lg:block"
      />
      <div className="container-site relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <AnimatedCrest size="md" className="mx-auto" />
          <p className="mt-10 flex items-center justify-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold-dark">
            <span aria-hidden className="h-px w-10 bg-gold" />
            Campus at a Glance
            <span aria-hidden className="h-px w-10 bg-gold" />
          </p>
          <h2
            id="glance-heading"
            className="mt-4 text-[2rem] font-bold leading-[1.12] sm:text-[2.6rem]"
          >
            Everything Under <span className="[color:#C8862A]">One Roof</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            At {school.name}, learning, play, food, transport and boarding all
            come together on one caring campus — so families have one less thing
            to worry about.
          </p>
        </Reveal>

        <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
          {facilities.map(({ key, icon: Icon, title }, i) => (
            <Reveal
              as="li"
              key={key}
              delay={i * 50}
              className="group flex items-center gap-3 rounded-full border border-navy-900/[0.07] bg-white py-2 pl-2 pr-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-lift"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white transition-transform group-hover:rotate-[-8deg]">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <span className="text-[0.92rem] font-semibold text-navy-900">
                {title}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
