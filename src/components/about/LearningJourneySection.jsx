/**
 * ABOUT › A CHILD'S JOURNEY AT WASEELA
 * Five steps from "Enter" to "Lead", each with a photo, joined by a gold line.
 * Edit the steps in the STEPS list below.
 */
import { BookOpen, Footprints, Flag, Salad, Trees } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { images, photos } from "../../data/schoolData";

const STEPS = [
  {
    icon: Footprints,
    title: "Enter",
    text: "A warm welcome at the gate and a safe, caring campus from the very first day.",
    image: photos.campusGate,
  },
  {
    icon: BookOpen,
    title: "Learn",
    text: "Clear, concept-focused lessons in AC classrooms with digital panel boards.",
    image: photos.classroom,
  },
  {
    icon: Trees,
    title: "Play",
    text: "Games and free play on a spacious ground to stay active and build teamwork.",
    image: images.playground,
  },
  {
    icon: Salad,
    title: "Nourish",
    text: "Nutritious, hygienically prepared food that keeps young learners energetic.",
    image: images.dining,
  },
  {
    icon: Flag,
    title: "Lead",
    text: "Children grow in confidence and values — ready to take responsibility and lead.",
    image: photos.studentsGroup,
  },
];

export default function LearningJourneySection() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="section relative overflow-hidden bg-cream"
    >
      <div
        aria-hidden
        className="dots-gold absolute right-8 top-10 hidden h-24 w-24 opacity-40 lg:block"
      />
      <div className="container-site relative">
        <SectionHeading
          id="journey-heading"
          label="A Child's Journey"
          heading="From Enter to Learn, to Exit to Lead"
          text="Every school day at Waseela is built around how children learn, play, grow and lead."
        />

        <ol className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {/* connecting gold line (desktop) */}
          <span
            aria-hidden
            className="absolute left-[10%] right-[10%] top-[92px] hidden h-[2px] bg-gradient-to-r from-gold/20 via-gold to-gold/20 lg:block"
          />
          {STEPS.map(({ icon: Icon, title, text, image }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 90}
              className="group relative text-center"
            >
              <div className="relative mx-auto h-[184px] w-[184px]">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full rounded-full border-[6px] border-white object-cover shadow-lift transition duration-500 group-hover:scale-105"
                />
                <span className="absolute -bottom-2 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-glow ring-4 ring-cream">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <span className="absolute -right-1 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 font-serif text-sm font-bold text-gold-light">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-7 text-[1.5rem] font-bold">{title}</h3>
              <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-muted">
                {text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
