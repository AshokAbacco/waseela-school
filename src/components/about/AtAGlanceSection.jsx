/**
 * ABOUT › AT A GLANCE  (first section after the page header)
 * Left: welcome text + quick facts (location, medium, foundation, admissions).
 * Right: students photo with a floating stats card (numbers count up — from `heroHighlights`).
 */
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  Languages,
  MapPin,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import CountUp from "../ui/Countup";
import { heroHighlights, links, photos, school } from "../../data/schoolData";

const FACTS = [
  { icon: MapPin, label: "Location", value: `Old Town, ${school.city}` },
  { icon: Languages, label: "Medium", value: "English Medium" },
  { icon: BookOpenCheck, label: "Classes", value: school.classesShort },
  {
    icon: GraduationCap,
    label: "Admissions",
    value: `Open ${school.admissionYear}`,
  },
];

export default function AtAGlanceSection() {
  return (
    <section
      aria-labelledby="glance-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold-soft/60 blur-3xl"
      />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-gold" />
            <Eyebrow>Welcome to Waseela</Eyebrow>
          </div>
          <h2
            id="glance-heading"
            className="mt-4 text-[2.1rem] font-bold leading-[1.1] sm:text-[2.7rem]"
          >
            A School Where Every Child{" "}
            <span className="[color:#C8862A]">Belongs</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            {school.name} is an initiative of the {school.foundation}, serving
            families in {school.city} with quality English-medium education. We
            bring together caring teachers, comfortable classrooms and strong
            values so that every child feels safe, seen and ready to learn.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {FACTS.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-navy-900/[0.07] bg-cream p-3.5 transition hover:border-gold/40 hover:shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gold-dark shadow-card">
                  <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
                    {label}
                  </span>
                  <span className="mt-0.5 block font-semibold text-navy-900">
                    {value}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Apply for Admission <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link to="/facilities" className="btn-outline-gold">
              See Our Facilities
            </Link>
          </div>
        </Reveal>

        {/* Photo + stats */}
        <Reveal delay={120} className="relative pb-24 sm:pb-16">
          <span
            aria-hidden
            className="absolute -right-4 -top-4 h-full w-full rounded-[30px] border-2 border-gold/40"
          />
          <div className="relative overflow-hidden rounded-[28px] shadow-lift">
            <img
              src={photos.studentsGroup}
              alt="Smiling Waseela students in uniform holding books"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-[60%_center]"
            />
          </div>
          <ul className="absolute inset-x-4 bottom-0 grid grid-cols-2 gap-y-4 rounded-2xl bg-white/95 p-4 shadow-lift backdrop-blur sm:inset-x-8 sm:grid-cols-4">
            {heroHighlights.map(({ value, suffix, label }, i) => (
              <li
                key={label}
                className={`px-2 text-center ${i > 0 ? "sm:border-l sm:border-navy-900/10" : ""}`}
              >
                <CountUp
                  end={value}
                  suffix={suffix}
                  className="block font-serif text-[1.6rem] font-bold leading-none text-navy-900"
                  suffixClassName="text-gold"
                />
                <span className="mt-1 block text-[0.7rem] font-medium leading-tight text-muted">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
