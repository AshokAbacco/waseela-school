/** PRIVACY › "OUR PRIVACY PROMISE" intro + four highlight cards (text in data/privacyData.js). */
import { ArrowDown, ShieldCheck } from "lucide-react";
import Reveal from "../ui/Reveal";
import { privacyPolicy as p } from "../../data/privacyData";

export default function PromiseSection() {
  return (
    <section aria-labelledby="promise-heading" className="bg-cream">
      <div className="container-site grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Our privacy promise</p>
          <h2 id="promise-heading" className="mt-3 text-[2rem] font-medium leading-[1.12] sm:text-[2.6rem]">
            Your family's information is <em className="italic text-gold-dark">safe with us.</em>
          </h2>
          <span aria-hidden className="mt-5 block h-[3px] w-14 rounded-full bg-gold" />
          <p className="mt-6 leading-relaxed text-muted">{p.intro}</p>
          <a href="#about-app" className="btn-outline mt-8">
            Read the full policy <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>
        <ul className="grid gap-px self-start overflow-hidden rounded-[24px] border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
          {p.highlights.map((h, i) => (
            <Reveal as="li" key={h.title} delay={i * 80} className="bg-white p-7 sm:p-8">
              <ShieldCheck className="h-7 w-7 text-gold-dark" strokeWidth={1.5} aria-hidden />
              <p className="mt-5 font-serif text-xl text-navy-900">{h.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
