/**
 * ABOUT › OUR STORY
 * Full-screen (100vh) school building photo in the background.
 * One centred frosted-glass card on top (see-through, blurred background): crest in the middle at the top
 * with spinning rings, floating gold orbs behind the card,
 * then "Our Story" heading, story text, motto and key points — all centred.
 * Text and points come from `about.story` / `about.storyPoints` in data/schoolData.js.
 */
import {
  BookOpenCheck,
  HeartHandshake,
  MonitorPlay,
  Salad,
  Trees,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import crest from "../../assets/brand/waseela-crest.webp";
import { about, photos, school } from "../../data/schoolData";

/* One icon per story point (in the same order as `about.storyPoints`). */
const POINT_ICONS = [BookOpenCheck, HeartHandshake, MonitorPlay, Salad, Trees];

export default function StorySection() {
  return (
    <section
      aria-labelledby="story-heading"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-cream"
    >
      {/* ---------- Background photo ---------- */}
      <img
        src={photos.campusBuilding}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_40%]"
      />

      {/* animations used in this section (reduced-motion users see a still version) */}
      <style>{`
        @keyframes story-spin { to { transform: rotate(360deg); } }
        @keyframes story-float { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(24px,-30px) scale(1.08); } }
        @keyframes story-pulse { 0%,100% { opacity: .55; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
        .story-spin { animation: story-spin 18s linear infinite; }
        .story-spin-rev { animation: story-spin 26s linear infinite reverse; }
        .story-float { animation: story-float 9s ease-in-out infinite; }
        .story-float-2 { animation: story-float 12s ease-in-out infinite reverse; }
        .story-pulse { animation: story-pulse 4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .story-spin, .story-spin-rev, .story-float, .story-float-2, .story-pulse { animation: none; }
        }
      `}</style>

      {/* soft light wash so the glass reads well */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-white/5 to-white/20"
      />

      {/* floating rounded gold orbs */}
      <span
        aria-hidden
        className="story-float absolute left-[8%] top-[22%] -z-10 h-56 w-56 rounded-full bg-gold/40 blur-3xl"
      />
      <span
        aria-hidden
        className="story-float-2 absolute bottom-[12%] right-[10%] -z-10 h-72 w-72 rounded-full bg-gold-light/50 blur-3xl"
      />
      <span
        aria-hidden
        className="story-spin-rev absolute -right-24 top-1/3 -z-10 hidden h-80 w-80 rounded-full border-2 border-dashed border-white/50 lg:block"
      />
      <span
        aria-hidden
        className="story-spin absolute -left-20 bottom-10 -z-10 hidden h-64 w-64 rounded-full border border-white/60 lg:block"
      />

      <div className="container-site w-full pb-16 pt-28 sm:pb-20 sm:pt-32">
        <Reveal className="relative mx-auto max-w-4xl rounded-[36px] border border-white/60 bg-white/55 px-6 pb-10 pt-24 text-center shadow-[0_30px_80px_-25px_rgba(15,30,61,0.45),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl backdrop-saturate-150 sm:px-12 sm:pb-12 sm:pt-28">
          {/* ---------- Crest in the middle, overlapping the top ---------- */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 sm:-top-20">
            <span
              aria-hidden
              className="story-pulse absolute -inset-2 rounded-full bg-gold/25 blur-md"
            />
            <span
              aria-hidden
              className="story-spin absolute -inset-4 rounded-full border-2 border-dashed border-gold/70"
            />
            <span
              aria-hidden
              className="story-spin-rev absolute -inset-7 rounded-full border border-white/80 border-t-gold border-b-gold"
            />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white p-3 shadow-lift ring-[6px] ring-gold-soft sm:h-40 sm:w-40">
              <img
                src={crest}
                alt={`${school.foundation} crest`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* ---------- Heading ---------- */}
          <p className="flex items-center justify-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold-dark">
            <span aria-hidden className="h-px w-8 bg-gold sm:w-12" />
            Our Story
            <span aria-hidden className="h-px w-8 bg-gold sm:w-12" />
          </p>
          <h2
            id="story-heading"
            className="mt-4 text-[2rem] font-bold leading-[1.12] text-navy-900 sm:text-[2.6rem] lg:text-[2.9rem]"
          >
            Quality Education,{" "}
            <span className="[color:#C8862A]">Rooted in Values</span>
          </h2>
          <div
            aria-hidden
            className="mt-5 flex items-center justify-center gap-2"
          >
            <span className="h-px w-10 bg-gold/60" />
            <span className="h-2 w-2 rotate-45 bg-gold" />
            <span className="h-px w-10 bg-gold/60" />
          </div>

          {/* ---------- Story text ---------- */}
          <div className="mx-auto mt-7 max-w-2xl space-y-4 text-[0.98rem] leading-relaxed text-navy-900/80 sm:text-[1.05rem]">
            {about.story.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>

          {/* ---------- Motto ---------- */}
          <p className="mt-7 font-serif text-[1.35rem] font-bold text-navy-900 sm:text-[1.6rem]">
            “{school.motto.learn},{" "}
            <span className="[color:#C8862A]">{school.motto.lead}</span>”
          </p>

          {/* ---------- Key points ---------- */}
          <ul className="mt-9 flex flex-wrap justify-center gap-3">
            {about.storyPoints.map((pt, i) => {
              const Icon = POINT_ICONS[i] ?? BookOpenCheck;
              return (
                <li
                  key={pt}
                  className="group flex w-full items-center gap-3 rounded-2xl border border-white/70 bg-white/60 p-3 text-left backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-card sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-[0_8px_16px_-8px_rgba(217,146,47,0.9)] transition-transform group-hover:rotate-[-6deg]">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="text-[0.9rem] font-semibold leading-snug text-navy-900">
                    {pt}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
