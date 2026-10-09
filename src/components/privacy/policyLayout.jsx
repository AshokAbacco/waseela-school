/**
 * PRIVACY › SHARED LAYOUT PIECES
 * SECTIONS = the 13 numbered topics (label in the topic bar + heading).
 * Section / Lead / CheckList / Tile = building blocks used by the policy section files.
 * Policy wording lives in data/privacyData.js.
 */
import {
  Archive,
  Baby,
  BellRing,
  Camera,
  Check,
  Database,
  Eye,
  Globe,
  ListChecks,
  Lock,
  Mail,
  MessageSquareWarning,
  PencilLine,
  RefreshCw,
  Scale,
  Share2,
  Smartphone,
  Trash2,
  Undo2,
  Wifi,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import { schoolApp } from "../../data/schoolData";

export const SECTIONS = [
  { id: "about-app", label: "The app", title: `About the ${schoolApp.name} app`, icon: Smartphone },
  { id: "information-we-collect", label: "What we collect", title: "Information we collect", icon: Database },
  { id: "how-we-use", label: "How we use it", title: "How we use information", icon: ListChecks },
  { id: "app-permissions", label: "Permissions", title: "App permissions", icon: BellRing },
  { id: "sharing", label: "Sharing", title: "Who we share information with", icon: Share2 },
  { id: "security", label: "Security", title: "How we protect your data", icon: Lock },
  { id: "retention", label: "Retention", title: "How long we keep data", icon: Archive },
  { id: "children", label: "Children", title: "Children's privacy", icon: Baby },
  { id: "your-rights", label: "Your rights", title: "Your rights", icon: Scale },
  {
    id: "delete-account",
    label: "Delete account",
    title: `Delete your ${schoolApp.name} account & data`,
    icon: Trash2,
  },
  { id: "website", label: "Website", title: "This website", icon: Globe },
  { id: "changes", label: "Updates", title: "Changes to this policy", icon: RefreshCw },
  { id: "contact", label: "Contact", title: "Contact us & grievance officer", icon: Mail },
];

export const ids = SECTIONS.map((s) => s.id);

export const permissionIcons = { Notifications: BellRing, "Camera / Photos & files": Camera, Internet: Wifi };

export const rightIcons = {
  Access: Eye,
  Correction: PencilLine,
  Deletion: Trash2,
  "Withdraw consent": Undo2,
  Grievance: MessageSquareWarning,
};

/** Editorial row: sticky number + title on the left, content on the right. */
export function Section({ id, tone = "white", children }) {
  const index = ids.indexOf(id);
  const { title, icon: Icon } = SECTIONS[index];
  return (
    <section
      id={id}
      aria-labelledby={`${id}-h`}
      className={`scroll-mt-[150px] border-t border-navy-900/[0.08] ${tone === "cream" ? "bg-cream" : "bg-white"}`}
    >
      <div className="container-site grid gap-8 py-14 sm:py-16 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16 lg:py-20">
        <Reveal className="lg:sticky lg:top-[170px] lg:self-start">
          <div className="flex items-start gap-5 lg:block">
            <span
              className="font-serif text-5xl font-light leading-none text-gold/70 lg:text-7xl"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="lg:mt-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-dark">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden />
              </span>
              <h2 id={`${id}-h`} className="mt-4 text-[1.6rem] font-medium leading-tight sm:text-[2rem]">
                {title}
              </h2>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80} className="min-w-0 space-y-6 text-[1rem] leading-relaxed text-muted">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function Lead({ children }) {
  return <p className="max-w-2xl text-[1.08rem] leading-relaxed text-ink/80">{children}</p>;
}

export function CheckList({ items, cols = 1 }) {
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <Check className="mt-1 h-4 w-4 shrink-0 text-gold-dark" strokeWidth={2.5} aria-hidden />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Tile({ title, children, icon: Icon }) {
  return (
    <div className="h-full rounded-2xl border border-navy-900/[0.08] bg-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-gold/40">
      {Icon && (
        <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-gold-dark">
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden />
        </span>
      )}
      <p className="font-serif text-lg text-navy-900">{title}</p>
      <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}
