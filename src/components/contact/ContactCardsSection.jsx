/** CONTACT › ADDRESS / PHONE / EMAIL CARDS — values from `contact` in data/schoolData.js. */
import { Mail, MapPin, Phone } from "lucide-react";
import ContactCard from "../ui/ContactCard";
import EmailText from "../ui/EmailText";
import { contact } from "../../data/schoolData";

export default function ContactCardsSection() {
  return (
    <section aria-label="Contact details" className="bg-white py-16 sm:py-20">
      <div className="container-site grid gap-5 md:grid-cols-3">
        <ContactCard icon={MapPin} title="Visit Us">
          <address className="not-italic">
            {contact.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </ContactCard>
        <ContactCard icon={Phone} title="Call Us" delay={90}>
          {contact.phones.map((p) => (
            <a
              key={p.tel}
              href={`tel:${p.tel}`}
              className="block font-serif text-xl font-bold text-navy-900 hover:text-gold-dark"
            >
              {p.display}
            </a>
          ))}
          <p className="pt-2 text-sm text-muted">For admission enquiries</p>
        </ContactCard>
        <ContactCard icon={Mail} title="Email Us" delay={180}>
          {contact.emails.map((e) => (
            <a key={e} href={`mailto:${e}`} className="block hover:text-gold-dark">
              <EmailText email={e} />
            </a>
          ))}
        </ContactCard>
      </div>
    </section>
  );
}
