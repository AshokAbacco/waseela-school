import { Link } from "react-router-dom";

/** Inner-page header in the light template style: cream panel, copy left, photo right. */
export default function PageHero({ label, heading, text, crumb, image, imageAlt = "", children }) {
  return (
    <section aria-labelledby="page-heading" className="relative overflow-hidden bg-cream">
      <div aria-hidden className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold-soft/70 blur-2xl" />
      <div
        aria-hidden
        className="dots-gold absolute right-[46%] top-8 hidden h-20 w-20 opacity-40 lg:block"
      />
      <div
        className={`container-site relative grid items-center gap-10 py-14 sm:py-16 lg:py-20 ${image ? "lg:grid-cols-[1.05fr_1fr] lg:gap-14" : ""}`}
      >
        <div>
          <nav aria-label="Breadcrumb" className="text-xs text-muted">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-gold-dark">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="font-semibold text-gold-dark">
                {crumb}
              </li>
            </ol>
          </nav>
          <p className="mt-7 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold-dark">{label}</p>
          <h1
            id="page-heading"
            className="mt-4 max-w-3xl text-[2.4rem] font-bold leading-[1.06] sm:text-5xl lg:text-[3.5rem]"
          >
            {heading}
          </h1>
          {text && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-900/75 sm:text-lg">{text}</p>
          )}
          {children}
        </div>
        {image && (
          <div className="relative mx-auto w-full max-w-[580px]">
            <span
              aria-hidden
              className="absolute -bottom-4 -left-4 h-full w-full rounded-[28px] bg-gold-soft"
            />
            <img
              src={image}
              alt={imageAlt}
              width={1200}
              height={900}
              className="relative aspect-[4/3] w-full rounded-[24px] object-cover shadow-lift"
            />
          </div>
        )}
      </div>
    </section>
  );
}
