/**
 * TESTIMONIALS › SHARE YOUR STORY
 * Gold band inviting parents to send their feedback on WhatsApp (opens with a ready message).
 */
import { MessageCircle, MessageSquareQuote } from "lucide-react";
import Reveal from "../ui/Reveal";
import { shareHref } from "./helpers";

export default function ShareStorySection() {
  return (
    <section className="bg-cream pb-16 sm:pb-20">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#D9922F] to-[#E9A23B] px-6 py-12 text-center text-white shadow-lift sm:px-12 md:flex md:items-center md:justify-between md:gap-10 md:text-left">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl"
            />
            <div className="relative flex flex-col items-center gap-5 md:flex-row md:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                <MessageSquareQuote className="h-7 w-7" aria-hidden />
              </span>
              <div>
                <h2 className="text-2xl font-bold !text-white sm:text-3xl">
                  Are you a Waseela parent?
                </h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-white/90">
                  We would love to hear about your child’s experience. Send us
                  your feedback on WhatsApp — with your permission, it may
                  appear on this page.
                </p>
              </div>
            </div>
            <a
              href={shareHref}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-7 inline-flex min-h-[50px] shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-navy-900 transition hover:-translate-y-0.5 md:mt-0"
            >
              <MessageCircle className="h-4 w-4 text-gold-dark" aria-hidden />{" "}
              Share your feedback
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
