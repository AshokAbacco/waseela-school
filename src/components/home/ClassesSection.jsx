/**
 * HOME › CLASSES WE OFFER  (Nursery to 8th Standard)
 * Animated crest + heading, then three stage cards (Pre-Primary, Primary, Upper Primary)
 * joined by a gold progress line, each listing its classes as chips.
 * Stages and classes come from `classStages` in data/schoolData.js.
 */
import { Link } from "react-router-dom";
import { ArrowRight, Baby, BookOpen, GraduationCap } from "lucide-react";
import Reveal from "../ui/Reveal";
import AnimatedCrest from "../ui/AnimatedCrest";
import { classStages, links, school } from "../../data/schoolData";

const ICONS = {
  "pre-primary": Baby,
  primary: BookOpen,
  "upper-primary": GraduationCap,
};

export default function ClassesSection() {
  return (
    <section
      aria-labelledby="classes-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold-soft/70 blur-3xl"
      />
      <div className="container-site relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <AnimatedCrest size="md" className="mx-auto" />
          <p className="mt-10 flex items-center justify-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold-dark">
            <span aria-hidden className="h-px w-10 bg-gold" />
            Classes We Offer
            <span aria-hidden className="h-px w-10 bg-gold" />
          </p>
          <h2
            id="classes-heading"
            className="mt-4 text-[2.1rem] font-bold leading-[1.1] sm:text-[2.7rem]"
          >
            From <span className="[color:#C8862A]">Nursery</span> to{" "}
            <span className="[color:#C8862A]">8th Standard</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            One caring school for every stage of your child’s early education —
            with English-medium teaching and strong values all the way through.
          </p>
        </Reveal>

        <div className="relative mt-14">
          {/* gold line linking the stages (desktop) */}
          <span
            aria-hidden
            className="absolute left-[16%] right-[16%] top-10 hidden h-[3px] rounded-full bg-gradient-to-r from-gold-light via-gold to-[#C8862A] lg:block"
          />
          <ol className="grid gap-6 lg:grid-cols-3">
            {classStages.map((stage, i) => {
              const Icon = ICONS[stage.key] ?? BookOpen;
              return (
                <Reveal
                  as="li"
                  key={stage.key}
                  delay={i * 120}
                  className="group relative flex flex-col items-center text-center"
                >
                  <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-glow ring-8 ring-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" strokeWidth={1.9} aria-hidden />
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-light ring-2 ring-white">
                      {i + 1}
                    </span>
                  </span>
                  <article className="mt-6 flex w-full flex-1 flex-col rounded-[24px] border border-navy-900/[0.07] bg-cream p-6 transition duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-lift sm:p-7">
                    <h3 className="text-[1.5rem] font-bold">{stage.title}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-gold-dark">
                      {stage.range}
                    </p>
                    <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                      {stage.text}
                    </p>
                    <ul className="mt-5 flex flex-wrap justify-center gap-2">
                      {stage.classes.map((c) => (
                        <li
                          key={c}
                          className="rounded-full border border-gold/40 bg-white px-3 py-1 text-xs font-semibold text-navy-900"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Apply for {school.admissionYear}{" "}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <Link to="/contact" className="btn-outline-gold">
            Ask About Seats
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
