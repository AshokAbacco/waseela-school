/**
 * HOME › ABOUT  ("More Than Just a School")
 * Text left, building photo in the middle with a floating badge, quote card on the right.
 */
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Quote } from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { photos, school } from "../../data/schoolData";

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-gradient-to-b from-cream to-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.05fr_0.42fr] lg:gap-10">
        <Reveal>
          <Eyebrow>About Waseela</Eyebrow>
          <h2
            id="about-heading"
            className="mt-3 text-[2.4rem] font-bold leading-[1.05] sm:text-[3rem]"
          >
            More Than
            <br />
            Just a <span className="text-gold">School</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            {school.name} is committed to providing a balanced education that
            combines academic excellence with moral values, discipline and life
            skills. We focus on the overall development of each child in a safe,
            caring and inspiring environment.
          </p>
          <Link to="/about" className="btn-gold mt-8">
            Know More About Us <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>

        <Reveal delay={80} className="relative pb-8 pl-4 sm:pl-6">
          {/* gold leaf shape behind the photo */}
          <span
            aria-hidden
            className="absolute left-0 top-6 h-44 w-24 rounded-[60%_40%_60%_40%/50%_50%_50%_50%] bg-gradient-to-b from-gold-soft to-gold-light/70"
          />
          {/* thin gold curve */}
          <span
            aria-hidden
            className="absolute -bottom-1 -right-3 h-1/2 w-1/2 rounded-br-[40px] border-b-2 border-r-2 border-gold/60"
          />
          <img
            src={photos.campusBuilding}
            alt="The Waseela English Medium School building"
            width={1400}
            height={742}
            loading="lazy"
            className="relative aspect-[5/4] w-full rounded-[22px] border-4 border-white object-cover shadow-lift"
          />
          <div className="absolute bottom-0 left-0 flex items-center gap-3 rounded-2xl bg-white p-4 pr-6 shadow-lift sm:left-2">
            <GraduationCap
              className="h-10 w-10 shrink-0 text-gold"
              strokeWidth={1.6}
              aria-hidden
            />
            <p className="leading-tight text-navy-900">
              <span className="block font-bold">A Better Tomorrow</span>
              <span className="text-sm text-muted">For Every Child</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <figure className="rounded-2xl bg-white p-7 shadow-card lg:py-10">
            <Quote
              className="h-10 w-10 rotate-180 fill-gold text-gold"
              aria-hidden
            />
            <blockquote className="mt-5 text-lg font-medium leading-snug text-navy-900">
              {school.tagline}.
            </blockquote>
            <span aria-hidden className="mt-6 block h-[2px] w-10 bg-gold" />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
