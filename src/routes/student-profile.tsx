import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/student-profile")({ component: StudentProfilePage });

function StudentProfilePage() {
  return (
    <>
      <PageHero
        kicker="Students"
        title="Student profile"
        lede="A public layout of how student academic information is organised. Individual marks, attendance and personal data are not published on this website."
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-xl border border-gold/40 bg-gold-soft/30 p-4 text-sm text-navy">
          Privacy: roll numbers, contact details, photographs tied to academic records, and grade sheets
          are issued by the college offices — they are not stored or displayed here.
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-line bg-paper p-6 lg:col-span-1">
            <div className="flex size-16 items-center justify-center rounded-full bg-navy font-display text-xl text-gold">
              SP
            </div>
            <h2 className="mt-4 font-display text-2xl">Sample record</h2>
            <p className="text-sm text-muted">Illustrative layout only</p>
            <dl className="mt-4 space-y-2 text-sm">
              <Row k="Programme" v="B.E. — Information Technology" />
              <Row k="Semester" v="—" />
              <Row k="Registration" v="Issued by Academic Section" />
              <Row k="Status" v="Enrolled (college records)" />
            </dl>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {[
              ["Academic performance", "SGPA / CGPA statements are available from the examination cell."],
              ["Attendance", "Maintained by the concerned department; not shown publicly."],
              ["Achievements", "College, sports and cultural distinctions may be featured in the gallery with consent."],
              ["Activities", "Tech fest, Udghosh, sports, NCC and student clubs."],
            ].map(([t, d]) => (
              <article key={t} className="rounded-xl border border-line bg-cream p-5">
                <h3 className="font-display text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line py-2">
      <dt className="text-muted">{k}</dt>
      <dd className="font-medium text-navy">{v}</dd>
    </div>
  );
}
