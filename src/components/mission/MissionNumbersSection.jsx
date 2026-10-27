/**
 * MISSION › MISSION IN NUMBERS
 * Gold band with the four count-up stats (from `heroHighlights` in data/schoolData.js).
 */
import Reveal from "../ui/Reveal";
import CountUp from "../ui/Countup";
import { heroHighlights } from "../../data/schoolData";

export default function MissionNumbersSection() {
  return (
    <section
      aria-label="Waseela in numbers"
      className="relative overflow-hidden bg-gradient-to-r from-[#E9A23B] via-[#F3B652] to-[#D9922F] py-14"
    >
      <div
        aria-hidden
        className="absolute -left-10 -top-10 h-48 w-48 rounded-full border-[24px] border-white/15"
      />
      <div
        aria-hidden
        className="absolute -bottom-16 right-10 h-56 w-56 rounded-full border-[28px] border-white/10"
      />
      <ul className="container-site relative grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {heroHighlights.map(({ icon: Icon, value, suffix, label }, i) => (
          <Reveal
            as="li"
            key={label}
            delay={i * 90}
            className={`flex flex-col items-center px-4 text-center ${i > 0 ? "lg:border-l lg:border-white/30" : ""}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 text-white ring-1 ring-white/40">
              <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
            </span>
            <CountUp
              end={value}
              suffix={suffix}
              className="mt-3 block font-serif text-[2.4rem] font-bold leading-none text-navy-950 sm:text-[2.8rem]"
            />
            <span className="mt-2 text-sm font-semibold text-navy-950/80">
              {label}
            </span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
