/** PRIVACY › 11–13: this website, policy updates, grievance officer contact. */
import { CalendarClock, Mail, MapPin, Phone } from "lucide-react";
import EmailText from "../ui/EmailText";
import { CheckList, Lead, Section } from "./policyLayout";
import { contact, links, school } from "../../data/schoolData";
import { privacyPolicy as p } from "../../data/privacyData";

export default function ContactSections() {
  return (
    <>
      {/* 11 — Website */}
      <Section id="website">
        <CheckList items={p.website} />
      </Section>

      {/* 12 — Changes */}
      <Section id="changes" tone="cream">
        <Lead>
          We may update this policy when the app or the law changes. The latest version will always be
          published on this page with a new “Last updated” date. For important changes, we will also inform
          parents through the app.
        </Lead>
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-navy-900 shadow-card">
          <CalendarClock className="h-4 w-4 text-gold-dark" aria-hidden /> Current version: {p.lastUpdated}
        </p>
      </Section>

      {/* 13 — Contact */}
      <Section id="contact">
        <Lead>
          For any question, correction, deletion request or complaint about your data, please contact:
        </Lead>
        <div className="grid overflow-hidden rounded-2xl border border-navy-900/10 shadow-card md:grid-cols-[1fr_1.2fr]">
          <div className="relative bg-peach p-7 sm:p-9">
            <div className="relative">
              <p className="eyebrow">Grievance Officer</p>
              <p className="mt-3 font-serif text-2xl font-bold text-navy-900">{p.grievanceOfficer.title}</p>
              <p className="mt-1 text-sm text-muted">{school.name}</p>
              <p className="mt-8 text-sm text-navy-900/75">
                We aim to reply to every privacy request within 30 days.
              </p>
            </div>
          </div>
          <div className="space-y-4 bg-white p-7 text-sm sm:p-9">
            <a
              href={`mailto:${p.grievanceOfficer.email}`}
              className="flex items-center gap-3 text-ink hover:text-gold-dark"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden />
              <span>
                <EmailText email={p.grievanceOfficer.email} />
              </span>
            </a>
            {contact.phones.map((ph) => (
              <a
                key={ph.tel}
                href={`tel:${ph.tel}`}
                className="flex items-center gap-3 text-ink hover:text-gold-dark"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden /> {ph.display}
              </a>
            ))}
            <a
              href={links.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 leading-relaxed text-ink hover:text-gold-dark"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden />{" "}
              {contact.addressLines.join(" ")}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
