/**
 * FACILITIES › FREQUENTLY ASKED QUESTIONS
 * Accordion of common parent questions about facilities. Edit the FAQS list below.
 */
import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { links, school } from "../../data/schoolData";

const FAQS = [
  {
    q: "Which classes does the school offer?",
    a: `We offer classes from ${school.classesRange} — Pre-Primary (Nursery, LKG, UKG), Primary (1st–5th) and Upper Primary (6th–8th).`,
  },
  {
    q: "Are the classrooms air-conditioned?",
    a: "Yes. Our classrooms are air-conditioned and equipped with digital panel boards, so children stay comfortable and focused.",
  },
  {
    q: "Is school bus transport available?",
    a: "Yes, we run a school bus service. Please contact the school office to check routes and timings for your area.",
  },
  {
    q: "Does the school have a hostel?",
    a: "Yes, a hostel / boarding facility is available. Contact the office to ask about availability and details.",
  },
  {
    q: "Is food provided at school?",
    a: "Yes. We serve nutritious, hygienically prepared food to keep children healthy and energetic.",
  },
  {
    q: "Is there a library and laboratory?",
    a: "Yes. Students have access to a library, a science lab and a computer lab for hands-on learning.",
  },
  {
    q: "Can parents visit the campus before admission?",
    a: "Of course. Call or WhatsApp us to fix a convenient time and we will show you around.",
  },
];

export default function FacilitiesFaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section aria-labelledby="faq-heading" className="section bg-cream">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-gold" />
            <Eyebrow>FAQs</Eyebrow>
          </div>
          <h2
            id="faq-heading"
            className="mt-4 text-[2.1rem] font-bold leading-[1.1] sm:text-[2.6rem]"
          >
            Questions Parents <span className="[color:#C8862A]">Often Ask</span>
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Can’t find your answer here? Our team is happy to help.
          </p>
          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-dark">
              <MessageCircleQuestion className="h-6 w-6" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="font-bold text-navy-900">Still have a question?</p>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:underline"
              >
                <WhatsAppIcon className="h-4 w-4" /> Ask us on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <ul className="space-y-3">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={q} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-shadow ${
                    isOpen
                      ? "border-gold/50 shadow-lift"
                      : "border-navy-900/[0.07] shadow-card"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-navy-900">{q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "rotate-180 bg-gold text-white"
                          : "bg-gold-soft text-gold-dark"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden />
                    </span>
                  </button>
                  <div
                    id={`faq-${i}`}
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <p className="overflow-hidden px-6 text-[0.95rem] leading-relaxed text-muted">
                      <span className="block pb-5">{a}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
