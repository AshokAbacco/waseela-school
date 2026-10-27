/**
 * VISION › SIX COMMITMENTS
 * School crest in the centre (with animated rings), three commitments on each side
 * joined to it by gold connector lines. Stacks into a single column on phones.
 * Items come from `vision.focus` in data/schoolData.js; icons are matched by position below.
 */
import {
  BookOpenCheck,
  HeartHandshake,
  MessagesSquare,
  Rocket,
  HeartPulse,
  Users,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import crest from "../../assets/brand/waseela-crest.webp";
import { school, vision } from "../../data/schoolData";

/* One icon per commitment, same order as `vision.focus`. */
const ICONS = [
  BookOpenCheck,
  HeartHandshake,
  MessagesSquare,
  Rocket,
  HeartPulse,
  Users,
];

function CommitmentCard({ item, index, side }) {
  const Icon = ICONS[index] ?? BookOpenCheck;
  const right = side === "right";
  return (
    <Reveal delay={(index % 3) * 100} className="relative">
      {/* connector line to the centre (desktop) */}
      <span
        aria-hidden
        className={`absolute top-1/2 hidden h-px w-10 bg-gradient-to-r from-gold/0 via-gold to-gold xl:block ${
          right ? "-left-10 rotate-180" : "-right-10"
        }`}
      />
      <span
        aria-hidden
        className={`absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-gold xl:block ${
          right ? "-left-[2.85rem]" : "-right-[2.85rem]"
        }`}
      />
      <article
        className={`group flex items-start gap-4 rounded-2xl border border-navy-900/[0.07] bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift sm:p-6 ${
          right ? "" : "xl:flex-row-reverse xl:text-right"
        }`}
      >
        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-[0_10px_20px_-8px_rgba(217,146,47,0.8)] transition-transform duration-300 group-hover:rotate-[-6deg]">
          <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 font-serif text-[0.7rem] font-bold text-gold-light ring-2 ring-white">
            {String(index + 1).padStart(2, "0")}
          </span>
        </span>
        <div className="min-w-0">
          <h3 className="font-sans text-[1.1rem] font-bold text-navy-900">
            {item.title}
          </h3>
          <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
            {item.text}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export default function FocusSection() {
  const left = vision.focus.slice(0, 3);
  const right = vision.focus.slice(3, 6);

  return (
    <section
      aria-labelledby="focus-heading"
      className="section relative overflow-hidden bg-cream"
    >
      <style>{`
        @keyframes focus-spin { to { transform: rotate(360deg); } }
        .focus-spin { animation: focus-spin 20s linear infinite; }
        .focus-spin-rev { animation: focus-spin 28s linear infinite reverse; }
        @media (prefers-reduced-motion: reduce) { .focus-spin, .focus-spin-rev { animation: none; } }
      `}</style>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold-soft/60 blur-3xl"
      />
      <div
        aria-hidden
        className="dots-gold absolute left-6 top-10 hidden h-24 w-24 opacity-40 lg:block"
      />

      <div className="container-site relative">
        <SectionHeading
          id="focus-heading"
          label="What We Focus On"
          heading="Six Commitments for Every Child"
          text="The promises behind our vision — what every Waseela child can expect from us."
        />

        <div className="mt-16 grid items-center gap-5 xl:grid-cols-[1fr_auto_1fr] xl:gap-20">
          {/* left column */}
          <ol className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
            {left.map((f, i) => (
              <li key={f.title}>
                <CommitmentCard item={f} index={i} side="left" />
              </li>
            ))}
          </ol>

          {/* centre crest */}
          <Reveal className="order-first mx-auto mb-8 flex flex-col items-center xl:order-none xl:mb-0">
            <div className="relative h-44 w-44 sm:h-52 sm:w-52">
              <span
                aria-hidden
                className="focus-spin absolute -inset-5 rounded-full border-2 border-dashed border-gold/60"
              />
              <span
                aria-hidden
                className="focus-spin-rev absolute -inset-10 rounded-full border border-gold/25 border-t-gold border-b-gold"
              />
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white p-5 shadow-lift ring-[8px] ring-gold-soft">
                <img
                  src={crest}
                  alt={`${school.foundation} crest`}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <p className="mt-14 text-center font-serif text-lg font-bold text-navy-900">
              {school.motto.learn}
              <span className="block [color:#C8862A]">{school.motto.lead}</span>
            </p>
          </Reveal>

          {/* right column */}
          <ol start={4} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
            {right.map((f, i) => (
              <li key={f.title}>
                <CommitmentCard item={f} index={i + 3} side="right" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
