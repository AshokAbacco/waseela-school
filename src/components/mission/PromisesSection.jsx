/**
 * MISSION › WHAT WE DO — FIVE PROMISES
 * Zig-zag timeline: a gold line down the centre, numbered medallions, cards alternating left and right.
 * On phones the line moves to the left and all cards sit on the right.
 * Items come from `mission.points` in data/schoolData.js; icons are matched by position below.
 */
import {
  BookOpenCheck,
  HeartHandshake,
  Salad,
  Users,
  Wallet,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { mission } from "../../data/schoolData";

/* One icon per promise, same order as `mission.points`. */
const ICONS = [BookOpenCheck, HeartHandshake, Users, Salad, Wallet];

export default function PromisesSection() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="section relative overflow-hidden bg-white"
    >
      <div
        aria-hidden
        className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-gold-soft/60 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-gold-soft/60 blur-3xl"
      />
      <div className="container-site relative">
        <SectionHeading
          id="mission-heading"
          label="What We Do"
          heading="Five Promises We Keep"
          text="Our mission is how our vision becomes real — in the classroom, on the playground and at the lunch table."
        />

        <ol className="relative mx-auto mt-16 max-w-5xl">
          {/* centre / left line */}
          <span
            aria-hidden
            className="absolute bottom-6 left-6 top-6 w-[2px] bg-gradient-to-b from-gold/10 via-gold to-gold/10 md:left-1/2 md:-translate-x-1/2"
          />
          {mission.points.map((m, i) => {
            const Icon = ICONS[i] ?? BookOpenCheck;
            const right = i % 2 === 1;
            return (
              <Reveal
                as="li"
                key={m.title}
                delay={i * 80}
                className="relative grid grid-cols-[3rem_1fr] gap-5 pb-8 last:pb-0 md:grid-cols-[1fr_4rem_1fr] md:gap-8"
              >
                {/* medallion */}
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#F7C976] to-[#D9922F] font-serif text-lg font-bold text-white shadow-glow ring-[6px] ring-white md:col-start-2 md:row-start-1 md:mx-auto md:h-16 md:w-16 md:text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* card */}
                <article
                  className={`group relative rounded-2xl border border-navy-900/[0.07] bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift sm:p-7 md:row-start-1 ${
                    right ? "md:col-start-3" : "md:col-start-1 md:text-right"
                  }`}
                >
                  {/* little pointer towards the line (desktop) */}
                  <span
                    aria-hidden
                    className={`absolute top-6 hidden h-4 w-4 rotate-45 border-navy-900/[0.07] bg-white md:block ${
                      right
                        ? "-left-2 border-b border-l"
                        : "-right-2 border-r border-t"
                    }`}
                  />
                  <div
                    className={`flex items-center gap-3 ${right ? "" : "md:flex-row-reverse"}`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-dark transition-transform group-hover:rotate-[-6deg]">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </span>
                    <h3 className="font-sans text-[1.15rem] font-bold text-navy-900">
                      {m.title}
                    </h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted">{m.text}</p>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
