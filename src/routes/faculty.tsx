import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FACULTY, type FacultyDept } from "@/lib/college";
import { PageHero } from "@/components/layout/PageHero";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faculty")({ component: FacultyPage });

const FILTERS: FacultyDept[] = [
  "All",
  "Mechanical",
  "Electrical",
  "IT",
  "Humanities",
  "Administration",
];

function FacultyPage() {
  const [dept, setDept] = useState<FacultyDept>("All");
  const list = useMemo(
    () => FACULTY.filter((f) => dept === "All" || f.department === dept),
    [dept],
  );

  return (
    <>
      <PageHero
        kicker="People"
        title="Faculty information"
        lede="Names and designations below are taken from official IGEC Sagar staff and department pages. Photographs of faculty were not supplied, so monograms are used. The list is not exhaustive."
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setDept(f)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm font-semibold",
                dept === f
                  ? "border-navy bg-navy text-paper"
                  : "border-line bg-paper text-navy hover:border-gold",
              )}
            >
              {f === "All" ? "All departments" : f}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">
          Civil and ECE directories will be added when the college provides a current staff list for
          those departments.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((f) => (
            <article key={f.name} className="rounded-xl border border-line bg-paper p-5">
              <div className="flex size-14 items-center justify-center rounded-full bg-navy font-display text-lg text-gold">
                {initials(f.name)}
              </div>
              <h2 className="mt-4 font-display text-xl">{f.name}</h2>
              <p className="text-sm font-medium text-maroon">{f.designation}</p>
              <p className="mt-1 text-sm text-muted">{f.department}</p>
              <p className="mt-3 text-sm">
                {f.qualification}
                {f.specialization ? ` · ${f.specialization}` : ""}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s|^Prof\.?\s|^Mr\.?\s|^Ms\.?\s/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}
