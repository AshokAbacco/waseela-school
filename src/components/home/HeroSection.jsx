/**
 * HOME › HERO  ("Building Brighter Futures")
 * Wide school-gate photo on the right, headline on a soft cream panel that curves into the photo,
 * and the highlight card along the bottom-right edge.
 * The four highlight items come from `heroHighlights` in data/schoolData.js.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CountUp from "../ui/CountUp";
import { heroHighlights, links, photos, school } from "../../data/schoolData";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex flex-col overflow-hidden bg-[#FFFBF3] lg:block"
    >
      {/* ---------- Photo (right side on desktop, below the text on phones) ---------- */}
      <div className="relative order-2 aspect-[16/9] w-full lg:absolute lg:inset-y-0 lg:left-[20%] lg:right-0 lg:aspect-auto">
        <img
          src={photos.campusGate}
          alt="Waseela English Medium School main gate and school building"
          width={1600}
          height={800}
          fetchpriority="high"
          className="h-full w-full object-cover object-[60%_45%]"
        />
      </div>

      {/* ---------- Curved cream panel that blends into the photo (desktop) ---------- */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-6 left-0 hidden h-[calc(100%+48px)] w-[52%] lg:block"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroFade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#FFFBF3" />
            <stop offset="0.62" stopColor="#FFFBF3" stopOpacity="0.97" />
            <stop offset="1" stopColor="#FFFBF3" stopOpacity="0" />
          </linearGradient>
          <filter id="heroBlur">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <path
          d="M0 0 H640 C560 140 700 300 600 460 C560 530 590 580 610 600 H0 Z"
          fill="url(#heroFade)"
          filter="url(#heroBlur)"
        />
        <path
          d="M0 0 H560 C500 160 610 320 520 470 C490 530 500 570 520 600 H0 Z"
          fill="#FFFBF3"
          opacity="0.85"
        />
      </svg>

      {/* ---------- Decorative shapes ---------- */}
      <div
        aria-hidden
        className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#FBEFD9]/70"
      />
      <div
        aria-hidden
        className="absolute -left-24 top-40 h-64 w-64 rounded-full border border-gold/10"
      />
      <div
        aria-hidden
        className="absolute left-[max(-1.75rem,calc((100vw-1240px)/2-2.75rem))] top-[52%] hidden h-14 w-14 rounded-full bg-gradient-to-br from-[#F7CF86] to-gold shadow-glow lg:block"
      />
      <div
        aria-hidden
        className="absolute left-[11%] -top-3 hidden h-14 w-6 rotate-[28deg] rounded-[50%] bg-gradient-to-b from-gold-light to-gold lg:block"
      />
      <svg
        aria-hidden
        viewBox="0 0 120 90"
        className="absolute -bottom-2 left-0 hidden w-32 text-[#9DBF6B] opacity-80 lg:block"
      >
        <path
          fill="currentColor"
          d="M10 90 C14 60 30 44 52 38 C40 52 34 70 34 90 Z"
        />
        <path
          fill="#7FA653"
          d="M30 90 C38 58 60 40 92 36 C70 52 58 70 56 90 Z"
        />
        <path fill="#B4D08A" d="M0 90 C2 70 10 58 24 52 C18 64 16 76 18 90 Z" />
      </svg>

      {/* ---------- Copy ---------- */}
      <div className="container-site relative z-10 order-1 py-12 sm:py-14 lg:pb-36 lg:pt-16 xl:pt-20">
        <div className="max-w-[470px]">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold-dark sm:text-[0.74rem]">
            A place to learn, grow and succeed
          </p>
          <h1
            id="hero-heading"
            className="mt-3 text-[3.2rem] font-bold leading-[0.98] tracking-[-0.02em] sm:text-[4.1rem] xl:text-[4.6rem]"
          >
            Building
            <span className="block text-gold-dark [color:#C8862A]">
              Brighter
            </span>
            Futures
          </h1>
          <p className="mt-5 max-w-[25rem] text-[0.98rem] leading-relaxed text-navy-900/90">
            {school.name} is committed to providing quality education with
            strong values, nurturing every child to achieve their full potential
            in a safe and inspiring environment.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-b from-[#F3B652] to-gold px-7 text-navy-950 shadow-glow hover:-translate-y-0.5"
            >
              Apply for Admission <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              to="/about"
              className="btn border-[1.5px] border-gold/70 bg-white/80 px-7 text-navy-900 hover:bg-gold-soft"
            >
              Explore Our School
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- Highlight card ---------- */}
      <div className="container-site relative z-20 order-3 pb-12 lg:-mt-28 lg:flex lg:justify-end lg:pb-6">
        <div className="relative -mt-10 w-full overflow-hidden rounded-[22px] lg:mt-0 lg:w-[70%] lg:max-w-[820px] border border-white/70 bg-white/95 shadow-[0_24px_50px_-20px_rgba(15,30,61,0.45)] backdrop-blur-md lg:mt-0">
          {/* gold accent line */}
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-light via-gold to-[#C8862A]"
          />
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {heroHighlights.map(({ icon: Icon, value, suffix, label }, i) => (
              <li
                key={label}
                className={`group flex items-center gap-3 px-4 py-5 transition-colors duration-300 hover:bg-gold-soft/40 sm:gap-4 sm:px-5 lg:py-6 ${
                  i % 2 === 1 ? "border-l border-navy-900/[0.08]" : ""
                } ${i > 1 ? "border-t border-navy-900/[0.08] lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-[0_10px_20px_-8px_rgba(217,146,47,0.8)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg] sm:h-14 sm:w-14">
                  <Icon
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    strokeWidth={2}
                    aria-hidden
                  />
                </span>
                <span className="min-w-0 leading-tight">
                  <CountUp
                    end={value}
                    suffix={suffix}
                    className="block font-serif text-[1.75rem] font-bold leading-none text-navy-900 sm:text-[2.1rem]"
                    suffixClassName="text-gold"
                  />
                  <span className="mt-1.5 block text-[0.78rem] font-semibold leading-snug text-navy-900/65 sm:text-[0.82rem]">
                    {label}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
