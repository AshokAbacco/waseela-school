/** ABOUT › OUR EDUCATORS — intro text from `about.educators`; points listed below. */
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { about, photos } from "../../data/schoolData";

const POINTS = [
  "Strong teaching skills",
  "Clear, concept-focused explanation",
  "Confident use of digital panel boards",
  "Patient, individual attention",
];

export default function EducatorsSection() {
  return (
    <section aria-labelledby="team-heading" className="section bg-white">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeading
          id="team-heading"
          align="left"
          label="Our Educators"
          heading="Teachers Who Make Learning Clear"
          text={about.educators}
        />
        <Reveal>
          <img
            src={photos.studentWriting}
            alt="A Waseela student learning in class"
            loading="lazy"
            className="aspect-[16/10] w-full rounded-[24px] object-cover shadow-lift"
          />
          <ul className="mt-6 grid gap-x-6 sm:grid-cols-2">
            {POINTS.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 border-b border-navy-900/10 py-3.5 font-semibold text-navy-900"
              >
                <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-gold" /> {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
