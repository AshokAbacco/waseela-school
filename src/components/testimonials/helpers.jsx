/**
 * TESTIMONIALS › SMALL SHARED PIECES (used by the sections on the /testimonials page)
 *   StudentPhoto  round student photo (from `photo` in data/testimonialsData.js) or a student icon
 *   Eyebrow       small gold label above headings
 *   classOf       "Parent of Class 3 student" → "Class 3"
 *   shareHref     WhatsApp link with a ready message for parents who want to share feedback
 */
import { GraduationCap } from "lucide-react";
import { links, school } from "../../data/schoolData";

export const classOf = (detail = "") =>
  detail.replace(/^Parent of /i, "").replace(/ student$/i, "");

export const shareHref = links.whatsappWith(
  `Hello ${school.shortName}, I am a parent and I would like to share my feedback:`,
);

export function StudentPhoto({
  t,
  className = "h-12 w-12",
  iconClass = "h-5 w-5",
  ringClass = "ring-2 ring-white",
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-peach ${className} ${ringClass}`}
    >
      {t.photo ? (
        <img
          src={t.photo}
          alt={`Student — ${classOf(t.detail)}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <GraduationCap
          className={`text-gold-dark ${iconClass}`}
          strokeWidth={1.6}
          aria-hidden
        />
      )}
    </span>
  );
}

export function Eyebrow({ children, light = false, center = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.26em] ${
        center ? "justify-center" : ""
      } ${light ? "text-gold-light" : "text-gold-dark"}`}
    >
      <span
        aria-hidden
        className={`h-px w-8 ${light ? "bg-gold-light" : "bg-gold"}`}
      />
      {children}
      {center && (
        <span
          aria-hidden
          className={`h-px w-8 ${light ? "bg-gold-light" : "bg-gold"}`}
        />
      )}
    </p>
  );
}
