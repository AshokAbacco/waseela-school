/**
 * PRIVACY › OUR PRIVACY PROMISE
 * Left: school crest (animated) inside a "privacy seal" panel with the heading, intro and button.
 * Right: the four promises as numbered cards with gold icons.
 * Text comes from `privacyPolicy` in data/privacyData.js.
 */
import { ArrowDown, EyeOff, Lock, ShieldCheck, UserCheck } from "lucide-react";
import Reveal from "../ui/Reveal";
import AnimatedCrest from "../ui/AnimatedCrest";
import { school } from "../../data/schoolData";
import { privacyPolicy as p } from "../../data/privacyData";

/* One icon per promise, same order as `privacyPolicy.highlights`. */
const ICONS = [ShieldCheck, EyeOff, UserCheck, Lock];

export default function PromiseSection() {
  return (
    <section
      aria-labelledby="promise-heading"
      className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-gold-soft/70 blur-3xl"
      />
      <div
        aria-hidden
        className="dots-gold absolute right-8 top-10 hidden h-24 w-24 opacity-40 lg:block"
      />

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        {/* ---------- Seal panel ---------- */}
        <Reveal className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white p-7 text-center shadow-lift sm:p-10">
          {/* faint shield watermark */}
          <ShieldCheck
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-gold/[0.07]"
            strokeWidth={1}
          />

          <div className="relative mx-auto mt-6 flex w-fit items-center justify-center">
            <AnimatedCrest size="lg" />
            {/* small lock badge on the seal */}
            <span className="absolute -bottom-1 right-0 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-gold-light shadow-lift ring-4 ring-white">
              <Lock className="h-5 w-5" aria-hidden />
            </span>
          </div>

          <p className="mt-12 flex items-center justify-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold-dark">
            <span aria-hidden className="h-px w-8 bg-gold" />
            Our Privacy Promise
            <span aria-hidden className="h-px w-8 bg-gold" />
          </p>
          <h2
            id="promise-heading"
            className="mt-4 text-[1.9rem] font-bold leading-[1.15] sm:text-[2.3rem]"
          >
            Your Family’s Information Is{" "}
            <span className="[color:#C8862A]">Safe With Us</span>
          </h2>
          <div
            aria-hidden
            className="mt-5 flex items-center justify-center gap-2"
          >
            <span className="h-px w-10 bg-gold/60" />
            <span className="h-2 w-2 rotate-45 bg-gold" />
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <p className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted">
            {school.name}
          </p>
        </Reveal>

        {/* ---------- Intro + promise cards ---------- */}
        <div>
          <Reveal>
            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-navy-900/80">
              {p.intro}
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {p.highlights.map((h, i) => {
              const Icon = ICONS[i] ?? ShieldCheck;
              return (
                <Reveal
                  as="li"
                  key={h.title}
                  delay={i * 80}
                  className="group relative overflow-hidden rounded-[22px] border border-navy-900/[0.07] bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
                >
                  <span
                    aria-hidden
                    className="absolute right-5 top-4 font-serif text-4xl font-bold text-gold/15 transition group-hover:text-gold/30"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-[0_8px_16px_-8px_rgba(217,146,47,0.9)] transition-transform group-hover:rotate-[-6deg]">
                    <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                  </span>
                  <p className="mt-5 font-sans text-[1.05rem] font-bold text-navy-900">
                    {h.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {h.text}
                  </p>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-8">
            <a href="#about-app" className="btn-gold">
              Read the full policy <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
