import Reveal from "./Reveal";

export default function ContactCard({ icon: Icon, title, children, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card card-hover h-full p-8">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream text-gold-dark">
          <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
        </span>
        <h3 className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.22em] !text-gold-dark">
          {title}
        </h3>
        <div className="mt-4 space-y-1.5 text-[0.98rem] leading-relaxed text-ink">{children}</div>
      </article>
    </Reveal>
  );
}
