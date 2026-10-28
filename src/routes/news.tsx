import { createFileRoute } from "@tanstack/react-router";
import { NEWS } from "@/lib/college";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/news")({ component: NewsPage });

function NewsPage() {
  return (
    <>
      <PageHero
        kicker="Notices"
        title="Latest news & announcements"
        lede="Headlines drawn from college notices. Full PDFs remain on the official notice board."
      />
      <section className="mx-auto max-w-3xl px-4 py-14">
        <ul className="space-y-4">
          {NEWS.map((n) => (
            <li key={n.title} className="rounded-xl border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-maroon">
                {n.kind} · {n.date}
              </p>
              <h2 className="mt-1 font-display text-xl">{n.title}</h2>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
