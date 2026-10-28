import { createFileRoute, Link } from "@tanstack/react-router";
import { APPLIED, PROGRAMS } from "@/lib/college";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/academics")({ component: AcademicsPage });

function AcademicsPage() {
  const total = PROGRAMS.reduce((s, p) => s + p.seats, 0);
  const lateral = PROGRAMS.reduce((s, p) => s + p.lateral, 0);
  return (
    <>
      <PageHero
        kicker="Academics"
        title="Our academic programmes"
        lede={`Four-year Bachelor of Engineering programmes with ${total} approved seats and ${lateral} lateral-entry seats (as published for 2024–25).`}
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 md:grid-cols-2">
          {PROGRAMS.map((p) => (
            <article key={p.slug} className="rounded-xl border border-line bg-paper p-6">
              <p className="text-xs uppercase tracking-wider text-muted">Started {p.started}</p>
              <h2 className="mt-1 font-display text-2xl">{p.name}</h2>
              <p className="mt-3 text-muted">{p.summary}</p>
              <p className="mt-4 text-sm text-navy">
                Intake {p.seats} · Lateral entry {p.lateral}
              </p>
              <Link to="/departments" className="mt-4 inline-block text-sm font-semibold text-maroon">
                Learn more
              </Link>
            </article>
          ))}
        </div>
        <h2 className="mt-14 font-display text-2xl">Supporting departments</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {APPLIED.map((a) => (
            <li key={a} className="rounded-lg border border-line bg-cream px-4 py-3">
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          Recognised by AICTE, New Delhi. Affiliated to RGPV, Bhopal. Seat figures follow the
          college’s published 2024–25 intake table.
        </p>
      </section>
    </>
  );
}
