/**
 * ABOUT › OUR PROMISE TO PARENTS
 * Photo panel on the left with a quote; four promise cards on the right.
 * Edit the promises in the PROMISES list below.
 */
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Wallet,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { photos, schoolApp } from "../../data/schoolData";

const PROMISES = [
  {
    icon: ShieldCheck,
    title: "A Safe, Caring Campus",
    text: "Your child learns and plays in a secure, well-supervised environment.",
  },
  {
    icon: Wallet,
    title: "Affordable Fees",
    text: "Quality English-medium education kept within reach of families.",
  },
  {
    icon: Smartphone,
    title: "Stay Connected",
    text: `Notices, homework and updates on the ${schoolApp.name} app.`,
  },
  {
    icon: MessageCircle,
    title: "Always Approachable",
    text: "Our teachers and office are happy to talk whenever you have a question.",
  },
];

export default function ParentsPromiseSection() {
  return (
    <section aria-labelledby="promise-heading" className="section bg-white">
      <div className="container-site grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Photo panel */}
        <Reveal className="relative min-h-[360px] overflow-hidden rounded-[30px] shadow-lift">
          <img
            src={photos.campusStudents}
            alt="Waseela students at the school gate"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"
          />
          <figure className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
            <blockquote className="font-serif text-[1.5rem] font-bold leading-snug text-white sm:text-[1.8rem]">
              “Your child’s happiness and growth are at the heart of everything
              we do.”
            </blockquote>
            <figcaption className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
              <span aria-hidden className="h-px w-8 bg-gold" /> Waseela English
              Medium School
            </figcaption>
          </figure>
        </Reveal>

        {/* Promises */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-gold" />
              <Eyebrow>For Parents</Eyebrow>
            </div>
            <h2
              id="promise-heading"
              className="mt-4 text-[2.1rem] font-bold leading-[1.1] sm:text-[2.6rem]"
            >
              Our Promise to{" "}
              <span className="[color:#C8862A]">Every Family</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Choosing a school is a big decision. Here is what you can count on
              from us, every day.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {PROMISES.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 80}
                className="group rounded-2xl border border-navy-900/[0.07] bg-cream p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white shadow-[0_8px_16px_-8px_rgba(217,146,47,0.9)] transition-transform group-hover:rotate-[-6deg]">
                  <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="mt-4 font-sans text-[1.05rem] font-bold">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {text}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-8">
            <Link to="/contact" className="btn-gold">
              Talk to Our Team <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
