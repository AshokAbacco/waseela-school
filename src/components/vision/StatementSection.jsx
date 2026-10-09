/** VISION › STATEMENT + Learn / Explore / Grow cards. Statement text: `vision.statement`. */
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { images, photos, vision } from "../../data/schoolData";

const CARDS = [
  { src: photos.classroom, title: "Learn", text: "Clear lessons in comfortable, digital classrooms." },
  { src: images.lab, title: "Explore", text: "Curiosity grows through hands-on science." },
  { src: photos.library, title: "Grow", text: "Reading habits that last a lifetime." },
];

export default function StatementSection() {
  return (
    <section aria-labelledby="vision-statement" className="section bg-cream">
      <div className="container-site">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow>Vision Statement</Eyebrow>
          <h2 id="vision-statement" className="sr-only">
            Vision statement
          </h2>
          <p className="mt-6 font-serif text-[1.7rem] font-semibold leading-[1.3] text-navy-900 sm:text-[2.4rem]">
            “{vision.statement}”
          </p>
          <span aria-hidden className="mx-auto mt-8 block h-[3px] w-14 rounded-full bg-gold" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <figure className="overflow-hidden rounded-2xl bg-white shadow-card">
                <img src={c.src} alt={c.text} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="p-5">
                  <span className="font-serif text-xl font-bold text-navy-900">{c.title}</span>
                  <span className="mt-1 block text-sm text-muted">{c.text}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
