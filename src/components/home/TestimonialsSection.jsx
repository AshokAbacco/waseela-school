/**
 * HOME › PARENT TESTIMONIALS
 * Animated school crest above the heading, then two rows of cards that glide in opposite directions.
 * Hovering a row pauses it, and the card under the pointer zooms in slightly.
 * Shows only the first HOME_TESTIMONIALS cards — the full list is on the /testimonials page.
 * Data: data/testimonialsData.js · Card design: components/shared/TestimonialCard.jsx
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCrest from "../ui/AnimatedCrest";
import TestimonialCard from "../shared/TestimonialCard";
import { HOME_TESTIMONIALS, testimonials } from "../../data/testimonialsData";

const styles = `
@keyframes tm-left  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes tm-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.tm-track { display: flex; align-items: stretch; width: max-content; gap: 1.25rem; }
.tm-left  { animation: tm-left 45s linear infinite; }
.tm-right { animation: tm-right 45s linear infinite; }
.tm-row:hover .tm-track, .tm-row:focus-within .tm-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .tm-left, .tm-right { animation: none; }
  .tm-row { overflow-x: auto; }
}
`;

function Row({ items, direction, label }) {
  // the list is rendered twice so the loop is seamless
  return (
    <div
      className="tm-row overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      aria-label={label}
    >
      <ul
        className={`tm-track ${direction === "left" ? "tm-left" : "tm-right"}`}
      >
        {[...items, ...items].map((t, i) => (
          <li
            key={i}
            className="flex"
            aria-hidden={i >= items.length || undefined}
          >
            <TestimonialCard
              t={t}
              className="min-h-[300px] w-[300px] shrink-0 hover:scale-[1.05] sm:w-[340px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;
  const shown = testimonials.slice(0, HOME_TESTIMONIALS);
  const half = Math.ceil(shown.length / 2);

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
        <Row
          items={shown.slice(0, half)}
          direction="left"
          label="Parent testimonials, row 1"
        />
        <Row
          items={shown.slice(half)}
          direction="right"
          label="Parent testimonials, row 2"
        />
      </Reveal>

      {testimonials.length > shown.length && (
        <Reveal className="container-site relative mt-10 flex justify-center">
          <Link to="/testimonials" className="btn-gold">
            View All {testimonials.length} Testimonials{" "}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      )}
    </section>
  );
}
