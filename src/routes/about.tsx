import { createFileRoute } from "@tanstack/react-router";
import { ABOUT, COLLEGE } from "@/lib/college";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="The Institute"
        title="About Indira Gandhi Engineering College"
        lede="A government autonomous engineering college of Madhya Pradesh, serving Bundelkhand since 1981."
      />
      <article className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="font-display text-2xl">College introduction</h2>
          <p className="mt-4 text-muted">{ABOUT.intro}</p>
          <p className="mt-4 text-muted">{ABOUT.campus}</p>
          <p className="mt-4 text-muted">{ABOUT.branchesHistory}</p>
          <h2 className="mt-10 font-display text-2xl">Vision</h2>
          <p className="mt-3 text-muted">{ABOUT.vision}</p>
          <h2 className="mt-10 font-display text-2xl">Mission</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {ABOUT.mission.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <h2 className="mt-10 font-display text-2xl">Governance</h2>
          <p className="mt-3 text-muted">{ABOUT.governance}</p>
          <p className="mt-4 text-sm text-muted">
            Principal: {COLLEGE.principal.name} · {COLLEGE.principal.designation} ·{" "}
            {COLLEGE.principal.qualification}
          </p>
        </div>
        <aside className="lg:col-span-2">
          <img
            src="/images/campus-main.webp"
            alt="Main building of IGEC Sagar"
            className="w-full rounded-xl object-cover shadow ring-1 ring-line"
          />
          <img
            src="/images/campus-gate.jpeg"
            alt="College entrance on Jabalpur Road"
            className="mt-4 w-full rounded-xl object-cover shadow ring-1 ring-line"
          />
          <dl className="mt-6 space-y-3 rounded-xl border border-line bg-paper p-5 text-sm">
            <div>
              <dt className="text-muted">Established</dt>
              <dd className="font-semibold text-navy">{COLLEGE.established}</dd>
            </div>
            <div>
              <dt className="text-muted">Campus</dt>
              <dd className="font-semibold text-navy">{COLLEGE.campusAcres} acres, Baheriya, Sagar</dd>
            </div>
            <div>
              <dt className="text-muted">Affiliation</dt>
              <dd className="font-semibold text-navy">{COLLEGE.affiliation}</dd>
            </div>
            <div>
              <dt className="text-muted">Approval</dt>
              <dd className="font-semibold text-navy">{COLLEGE.recognition}</dd>
            </div>
          </dl>
        </aside>
      </article>
    </>
  );
}
