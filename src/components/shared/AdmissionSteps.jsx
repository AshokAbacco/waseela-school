/** SHARED › ADMISSION STEPS — steps from `admissionSteps` in data/schoolData.js. Used on Contact. */
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { admissionSteps } from "../../data/schoolData";

export default function AdmissionSteps() {
  return (
    <section aria-labelledby="steps-heading" className="section bg-white">
      <div className="container-site">
        <SectionHeading
          id="steps-heading"
          label="How to Join"
          heading="Admission in Three Simple Steps"
          text="Our team is happy to guide you at every step."
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <span
            aria-hidden
            className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gold/40 md:block"
          />
          {admissionSteps.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 100} className="relative text-center">
              <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold text-navy-950 shadow-glow ring-8 ring-white">
                <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
                Step {i + 1}
              </p>
              <h3 className="mt-2 text-[1.4rem] font-medium">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
