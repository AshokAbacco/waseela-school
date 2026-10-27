/**
 * UI › PAGE HERO  (header banner for every inner page)
 * Full-width background photo with the text on top, classic gold ornaments,
 * and an entrance animation each time the page loads:
 *   • the photo slowly zooms out,
 *   • label, heading, divider, text and buttons rise in one after another,
 *   • the gold frame lines draw in.
 *
 * Props
 *   label      small gold text above the heading
 *   heading    main title
 *   text       short paragraph (optional)
 *   crumb      breadcrumb name of this page
 *   image      background photo (import from data/schoolData.js → photos)
 *   imageAlt   description of the photo
 *   position   CSS object-position for the photo, e.g. "center 40%" (optional)
 *   edge       colour of the curved bottom edge — match the next section: "white" (default) or "cream"
 *   children   extra buttons / info shown under the text (optional)
 */
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

/* Animations live here so this file is self-contained. Reduced-motion users see the final state. */
const heroStyles = `
@keyframes ph-zoom { from { transform: scale(1.14); } to { transform: scale(1); } }
@keyframes ph-rise { from { opacity: 0; transform: translateY(28px); filter: blur(4px); } to { opacity: 1; transform: none; filter: none; } }
@keyframes ph-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes ph-line { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes ph-line-y { from { transform: scaleY(0); } to { transform: scaleY(1); } }
.ph-zoom { animation: ph-zoom 9s cubic-bezier(.16,.8,.3,1) both; }
.ph-rise { animation: ph-rise .9s cubic-bezier(.2,.7,.2,1) both; }
.ph-fade { animation: ph-fade 1.2s ease both; }
.ph-line { animation: ph-line 1s cubic-bezier(.7,0,.3,1) both; }
.ph-line-y { animation: ph-line-y 1.1s cubic-bezier(.7,0,.3,1) both; }
@media (prefers-reduced-motion: reduce) {
  .ph-zoom, .ph-rise, .ph-fade, .ph-line, .ph-line-y { animation: none !important; }
}
`;

const delay = (ms) => ({ animationDelay: `${ms}ms` });

export default function PageHero({
  label,
  heading,
  text,
  crumb,
  image,
  imageAlt = "",
  position = "center",
  edge = "white",
  children,
}) {
  return (
    <section
      aria-labelledby="page-heading"
      className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-navy-950 sm:min-h-[520px] lg:min-h-[700px]"
    >
      <style>{heroStyles}</style>

      {/* ---------- Background photo ---------- */}
      {image && (
        <img
          src={image}
          alt={imageAlt}
          width={1600}
          height={800}
          fetchpriority="high"
          style={{ objectPosition: position }}
          className="ph-zoom absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}

      {/* ---------- Overlays: deep navy on the left for readable text, lighter on the right ---------- */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/40"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,#F6CB7E_1px,transparent_0)] [background-size:22px_22px]"
      />

      {/* ---------- Classic gold frame ---------- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 hidden sm:block lg:inset-6"
      >
        <span
          className="ph-line absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-gold/70 via-gold/30 to-transparent"
          style={delay(300)}
        />
        <span
          className="ph-line absolute inset-x-0 bottom-0 h-px origin-right bg-gradient-to-l from-gold/70 via-gold/30 to-transparent"
          style={delay(450)}
        />
        <span
          className="ph-line-y absolute inset-y-0 left-0 w-px origin-top bg-gradient-to-b from-gold/70 via-gold/30 to-transparent"
          style={delay(300)}
        />
        <span
          className="ph-line-y absolute inset-y-0 right-0 w-px origin-bottom bg-gradient-to-t from-gold/70 via-gold/30 to-transparent"
          style={delay(450)}
        />
        {/* corner ornaments */}
        <span
          className="ph-fade absolute -left-1 -top-1 h-3 w-3 rotate-45 border border-gold bg-navy-950"
          style={delay(900)}
        />
        <span
          className="ph-fade absolute -bottom-1 -right-1 h-3 w-3 rotate-45 border border-gold bg-navy-950"
          style={delay(900)}
        />
      </div>

      {/* ---------- Content ---------- */}
      <div className="container-site relative py-20 sm:py-24">
        <div className="max-w-3xl">
          {/* Label with gold rule */}
          <p
            className="ph-rise flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold-light"
            style={delay(150)}
          >
            <span aria-hidden className="h-px w-10 bg-gold" />
            {label}
          </p>

          <h1
            id="page-heading"
            className="ph-rise mt-5 text-[2.4rem] font-bold leading-[1.08] !text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-[3.6rem]"
            style={delay(300)}
          >
            {heading}
          </h1>

          {/* Ornamental divider */}
          <div
            aria-hidden
            className="ph-rise mt-6 flex items-center gap-2"
            style={delay(450)}
          >
            <span
              className="ph-line h-[2px] w-16 origin-left bg-gradient-to-r from-gold-light to-gold"
              style={delay(600)}
            />
            <span className="h-2 w-2 rotate-45 bg-gold" />
            <span
              className="ph-line h-px w-8 origin-left bg-gold/60"
              style={delay(700)}
            />
          </div>

          {text && (
            <p
              className="ph-rise mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
              style={delay(600)}
            >
              {text}
            </p>
          )}

          {children && (
            <div className="ph-rise" style={delay(750)}>
              {children}
            </div>
          )}

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="ph-rise mt-10"
            style={delay(900)}
          >
            <ol className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 hover:text-gold-light"
                >
                  <Home className="h-3.5 w-3.5" aria-hidden /> Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5 text-gold" />
              </li>
              <li aria-current="page" className="font-semibold text-gold-light">
                {crumb}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ---------- Soft curved edge into the next section ---------- */}
      <svg
        aria-hidden
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`absolute inset-x-0 -bottom-px h-8 w-full sm:h-12 ${edge === "cream" ? "text-cream" : "text-white"}`}
      >
        <path
          fill="currentColor"
          d="M0 60 V30 C240 0 480 0 720 22 C960 44 1200 50 1440 20 V60 Z"
        />
      </svg>
    </section>
  );
}
