import Reveal from "./Reveal";

export default function FeatureCard({ icon: Icon, index, title, text, delay = 0, tone = "white" }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`card card-hover group relative h-full overflow-hidden p-7 sm:p-8 ${tone === "cream" ? "bg-cream" : ""}`}
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
        />
        <div className="flex items-start justify-between">
          {Icon && (
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-gold-dark transition group-hover:bg-gold group-hover:text-navy-950">
              <Icon className="h-[22px] w-[22px]" strokeWidth={1.6} aria-hidden />
            </span>
          )}
          {index !== undefined && (
            <span className="font-serif text-3xl text-gold/60" aria-hidden>
              {String(index).padStart(2, "0")}
            </span>
          )}
        </div>
        <h3 className="mt-6 text-[1.3rem] font-medium leading-snug">{title}</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{text}</p>
      </article>
    </Reveal>
  );
}
