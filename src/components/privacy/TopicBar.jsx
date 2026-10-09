/** PRIVACY › STICKY TOPIC BAR — highlights the section currently on screen. */
import { useEffect, useRef, useState } from "react";
import { SECTIONS, ids } from "./policyLayout";

/** Horizontal topic bar that sticks under the header and tracks the section in view. */
export default function TopicBar() {
  const [active, setActive] = useState(ids[0]);
  const listRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-160px 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // keep the active chip visible inside the horizontal scroller
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector(`[data-id="${active}"]`);
    if (list && chip) {
      list.scrollTo({
        left: chip.offsetLeft - list.clientWidth / 2 + chip.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <nav
      aria-label="Privacy policy topics"
      className="sticky top-[80px] z-30 border-b border-navy-900/10 bg-white/95 backdrop-blur"
    >
      <div className="container-site">
        <ol
          ref={listRef}
          className="-mx-1 flex gap-2 overflow-x-auto px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SECTIONS.map((s, i) => {
            const on = active === s.id;
            return (
              <li key={s.id} data-id={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  aria-current={on ? "true" : undefined}
                  className={`inline-flex min-h-[40px] items-center gap-2 rounded-full border px-4 text-sm font-medium transition ${
                    on
                      ? "border-navy-900 bg-navy-900 text-white"
                      : "border-navy-900/15 text-muted hover:border-gold hover:text-navy-900"
                  }`}
                >
                  <span className={`text-[0.7rem] font-bold ${on ? "text-gold-light" : "text-gold-dark"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.label}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
