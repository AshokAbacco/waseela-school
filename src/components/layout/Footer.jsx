import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Youtube,
} from "lucide-react";
import Logo from "../ui/Logo";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import EmailText from "../ui/EmailText";
import PlayStoreBadge from "../ui/PlayStoreBadge";
import { contact, developer, links, navigation, school, schoolApp, social } from "../../data/schoolData";

const socialIcons = { Facebook, Instagram, YouTube: Youtube };

function DeveloperCredit() {
  const [logoOk, setLogoOk] = useState(true);
  return (
    <a
      href={developer.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Website designed and developed by ${developer.name} (opens in a new tab)`}
      className="group inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-muted transition-colors hover:text-navy-900"
    >
      <span>Designed &amp; Developed by</span>
      <span className="inline-flex items-center gap-2">
        {logoOk && developer.logo && (
          <img src={developer.logo} alt="" className="h-5 w-auto" onError={() => setLogoOk(false)} />
        )}
        <span className="font-semibold text-gold-dark transition-colors group-hover:text-navy-900">
          {developer.name}
        </span>
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </a>
  );
}

const half = Math.ceil(navigation.length / 2);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-cream text-navy-900/80">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-soft/60 blur-2xl"
      />

      <div className="container-site relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.35fr_1.1fr] lg:gap-10">
        <div>
          <Logo size="lg" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            {school.tagline} — nurturing young minds with knowledge, values and confidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
            {social.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${school.shortName} on ${s.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-900 shadow-card transition hover:text-gold-dark"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-labelledby="footer-links">
          <h2 id="footer-links" className="font-sans text-sm font-bold !text-navy-900">
            Quick Links
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-x-6">
            {[
              navigation.slice(0, half),
              [...navigation.slice(half), { label: "Privacy Policy", to: "/privacy" }],
            ].map((col, ci) => (
              <ul key={ci} className="space-y-1">
                {col.map((n) => (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      className="inline-flex min-h-[36px] items-center text-sm transition hover:text-gold-dark"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-bold !text-navy-900">Contact Us</h2>
          <address className="mt-5 space-y-3.5 text-sm not-italic">
            <a
              href={links.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:text-gold-dark"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden />
              <span>{contact.addressLines.join(" ")}</span>
            </a>
            {contact.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-3 hover:text-gold-dark">
                <Phone className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden /> {p.display}
              </a>
            ))}
            {contact.emails.map((e) => (
              <a key={e} href={`mailto:${e}`} className="flex items-center gap-3 hover:text-gold-dark">
                <Mail className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden />
                <span>
                  <EmailText email={e} />
                </span>
              </a>
            ))}
            {contact.officeHours.length > 0 && (
              <p className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden />{" "}
                {contact.officeHours[0].hours}
              </p>
            )}
          </address>
        </div>

        <div>
          <h2 className="font-sans text-sm font-bold !text-navy-900">School App</h2>
          <p className="mt-5 text-sm leading-relaxed">
            Stay connected with notices, homework and updates on the{" "}
            <strong className="text-navy-900">{schoolApp.name}</strong> app.
          </p>
          <PlayStoreBadge className="mt-5" />
          <Link
            to="/privacy"
            className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold-dark underline-offset-4 hover:underline"
          >
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden /> App &amp; data privacy policy
          </Link>
        </div>
      </div>

      <div className="relative border-t border-navy-900/10 bg-cream-deep/60">
        <div className="container-site flex flex-col items-center gap-3 py-5 text-center text-xs text-muted lg:flex-row lg:justify-between lg:text-left">
          <p>
            © {new Date().getFullYear()} {school.name}. All Rights Reserved.
          </p>
          <Link
            to="/privacy"
            className="font-semibold text-navy-900 underline-offset-4 hover:text-gold-dark hover:underline"
          >
            Privacy Policy
          </Link>
          <DeveloperCredit />
        </div>
      </div>
    </footer>
  );
}
