/** ABOUT › OUR MOTTO — "Enter to Learn / Exit to Lead" cards. Edit the text below. */
import { Flag, LogIn } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { school } from "../../data/schoolData";

const CARDS = [
  {
    icon: LogIn,
    title: school.motto.learn,
    text: "Children arrive curious. We give them clear lessons, patient teachers and a comfortable classroom where questions are always welcome.",
  },
  {
    icon: Flag,
    title: school.motto.lead,
    text: "Children leave confident. Good values, strong communication and self-belief prepare them to take responsibility and lead.",
  },
];

export default function MottoSection() {
  return (
    <section aria-labelledby="motto-heading" className="section relative overflow-hidden bg-peach">
      <div className="container-site relative">
        <SectionHeading
          id="motto-heading"
          label="Our Motto"
          heading="Two Simple Promises"
          text="The words on our crest describe the journey every Waseela child takes."
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {CARDS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <article className="h-full rounded-2xl border border-navy-900/[0.07] bg-white p-8 shadow-card sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft text-gold-dark">
                  <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="mt-6 text-3xl font-bold">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
