/**
 * HOME › ACADEMICS  ("Excellence in Education for a Brighter Tomorrow")
 * Photo left, checklist right. Edit text in `academics` (data/schoolData.js).
 */
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { academics, photos } from "../../data/schoolData";

export default function AcademicsSection() {
  return (
    <section
      aria-labelledby="academics-heading"
      className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal className="relative">
          {/* wavy gold shape behind the photo */}
          <span
            aria-hidden
            className="absolute -bottom-6 -right-6 h-1/2 w-1/3 rounded-[50%_30%_50%_40%] bg-gradient-to-br from-gold-light to-gold opacity-80"
          />
          <span
            aria-hidden
            className="absolute -left-6 -top-6 h-1/3 w-1/3 rounded-[40%] bg-gold-soft"
          />
          <img
            src={photos.studentWriting}
            alt="A Waseela student writing in her notebook in class"
            width={1400}
            height={744}
            loading="lazy"
            className="relative aspect-[16/10] w-full rounded-[24px] object-cover shadow-lift"
          />
        </Reveal>
        <Reveal delay={100} className="relative">
          <span
            aria-hidden
            className="dots-gold absolute -right-2 -top-6 hidden h-20 w-20 opacity-70 sm:block"
          />
          <Eyebrow>{academics.label}</Eyebrow>
          <h2
            id="academics-heading"
            className="mt-3 text-[2.1rem] font-bold leading-[1.1] sm:text-[2.6rem]"
          >
            {academics.heading}
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted">
            {academics.text}
          </p>
          <ul className="mt-7 space-y-3.5">
            {academics.points.map((pt) => (
              <li
                key={pt}
                className="flex items-center gap-3 font-medium text-navy-900"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                {pt}
              </li>
            ))}
          </ul>
          <Link to="/mission" className="btn-gold mt-9">
            Explore Academics <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
