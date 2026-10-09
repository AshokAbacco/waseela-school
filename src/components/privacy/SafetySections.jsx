/** PRIVACY › 05–08: sharing, security, retention, children. */
import { CheckList, Lead, Section } from "./policyLayout";
import { privacyPolicy as p } from "../../data/privacyData";

export default function SafetySections() {
  return (
    <>
      {/* 05 — Sharing */}
      <Section id="sharing">
        <Lead>Information stays within the school. It is shared only in these limited cases:</Lead>
        <div className="space-y-3">
          {p.sharing.map((s) => (
            <div
              key={s.who}
              className="grid gap-2 rounded-2xl border border-navy-900/[0.08] p-6 sm:grid-cols-[220px_1fr] sm:gap-6"
            >
              <p className="font-serif text-lg text-navy-900">{s.who}</p>
              <p className="text-sm leading-relaxed">{s.what}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 06 — Security */}
      <Section id="security" tone="cream">
        <CheckList items={p.security} cols={2} />
        <p className="border-l-2 border-gold pl-5">
          No online system is 100% secure, but we take reasonable steps to protect your data. Please keep your
          sign-in details private and tell the school straight away if you think your account has been
          misused.
        </p>
      </Section>

      {/* 07 — Retention */}
      <Section id="retention">
        <Lead>{p.retention}</Lead>
      </Section>

      {/* 08 — Children */}
      <Section id="children" tone="cream">
        <Lead>{p.children}</Lead>
      </Section>
    </>
  );
}
