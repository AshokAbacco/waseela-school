/**
 * HOME › STRENGTHS STRIP
 * Four icons with short text. Edit items in `coreStrengths` (data/schoolData.js).
 */
import Reveal from "../ui/Reveal";
import { coreStrengths } from "../../data/schoolData";

export default function StrengthsSection() {
  return (
    <section
      aria-label="Our strengths"
      className="relative overflow-hidden bg-peach"
    >
      <div
        aria-hidden
        className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-gold-soft/80"
      />
      <ul className="container-site relative grid gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {coreStrengths.map(({ icon: Icon, title, text }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={i * 80}
            className={`flex flex-col items-center px-6 text-center ${i > 0 ? "lg:border-l lg:border-navy-900/10" : ""}`}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft to-gold-light/80 text-gold-dark shadow-[0_8px_20px_-10px_rgba(233,162,59,0.8)]">
              <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
            </span>
            <h3 className="mt-4 font-sans text-base font-bold">{title}</h3>
            <p className="mt-1 max-w-[13rem] text-sm text-muted">{text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
