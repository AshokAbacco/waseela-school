import { playStoreHref, schoolApp } from "../../data/schoolData";

/** Official-style black "GET IT ON Google Play" badge. */
export default function PlayStoreBadge({ className = "" }) {
  return (
    <a
      href={playStoreHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get the ${schoolApp.name} app on Google Play (opens in a new tab)`}
      className={`group inline-flex min-h-[52px] items-center gap-3 rounded-xl border border-white/25 bg-black px-4 py-2 text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      <svg
        viewBox="0 0 24 26"
        className="h-7 w-[26px] shrink-0 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        <path fill="#00D7FE" d="M1 1.2C.7 1.5.5 2 .5 2.6v20.8c0 .6.2 1.1.5 1.4l.1.1L12.8 13.2V13L1.1 1.1z" />
        <path fill="#FFCE00" d="m16.7 17.1-3.9-3.9V13l3.9-3.9.1.1 4.6 2.6c1.3.7 1.3 2 0 2.7l-4.6 2.6z" />
        <path fill="#FF3A44" d="M16.8 17 12.8 13 1 24.8c.4.5 1.2.5 2 .1L16.8 17" />
        <path fill="#00F076" d="M16.8 9 3 1.1C2.2.6 1.4.7 1 1.2L12.8 13z" />
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[0.6rem] font-medium uppercase tracking-[0.08em] text-white/80">
          Get it on
        </span>
        <span className="mt-1 block text-[1.15rem] font-semibold tracking-tight">Google Play</span>
      </span>
    </a>
  );
}
