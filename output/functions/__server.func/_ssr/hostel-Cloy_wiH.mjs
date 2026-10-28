import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as House, g as Building, h as DoorOpen, i as Users, m as Dumbbell, n as Wifi, r as Utensils, s as Shield } from "../_libs/lucide-react.mjs";
import { c as HOSTEL } from "./router-CLCoVLSO.mjs";
import { t as PageHero } from "./PageHero-CvAr15-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hostel-Cloy_wiH.js
var import_jsx_runtime = require_jsx_runtime();
var CARDS = [
	{
		icon: Users,
		title: "Boys hostel",
		text: `Warden: ${HOSTEL.boysWarden.name} · ${HOSTEL.boysWarden.phone}`
	},
	{
		icon: House,
		title: "Girls hostel",
		text: `Warden: ${HOSTEL.girlsWarden.name} · ${HOSTEL.girlsWarden.phone}`
	},
	{
		icon: DoorOpen,
		title: "Hostel rooms",
		text: "Well-furnished cubical rooms on the campus estate."
	},
	{
		icon: Utensils,
		title: "Mess",
		text: "Each hostel runs its own mess with hygienic meals."
	},
	{
		icon: Wifi,
		title: "Wi-Fi / IT",
		text: "Campus computer centres are LAN-connected; connectivity is upgraded yearly."
	},
	{
		icon: Shield,
		title: "Security",
		text: "On-campus hostels with warden contacts published by the college."
	},
	{
		icon: Building,
		title: "Common rooms",
		text: "Spaces for indoor games, discussion and gatherings."
	},
	{
		icon: Dumbbell,
		title: "Recreation",
		text: "Indoor recreation plus campus sports grounds and cultural events."
	}
];
function HostelPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Campus life",
		title: "Hostel facility",
		lede: "Separate hostels for boys and girls on the 220-acre Baheriya campus, with mess, common rooms and warden support."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hostel-block.jpeg",
					alt: "Students at a hostel block entrance, IGEC Sagar",
					className: "h-72 w-full rounded-xl object-cover ring-1 ring-line"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/campus-courtyard.webp",
					alt: "Residential-style courtyard on campus",
					className: "h-72 w-full rounded-xl object-cover ring-1 ring-line"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 list-disc space-y-2 pl-5 text-muted",
				children: HOSTEL.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: n }, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: CARDS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-paper p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-6 text-maroon" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-lg",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: c.text
						})
					]
				}, c.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/campus-main.webp",
						alt: "Academic block near hostel precinct",
						className: "h-48 w-full rounded-xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/campus-life-dusk.jpeg",
						alt: "Students on campus grounds in the evening",
						className: "h-48 w-full rounded-xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/campus-night.jpeg",
						alt: "Evening outside the college",
						className: "h-48 w-full rounded-xl object-cover"
					})
				]
			})
		]
	})] });
}
//#endregion
export { HostelPage as component };
