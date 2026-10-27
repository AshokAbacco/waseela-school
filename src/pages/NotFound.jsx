/**
 * 404 PAGE
 * Big "4 [crest] 4" — the school crest (no background) as the zero, with gold rings turning around it, floating gold shapes,
 * an education quote, and quick links back into the site.
 */
import { Link } from "react-router-dom";
import { ArrowLeft, Quote } from "lucide-react";
import crest from "../assets/brand/waseela-crest.webp";
import { useSeo } from "../hooks/useSeo";
import { navigation } from "../data/schoolData";

const styles = `
@keyframes nf-spin { to { transform: rotate(360deg); } }
@keyframes nf-glow { 0%,100% { opacity: .45; transform: scale(1); } 50% { opacity: .9; transform: scale(1.1); } }
.nf-spin { animation: nf-spin 16s linear infinite; }
.nf-spin-rev { animation: nf-spin 24s linear infinite reverse; }
.nf-orbit { animation: nf-spin 7s linear infinite; }
.nf-glow { animation: nf-glow 4s ease-in-out infinite; }
@keyframes nf-drift { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-24px) scale(1.08); } }
@keyframes nf-rise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
@keyframes nf-pop { 0% { opacity: 0; transform: scale(.6) rotate(-8deg); } 70% { transform: scale(1.06) rotate(2deg); } 100% { opacity: 1; transform: none; } }
.nf-drift { animation: nf-drift 11s ease-in-out infinite; }
.nf-drift-2 { animation: nf-drift 14s ease-in-out infinite reverse; }
.nf-rise { animation: nf-rise .8s cubic-bezier(.2,.7,.2,1) both; }
.nf-pop { animation: nf-pop .9s cubic-bezier(.2,.7,.2,1) both; }
@media (prefers-reduced-motion: reduce) {
  .nf-spin, .nf-spin-rev, .nf-orbit, .nf-glow, .nf-drift, .nf-drift-2, .nf-rise, .nf-pop { animation: none; }
}
`;

const d = (ms) => ({ animationDelay: `${ms}ms` });

export default function NotFound() {
  useSeo({
    title: "Page Not Found | Waseela English Medium School",
    description: "The page you are looking for could not be found.",
    path: "/404",
    noindex: true,
  });

  return (
    <section
      aria-labelledby="nf-heading"
      className="relative isolate flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-cream py-16 sm:py-20"
    >
      <style>{styles}</style>

      {/* background shapes */}
      <div
        aria-hidden
        className="nf-drift absolute -left-24 top-16 -z-10 h-80 w-80 rounded-full bg-gold-soft blur-3xl"
      />
      <div
        aria-hidden
        className="nf-drift-2 absolute -right-24 bottom-10 -z-10 h-96 w-96 rounded-full bg-gold-light/40 blur-3xl"
      />
      <div
        aria-hidden
        className="dots-gold absolute left-10 top-1/3 -z-10 hidden h-28 w-28 opacity-40 md:block"
      />
      <div
        aria-hidden
        className="dots-gold absolute bottom-16 right-12 -z-10 hidden h-24 w-24 opacity-40 md:block"
      />

      <div className="container-site text-center">
        {/* 4 [crest] 4 */}
        <div
          className="nf-pop flex items-center justify-center gap-5 sm:gap-12"
          aria-hidden
          style={d(100)}
        >
          <span className="bg-gradient-to-b from-[#E9A23B] to-[#B9771F] bg-clip-text font-serif text-[5.5rem] font-bold leading-none text-transparent sm:text-[11rem] lg:text-[13rem]">
            4
          </span>
          {/* crest on its own (transparent background) with rings turning around it — this page only */}
          <div className="relative h-36 w-36 shrink-0 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <span className="nf-glow absolute inset-4 rounded-full bg-gold/30 blur-2xl" />
            <span className="nf-spin absolute -inset-2 rounded-full border-2 border-dashed border-gold/60" />
            <span className="nf-spin-rev absolute -inset-6 rounded-full border border-gold/20 border-t-gold border-b-gold sm:-inset-8" />
            <span className="nf-orbit absolute -inset-6 sm:-inset-8">
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-light shadow-[0_0_12px_3px_rgba(246,203,126,0.85)]" />
            </span>
            <img
              src={crest}
              alt=""
              className="relative h-full w-full object-contain p-4 drop-shadow-[0_14px_24px_rgba(15,30,61,0.3)]"
            />
          </div>
          <span className="bg-gradient-to-b from-[#E9A23B] to-[#B9771F] bg-clip-text font-serif text-[5.5rem] font-bold leading-none text-transparent sm:text-[11rem] lg:text-[13rem]">
            4
          </span>
        </div>

        <p
          className="nf-rise mt-8 flex items-center justify-center gap-3 sm:mt-10 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold-dark"
          style={d(350)}
        >
          <span aria-hidden className="h-px w-10 bg-gold" />
          Error 404 · Page not found
          <span aria-hidden className="h-px w-10 bg-gold" />
        </p>
        <h1
          id="nf-heading"
          className="nf-rise mt-4 text-[2.2rem] font-bold leading-tight sm:text-[3rem]"
          style={d(450)}
        >
          This Page Has <span className="[color:#C8862A]">Wandered Off</span>
        </h1>
        <p
          className="nf-rise mx-auto mt-4 max-w-lg leading-relaxed text-muted"
          style={d(550)}
        >
          The page you are looking for doesn’t exist or may have moved. Let’s
          get you back to class.
        </p>

        {/* quote */}
        <figure
          className="nf-rise relative mx-auto mt-10 max-w-2xl rounded-[26px] border border-white/80 bg-white/70 px-6 py-8 shadow-lift backdrop-blur-md sm:px-10"
          style={d(700)}
        >
          <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-glow">
            <Quote className="h-5 w-5 rotate-180 fill-white" aria-hidden />
          </span>
          <blockquote className="font-serif text-[1.35rem] font-bold leading-snug text-navy-900 sm:text-[1.6rem]">
            “Education is the most powerful weapon which you can use to{" "}
            <span className="[color:#C8862A]">change the world</span>.”
          </blockquote>
          <figcaption className="mt-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-muted">
            <span aria-hidden className="h-px w-8 bg-gold" /> Nelson Mandela{" "}
            <span aria-hidden className="h-px w-8 bg-gold" />
          </figcaption>
        </figure>

        {/* actions */}
        <div
          className="nf-rise mt-10 flex flex-col justify-center gap-3 sm:flex-row"
          style={d(850)}
        >
          <Link to="/" className="btn-gold">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to Home
          </Link>
          <Link to="/contact" className="btn-outline-gold">
            Contact Us
          </Link>
        </div>

        {/* quick links */}
        <nav
          aria-label="Popular pages"
          className="nf-rise mt-8"
          style={d(1000)}
        >
          <ul className="flex flex-wrap justify-center gap-2">
            {navigation
              .filter((n) => n.to !== "/")
              .map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="inline-flex rounded-full border border-navy-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-navy-900 transition hover:-translate-y-0.5 hover:border-gold hover:text-gold-dark"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
