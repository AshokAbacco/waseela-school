/**
 * UI › ANIMATED CREST
 * The school crest in a white medallion with:
 *   • a soft pulsing gold glow
 *   • a dashed gold ring turning clockwise
 *   • a thin outer ring turning the other way
 *   • a small glowing gold dot orbiting the crest
 * Use this wherever the crest/logo appears in a page section (not the header logo).
 *
 * Props
 *   size   "sm" | "md" | "lg"  (default "md")
 *   light  true when placed on a dark/photo background (lighter rings)
 *   className  extra classes for the wrapper (e.g. margins)
 */
import crest from "../../assets/brand/waseela-crest.webp";
import { school } from "../../data/schoolData";

const SIZES = {
  sm: {
    box: "h-16 w-16",
    pad: "p-1.5",
    ring: "ring-[3px]",
    inner: "-inset-2",
    outer: "-inset-4",
  },
  md: {
    box: "h-24 w-24",
    pad: "p-2",
    ring: "ring-4",
    inner: "-inset-3",
    outer: "-inset-6",
  },
  lg: {
    box: "h-36 w-36 sm:h-44 sm:w-44",
    pad: "p-4",
    ring: "ring-[6px]",
    inner: "-inset-5",
    outer: "-inset-10",
  },
};

const styles = `
@keyframes crest-spin { to { transform: rotate(360deg); } }
@keyframes crest-pulse { 0%,100% { opacity: .45; transform: scale(1); } 50% { opacity: .95; transform: scale(1.12); } }
.crest-spin { animation: crest-spin 14s linear infinite; }
.crest-spin-rev { animation: crest-spin 22s linear infinite reverse; }
.crest-orbit { animation: crest-spin 6s linear infinite; }
.crest-pulse { animation: crest-pulse 3.5s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .crest-spin, .crest-spin-rev, .crest-orbit, .crest-pulse { animation: none; }
}
`;

export default function AnimatedCrest({
  size = "md",
  light = false,
  className = "",
  decorative = true,
}) {
  const s = SIZES[size] ?? SIZES.md;
  return (
    <div className={`relative shrink-0 ${s.box} ${className}`}>
      <style>{styles}</style>
      <span
        aria-hidden
        className={`crest-pulse absolute ${s.inner} rounded-full bg-gold/35 blur-lg`}
      />
      <span
        aria-hidden
        className={`crest-spin absolute ${s.inner} rounded-full border-2 border-dashed ${
          light ? "border-gold-light/80" : "border-gold/70"
        }`}
      />
      <span
        aria-hidden
        className={`crest-spin-rev absolute ${s.outer} rounded-full border border-t-gold border-b-gold ${
          light ? "border-white/40" : "border-gold/20"
        }`}
      />
      <span aria-hidden className={`crest-orbit absolute ${s.outer}`}>
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-light shadow-[0_0_10px_2px_rgba(246,203,126,0.85)]" />
      </span>
      <img
        src={crest}
        alt={decorative ? "" : `${school.foundation} crest`}
        aria-hidden={decorative || undefined}
        className={`relative h-full w-full rounded-full bg-white object-contain ${s.pad} shadow-lift ${s.ring} ring-gold-soft`}
      />
    </div>
  );
}
