import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLLEGE, PLACEMENT } from "@/lib/college";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/placements")({ component: PlacementsPage });

function PlacementsPage() {
  return (
    <>
      <PageHero
        kicker="Training & Placement"
        title="Placement records"
        lede="Figures below remain placeholders until the Training & Placement Cell supplies the official year-wise report."
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Highest package", PLACEMENT.highest],
            ["Average package", PLACEMENT.average],
            ["Placement percentage", PLACEMENT.percentage],
            ["Recruiting companies", PLACEMENT.companies],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-line bg-paper p-5">
              <p className="text-xs uppercase tracking-wider text-muted">{k}</p>
              <p className="mt-2 font-display text-2xl">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-muted">{PLACEMENT.note}</p>
        <div className="mt-8 h-72 rounded-xl border border-line bg-paper p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PLACEMENT.yearly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d8d0c0" />
              <XAxis dataKey="year" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="placed" fill="#0f2d4a" name="Students placed" />
              <Bar dataKey="companies" fill="#c9a227" name="Companies" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-10 rounded-xl border border-dashed border-line bg-cream p-8 text-center">
          <h2 className="font-display text-xl">Recruiter logos</h2>
          <p className="mt-2 text-sm text-muted">
            Company names and logos will be added only from official T&P records. TPO: {COLLEGE.phones.tpo}
          </p>
        </div>
      </section>
    </>
  );
}
