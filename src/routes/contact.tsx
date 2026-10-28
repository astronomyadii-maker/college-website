import { createFileRoute } from "@tanstack/react-router";
import { COLLEGE, HOSTEL } from "@/lib/college";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <>
      <PageHero kicker="Reach us" title="Contact" lede={COLLEGE.addressLines.join(", ")} />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-paper p-6">
          <h2 className="font-display text-2xl">Directory</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <Item k="Counselling" v={COLLEGE.phones.counselling.join(" / ")} />
            <Item k="Admission" v={COLLEGE.phones.admission} />
            <Item k="Training & Placement" v={COLLEGE.phones.tpo} />
            <Item k="Scholarship" v={COLLEGE.phones.scholarship} />
            <Item k="Fax" v={COLLEGE.phones.fax} />
            <Item k="Email" v={COLLEGE.email} />
            <Item k="Boys hostel" v={`${HOSTEL.boysWarden.name} · ${HOSTEL.boysWarden.phone}`} />
            <Item k="Girls hostel" v={`${HOSTEL.girlsWarden.name} · ${HOSTEL.girlsWarden.phone}`} />
            <Item k="Students section" v="Mr. G.S. Bhaskar · 9770003528" />
            <Item k="Principal" v={`${COLLEGE.principal.name} · ${COLLEGE.principal.designation}`} />
          </dl>
        </div>
        <div>
          <img
            src="/images/campus-gate.jpeg"
            alt="Gate of Indira Gandhi Engineering College, Sagar"
            className="h-64 w-full rounded-xl object-cover ring-1 ring-line"
          />
          <p className="mt-4 text-sm text-muted">
            Official notices continue to be issued at {COLLEGE.website}. This site presents public
            information for students, parents and visitors.
          </p>
        </div>
      </section>
    </>
  );
}

function Item({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-b border-line pb-3">
      <dt className="text-muted">{k}</dt>
      <dd className="mt-0.5 font-medium text-navy">{v}</dd>
    </div>
  );
}
