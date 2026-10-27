/**
 * HOME › SCHOOL APP  (WASEELA EMS)
 * Phone illustration on the right, features + Google Play badge on the left.
 * App name and Play Store link come from `schoolApp` in data/schoolData.js.
 */
import { Link } from "react-router-dom";
import {
  BellRing,
  BookOpenCheck,
  CalendarCheck,
  ClipboardList,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import PlayStoreBadge from "../ui/PlayStoreBadge";
import { images, schoolApp } from "../../data/schoolData";

const FEATURES = [
  { icon: BellRing, text: "Notices & announcements" },
  { icon: BookOpenCheck, text: "Daily homework" },
  { icon: CalendarCheck, text: "Attendance updates" },
  { icon: ClipboardList, text: "Exam marks & reports" },
  { icon: Wallet, text: "Fee details & reminders" },
  { icon: ShieldCheck, text: "Safe & private" },
];

export default function AppSection() {
  return (
    <section
      aria-labelledby="app-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-gold-soft/70 blur-3xl"
      />
      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-gold" />
            <Eyebrow>Official School App</Eyebrow>
          </div>
          <h2
            id="app-heading"
            className="mt-4 text-[2.1rem] font-bold leading-[1.1] sm:text-[2.6rem]"
          >
            Stay Connected with{" "}
            <span className="[color:#C8862A]">{schoolApp.name}</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            Follow your child’s school day from your phone — notices, homework,
            attendance and more, all in one simple app.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-gold-dark"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-[0.92rem] font-semibold text-navy-900">
                  {text}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <PlayStoreBadge />
            <Link
              to="/privacy"
              className="text-sm font-semibold text-gold-dark underline-offset-4 hover:underline"
            >
              App privacy policy
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative mx-auto w-full max-w-[460px]">
          <span
            aria-hidden
            className="absolute inset-6 rounded-full border-2 border-dashed border-gold/40"
          />
          <img
            src={images.app}
            alt={`Illustration of the ${schoolApp.name} app on a phone`}
            loading="lazy"
            className="relative w-full rounded-[32px] shadow-lift"
          />
        </Reveal>
      </div>
    </section>
  );
}
