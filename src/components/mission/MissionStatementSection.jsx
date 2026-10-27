/**
 * MISSION › MISSION STATEMENT  (first section after the page header)
 * Large centred statement with the animated crest, then the school's three pillars as cards.
 * Pillars come from `pillars` in data/schoolData.js.
 */
import Reveal from "../ui/Reveal";
import AnimatedCrest from "../ui/AnimatedCrest";
import { pillars, school } from "../../data/schoolData";

export default function MissionStatementSection() {
  return (
    <section
      aria-labelledby="statement-heading"
      className="relative overflow-hidden bg-cream py-20 sm:py-24"
    >
      <div
        aria-hidden
        className="dots-gold absolute right-8 top-10 hidden h-24 w-24 opacity-40 lg:block"
      />
      <div className="container-site relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <AnimatedCrest size="md" className="mx-auto" />
          <p className="mt-10 flex items-center justify-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold-dark">
            <span aria-hidden className="h-px w-10 bg-gold" />
            Our Mission
            <span aria-hidden className="h-px w-10 bg-gold" />
          </p>
          <h2 id="statement-heading" className="sr-only">
            Mission statement
          </h2>
          <p className="mt-6 font-serif text-[1.6rem] font-bold leading-[1.35] text-navy-900 sm:text-[2.2rem]">
            “To give every child a{" "}
            <span className="[color:#C8862A]">
              quality English-medium education
            </span>{" "}
            rooted in values — taught with clarity, cared for with kindness, and
            kept within reach of every family.”
          </p>
          <div
            aria-hidden
            className="mt-7 flex items-center justify-center gap-2"
          >
            <span className="h-px w-12 bg-gold/60" />
            <span className="h-2 w-2 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gold/60" />
          </div>
          <p className="mt-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-muted">
            {school.name}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 100}
              className="group rounded-2xl border border-navy-900/[0.07] bg-white p-7 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-glow transition-transform group-hover:rotate-[-6deg]">
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
