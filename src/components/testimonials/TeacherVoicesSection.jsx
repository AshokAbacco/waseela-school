/**
 * TESTIMONIALS › FROM OUR TEACHERS
 * Dark navy section with the animated school crest and one card per teacher
 * (photo, quote, name and role). Cards marked `placeholder: true` show a "Sample" tag.
 * Data: `teacherTestimonials` in data/testimonialsData.js — the section hides itself if that list is empty.
 */
import { Quote, UserRound } from "lucide-react";
import Reveal from "../ui/Reveal";
import AnimatedCrest from "../ui/AnimatedCrest";
import { teacherTestimonials } from "../../data/testimonialsData";
import { Eyebrow } from "./helpers";

function TeacherPhoto({ t }) {
  return (
    <span className="relative shrink-0">
      <span
        aria-hidden
        className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#F7C976] via-[#E9A23B] to-[#B9771F]"
      />
      <span className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-navy-800 ring-[3px] ring-navy-900">
        {t.photo ? (
          <img
            src={t.photo}
            alt={`Photo of ${t.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <UserRound
            className="h-7 w-7 text-gold-light"
            strokeWidth={1.6}
            aria-hidden
          />
        )}
      </span>
    </span>
  );
}

export default function TeacherVoicesSection() {
  if (!teacherTestimonials.length) return null;

  return (
    <section
      aria-labelledby="teachers-heading"
      className="relative isolate overflow-hidden bg-navy-900 py-16 text-white sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(rgba(246,203,126,0.18)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div
        aria-hidden
        className="absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="container-site relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <AnimatedCrest size="md" light className="mb-12 mt-4" />
          <Eyebrow light center>
            From Our Teachers
          </Eyebrow>
          <h2
            id="teachers-heading"
            className="mt-4 text-[2.2rem] font-bold !text-white sm:text-[2.8rem]"
          >
            Voices From the <span className="text-gold-light">Classroom</span>
          </h2>
          <p className="mt-4 text-white/70">
            The educators who guide our children every day share what teaching
            at Waseela means to them.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {teacherTestimonials.map((t, k) => (
            <Reveal as="li" key={k} delay={(k % 4) * 80} className="flex">
              <figure className="group flex w-full flex-col rounded-[28px] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.08]">
                <div className="flex items-start justify-between gap-3">
                  <TeacherPhoto t={t} />
                  {t.placeholder ? (
                    <span className="rounded-full border border-dashed border-gold-light/60 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-light">
                      Sample
                    </span>
                  ) : (
                    <Quote
                      className="h-8 w-8 rotate-180 fill-gold/30 text-gold/30"
                      aria-hidden
                    />
                  )}
                </div>
                <blockquote
                  className={`mt-6 flex-1 leading-relaxed ${t.placeholder ? "italic text-white/55" : "text-white/90"}`}
                >
                  {t.placeholder ? t.quote : `“${t.quote}”`}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gold-light">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
