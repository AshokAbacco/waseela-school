/** CONTACT › BUS & HOSTEL ENQUIRY CARDS — content from `beyondClassroom` in data/schoolData.js. */
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import SectionHeading from "../ui/SectionHeading";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { beyondClassroom, links } from "../../data/schoolData";

export default function TransportEnquirySection() {
  return (
    <section aria-labelledby="enquiry-heading" className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="container-site">
        <SectionHeading
          id="enquiry-heading"
          label="Transport & Hostel"
          heading="Ask Us About Bus Routes and Boarding"
          text="Our office will share bus routes, timings and hostel availability for your child."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {beyondClassroom.map((b, i) => (
            <Reveal key={b.key} delay={i * 90}>
              <article className="card card-hover group h-full overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-5 p-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <Eyebrow>{b.label}</Eyebrow>
                    <h3 className="mt-2 text-[1.4rem] font-bold">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{b.points[1]}.</p>
                  </div>
                  <a
                    href={links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold shrink-0"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Enquire
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
