/**
 * TESTIMONIALS › FEATURED STORIES ("In Their Own Words")
 * One large story at a time with the student photo on the left. Changes every 7 seconds,
 * pauses on hover / keyboard focus, has previous / next buttons and dots.
 * Stories = items with `featured: true` in data/testimonialsData.js (otherwise the first few).
 */
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/testimonialsData";
import { Eyebrow, StudentPhoto } from "./helpers";

const styles = `
@keyframes fs-in { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: none; } }
.fs-in { animation: fs-in .55s cubic-bezier(.2,.7,.2,1) both; }
@keyframes fs-spin { to { transform: rotate(360deg); } }
.fs-spin { animation: fs-spin 18s linear infinite; }
@media (prefers-reduced-motion: reduce) { .fs-in, .fs-spin { animation: none; } }
`;

function pickStories() {
  const flagged = testimonials.filter((t) => t.featured);
  const list = (flagged.length ? flagged : testimonials).slice(0, 6);
  return list.length > 1 ? list.slice(1) : list; // the first one is already shown in the hero
}

export default function FeaturedStoriesSection() {
  const items = pickStories();
  const n = items.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (d) => setI((x) => (x + d + n) % n);

  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || reduce || n < 2) return undefined;
    const id = setTimeout(() => go(1), 7000);
    return () => clearTimeout(id);
  }, [i, paused, n]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!n) return null;
  const t = items[i];

  return (
    <section
      aria-labelledby="featured-heading"
      className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24"
    >
      <style>{styles}</style>
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow>Featured Stories</Eyebrow>
            <h2
              id="featured-heading"
              className="mt-4 text-[2.2rem] font-bold sm:text-[2.8rem]"
            >
              In Their <span className="[color:#C8862A]">Own Words</span>
            </h2>
          </Reveal>
          {n > 1 && (
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-muted">
                <b className="text-navy-900">
                  {String(i + 1).padStart(2, "0")}
                </b>{" "}
                / {String(n).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous story"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-900/20 text-navy-900 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next story"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy-950 shadow-glow transition hover:bg-[#F0B04F]"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div
          className="relative mt-12 overflow-hidden rounded-[36px] bg-white shadow-lift"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          <figure
            key={i}
            className="fs-in grid min-h-[380px] md:grid-cols-[0.8fr_1.2fr]"
            aria-live="polite"
          >
            <div className="relative flex items-center justify-center overflow-hidden bg-peach px-8 py-12">
              <span
                aria-hidden
                className="absolute -left-4 -top-12 select-none font-serif text-[16rem] leading-none text-gold/15"
              >
                “
              </span>
              <div className="relative">
                <span
                  aria-hidden
                  className="fs-spin absolute -inset-4 rounded-full border-2 border-dashed border-gold/50"
                />
                <StudentPhoto
                  t={t}
                  className="h-44 w-44 sm:h-52 sm:w-52"
                  iconClass="h-16 w-16"
                  ringClass="ring-8 ring-white shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 pb-14 sm:p-12 lg:p-14">
              <blockquote className="font-serif text-[1.5rem] leading-snug text-navy-900 sm:text-[1.85rem]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span aria-hidden className="h-px w-10 bg-gold" />
                <span>
                  <span className="block text-lg font-bold text-navy-900">
                    {t.name}
                  </span>
                  <span className="block text-sm text-muted">{t.detail}</span>
                </span>
              </figcaption>
            </div>
          </figure>

          {n > 1 && (
            <div className="absolute bottom-5 right-6 flex gap-2 sm:right-10">
              {items.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setI(k)}
                  aria-label={`Show story ${k + 1}`}
                  aria-current={k === i ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-2 bg-navy-900/20 hover:bg-navy-900/40"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
