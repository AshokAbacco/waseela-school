/**
 * MISSION › GROWING THE WHOLE CHILD
 * Full-width students photo in the background with four frosted-glass cards on top.
 * Edit the cards in the CARDS list below.
 */
import { HeartHandshake, MessagesSquare, Salad, Trees } from "lucide-react";
import Reveal from "../ui/Reveal";
import { photos } from "../../data/schoolData";

const CARDS = [
  {
    icon: HeartHandshake,
    title: "Good Values",
    text: "Honesty, respect and responsibility practised every day.",
  },
  {
    icon: MessagesSquare,
    title: "Confidence",
    text: "Children are encouraged to speak up, ask and share ideas.",
  },
  {
    icon: Trees,
    title: "Active Play",
    text: "Games on a spacious playground build health and teamwork.",
  },
  {
    icon: Salad,
    title: "Healthy Food",
    text: "Nutritious, hygienically prepared meals for growing minds.",
  },
];

export default function WholeChildSection() {
  return (
    <section
      aria-labelledby="whole-heading"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      <img
        src={photos.campusStudents}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/75 via-navy-950/55 to-navy-950/75"
      />

      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold-light">
            <span aria-hidden className="h-px w-10 bg-gold" />
            Beyond Academics
            <span aria-hidden className="h-px w-10 bg-gold" />
          </p>
          <h2
            id="whole-heading"
            className="mt-4 text-[2.2rem] font-bold leading-[1.1] !text-white drop-shadow sm:text-[2.9rem]"
          >
            Growing the <span className="text-gold-light">Whole Child</span>
          </h2>
          <p className="mt-4 leading-relaxed text-white/90">
            Good marks matter — and so do kindness, health and confidence. We
            care for every part of a child’s growth.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 90}
              className="group rounded-[24px] border border-white/30 bg-white/15 p-6 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/25"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-glow transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-bold !text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
