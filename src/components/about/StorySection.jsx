/** ABOUT › OUR STORY — text and points come from `about.story` / `about.storyPoints`. */
import { Check } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import crest from "../../assets/brand/waseela-crest.webp";
import { about, photos } from "../../data/schoolData";

export default function StorySection() {
  return (
    <section aria-labelledby="story-heading" className="section bg-white">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <span aria-hidden className="absolute -left-4 -top-4 h-full w-full rounded-[26px] bg-gold-soft" />
            <img
              src={photos.campusBuilding}
              alt="The Waseela English Medium School building"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[24px] object-cover shadow-lift"
            />
            <img
              src={crest}
              alt=""
              aria-hidden
              className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-white object-contain p-2 shadow-lift"
            />
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            id="story-heading"
            align="left"
            label="Our Story"
            heading="Quality Education, Rooted in Values"
          />
          <Reveal className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-muted">
            {about.story.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Reveal>
          <Reveal as="ul" className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.storyPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-3 text-[0.95rem] font-medium text-ink">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                {pt}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
