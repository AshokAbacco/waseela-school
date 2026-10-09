import Reveal from "./Reveal";

/** Template-style facility card: photo on top, small gold icon badge, title and line of text. */
export default function FacilityCard({ icon: Icon, title, text, image, delay = 0, compact = false }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/[0.07] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
        <div className="relative">
          <div className={`overflow-hidden ${compact ? "aspect-[2/1]" : "aspect-[16/9]"}`}>
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          {Icon && (
            <span className="absolute -bottom-5 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-light to-gold text-navy-950 shadow-glow ring-4 ring-white">
              <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
            </span>
          )}
        </div>
        <div className={`flex flex-1 flex-col ${compact ? "p-4 pt-8" : "p-6 pt-9"}`}>
          <h3 className={`font-sans font-bold text-navy-900 ${compact ? "text-[0.95rem]" : "text-[1.1rem]"}`}>
            {title}
          </h3>
          <p className={`mt-1.5 leading-relaxed text-muted ${compact ? "text-[0.8rem]" : "text-[0.92rem]"}`}>
            {text}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
