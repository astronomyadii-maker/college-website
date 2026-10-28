import { createFileRoute } from "@tanstack/react-router";
import { APPLIED, PROGRAMS } from "@/lib/college";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/departments")({ component: DepartmentsPage });

function DepartmentsPage() {
  return (
    <>
      <PageHero
        kicker="Departments"
        title="Departments of engineering & applied sciences"
        lede="Five undergraduate engineering departments, workshop, applied sciences and humanities — as listed by the college."
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-2xl">Engineering</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {PROGRAMS.map((p) => (
            <article key={p.slug} id={p.slug} className="rounded-xl border border-line bg-paper p-6">
              <h3 className="font-display text-xl">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{p.summary}</p>
              <p className="mt-3 text-sm">
                Established {p.started} · B.E. intake {p.seats}
              </p>
            </article>
          ))}
        </div>
        <h2 className="mt-12 font-display text-2xl">Applied sciences & humanities</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {APPLIED.map((a) => (
            <div key={a} className="rounded-lg border border-line bg-cream px-4 py-4 font-medium text-navy">
              {a}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
