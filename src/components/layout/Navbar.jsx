import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Mail, Menu, Phone, Smartphone, X } from "lucide-react";
import Logo from "../ui/Logo";
import { contact, links, navigation, playStoreHref, school, schoolApp } from "../../data/schoolData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative py-2 text-[0.9rem] font-medium transition-colors after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:-translate-x-1/2 after:rounded-full after:bg-gold after:transition-all after:duration-300 ${
      isActive
        ? "text-gold-dark after:w-full"
        : "text-navy-900 hover:text-gold-dark after:w-0 hover:after:w-full"
    }`;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>

      {/* Top info bar */}
      <div className="hidden border-b border-navy-900/[0.06] bg-cream text-[0.78rem] text-navy-900/80 md:block">
        <div className="container-site flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contact.phones[0].tel}`}
              className="inline-flex items-center gap-1.5 hover:text-gold-dark"
            >
              <Phone className="h-3.5 w-3.5 text-gold" aria-hidden /> {contact.phones[0].display}
            </a>
            <a href={links.email} className="inline-flex items-center gap-1.5 hover:text-gold-dark">
              <Mail className="h-3.5 w-3.5 text-gold" aria-hidden /> {contact.emails[0]}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${contact.phones[1].tel}`} className="hidden hover:text-gold-dark lg:inline">
              {contact.phones[1].display}
            </a>
            <span aria-hidden className="hidden h-3 w-px bg-navy-900/20 lg:inline-block" />
            <a
              href={playStoreHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium hover:text-gold-dark"
            >
              <Smartphone className="h-3.5 w-3.5 text-gold" aria-hidden /> {schoolApp.name} App
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_-14px_rgba(15,30,61,0.25)]" : ""
        }`}
      >
        <nav aria-label="Main" className="container-site flex h-[80px] items-center justify-between gap-6">
          <Logo />

          <ul className="hidden items-center gap-7 xl:flex">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[44px] items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-navy-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-[#F0B04F] sm:inline-flex"
            >
              Admissions <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-navy-900 transition hover:bg-peach xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`fixed inset-x-0 bottom-0 top-[80px] z-40 overflow-y-auto bg-cream transition-all duration-300 xl:hidden ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
          }`}
          aria-hidden={!open}
        >
          <ul className="container-site flex flex-col py-6">
            {navigation.map((item, i) => (
              <li
                key={item.to}
                className="border-b border-navy-900/10"
                style={{
                  transition: "transform .4s ease, opacity .4s ease",
                  transitionDelay: open ? `${60 + i * 40}ms` : "0ms",
                  transform: open ? "none" : "translateY(8px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  tabIndex={open ? 0 : -1}
                  className={({ isActive }) =>
                    `flex min-h-[56px] items-center justify-between font-serif text-2xl font-semibold ${isActive ? "text-gold-dark" : "text-navy-900"}`
                  }
                >
                  {item.label}
                  <span aria-hidden className="text-base text-gold">
                    →
                  </span>
                </NavLink>
              </li>
            ))}
            <li className="mt-8">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="btn-gold w-full"
              >
                Admissions Open {school.admissionYear} <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </li>
            <li className="mt-6 space-y-2 text-sm text-muted">
              {contact.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  tabIndex={open ? 0 : -1}
                  className="flex min-h-[44px] items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-gold-dark" aria-hidden /> {p.display}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
