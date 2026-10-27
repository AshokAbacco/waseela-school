/**
 * FACILITIES › SPOTLIGHT
 * Three featured facilities shown large, alternating photo left / right, with a few highlights each.
 * Edit the SPOTLIGHTS list below.
 */
import { Check, Library, MonitorPlay, Bus } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { photos } from "../../data/schoolData";

const SPOTLIGHTS = [
  {
    icon: MonitorPlay,
    label: "Smart Classrooms",
    title: "Air-Conditioned Classrooms with Digital Panel Boards",
    text: "Bright, comfortable rooms where lessons come alive on interactive digital boards — so children stay focused and understand concepts clearly.",
    points: [
      "Air-conditioned for every season",
      "Interactive digital panel boards",
      "Well-equipped and spacious",
    ],
    image: photos.classroom,
    alt: "A bright, air-conditioned Waseela classroom",
  },
  {
    icon: Library,
    label: "Library",
    title: "A Library That Builds Readers",
    text: "Shelves of books for every age and a quiet place to read, explore and discover — growing a reading habit that lasts a lifetime.",
    points: [
      "Books for every age group",
      "Quiet reading space",
      "Encourages curiosity and language",
    ],
    image: photos.library,
    alt: "The Waseela school library with wooden shelves of books",
  },
  {
    icon: Bus,
    label: "Transport",
    title: "School Buses for Safe Travel",
    text: "Our school bus service helps children travel between home and school. The office shares routes and timings for your area.",
    points: [
      "School bus service",
      "Routes and timings from the office",
      "Ask us if your area is covered",
    ],
    image: photos.buses,
    alt: "Waseela school buses parked in front of the school building",
  },
];

export default function SpotlightSection() {
  return (
    <section aria-labelledby="spotlight-heading" className="section bg-white">
      <div className="container-site">
        <SectionHeading
          id="spotlight-heading"
          label="In the Spotlight"
          heading="A Closer Look at Our Campus"
          text="Some of the spaces our students use every day."
        />
        <div className="mt-16 space-y-16 lg:space-y-24">
          {SPOTLIGHTS.map(
            ({ icon: Icon, label, title, text, points, image, alt }, i) => {
              const flip = i % 2 === 1;
              return (
                <div
                  key={label}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <Reveal className={`relative ${flip ? "lg:order-2" : ""}`}>
                    <span
                      aria-hidden
                      className={`absolute -top-4 h-full w-full rounded-[28px] bg-gold-soft ${flip ? "-right-4" : "-left-4"}`}
                    />
                    <div className="group relative overflow-hidden rounded-[26px] shadow-lift">
                      <img
                        src={image}
                        alt={alt}
                        loading="lazy"
                        className="aspect-[16/11] w-full object-cover transition duration-[1.2s] group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-navy-900 shadow-card backdrop-blur">
                        <Icon className="h-4 w-4 text-gold-dark" aria-hidden />{" "}
                        {label}
                      </span>
                    </div>
                  </Reveal>
                  <Reveal delay={100}>
                    <span
                      className="font-serif text-5xl font-bold text-gold/40"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-[1.8rem] font-bold leading-tight sm:text-[2.2rem]">
                      {title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">{text}</p>
                    <ul className="mt-6 space-y-3">
                      {points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-center gap-3 font-medium text-navy-900"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                            <Check
                              className="h-3.5 w-3.5"
                              strokeWidth={3}
                              aria-hidden
                            />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
