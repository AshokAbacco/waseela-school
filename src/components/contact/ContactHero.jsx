/** CONTACT › PAGE HEADER with WhatsApp and call buttons. */
import { Phone } from "lucide-react";
import PageHero from "../ui/PageHero";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { contact, links, photos, school } from "../../data/schoolData";

export default function ContactHero() {
  return (
    <PageHero
      crumb="Contact Us"
      label="Get in Touch"
      heading="Contact Waseela School"
      text={`Speak with us about admissions for ${school.admissionYear} (${school.classesRange}), campus visits, fees, transport, hostel and anything else you would like to know.`}
      image={photos.campusGate}
      imageAlt="Waseela English Medium School main gate and building"
      position="60% center"
    >
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
        </a>
        <a
          href={`tel:${contact.phones[0].tel}`}
          className="btn border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:border-gold-light hover:bg-white/20"
        >
          <Phone className="h-4 w-4" aria-hidden /> {contact.phones[0].display}
        </a>
      </div>
    </PageHero>
  );
}
