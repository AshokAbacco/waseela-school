/**
 * SHARED › ADMISSIONS BANNER  (bottom of most pages)
 * Crest + text on the left, students photo on the right, warm cream background.
 */
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import crest from "../../assets/brand/waseela-crest.webp";
import { links, photos, school } from "../../data/schoolData";

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
      <div className="container-site relative grid items-end gap-6 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:pt-0">
        <Reveal className="relative z-10 lg:py-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src={crest}
              alt=""
              aria-hidden
              className="h-24 w-24 shrink-0 object-contain drop-shadow-md sm:h-28 sm:w-28"
            />
            <div>
              <Eyebrow>Admissions Open {school.admissionYear}</Eyebrow>
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
        <img
          src={photos.studentsGroup}
          alt="Smiling Waseela students in uniform holding books"
          width={1600}
          height={726}
          loading="lazy"
          className="w-full self-end [mask-image:linear-gradient(to_right,transparent,black_12%)]"
        />
      </div>
    </section>
  );
}
