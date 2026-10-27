/**
 * HOME › PARENT TESTIMONIALS
 * Animated school crest above the heading, then two rows of cards that glide in opposite directions. Hovering a row pauses it,
 * and the card under the pointer zooms in slightly.
 * Cards come from `testimonials` in data/schoolData.js — add real parent feedback there.
 * Cards with an empty `quote` show as clearly-marked placeholders.
 */
import { Quote } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCrest from "../ui/AnimatedCrest";
import { testimonials } from "../../data/schoolData";

const styles = `
@keyframes tm-left  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes tm-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.tm-track { display: flex; width: max-content; gap: 1.25rem; }
.tm-left  { animation: tm-left 70s linear infinite; }
.tm-right { animation: tm-right 70s linear infinite; }
.tm-row:hover .tm-track, .tm-row:focus-within .tm-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .tm-left, .tm-right { animation: none; }
  .tm-row { overflow-x: auto; }
}
`;

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Card({ t }) {
  const placeholder = !t.quote;
  return (
    <figure
      className={`flex w-[300px] shrink-0 flex-col rounded-[22px] border p-6 shadow-card transition duration-300 hover:z-10 hover:scale-[1.06] hover:shadow-lift sm:w-[340px] ${
        placeholder
          ? "border-dashed border-gold/50 bg-white/70"
          : "border-navy-900/[0.07] bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <Quote
          className="h-8 w-8 rotate-180 fill-gold/80 text-gold/80"
          aria-hidden
        />
        {placeholder && (
          <span className="rounded-full bg-gold-soft px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-gold-dark">
            Placeholder
          </span>
        )}
      </div>
      <blockquote
        className={`mt-4 flex-1 text-[0.95rem] leading-relaxed ${placeholder ? "italic text-muted" : "text-navy-900/85"}`}
      >
        {placeholder
          ? "Add a real parent’s feedback here in schoolData.js → testimonials."
          : `“${t.quote}”`}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-900/[0.07] pt-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-sm font-bold text-white">
          {initials(t.name)}
        </span>
        <span className="leading-tight">
          <span className="block font-bold text-navy-900">{t.name}</span>
          <span className="text-xs text-muted">{t.detail}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Row({ items, direction }) {
  // the list is rendered twice so the loop is seamless
  return (
    <div
      className="tm-row overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      aria-label={
        direction === "left"
          ? "Parent testimonials, row 1"
          : "Parent testimonials, row 2"
      }
    >
      <ul
        className={`tm-track ${direction === "left" ? "tm-left" : "tm-right"}`}
      >
        {[...items, ...items].map((t, i) => (
          <li key={i} aria-hidden={i >= items.length || undefined}>
            <Card t={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;
  const half = Math.ceil(testimonials.length / 2);
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-peach py-16 sm:py-20 lg:py-24"
    >
      <style>{styles}</style>
      <div
        aria-hidden
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold-soft/80 blur-3xl"
      />
      <div className="container-site relative">
        <Reveal className="mb-10 flex justify-center">
          <AnimatedCrest size="md" />
        </Reveal>
        <SectionHeading
          id="testimonials-heading"
          label="What Parents Say"
          heading="Trusted by Families in Anantapur"
          text="Hear from the parents who are part of the Waseela family."
        />
      </div>
      <Reveal className="relative mt-10 space-y-2">
        <Row items={testimonials.slice(0, half)} direction="left" />
        <Row items={testimonials.slice(half)} direction="right" />
      </Reveal>
    </section>
  );
}
