/**
 * TESTIMONIALS › WHAT PARENTS VALUE
 * Counts how many parent quotes mention each theme (worked out from the real quotes in
 * data/testimonialsData.js — nothing is made up). The most-mentioned theme gets the dark card.
 * To change a theme, edit its label or the words in `test` below.
 */
import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  HeartHandshake,
  MessagesSquare,
  Smile,
  Sparkles,
  Sprout,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/testimonialsData";
import { Eyebrow } from "./helpers";

const THEMES = [
  { label: "Caring teachers", icon: GraduationCap, test: /teacher/i },
  { label: "Growing confidence", icon: Smile, test: /confiden/i },
  {
    label: "Discipline & values",
    icon: HeartHandshake,
    test: /disciplin|value|character|respect|manners|habit/i,
  },
  {
    label: "Friendly environment",
    icon: Sprout,
    test: /environment|atmosphere|comfortable|welcom|peace of mind/i,
  },
  {
    label: "Activities & participation",
    icon: Sparkles,
    test: /activit|participat/i,
  },
  {
    label: "Communication & learning",
    icon: MessagesSquare,
    test: /communicat|speaking|learn/i,
  },
];

function Bar({ pct, dark }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setOn(true);
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setOn(true), io.disconnect()),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`mt-5 h-2 overflow-hidden rounded-full ${dark ? "bg-white/15" : "bg-peach"}`}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-[1100ms] ease-out motion-reduce:transition-none ${
          dark
            ? "bg-gold-light"
            : "bg-gradient-to-r from-[#F7C976] to-[#D9922F]"
        }`}
        style={{ width: on ? `${pct}%` : 0 }}
      />
    </div>
  );
}

export default function ThemesSection() {
  const total = testimonials.length;
  const rows = THEMES.map((th) => ({
    ...th,
    count: testimonials.filter((t) => th.test.test(t.quote || "")).length,
  }))
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count);
  if (!rows.length) return null;

  return (
    <section
      aria-labelledby="themes-heading"
      className="relative overflow-hidden bg-peach py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="dots-gold absolute right-8 top-10 hidden h-24 w-24 opacity-40 lg:block"
      />
      <div className="container-site relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow center>What Parents Value</Eyebrow>
          <h2
            id="themes-heading"
            className="mt-4 text-[2.2rem] font-bold sm:text-[2.8rem]"
          >
            What Families{" "}
            <span className="[color:#C8862A]">Talk About Most</span>
          </h2>
          <p className="mt-4 text-muted">
            Counted from the words parents used in their testimonials.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map(({ label, icon: Icon, count }, k) => {
            const dark = k === 0;
            return (
              <Reveal key={label} delay={(k % 3) * 80}>
                <div
                  className={`h-full rounded-[28px] p-7 transition duration-300 hover:-translate-y-1 ${
                    dark
                      ? "bg-navy-900 text-white shadow-lift"
                      : "bg-white shadow-card hover:shadow-lift"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        dark
                          ? "bg-white/10 text-gold-light"
                          : "bg-gradient-to-br from-[#F7C976] to-[#D9922F] text-white"
                      }`}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span
                      className={`font-serif text-5xl font-bold leading-none ${dark ? "text-gold-light" : "text-navy-900"}`}
                    >
                      {count}
                    </span>
                  </div>
                  <p
                    className={`mt-6 font-serif text-xl font-semibold ${dark ? "text-white" : "text-navy-900"}`}
                  >
                    {label}
                  </p>
                  <p
                    className={`mt-1 text-sm ${dark ? "text-white/65" : "text-muted"}`}
                  >
                    mentioned by {count} of {total} families
                  </p>
                  <Bar pct={Math.round((count / total) * 100)} dark={dark} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
