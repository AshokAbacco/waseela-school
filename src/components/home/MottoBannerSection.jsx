/**
 * HOME › MOTTO BANNER
 * Full-width school photo (fixed background on desktop) with the motto in a glass panel.
 * The crest has a pulsing glow, two counter-rotating rings and an orbiting gold dot.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import crest from "../../assets/brand/waseela-crest.webp";
import { photos, school } from "../../data/schoolData";

export default function MottoBannerSection() {
  return (
    <section
      aria-labelledby="motto-banner-heading"
      className="relative isolate overflow-hidden bg-navy-950 bg-cover bg-center py-24 sm:py-28 lg:bg-fixed lg:py-32"
      style={{ backgroundImage: `url(${photos.campusGate})` }}
    >
      <style>{`
        @keyframes motto-spin { to { transform: rotate(360deg); } }
        @keyframes motto-pulse { 0%,100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.12); } }
        .motto-spin { animation: motto-spin 14s linear infinite; }
        .motto-spin-rev { animation: motto-spin 20s linear infinite reverse; }
        .motto-orbit { animation: motto-spin 6s linear infinite; }
        .motto-pulse { animation: motto-pulse 3.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .motto-spin, .motto-spin-rev, .motto-orbit, .motto-pulse { animation: none; }
        }
      `}</style>
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-950/45" />
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl rounded-[32px] border border-white/30 bg-white/15 px-6 py-12 text-center shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-12">
          {/* crest with animated rings */}
          <div className="relative mx-auto h-24 w-24">
            <span
              aria-hidden
              className="motto-pulse absolute -inset-3 rounded-full bg-gold/40 blur-lg"
            />
            <span
              aria-hidden
              className="motto-spin absolute -inset-3 rounded-full border-2 border-dashed border-gold-light/80"
            />
            <span
              aria-hidden
              className="motto-spin-rev absolute -inset-6 rounded-full border border-white/40 border-t-gold-light border-b-gold-light"
            />
            <span aria-hidden className="motto-orbit absolute -inset-6">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-light shadow-[0_0_10px_2px_rgba(246,203,126,0.8)]" />
            </span>
            <img
              src={crest}
              alt=""
              aria-hidden
              className="relative h-24 w-24 rounded-full bg-white object-contain p-2 shadow-lift ring-4 ring-gold-soft"
            />
          </div>
          <p className="mt-9 text-[0.72rem] font-bold uppercase tracking-[0.3em] text-gold-light">
            Our Motto
          </p>
          <h2
            id="motto-banner-heading"
            className="mt-3 text-[2.4rem] font-bold leading-[1.08] !text-white drop-shadow sm:text-[3.4rem]"
          >
            {school.motto.learn}.
            <span className="block text-gold-light">{school.motto.lead}.</span>
          </h2>
          <div
            aria-hidden
            className="mt-6 flex items-center justify-center gap-2"
          >
            <span className="h-px w-12 bg-gold-light/70" />
            <span className="h-2 w-2 rotate-45 bg-gold-light" />
            <span className="h-px w-12 bg-gold-light/70" />
          </div>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/90">
            Children come to Waseela curious and leave confident — with
            knowledge, good values and the courage to lead.
          </p>
          <Link to="/about" className="btn-gold mt-8">
            Discover Our Story <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
