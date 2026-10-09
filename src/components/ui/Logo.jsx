import { Link } from "react-router-dom";
import crest from "../../assets/brand/waseela-crest.webp";
import { school } from "../../data/schoolData";

export default function Logo({ onClick, size = "md" }) {
  const big = size === "lg";
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex shrink-0 items-center gap-3"
      aria-label={`${school.name} — home`}
    >
      <img
        src={crest}
        alt=""
        width={60}
        height={60}
        className={`${big ? "h-16 w-16" : "h-12 w-12 sm:h-[58px] sm:w-[58px]"} shrink-0 object-contain`}
      />
      <span className="leading-none">
        <span
          className={`block font-serif ${big ? "text-[1.7rem]" : "text-[1.3rem] sm:text-[1.55rem]"} font-semibold tracking-wide text-navy-900`}
        >
          WASEELA
        </span>
        <span className="mt-1 block border-b border-navy-900/70 pb-0.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-navy-900 sm:text-[0.62rem]">
          English Medium School
        </span>
        <span className="mt-1 block text-[0.56rem] font-medium text-navy-900/75 sm:text-[0.6rem]">
          {school.motto.learn}&nbsp;&nbsp;·&nbsp;&nbsp;{school.motto.lead}
        </span>
      </span>
    </Link>
  );
}
