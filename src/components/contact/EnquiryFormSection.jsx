/**
 * CONTACT › QUICK ENQUIRY FORM
 * Parents fill in a few details; pressing "Send on WhatsApp" opens WhatsApp with the message ready to send
 * to the school's number. No server needed — nothing is stored on the website.
 */
import { useState } from "react";
import { BadgeCheck, Clock, MessageSquareText, Send } from "lucide-react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { allClasses, contact, links, school } from "../../data/schoolData";

const TOPICS = [
  "Admission",
  "Campus visit",
  "Fees",
  "School transport",
  "Hostel",
  "Other",
];

const field =
  "mt-1.5 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-[0.95rem] text-navy-900 outline-none transition placeholder:text-navy-900/35 focus:border-gold focus:ring-4 focus:ring-gold/15";

export default function EnquiryFormSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    child: "",
    topic: TOPICS[0],
    message: "",
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const details = [
      `Enquiry about: ${form.topic}`,
      `Parent name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.child && `Child's class: ${form.child}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);
    const text = [`Hello ${school.name},`, "", ...details].join("\n");
    window.open(links.whatsappWith(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      aria-labelledby="enquiry-form-heading"
      className="section bg-white"
    >
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-gold" />
            <Eyebrow>Send an Enquiry</Eyebrow>
          </div>
          <h2
            id="enquiry-form-heading"
            className="mt-4 text-[2.1rem] font-bold leading-[1.1] sm:text-[2.6rem]"
          >
            Have a Question? <span className="[color:#C8862A]">Ask Us</span>
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Fill in the form and tap send — your message opens in WhatsApp,
            ready to go to our admissions team.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              {
                icon: MessageSquareText,
                t: "Quick reply on WhatsApp",
                d: `Messages go to ${contact.whatsapp.display}`,
              },
              {
                icon: Clock,
                t: "During office hours",
                d: contact.officeHoursSummary,
              },
              {
                icon: BadgeCheck,
                t: "No obligation",
                d: "Ask anything about admissions, fees, bus or hostel",
              },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-dark">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-bold text-navy-900">{t}</span>
                  <span className="text-sm text-muted">{d}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={submit}
            className="relative rounded-[28px] border border-navy-900/[0.07] bg-cream p-6 shadow-lift sm:p-9"
          >
            <span
              aria-hidden
              className="absolute inset-x-8 top-0 h-1 rounded-b-full bg-gradient-to-r from-gold-light via-gold to-[#C8862A]"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-navy-900">
                Parent’s name *
                <input
                  required
                  value={form.name}
                  onChange={set("name")}
                  className={field}
                  placeholder="Your full name"
                />
              </label>
              <label className="block text-sm font-semibold text-navy-900">
                Phone number *
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+\s-]{10,15}"
                  value={form.phone}
                  onChange={set("phone")}
                  className={field}
                  placeholder="10-digit mobile number"
                />
              </label>
              <label className="block text-sm font-semibold text-navy-900">
                Child’s class (optional)
                <select
                  value={form.child}
                  onChange={set("child")}
                  className={field}
                >
                  <option value="">Select class</option>
                  {allClasses.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-semibold text-navy-900">
                Enquiry about
                <select
                  value={form.topic}
                  onChange={set("topic")}
                  className={field}
                >
                  {TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-semibold text-navy-900 sm:col-span-2">
                Message (optional)
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  className={`${field} resize-none`}
                  placeholder="Write your question here…"
                />
              </label>
            </div>
            <button type="submit" className="btn-gold mt-6 w-full">
              <Send className="h-4 w-4" aria-hidden /> Send on WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              Your details are only used to reply to your enquiry.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
