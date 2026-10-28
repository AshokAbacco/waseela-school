/**
 * TESTIMONIALS › PARENTS ON OUR TEACHERS
 * Left (sticky on desktop): heading + how many parents mention teachers.
 * Right: the sentence about teachers taken from each parent's quote, with "teacher" highlighted.
 * Everything comes from the quotes in data/testimonialsData.js.
 */
import { GraduationCap, Quote } from "lucide-react";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/testimonialsData";
import { Eyebrow, StudentPhoto } from "./helpers";

const LIMIT = 6;

function teacherMentions() {
  const out = [];
  for (const t of testimonials) {
    const sentences = (t.quote || "").match(/[^.!?]+[.!?]*/g) || [];
    const hit = sentences.find((s) => /teacher/i.test(s));
    if (hit) out.push({ person: t, text: hit.trim() });
    if (out.length >= LIMIT) break;
  }
  return out;
}

function Highlight({ text }) {
  return text.split(/(teachers?['’]?)/i).map((p, i) =>
    /^teachers?['’]?$/i.test(p) ? (
      <mark key={i} className="rounded bg-gold/25 px-1 text-inherit">
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export default function OnTeachersSection() {
  const mentions = teacherMentions();
  if (!mentions.length) return null;
  const total = testimonials.filter((t) =>
    /teacher/i.test(t.quote || ""),
  ).length;

  return (
    <section
      aria-labelledby="on-teachers-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Parents on Our Teachers</Eyebrow>
            <h2
              id="on-teachers-heading"
              className="mt-4 text-[2.2rem] font-bold leading-tight sm:text-[2.8rem]"
            >
              The Heart of <span className="[color:#C8862A]">Every Story</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Our teachers come up again and again in what families tell us.
              Here is what parents have said about them, taken from their
              testimonials.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-peach px-5 py-4">
              <GraduationCap className="h-7 w-7 text-gold-dark" aria-hidden />
              <p className="text-sm text-navy-900">
                <b className="font-serif text-2xl">{total}</b> parents mention
                our teachers
              </p>
            </div>
          </div>
        </Reveal>

        <ul className="space-y-5">
          {mentions.map(({ person, text }, k) => (
            <Reveal as="li" key={k} delay={k * 60}>
              <div
                className={`relative rounded-[28px] border border-navy-900/10 p-6 sm:p-8 ${
                  k % 2 ? "bg-cream sm:ml-10" : "bg-white shadow-card sm:mr-10"
                }`}
              >
                <Quote
                  className="absolute right-6 top-6 h-8 w-8 rotate-180 text-gold/20"
                  aria-hidden
                />
                <p className="pr-10 font-serif text-xl leading-relaxed text-navy-900">
                  <Highlight text={text} />
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <StudentPhoto
                    t={person}
                    className="h-10 w-10"
                    iconClass="h-4 w-4"
                    ringClass="ring-2 ring-gold/40"
                  />
                  <p className="text-sm">
                    <b className="text-navy-900">{person.name}</b>{" "}
                    <span className="text-muted">· {person.detail}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
