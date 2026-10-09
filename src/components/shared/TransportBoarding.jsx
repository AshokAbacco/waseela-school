/** SHARED › TRANSPORT & BOARDING — content from `beyondClassroom` in data/schoolData.js. Used on Home and Facilities. */
import { Check } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Illustration from "../ui/Illustration";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { beyondClassroom, links } from "../../data/schoolData";

/** Transport and boarding, each as an image + text row. */
export default function TransportBoarding() {
  return (
    <section aria-labelledby="beyond-heading" className="section relative overflow-hidden bg-cream">
      <div aria-hidden className="dots-gold absolute left-6 top-10 h-24 w-24 opacity-40" />
      <div className="container-site relative">
        <SectionHeading
          id="beyond-heading"
          label="Beyond the Classroom"
          heading="Transport & Boarding"
          text="Support for families before, after and outside school hours."
        />
        <div className="mt-14 space-y-8 lg:space-y-10">
          {beyondClassroom.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal
                key={b.key}
                className="grid items-center gap-8 rounded-[28px] bg-white p-5 shadow-card sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10"
              >
                <Illustration
                  src={b.image}
                  alt={`Illustration: ${b.title}`}
                  className={i % 2 ? "lg:order-2" : ""}
                />
                <div className={i % 2 ? "lg:order-1" : ""}>
                  <p className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold-dark">
                    <Icon className="h-4 w-4" aria-hidden /> {b.label}
                  </p>
                  <h3 className="mt-3 text-[1.9rem] font-bold leading-tight sm:text-[2.2rem]">{b.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{b.text}</p>
                  <ul className="mt-6 space-y-3">
                    {b.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 font-medium text-navy-900">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold mt-8"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Ask about {b.label.toLowerCase()}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
