import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  FlaskConical,
  GraduationCap,
  Home,
  Landmark,
  Trophy,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ABOUT, COLLEGE, GALLERY, NEWS, PLACEMENT, PROGRAMS } from "@/lib/college";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-navy-deep">
        <img
          src="/images/campus-main.webp"
          alt="Academic block of Indira Gandhi Engineering College, Sagar"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/75 to-navy/40" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:justify-center sm:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Government Autonomous · Est. {COLLEGE.established}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-paper sm:text-5xl lg:text-6xl">
            Indira Gandhi Engineering College, Sagar
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gold-soft">{COLLEGE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/about" variant="gold">
              Explore College
            </ButtonLink>
            <ButtonLink to="/admissions" variant="ghost">
              Admissions
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            to: "/student-profile" as const,
            icon: GraduationCap,
            title: "Student Profile",
            text: "Courses, academic details and student activities — without publishing private records.",
          },
          {
            to: "/placements" as const,
            icon: Trophy,
            title: "Placement Records",
            text: "Training & Placement Cell updates, campus recruitment and career support.",
          },
          {
            to: "/faculty" as const,
            icon: Users,
            title: "Faculty Information",
            text: "Teaching staff listed from official college records, by department.",
          },
          {
            to: "/hostel" as const,
            icon: Home,
            title: "Hostel Facility",
            text: "Boys and girls hostels, mess, security and on-campus amenities.",
          },
        ].map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="group rounded-xl border border-line bg-paper p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <c.icon className="size-7 text-maroon" aria-hidden />
            <h2 className="mt-3 font-display text-xl text-navy">{c.title}</h2>
            <p className="mt-2 text-sm text-muted">{c.text}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-maroon">
              View details <ArrowRight className="size-4" />
            </span>
          </Link>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
        <img
          src="/images/campus-courtyard.webp"
          alt="Courtyard of an IGEC Sagar academic block"
          className="h-80 w-full rounded-xl object-cover shadow-md ring-1 ring-line"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maroon">About the college</p>
          <h2 className="mt-2 font-display text-3xl text-navy">Indira Gandhi Engineering College</h2>
          <p className="mt-4 text-muted">{ABOUT.intro}</p>
          <p className="mt-3 text-muted">{ABOUT.campus}</p>
          <blockquote className="mt-5 border-l-4 border-gold pl-4 font-display text-lg italic text-navy">
            {ABOUT.vision}
          </blockquote>
          <ButtonLink to="/about" className="mt-6 bg-navy text-paper hover:bg-maroon">
            Read more
          </ButtonLink>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maroon">Academics</p>
              <h2 className="mt-2 font-display text-3xl">Our academic programmes</h2>
            </div>
            <Link to="/academics" className="text-sm font-semibold text-maroon">
              All programmes →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p) => (
              <Link
                key={p.slug}
                to="/departments"
                className="rounded-xl border border-line bg-cream p-5 transition hover:border-gold"
              >
                <p className="text-xs uppercase tracking-wider text-muted">B.E. · {p.seats} seats</p>
                <h3 className="mt-1 font-display text-xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.summary}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-maroon">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maroon">Careers</p>
            <h2 className="mt-2 font-display text-3xl">Placement records</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">{PLACEMENT.note}</p>
          </div>
          <Link to="/placements" className="text-sm font-semibold text-maroon">
            View complete placement records →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Highest package", PLACEMENT.highest],
            ["Average package", PLACEMENT.average],
            ["Placement percentage", PLACEMENT.percentage],
            ["Recruiting companies", PLACEMENT.companies],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-line bg-paper p-5">
              <p className="text-xs uppercase tracking-wider text-muted">{k}</p>
              <p className="mt-2 font-display text-2xl text-navy">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 h-64 rounded-xl border border-line bg-paper p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
            Year-wise chart (awaiting official figures)
          </p>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={PLACEMENT.yearly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d8d0c0" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="placed" fill="#0f2d4a" radius={[6, 6, 0, 0]} name="Students placed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="bg-navy py-16 text-paper">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <h2 className="font-display text-3xl sm:col-span-2 lg:col-span-3">College highlights</h2>
          {[
            { icon: Landmark, t: "Modern infrastructure", d: "220-acre hill campus with academic, workshop and residential blocks." },
            { icon: Users, t: "Experienced faculty", d: "Teaching staff drawn from official college directories." },
            { icon: FlaskConical, t: "Engineering laboratories", d: "Department computer centres, workshops and specialised labs." },
            { icon: Award, t: "Student activities", d: "Tech fest, cultural evenings, festivals and student clubs." },
            { icon: BookOpen, t: "Placement support", d: "Dedicated TPO office and campus recruitment process." },
            { icon: Building2, t: "Sports & culture", d: "Grounds, indoor recreation, and events such as Udghosh and Techutsav." },
          ].map((h) => (
            <div key={h.t} className="rounded-xl border border-gold/20 bg-navy-deep/50 p-5">
              <h.icon className="size-6 text-gold" />
              <h3 className="mt-3 font-display text-xl text-paper">{h.t}</h3>
              <p className="mt-2 text-sm text-gold-soft/80">{h.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl">Campus gallery</h2>
          <Link to="/gallery" className="text-sm font-semibold text-maroon">
            Open gallery
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {GALLERY.slice(0, 8).map((g) => (
            <img
              key={g.src}
              src={g.src}
              alt={g.alt}
              className="h-36 w-full rounded-lg object-cover ring-1 ring-line sm:h-44"
            />
          ))}
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl">Latest news & announcements</h2>
            <Link to="/news" className="text-sm font-semibold text-maroon">
              All notices
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {NEWS.slice(0, 6).map((n) => (
              <article key={n.title} className="rounded-xl border border-line bg-cream p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-maroon">
                  {n.kind} · {n.date}
                </p>
                <h3 className="mt-2 font-display text-lg">{n.title}</h3>
                <Link to="/news" className="mt-3 inline-block text-sm font-semibold text-navy">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src="/images/cultural-udghosh.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="font-display text-3xl text-paper sm:text-4xl">Start your engineering journey with us</h2>
          <p className="mt-4 text-gold-soft">
            Explore academic opportunities, campus facilities and career pathways at Indira Gandhi
            Engineering College, Sagar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/admissions" variant="gold">
              Apply now
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
