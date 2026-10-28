import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { COLLEGE, NAV } from "@/lib/college";
import { cn } from "@/lib/utils";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-navy-deep text-gold-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs tracking-wide sm:text-sm">
          <p className="font-medium">
            Government of Madhya Pradesh · Established {COLLEGE.established} · AICTE · RGPV Bhopal
          </p>
          <a
            href={`tel:${COLLEGE.phones.counselling[0]}`}
            className="inline-flex items-center gap-1.5 text-gold-soft hover:text-gold"
          >
            <Phone className="size-3.5" aria-hidden />
            Counselling {COLLEGE.phones.counselling[0]}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-2.5 sm:px-4">
          <Link to="/" className="flex min-w-0 flex-1 items-center gap-3">
            <img
              src="/images/logo.png"
              alt="IGEC Sagar emblem"
              className="size-12 shrink-0 rounded-full bg-cream object-contain ring-1 ring-gold/50 sm:size-14"
            />
            <span className="min-w-0">
              <span className="block font-display text-sm font-semibold leading-tight text-navy sm:text-base">
                Indira Gandhi Engineering College
              </span>
              <span className="block text-[11px] uppercase tracking-[0.14em] text-muted sm:text-xs">
                Sagar, Madhya Pradesh
              </span>
            </span>
          </Link>

          <Link
            to="/admissions"
            className="hidden rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-paper shadow-sm transition hover:bg-navy lg:inline-flex"
          >
            Apply Now
          </Link>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-cream text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <nav className="hidden border-t border-line bg-navy lg:block" aria-label="Primary">
          <ul className="mx-auto flex max-w-6xl flex-wrap items-stretch px-2">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "relative block px-2.5 py-3 text-xs font-semibold tracking-wide text-gold-soft/90 transition hover:bg-navy-deep hover:text-paper xl:px-3 xl:text-[13px]",
                      active && "bg-navy-deep text-gold after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:bg-gold",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {open ? (
        <div
          id="site-menu"
          className="fixed inset-0 z-50 bg-navy-deep/40 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <nav
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-paper shadow-xl"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <p className="font-display font-semibold text-navy">Menu</p>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-md text-navy"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto p-2">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "block rounded-md px-3 py-3 text-base font-medium text-ink",
                      pathname === item.to ? "bg-cream text-navy" : "hover:bg-cream",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/admissions"
              className="m-3 rounded-full bg-maroon px-4 py-3 text-center font-semibold text-paper"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      ) : null}

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy-deep text-gold-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-start gap-3">
            <img
              src="/images/logo.png"
              alt=""
              className="size-12 rounded-full bg-paper object-contain"
            />
            <div>
              <p className="font-display text-lg font-semibold text-paper">{COLLEGE.shortName}</p>
              <p className="mt-1 text-sm italic text-gold">{COLLEGE.motto}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gold-soft/80">
            Government autonomous engineering college serving Bundelkhand since {COLLEGE.established}.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Campus</p>
          <address className="mt-3 not-italic text-sm leading-relaxed text-gold-soft/85">
            {COLLEGE.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Important links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.filter((n) => n.to !== "/").map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-paper">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-gold-soft/85">
            <li>Phone: {COLLEGE.phones.counselling.join(", ")}</li>
            <li>TPO: {COLLEGE.phones.tpo}</li>
            <li>
              Email:{" "}
              <a className="underline decoration-gold/40" href={`mailto:${COLLEGE.email}`}>
                {COLLEGE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy px-4 py-4 text-center text-xs text-gold-soft/70">
        © {new Date().getFullYear()} {COLLEGE.name}. All rights reserved.
      </div>
    </footer>
  );
}
