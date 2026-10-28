/**
 * TESTIMONIALS › HERO
 * Left: breadcrumb, heading, family count with student photos, two buttons.
 * Right: the first featured quote on a stack of tilted gold cards.
 * Featured = items with `featured: true` in data/testimonialsData.js (otherwise the first one).
 */
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ChevronRight,
  Home,
  MessageCircle,
  Quote,
} from "lucide-react";
import { teacherTestimonials, testimonials } from "../../data/testimonialsData";
import { school } from "../../data/schoolData";
import AnimatedCrest from "../ui/AnimatedCrest";
import { StudentPhoto, shareHref } from "./helpers";

const styles = `
@keyframes th-rise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
@keyframes th-card { from { opacity: 0; transform: translateY(40px) rotate(2deg); } to { opacity: 1; transform: none; } }
.th-rise { animation: th-rise .9s cubic-bezier(.2,.7,.2,1) both; }
.th-card { animation: th-card 1s cubic-bezier(.2,.7,.2,1) .25s both; }
@media (prefers-reduced-motion: reduce) { .th-rise, .th-card { animation: none; } }
`;

export default function TestimonialsHero() {
  const featured = testimonials.find((t) => t.featured) || testimonials[0];
  const faces = testimonials.slice(0, 6);
  const teachersReal = teacherTestimonials.filter((t) => !t.placeholder).length;

  return (
    <section
      aria-labelledby="t-hero-heading"
      className="relative isolate overflow-hidden bg-navy-900 py-16 text-white sm:py-20 lg:py-24"
    >
      <style>{styles}</style>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(rgba(246,203,126,0.18)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div
        aria-hidden
        className="absolute -left-40 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-40 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-navy-600/50 blur-3xl"
      />

      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="th-rise">
          <nav aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/75">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 hover:text-gold-light"
                >
                  <Home className="h-3.5 w-3.5" aria-hidden /> Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              </li>
              <li aria-current="page" className="text-gold-light">
                Testimonials
              </li>
            </ol>
          </nav>

          {/* big animated school crest */}
          <AnimatedCrest size="lg" light className="ml-10 mt-16" />

          <h1
            id="t-hero-heading"
            className="mt-14 text-[2.5rem] font-bold leading-[1.08] !text-white sm:text-[3.3rem] lg:text-[3.8rem]"
          >
            Stories from the{" "}
            <span className="italic text-gold-light">Waseela</span> Family
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Parents of our {school.classesRange} students share what school life
            at {school.name} means to their children and to them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {faces.map((t, i) => (
                <StudentPhoto
                  key={i}
                  t={t}
                  className="h-12 w-12"
                  ringClass="ring-[3px] ring-navy-900"
                />
              ))}
            </div>
            <p className="text-sm text-white/70">
              <b className="text-white">{testimonials.length} families</b>
              {teachersReal > 0 && (
                <>
                  {" "}
                  &amp; <b className="text-white">{teachersReal} teachers</b>
                </>
              )}{" "}
              share their experience
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
            <a href="#parents" className="btn-gold">
              Read parent stories <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={shareHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> Share your story
            </a>
          </div>
        </div>

        {featured && (
          <div className="th-card relative mx-auto w-[calc(100%-2rem)] max-w-[520px] sm:w-full">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-5 translate-y-5 rotate-[4deg] rounded-[32px] bg-gold-dark/80"
            />
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-3 translate-y-2 -rotate-[3deg] rounded-[32px] bg-gold/90"
            />
            <figure className="relative rounded-[32px] bg-cream p-8 text-navy-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-10">
              <Quote
                className="h-10 w-10 rotate-180 fill-gold text-gold"
                aria-hidden
              />
              <blockquote className="mt-5 font-serif text-xl leading-relaxed text-navy-900 sm:text-[1.4rem]">
                “{featured.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-navy-900/10 pt-6">
                <StudentPhoto
                  t={featured}
                  className="h-16 w-16"
                  iconClass="h-7 w-7"
                  ringClass="ring-4 ring-gold/40"
                />
                <span>
                  <span className="block font-bold text-navy-900">
                    {featured.name}
                  </span>
                  <span className="block text-sm text-muted">
                    {featured.detail}
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        )}
      </div>
    </section>
  );
}
