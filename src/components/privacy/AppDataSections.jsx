/** PRIVACY › 01–04: the app, what we collect, how we use it, app permissions. */
import { Check, ShieldCheck, X } from "lucide-react";
import PlayStoreBadge from "../ui/PlayStoreBadge";
import { CheckList, Lead, Section, Tile, permissionIcons } from "./policyLayout";
import { school, schoolApp } from "../../data/schoolData";
import { privacyPolicy as p } from "../../data/privacyData";

export default function AppDataSections() {
  return (
    <>
      {/* 01 — App */}
      <Section id="about-app">
        <Lead>
          <strong className="font-semibold text-navy-900">{schoolApp.name}</strong> is the official mobile app
          of {school.name}, {school.city}. It connects the school with parents, students and staff so everyone
          stays informed about a child's school day.
        </Lead>
        <div className="grid gap-4 sm:grid-cols-3">
          {p.appUsers.map((u) => (
            <Tile key={u.who} title={u.who}>
              {u.what}
            </Tile>
          ))}
        </div>
        <div className="overflow-hidden rounded-2xl bg-peach">
          <div className="grid gap-8 p-7 sm:p-9 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">With the app you can see</p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {p.appFeatures.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-navy-900/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <PlayStoreBadge />
          </div>
        </div>
      </Section>

      {/* 02 — Collect */}
      <Section id="information-we-collect" tone="cream">
        <Lead>
          We collect only what is needed to run the school and the app. Most of it is given by parents at
          admission or created by the school during the year.
        </Lead>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.collected.map((c) => (
            <Tile key={c.title} title={c.title}>
              <ul className="space-y-1.5">
                {c.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {i}
                  </li>
                ))}
              </ul>
            </Tile>
          ))}
        </div>
        <div className="rounded-2xl border border-red-200 bg-red-50/60 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-800">
            What we never collect
          </p>
          <ul className="mt-4 space-y-3">
            {p.notCollected.map((t) => (
              <li key={t} className="flex gap-3 text-ink/80">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
                  <X className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 03 — Use */}
      <Section id="how-we-use">
        <Lead>Your information is used only for school and educational purposes:</Lead>
        <ol className="divide-y divide-navy-900/10 border-y border-navy-900/10">
          {p.uses.map((u, i) => (
            <li key={u} className="flex items-baseline gap-5 py-4">
              <span className="w-6 shrink-0 font-serif text-lg text-gold-dark" aria-hidden>
                {i + 1}
              </span>
              <span className="text-ink/85">{u}</span>
            </li>
          ))}
        </ol>
        <p className="rounded-xl bg-cream px-5 py-4 text-sm font-medium text-navy-900">
          We never sell, rent or trade personal data, and the app shows no third-party advertising.
        </p>
      </Section>

      {/* 04 — Permissions */}
      <Section id="app-permissions" tone="cream">
        <Lead>
          The app asks only for the permissions it needs. You can switch them off any time in your phone's
          settings — the app keeps working, though some features (such as alerts) may stop.
        </Lead>
        <div className="grid gap-4 md:grid-cols-3">
          {p.permissions.map((x) => (
            <Tile key={x.name} title={x.name} icon={permissionIcons[x.name] ?? ShieldCheck}>
              {x.why}
            </Tile>
          ))}
        </div>
      </Section>
    </>
  );
}
