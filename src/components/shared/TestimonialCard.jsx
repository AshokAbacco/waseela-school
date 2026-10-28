/**
 * SHARED › TESTIMONIAL CARD
 * Used by the home page moving rows and the /testimonials page grid.
 * Shows the student's photo (from `photo` in data/testimonialsData.js) in a gold ring at the top,
 * the parent's quote, and the parent's name + class. Without a photo, a student icon is shown instead.
 *
 * Props
 *   t          one testimonial { name, detail, quote, photo }
 *   className  extra classes (e.g. a fixed width for the moving rows)
 */
import { GraduationCap, Quote, Star } from "lucide-react";

export default function TestimonialCard({ t, className = "" }) {
  const placeholder = !t.quote;
  return (
    <figure
      className={`group/card relative flex h-full flex-col rounded-[24px] border p-6 pt-7 shadow-card transition duration-300 hover:z-10 hover:shadow-lift ${
        placeholder
          ? "border-dashed border-gold/50 bg-white/70"
          : "border-navy-900/[0.07] bg-white"
      } ${className}`}
    >
      {/* top: student photo + stars */}
      <div className="flex items-center gap-4">
        <span className="relative shrink-0">
          <span
            aria-hidden
            className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#F7C976] via-[#E9A23B] to-[#B9771F] transition-transform duration-500 group-hover/card:rotate-180"
          />
          <span className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full bg-peach ring-[3px] ring-white">
            {t.photo ? (
              <img
                src={t.photo}
                alt={`Student — ${t.detail.replace(/^Parent of /i, "")}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <GraduationCap
                className="h-8 w-8 text-gold-dark"
                strokeWidth={1.6}
                aria-hidden
              />
            )}
          </span>
        </span>
        <div className="min-w-0">
          <div className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="mt-1.5 inline-block rounded-full bg-gold-soft px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-gold-dark">
            {t.detail.replace(/^Parent of /i, "").replace(/ student$/i, "")}
          </span>
        </div>
        <Quote
          className="ml-auto h-9 w-9 shrink-0 rotate-180 self-start fill-gold/20 text-gold/20"
          aria-hidden
        />
      </div>

      {/* quote */}
      <blockquote
        className={`mt-5 flex-1 text-[0.95rem] leading-relaxed ${placeholder ? "italic text-muted" : "text-navy-900/85"}`}
      >
        {placeholder
          ? "Add a real parent’s feedback in data/testimonialsData.js."
          : `“${t.quote}”`}
      </blockquote>

      {/* parent */}
      <figcaption className="mt-5 border-t border-navy-900/[0.07] pt-4 leading-tight">
        <span className="block font-bold text-navy-900">{t.name}</span>
        <span className="text-xs text-muted">{t.detail}</span>
      </figcaption>
    </figure>
  );
}
