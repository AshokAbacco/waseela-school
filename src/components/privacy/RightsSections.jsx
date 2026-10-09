/** PRIVACY › 09–10: your rights and how to delete your account. */
import { Mail, Scale } from "lucide-react";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { Lead, Section, Tile, rightIcons } from "./policyLayout";
import { contact, links, schoolApp } from "../../data/schoolData";
import { privacyPolicy as p } from "../../data/privacyData";

export default function RightsSections() {
  const email = contact.emails[0];
  return (
    <>
      {/* 09 — Rights */}
      <Section id="your-rights">
        <Lead>
          Under the Digital Personal Data Protection Act, 2023, parents and guardians (on behalf of their
          child) and staff have the right to:
        </Lead>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {p.rights.map((r) => (
            <Tile key={r.title} title={r.title} icon={rightIcons[r.title] ?? Scale}>
              {r.text}
            </Tile>
          ))}
        </div>
      </Section>

      {/* 10 — Delete */}
      <Section id="delete-account" tone="cream">
        <Lead>You can ask us to delete your app account and the personal data linked to it at any time:</Lead>
        <ol className="relative grid gap-6 md:grid-cols-3 md:gap-5">
          <span aria-hidden className="absolute left-0 right-0 top-5 hidden h-px bg-gold/40 md:block" />
          {p.deletionSteps.map((s, i) => (
            <li key={s} className="relative flex gap-4 md:block">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold font-serif text-lg text-navy-950 ring-8 ring-cream">
                {i + 1}
              </span>
              <p className="pt-1.5 text-sm leading-relaxed md:mt-5 md:pt-0">{s}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(`Delete my ${schoolApp.name} account`)}`}
            className="btn-navy"
          >
            <Mail className="h-4 w-4" aria-hidden /> Email a deletion request
          </a>
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp the school
          </a>
        </div>
      </Section>
    </>
  );
}
