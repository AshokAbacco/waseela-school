/**
 * HOME › NEWS & EVENTS + PRINCIPAL'S MESSAGE
 * Hidden until you add data in data/schoolData.js:
 *   news      = [{ date: "2026-10-12", title: "Annual Day", text: "Short description" }, ...]
 *   principal = { name: "Name", message: "Message…", photo: importedImage }
 */
import { ChevronRight, Quote } from "lucide-react";
import Eyebrow from "../ui/Eyebrow";
import { news, principal } from "../../data/schoolData";

export default function NewsPrincipalSection() {
  if (news.length === 0 && !principal) return null;
  return (
    <section aria-label="News and principal's message" className="bg-white py-16 sm:py-20">
      <div className="container-site grid gap-10 lg:grid-cols-2">
        {news.length > 0 && (
          <div>
            <Eyebrow>Latest News &amp; Events</Eyebrow>
            <ul className="mt-5 divide-y divide-navy-900/10 rounded-2xl border border-navy-900/[0.08] bg-white shadow-card">
              {news.map((n) => {
                const d = new Date(n.date);
                return (
                  <li key={n.title} className="flex items-center gap-4 p-4">
                    <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-gold-soft text-gold-dark">
                      <span className="font-serif text-xl font-bold leading-none">{d.getDate()}</span>
                      <span className="text-[0.6rem] font-bold uppercase">
                        {d.toLocaleString("en", { month: "short" })}
                      </span>
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-navy-900">{n.title}</p>
                      <p className="text-sm text-muted">{n.text}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted" aria-hidden />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {principal && (
          <div>
            <Eyebrow>Principal&apos;s Message</Eyebrow>
            <div className="mt-5 grid gap-5 sm:grid-cols-[180px_1fr]">
              {principal.photo && (
                <img
                  src={principal.photo}
                  alt={principal.name}
                  className="h-full w-full rounded-2xl object-cover"
                />
              )}
              <figure className="rounded-2xl bg-peach p-6">
                <Quote className="h-8 w-8 fill-gold text-gold" aria-hidden />
                <blockquote className="mt-3 text-sm leading-relaxed text-navy-900/80">
                  {principal.message}
                </blockquote>
                <figcaption className="mt-4 font-bold text-navy-900">
                  {principal.name}
                  <span className="block text-xs font-normal text-muted">Principal</span>
                </figcaption>
              </figure>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
