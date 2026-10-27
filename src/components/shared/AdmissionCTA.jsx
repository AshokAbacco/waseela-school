/**
 * SHARED › ADMISSIONS BANNER  (bottom of most pages)
 * Crest + text on the left, students photo on the right filling the full banner height.
 */
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import AnimatedCrest from "../ui/AnimatedCrest";
import { links, photos, school } from "../../data/schoolData";

/* Soft fade on the photo's left and top edges so it blends into the banner background */
const photoFade = {
  maskImage:
    "linear-gradient(to right, transparent 0%, black 18%, black 94%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 18%, black 94%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
};

export default function AdmissionCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-gradient-to-r from-[#FDF0D8] via-[#FEF6E8] to-[#FDF0D8]"
    >
      <GraduationCap
        aria-hidden
        className="absolute bottom-2 left-2 h-24 w-24 -rotate-12 text-gold/15"
        strokeWidth={1.2}
      />

      <div className="container-site relative grid xl:grid-cols-[1.05fr_1fr] xl:gap-4">
        {/* Text */}
        <Reveal className="relative z-10 self-center py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <AnimatedCrest size="md" className="m-6 sm:m-4" />
            <div>
              <Eyebrow>
                Admissions Open {school.admissionYear} · {school.classesShort}
              </Eyebrow>
              <h2
                id="cta-heading"
                className="mt-2 text-[1.9rem] font-bold leading-[1.15] sm:text-[2.3rem]"
              >
                Give Your Child the Best Start for a Brighter Future
              </h2>
              <p className="mt-3 max-w-lg leading-relaxed text-navy-900/75">
                Join {school.name} and be part of a learning journey that
                inspires, empowers and transforms.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Apply for Admission{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <Link to="/contact" className="btn-outline-gold">
                  Contact Details
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Photo — fills the full banner height beside the text on large screens; full width below the text on smaller ones */}
        <div className="relative -mx-5 aspect-[1600/726] sm:-mx-8 md:mx-auto md:w-full md:max-w-[760px] xl:mx-0 xl:max-w-none xl:-mr-8 xl:aspect-auto xl:h-auto">
          <img
            src={photos.studentsGroup}
            alt="Smiling Waseela students in uniform holding books"
            width={1600}
            height={726}
            loading="lazy"
            style={photoFade}
            className="absolute inset-0 h-full w-full object-cover object-[60%_bottom]"
          />
        </div>
      </div>
    </section>
  );
}
