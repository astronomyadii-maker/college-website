import { createFileRoute } from "@tanstack/react-router";
import { Shield, Utensils, Wifi, Home, Users, DoorOpen, Dumbbell, Building } from "lucide-react";
import { HOSTEL } from "@/lib/college";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/hostel")({ component: HostelPage });

const CARDS = [
  { icon: Users, title: "Boys hostel", text: `Warden: ${HOSTEL.boysWarden.name} · ${HOSTEL.boysWarden.phone}` },
  { icon: Home, title: "Girls hostel", text: `Warden: ${HOSTEL.girlsWarden.name} · ${HOSTEL.girlsWarden.phone}` },
  { icon: DoorOpen, title: "Hostel rooms", text: "Well-furnished cubical rooms on the campus estate." },
  { icon: Utensils, title: "Mess", text: "Each hostel runs its own mess with hygienic meals." },
  { icon: Wifi, title: "Wi-Fi / IT", text: "Campus computer centres are LAN-connected; connectivity is upgraded yearly." },
  { icon: Shield, title: "Security", text: "On-campus hostels with warden contacts published by the college." },
  { icon: Building, title: "Common rooms", text: "Spaces for indoor games, discussion and gatherings." },
  { icon: Dumbbell, title: "Recreation", text: "Indoor recreation plus campus sports grounds and cultural events." },
];

function HostelPage() {
  return (
    <>
      <PageHero
        kicker="Campus life"
        title="Hostel facility"
        lede="Separate hostels for boys and girls on the 220-acre Baheriya campus, with mess, common rooms and warden support."
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 md:grid-cols-2">
          <img
            src="/images/hostel-block.jpeg"
            alt="Students at a hostel block entrance, IGEC Sagar"
            className="h-72 w-full rounded-xl object-cover ring-1 ring-line"
          />
          <img
            src="/images/campus-courtyard.webp"
            alt="Residential-style courtyard on campus"
            className="h-72 w-full rounded-xl object-cover ring-1 ring-line"
          />
        </div>
        <ul className="mt-8 list-disc space-y-2 pl-5 text-muted">
          {HOSTEL.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <article key={c.title} className="rounded-xl border border-line bg-paper p-5">
              <c.icon className="size-6 text-maroon" />
              <h2 className="mt-3 font-display text-lg">{c.title}</h2>
              <p className="mt-2 text-sm text-muted">{c.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <img
            src="/images/campus-main.webp"
            alt="Academic block near hostel precinct"
            className="h-48 w-full rounded-xl object-cover"
          />
          <img
            src="/images/campus-life-dusk.jpeg"
            alt="Students on campus grounds in the evening"
            className="h-48 w-full rounded-xl object-cover"
          />
          <img
            src="/images/campus-night.jpeg"
            alt="Evening outside the college"
            className="h-48 w-full rounded-xl object-cover"
          />
        </div>
      </section>
    </>
  );
}
