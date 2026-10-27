/**
 * CONTACT › PLAN YOUR VISIT — WEEKLY OFFICE HOURS
 * Shows every day of the week with its timings. Today's row is highlighted with a "Today" tag,
 * and a live badge says whether the office is open right now (checked in India time, Asia/Kolkata).
 * Hours come from `contact.officeHours` in data/schoolData.js.
 */
import { useEffect, useState } from "react";
import { CalendarCheck, Clock, Phone } from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import AnimatedCrest from "../ui/AnimatedCrest";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { contact, links, photos } from "../../data/schoolData";

const TZ = "Asia/Kolkata";

/** Current weekday name and minutes since midnight in the school's timezone. */
function schoolNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;
  return {
    day: get("weekday"),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

const toMin = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export default function OfficeHoursSection() {
  const [now, setNow] = useState(schoolNow);
  useEffect(() => {
    const t = setInterval(() => setNow(schoolNow()), 60_000);
    return () => clearInterval(t);
  }, []);

  const today = contact.officeHours.find((d) => d.day === now.day);
  const isOpen =
    today &&
    !today.closed &&
    now.minutes >= toMin(today.open) &&
    now.minutes < toMin(today.close);

  return (
    <section
      aria-labelledby="hours-heading"
      className="section relative overflow-hidden bg-cream"
    >
      <div
        aria-hidden
        className="dots-gold absolute right-8 top-10 hidden h-24 w-24 opacity-40 lg:block"
      />
      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left: intro + photo */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-gold" />
            <Eyebrow>Plan Your Visit</Eyebrow>
          </div>
          <h2
            id="hours-heading"
            className="mt-4 text-[2.1rem] font-bold leading-[1.1] sm:text-[2.6rem]"
          >
            Office Hours &amp;{" "}
            <span className="[color:#C8862A]">Campus Visits</span>
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            Our office is open from 9:00 AM to 5:00 PM, Monday to Saturday.
            Please call or WhatsApp before you come so we can make time to show
            you around.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-[26px] shadow-lift">
            <img
              src={photos.campusGate}
              alt="Waseela English Medium School main gate"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-card backdrop-blur">
              <AnimatedCrest size="sm" className="m-2" />
              <p className="text-sm leading-tight text-navy-900">
                <span className="block font-bold">We’d love to meet you</span>
                <span className="text-muted">Book your campus visit</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right: weekly timetable */}
        <Reveal
          delay={120}
          className="overflow-hidden rounded-[28px] border border-navy-900/[0.07] bg-white shadow-lift"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-900/[0.07] bg-gradient-to-r from-gold-soft/70 to-white px-6 py-5">
            <p className="flex items-center gap-2 font-bold text-navy-900">
              <CalendarCheck className="h-5 w-5 text-gold-dark" aria-hidden />{" "}
              Weekly Timings
            </p>
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${
                isOpen
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-700"
              }`}
              aria-live="polite"
            >
              <span className={`relative flex h-2.5 w-2.5`}>
                {isOpen && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${isOpen ? "bg-emerald-500" : "bg-red-500"}`}
                />
              </span>
              {isOpen ? "Open now" : "Closed now"}
            </span>
          </div>

          <ul className="divide-y divide-navy-900/[0.06] px-3 py-2 sm:px-4">
            {contact.officeHours.map((d) => {
              const isToday = d.day === now.day;
              return (
                <li
                  key={d.day}
                  aria-current={isToday ? "date" : undefined}
                  className={`my-1 flex items-center justify-between gap-3 rounded-xl px-3 py-3.5 transition sm:px-4 ${
                    isToday
                      ? "bg-gradient-to-r from-[#F7C976] to-[#E9A23B] text-navy-950 shadow-glow"
                      : ""
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        isToday
                          ? "bg-white/70 text-navy-950"
                          : d.closed
                            ? "bg-red-50 text-red-600"
                            : "bg-cream text-gold-dark"
                      }`}
                    >
                      <span aria-hidden>{d.day.slice(0, 3)}</span>
                      <span className="sr-only">{d.day}</span>
                    </span>
                    <span className="hidden font-semibold sm:inline">
                      {d.day}
                    </span>
                    {isToday && (
                      <span className="rounded-full bg-navy-900 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-gold-light">
                        Today
                      </span>
                    )}
                  </span>
                  <span
                    className={`flex items-center gap-1.5 whitespace-nowrap text-[0.82rem] font-semibold sm:text-sm ${
                      isToday
                        ? ""
                        : d.closed
                          ? "text-red-600"
                          : "text-navy-900/75"
                    }`}
                  >
                    {!d.closed && (
                      <Clock className="hidden h-4 w-4 sm:block" aria-hidden />
                    )}
                    {d.hours}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-3 border-t border-navy-900/[0.07] p-5 sm:flex-row">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex-1"
            >
              <WhatsAppIcon className="h-4 w-4" /> Book a Visit
            </a>
            <a
              href={`tel:${contact.phones[0].tel}`}
              className="btn-outline-gold flex-1"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call the Office
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
