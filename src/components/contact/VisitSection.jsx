/**
 * CONTACT › PLAN YOUR VISIT — map + visit guidance.
 * Office hours table appears automatically when `contact.officeHours` is filled in data/schoolData.js.
 */
import { CalendarCheck, Navigation, Phone } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { contact, links, school } from "../../data/schoolData";

/** Location map plus visit guidance. Shows an hours table only once hours are supplied in schoolData. */
export default function VisitSection() {
  const hours = contact.officeHours;
  return (
    <section aria-labelledby="visit-heading" className="section bg-cream">
      <div className="container-site grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            id="visit-heading"
            align="left"
            label="Plan Your Visit"
            heading="Come and See Our Campus"
            text="We welcome parents to visit, meet our team and see our classrooms. Please call or message us before you come so we can make time for you."
          />

          {hours.length > 0 ? (
            <Reveal className="card mt-10 overflow-hidden">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Office hours</caption>
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day} className="border-b border-navy-900/[0.06] last:border-0">
                      <th scope="row" className="px-6 py-4 font-medium">
                        {h.day}
                      </th>
                      <td className="px-6 py-4 text-right text-muted">{h.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          ) : (
            <Reveal className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="card flex gap-4 p-6">
                <CalendarCheck className="h-6 w-6 shrink-0 text-gold-dark" strokeWidth={1.6} aria-hidden />
                <p className="text-sm leading-relaxed text-muted">
                  <span className="block font-semibold text-ink">Book a visit</span>Call ahead to fix a
                  convenient time.
                </p>
              </div>
              <div className="card flex gap-4 p-6">
                <Navigation className="h-6 w-6 shrink-0 text-gold-dark" strokeWidth={1.6} aria-hidden />
                <p className="text-sm leading-relaxed text-muted">
                  <span className="block font-semibold text-ink">Find us</span>Near Tadipatri Road, Old Town.
                </p>
              </div>
            </Reveal>
          )}

          <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Admissions
            </a>
            <a href={`tel:${contact.phones[0].tel}`} className="btn-navy">
              <Phone className="h-4 w-4" aria-hidden /> Call Now
            </a>
          </Reveal>
        </div>

        <Reveal className="overflow-hidden rounded-[24px] border border-navy-900/10 bg-white shadow-lift">
          <iframe
            title={`Map showing the location of ${school.name}`}
            src={links.mapsEmbed}
            className="block h-[340px] w-full sm:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">{contact.addressLines.join(" ")}</p>
            <a
              href={links.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline shrink-0"
            >
              <Navigation className="h-4 w-4" aria-hidden /> Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
