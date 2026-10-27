/**
 * CONTACT › FIND US (MAP)
 * Full-width Google Map with a floating glass card: address, landmark, directions and quick contacts.
 * Address and map links come from `contact` / `links` in data/schoolData.js.
 */
import { Copy, Landmark, MapPin, Navigation, Phone } from "lucide-react";
import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { contact, links, school } from "../../data/schoolData";

export default function VisitSection() {
  const [copied, setCopied] = useState(false);
  const address = contact.addressLines.join(" ");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section aria-labelledby="map-heading" className="relative bg-white">
      {/* Map */}
      <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[600px]">
        <iframe
          title={`Map showing the location of ${school.name}`}
          src={links.mapsEmbed}
          className="absolute inset-0 h-full w-full border-0 grayscale-[25%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* soft fades at the top and bottom edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"
        />
      </div>

      {/* Floating card (overlaps the map on desktop, sits below it on phones) */}
      <div className="container-site relative -mt-24 pb-16 sm:-mt-32 lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:items-center lg:pb-0">
        <Reveal className="relative w-full max-w-md rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_30px_70px_-25px_rgba(15,30,61,0.45)] backdrop-blur-md sm:p-8 lg:pointer-events-auto">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-gold" />
            <Eyebrow>Find Us</Eyebrow>
          </div>
          <h2
            id="map-heading"
            className="mt-3 text-[1.9rem] font-bold leading-tight sm:text-[2.2rem]"
          >
            How to <span className="[color:#C8862A]">Reach Us</span>
          </h2>

          <div className="mt-6 flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-glow">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="font-bold text-navy-900">{school.name}</p>
              <address className="mt-1 text-sm not-italic leading-relaxed text-muted">
                {address}
              </address>
              <button
                type="button"
                onClick={copy}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark hover:underline"
              >
                <Copy className="h-3.5 w-3.5" aria-hidden />{" "}
                {copied ? "Address copied!" : "Copy address"}
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-4 rounded-2xl bg-cream p-4">
            <Landmark className="h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
            <p className="text-sm text-navy-900">
              <span className="font-semibold">Landmark:</span> near Tadipatri
              Road, Old Town, Anantapur
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {contact.phones.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:border-gold hover:text-gold-dark"
              >
                <Phone className="h-4 w-4 text-gold-dark" aria-hidden />{" "}
                {p.display}
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex-1"
            >
              <Navigation className="h-4 w-4" aria-hidden /> Get Directions
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold flex-1"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
