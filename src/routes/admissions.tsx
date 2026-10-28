import { createFileRoute } from "@tanstack/react-router";
import { COLLEGE, PROGRAMS } from "@/lib/college";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/admissions")({ component: AdmissionsPage });

function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="Admissions"
        title="B.E. admissions at IGEC Sagar"
        lede="Undergraduate engineering admissions are conducted through the counselling process notified by the college and the Directorate of Technical Education, Madhya Pradesh."
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-line bg-paper p-6 lg:col-span-2">
            <h2 className="font-display text-2xl">How to apply</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted">
              <li>Follow the current year’s DTE Madhya Pradesh / college-level counselling notices.</li>
              <li>Keep the B.Tech. admission document list ready (published by the college each year).</li>
              <li>Report as per allotment for document verification and fee payment.</li>
              <li>Lateral-entry seats are notified separately for diploma holders.</li>
            </ol>
            <p className="mt-6 text-sm text-muted">
              Helpdesk: Counselling {COLLEGE.phones.counselling.join(" / ")} · Admission{" "}
              {COLLEGE.phones.admission} · Mr. G.S. Bhaskar 9770003528
            </p>
          </div>
          <aside className="rounded-xl bg-navy p-6 text-paper">
            <h2 className="font-display text-xl text-paper">Contacts</h2>
            <ul className="mt-4 space-y-2 text-sm text-gold-soft">
              <li>Scholarship: {COLLEGE.phones.scholarship}</li>
              <li>TPO: {COLLEGE.phones.tpo}</li>
              <li>Email: {COLLEGE.email}</li>
            </ul>
          </aside>
        </div>
        <h2 className="mt-12 font-display text-2xl">Intake (2024–25, as published)</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-paper">
          <table className="w-full min-w-xl text-left text-sm">
            <thead className="bg-cream text-navy">
              <tr>
                <th className="px-4 py-3 font-semibold">Branch</th>
                <th className="px-4 py-3 font-semibold">Seats</th>
                <th className="px-4 py-3 font-semibold">Lateral entry</th>
              </tr>
            </thead>
            <tbody>
              {PROGRAMS.map((p) => (
                <tr key={p.slug} className="border-t border-line">
                  <td className="px-4 py-3">{p.name}</td>
                  <td className="px-4 py-3">{p.seats}</td>
                  <td className="px-4 py-3">{p.lateral}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
