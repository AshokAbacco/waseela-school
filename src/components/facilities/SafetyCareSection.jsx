/**
 * FACILITIES › SAFETY & CARE
 * Full-width school photo background with frosted-glass cards about how children are looked after.
 * Edit the CARDS list below — please confirm each point with the school office.
 */
import {
  BedDouble,
  Bus,
  HeartHandshake,
  Salad,
  ShieldCheck,
  Snowflake,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import { photos } from "../../data/schoolData";

const CARDS = [
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    text: "A secure, well-supervised campus where children can learn and play freely.",
  },
  {
    icon: HeartHandshake,
    title: "Caring Staff",
    text: "Teachers and staff who know each child and look out for their wellbeing.",
  },
  {
    icon: Salad,
    title: "Hygienic Food",
    text: "Nutritious meals prepared and served with care for cleanliness.",
  },
  {
    icon: Snowflake,
    title: "Comfortable Rooms",
    text: "Air-conditioned classrooms that stay comfortable through every season.",
  },
  {
    icon: Bus,
    title: "School Transport",
    text: "School bus service between home and school — routes from the office.",
  },
  {
    icon: BedDouble,
    title: "Boarding Care",
    text: "A calm hostel space for students to rest and study after school.",
  },
];

export default function SafetyCareSection() {
  return (
    <section
      aria-labelledby="safety-heading"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      <img
        src={photos.campusBuilding}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_40%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/75 via-navy-950/60 to-navy-950/80"
      />

      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold-light">
            <span aria-hidden className="h-px w-10 bg-gold" />
            Safety &amp; Care
            <span aria-hidden className="h-px w-10 bg-gold" />
          </p>
          <h2
            id="safety-heading"
            className="mt-4 text-[2.2rem] font-bold leading-[1.1] !text-white sm:text-[2.9rem]"
          >
            Your Child Is in <span className="text-gold-light">Safe Hands</span>
          </h2>
          <p className="mt-4 leading-relaxed text-white/90">
            From the moment they board the bus to the time they return home, we
            look after every child with care.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={(i % 3) * 90}
              className="group flex gap-4 rounded-[22px] border border-white/25 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-glow transition-transform group-hover:rotate-[-6deg]">
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <h3 className="font-sans text-[1.1rem] font-bold !text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/85">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
