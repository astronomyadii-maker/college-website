import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GALLERY } from "@/lib/college";
import { PageHero } from "@/components/layout/PageHero";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

const CATS = ["All", "Campus", "Hostel", "Events", "Sports", "Activities"] as const;

function GalleryPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = useMemo(
    () => GALLERY.filter((g) => cat === "All" || g.cat === cat),
    [cat],
  );

  return (
    <>
      <PageHero
        kicker="Media"
        title="Campus gallery"
        lede="Photographs from the IGEC Sagar campus, hostels and student events. No stock imagery."
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm font-semibold",
                cat === c ? "border-navy bg-navy text-paper" : "border-line bg-paper",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-8 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <button
              key={g.src}
              type="button"
              className="mb-3 block w-full overflow-hidden rounded-lg"
              onClick={() => setOpen(i)}
            >
              <img src={g.src} alt={g.alt} className="w-full object-cover" />
            </button>
          ))}
        </div>
      </section>
      {open !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/90 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={items[open]?.alt}
        >
          <img
            src={items[open].src}
            alt={items[open].alt}
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
