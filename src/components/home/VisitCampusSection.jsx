/**
 * HOME › VISIT OUR CAMPUS (MAP)
 * Centred heading, a large framed Google Map with a glass "school pin" card on top,
 * and three info tiles (address, phone, office hours) overlapping the bottom of the map.
 * Address, phones, hours and map links come from data/schoolData.js.
 */
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCrest from "../ui/AnimatedCrest";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { contact, links, school } from "../../data/schoolData";

export default function VisitCampusSection() {
  const tiles = [
    {
      icon: MapPin,
      title: "Address",
      body: (
        <span>
          {contact.addressShort}, AP – {contact.postalCode}
        </span>
      ),
      href: links.mapsDirections,
      cta: "Get directions",
      external: true,
    },
    {
      icon: Phone,
      title: "Call Us",
      body: (
        <span className="flex flex-col">
          {contact.phones.map((p) => (
            <span key={p.tel}>{p.display}</span>
          ))}
        </span>
      ),
      href: `tel:${contact.phones[0].tel}`,
      cta: "Call now",
    },
    {
      icon: Clock,
      title: "Office Hours",
      body: <span>{contact.officeHoursSummary || "Call ahead to visit"}</span>,
      href: links.whatsapp,
      cta: "Book a visit",
      external: true,
    },
  ];

  return (
    <section
      aria-labelledby="visit-heading"
      className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="dots-gold absolute left-8 top-10 hidden h-24 w-24 opacity-40 lg:block"
      />
      <div className="container-site relative">
        <SectionHeading
          id="visit-heading"
          label="Visit Us"
          heading="Come and See Our Campus"
          text={`We welcome parents to visit ${school.shortName}, meet our team and see our classrooms.`}
        />

        {/* Map card */}
        <Reveal className="relative mt-12 rounded-[34px] bg-gradient-to-br from-gold-light via-gold to-[#C8862A] p-[3px] shadow-lift">
          <div className="relative overflow-hidden rounded-[31px] bg-white">
            <iframe
              title={`Map showing the location of ${school.name}`}
              src={links.mapsEmbed}
              className="block h-[380px] w-full border-0 sm:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* glass pin card */}
            <div className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] items-center gap-4 rounded-2xl border border-white/70 bg-white/85 p-3 pr-5 shadow-lift backdrop-blur-md sm:left-6 sm:top-6">
              <AnimatedCrest size="sm" className="m-3" />
              <div className="min-w-0">
                <p className="truncate font-bold text-navy-900">
                  {school.name}
                </p>
                <p className="text-xs text-muted">Old Town, {school.city}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a
                    href={links.mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-xs font-bold text-navy-950 transition hover:bg-[#F0B04F]"
                  >
                    <Navigation className="h-3.5 w-3.5" aria-hidden />{" "}
                    Directions
                  </a>
                  <a
                    href={links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 bg-white px-3 py-1.5 text-xs font-bold text-navy-900 transition hover:border-gold"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* info tiles overlapping the map */}
        <ul className="relative z-10 mx-auto -mt-10 grid max-w-5xl gap-4 px-2 sm:-mt-14 md:grid-cols-3 md:px-6">
          {tiles.map(({ icon: Icon, title, body, href, cta, external }, i) => (
            <Reveal as="li" key={title} delay={i * 90}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-lift transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white transition-transform group-hover:rotate-[-6deg]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-bold text-navy-900">{title}</span>
                </div>
                <div className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {body}
                </div>
                <span className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-gold-dark group-hover:underline">
                  {cta} →
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
