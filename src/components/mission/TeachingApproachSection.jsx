/**
 * MISSION › HOW WE TEACH
 * Photo mosaic on the left, four teaching steps on the right.
 * Edit the steps in the STEPS list below.
 */
import { Lightbulb, MonitorPlay, PencilLine, UserCheck } from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { photos } from "../../data/schoolData";

const STEPS = [
  {
    icon: Lightbulb,
    title: "Explain Clearly",
    text: "Teachers introduce each concept simply, step by step, so children truly understand.",
  },
  {
    icon: MonitorPlay,
    title: "Show & Engage",
    text: "Digital panel boards bring lessons to life with pictures, videos and examples.",
  },
  {
    icon: PencilLine,
    title: "Practise Together",
    text: "Children apply what they learn in class, with guidance whenever they need it.",
  },
  {
    icon: UserCheck,
    title: "Personal Attention",
    text: "Teachers notice how each child is doing and support them to keep improving.",
  },
];

export default function TeachingApproachSection() {
  return (
    <section
      aria-labelledby="teach-heading"
      className="section relative overflow-hidden bg-cream"
    >
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Photo mosaic */}
        <Reveal className="grid grid-cols-2 gap-4">
          <img
            src={photos.classroom}
            alt="A bright Waseela classroom"
            loading="lazy"
            className="col-span-2 aspect-[16/9] w-full rounded-[24px] object-cover shadow-lift"
          />
          <img
            src={photos.studentWriting}
            alt="A student writing in class"
            loading="lazy"
            className="aspect-square w-full rounded-[20px] object-cover object-[60%_30%] shadow-card"
          />
          <div className="relative">
            <img
              src={photos.library}
              alt="The school library"
              loading="lazy"
              className="aspect-square w-full rounded-[20px] object-cover shadow-card"
            />
            <span className="absolute -bottom-4 -right-2 rounded-2xl bg-white px-4 py-3 text-center shadow-lift sm:-right-4">
              <span className="block font-serif text-2xl font-bold [color:#C8862A]">
                AC
              </span>
              <span className="text-[0.7rem] font-semibold text-navy-900">
                Digital Classrooms
              </span>
            </span>
          </div>
        </Reveal>

        {/* Steps */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-gold" />
              <Eyebrow>How We Teach</Eyebrow>
            </div>
            <h2
              id="teach-heading"
              className="mt-4 text-[2.1rem] font-bold leading-[1.1] sm:text-[2.6rem]"
            >
              Learning That Is{" "}
              <span className="[color:#C8862A]">Clear and Joyful</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              A simple, proven rhythm in every classroom — so concepts stick and
              confidence grows.
            </p>
          </Reveal>
          <ol className="mt-8 space-y-4">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 80}
                className="group flex gap-4 rounded-2xl bg-white p-5 shadow-card transition duration-300 hover:translate-x-1 hover:shadow-lift"
              >
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  <span className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-[0.65rem] font-bold text-gold-light ring-2 ring-white">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="font-sans text-[1.05rem] font-bold">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
