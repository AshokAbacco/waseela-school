import Reveal from "./Reveal";

export default function SectionHeading({ label, heading, text, align = "center", light = false, id }) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p className={light ? "eyebrow-light" : "eyebrow"}>{label}</p>
      <h2
        id={id}
        className={`mt-3 text-[2rem] leading-[1.12] sm:text-[2.6rem] ${light ? "!text-white" : ""}`}
      >
        {heading}
      </h2>
      <span
        aria-hidden
        className={`mt-5 block h-[3px] w-14 rounded-full bg-gold ${center ? "mx-auto" : ""}`}
      />
      {text && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-muted"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
