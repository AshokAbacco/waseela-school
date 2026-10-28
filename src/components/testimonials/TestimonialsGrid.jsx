/**
 * TESTIMONIALS › ALL CARDS
 * Filter buttons (All / Pre-Primary / Primary / Upper Primary) and a grid of every testimonial.
 * The stage is worked out from each card's `detail` text (e.g. "Parent of Class 3 student").
 * Data: data/testimonialsData.js · Card design: components/shared/TestimonialCard.jsx
 */
import { useMemo, useState } from "react";
import Reveal from "../ui/Reveal";
import AnimatedCrest from "../ui/AnimatedCrest";
import TestimonialCard from "../shared/TestimonialCard";
import { testimonials } from "../../data/testimonialsData";

function stageOf(detail = "") {
  if (/nursery|lkg|ukg/i.test(detail)) return "pre-primary";
  const n = Number((detail.match(/(\d+)/) || [])[1]);
  if (n >= 1 && n <= 5) return "primary";
  if (n >= 6) return "upper-primary";
  return "other";
}

const FILTERS = [
  { key: "all", label: "All" },
  { key: "pre-primary", label: "Pre-Primary" },
  { key: "primary", label: "Primary" },
  { key: "upper-primary", label: "Upper Primary" },
];

export default function TestimonialsGrid() {
  const [filter, setFilter] = useState("all");
  const counts = useMemo(() => {
    const c = { all: testimonials.length };
    testimonials.forEach((t) => {
      const s = stageOf(t.detail);
      c[s] = (c[s] || 0) + 1;
    });
    return c;
  }, []);
  const list =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => stageOf(t.detail) === filter);

  return (
    <section
      id="parents"
      aria-labelledby="all-testimonials-heading"
      className="scroll-mt-24 relative overflow-hidden bg-cream py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-gold-soft/70 blur-3xl"
      />
      <div
        aria-hidden
        className="dots-gold absolute left-6 top-10 hidden h-24 w-24 opacity-40 lg:block"
      />

      <div className="container-site relative">
        <Reveal className="flex flex-col items-center text-center">
          <AnimatedCrest size="lg" className="mt-6" />
          <h2
            id="all-testimonials-heading"
            className="mt-16 text-[1.9rem] font-bold leading-tight sm:text-[2.3rem]"
          >
            {testimonials.length} Families,{" "}
            <span className="[color:#C8862A]">One Waseela Family</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Choose a stage to read feedback from parents of children in those
            classes.
          </p>
        </Reveal>

        {/* filters */}
        <div
          role="group"
          aria-label="Filter testimonials by stage"
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {FILTERS.filter((f) => f.key === "all" || counts[f.key]).map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.key)}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-5 text-sm font-semibold transition ${
                  active
                    ? "border-gold bg-gold text-navy-950 shadow-glow"
                    : "border-navy-900/10 bg-white text-navy-900 hover:border-gold hover:text-gold-dark"
                }`}
              >
                {f.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${active ? "bg-white/40" : "bg-peach"}`}
                >
                  {counts[f.key]}
                </span>
              </button>
            );
          })}
        </div>

        {/* grid */}
        <ul
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {list.map((t, i) => (
            <Reveal
              as="li"
              key={t.name + t.detail}
              delay={(i % 3) * 80}
              className="flex"
            >
              <TestimonialCard t={t} className="w-full hover:-translate-y-1" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
