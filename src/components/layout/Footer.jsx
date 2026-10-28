import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock,
  Code2,
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
import {
  contact,
  developer,
  links,
  navigation,
  school,
  schoolApp,
  social,
} from "../../data/schoolData";

const socialIcons = { Facebook, Instagram, YouTube: Youtube };

/** Current year in India time — changes by itself every 1 January. */
const currentYear = () =>
  new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
  }).format(new Date());

/* Animated ring around the developer logo (footer only). */
const devStyles = `
@keyframes dev-spin { to { transform: rotate(360deg); } }
@keyframes dev-glow { 0%,100% { opacity: .45; transform: scale(1); } 50% { opacity: .9; transform: scale(1.12); } }
.dev-spin { animation: dev-spin 10s linear infinite; }
.dev-spin-rev { animation: dev-spin 16s linear infinite reverse; }
.dev-orbit { animation: dev-spin 4s linear infinite; }
.dev-glow { animation: dev-glow 3s ease-in-out infinite; }
.group:hover .dev-spin { animation-duration: 3s; }
@media (prefers-reduced-motion: reduce) {
  .dev-spin, .dev-spin-rev, .dev-orbit, .dev-glow { animation: none; }
}
`;

/**
 * "Designed & Developed by ABACCO TECHNOLOGY" — centre of the bottom bar.
 * Logo: public/abacco-logo.png (set in data/schoolData.js → developer.logo).
 * If the logo file is missing, a code icon is shown inside the ring instead.
 */
function DeveloperCredit() {
  const [logoOk, setLogoOk] = useState(true);
  return (
    <a
      href={developer.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Website designed and developed by ${developer.name} (opens in a new tab)`}
      className="group flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-5 sm:text-left"
    >
      <style>{devStyles}</style>

      {/* logo with animated rings */}
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
        <span
          aria-hidden
          className="dev-glow absolute inset-0 rounded-full bg-gold/30 blur-md"
        />
        <span
          aria-hidden
          className="dev-spin absolute -inset-1.5 rounded-full border-2 border-dashed border-gold/70"
        />
        <span
          aria-hidden
          className="dev-spin-rev absolute -inset-3 rounded-full border border-gold/20 border-t-gold border-b-gold"
        />
        <span aria-hidden className="dev-orbit absolute -inset-3">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-light shadow-[0_0_8px_2px_rgba(246,203,126,0.85)]" />
        </span>
        <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-card ring-2 ring-white">
          {logoOk && developer.logo ? (
            <img
              src={developer.logo}
              alt={`${developer.name} logo`}
              className="h-full w-full object-contain"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <Code2 className="h-6 w-6 text-gold-dark" aria-hidden />
          )}
        </span>
      </span>

      <span className="flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-1 leading-tight min-[400px]:flex-nowrap min-[400px]:whitespace-nowrap sm:gap-x-2">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.06em] text-muted sm:text-[0.68rem] sm:tracking-[0.16em]">
          Designed &amp; Developed by
        </span>
        <span className="inline-flex items-center gap-1 font-serif text-[0.95rem] font-bold tracking-wide text-navy-900 transition-colors group-hover:text-gold-dark sm:text-lg">
          {developer.name}
          <ArrowUpRight
            className="h-3.5 w-3.5 text-gold-dark transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
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
            {school.tagline} — nurturing young minds with knowledge, values and
            confidence.
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
          <h2
            id="footer-links"
            className="font-sans text-sm font-bold !text-navy-900"
          >
            Quick Links
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-x-6">
            {[
              navigation.slice(0, half),
              [
                ...navigation.slice(half),
                { label: "Privacy Policy", to: "/privacy" },
              ],
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
          <h2 className="font-sans text-sm font-bold !text-navy-900">
            Contact Us
          </h2>
          <address className="mt-5 space-y-3.5 text-sm not-italic">
            <a
              href={links.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:text-gold-dark"
            >
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                aria-hidden
              />
              <span>{contact.addressLines.join(" ")}</span>
            </a>
            {contact.phones.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="flex items-center gap-3 hover:text-gold-dark"
              >
                <Phone
                  className="h-4 w-4 shrink-0 text-gold-dark"
                  aria-hidden
                />{" "}
                {p.display}
              </a>
            ))}
            {contact.emails.map((e) => (
              <a
                key={e}
                href={`mailto:${e}`}
                className="flex items-center gap-3 hover:text-gold-dark"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden />
                <span>
                  <EmailText email={e} />
                </span>
              </a>
            ))}
            {contact.officeHours.length > 0 && (
              <p className="flex items-center gap-3">
                <Clock
                  className="h-4 w-4 shrink-0 text-gold-dark"
                  aria-hidden
                />{" "}
                {contact.officeHoursSummary || contact.officeHours[0].hours}
              </p>
            )}
          </address>
        </div>

        <div>
          <h2 className="font-sans text-sm font-bold !text-navy-900">
            School App
          </h2>
          <p className="mt-5 text-sm leading-relaxed">
            Stay connected with notices, homework and updates on the{" "}
            <strong className="text-navy-900">{schoolApp.name}</strong> app.
          </p>
          <PlayStoreBadge className="mt-5" />
          <Link
            to="/privacy"
            className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold-dark underline-offset-4 hover:underline"
          >
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden /> App &amp; data
            privacy policy
          </Link>
        </div>
      </div>

      {/* Bottom bar: copyright (left) · developer credit (centre) · privacy (right). Stacks on phones. */}
      <div className="relative border-t border-navy-900/10 bg-cream-deep/60">
        <div className="container-site grid items-center gap-6 pb-8 pt-10 text-center xl:py-8 text-xs text-muted xl:grid-cols-[1fr_auto_1fr] xl:gap-6">
          <p className="order-2 xl:order-1 xl:whitespace-nowrap xl:text-left">
            © {currentYear()} {school.name}. All Rights Reserved.
          </p>
          <div className="order-1 flex justify-center xl:order-2">
            <DeveloperCredit />
          </div>
          <div className="order-3 flex justify-center xl:justify-end">
            <Link
              to="/privacy"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-navy-900/10 bg-white/70 px-4 font-semibold text-navy-900 transition hover:border-gold hover:text-gold-dark"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-gold-dark" aria-hidden />{" "}
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
