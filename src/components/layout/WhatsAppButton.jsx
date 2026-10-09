import WhatsAppIcon from "../ui/WhatsAppIcon";
import { links } from "../../data/schoolData";

export default function WhatsAppButton() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Waseela admissions on WhatsApp (opens in a new tab)"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.65)] transition duration-300 hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7 sm:h-[52px] sm:w-[52px]"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 motion-safe:animate-ping [animation-duration:2.6s]"
      />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
