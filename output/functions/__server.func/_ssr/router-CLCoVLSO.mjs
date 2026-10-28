import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Phone, l as Menu, o as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CLCoVLSO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var COLLEGE = {
	name: "Indira Gandhi Engineering College, Sagar",
	shortName: "IGEC Sagar",
	motto: "विद्या ददाति विनयम्",
	mottoEn: "Knowledge bestows humility",
	tagline: "Excellence in Engineering Education, Innovation & Career Development",
	established: 1981,
	type: "Government Autonomous Engineering College",
	affiliation: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
	recognition: "AICTE, New Delhi",
	campusAcres: 220,
	addressLines: [
		"Near Makroniya Railway Station",
		"Jabalpur Road, Baheriya",
		"District Sagar, Madhya Pradesh — 470021"
	],
	phones: {
		counselling: ["07582-263826", "07582-263844"],
		admission: "07582-263896",
		tpo: "07582-263873",
		scholarship: "07582-263883",
		fax: "07582-263844"
	},
	email: "dr.principalgec@rediffmail.com",
	website: "https://www.igecsagar.ac.in",
	principal: {
		name: "Dr. Anurag Trivedi",
		designation: "Principal",
		specialization: "Measurement & Instrumentation, Control Systems",
		qualification: "Ph.D."
	}
};
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/academics",
		label: "Academics"
	},
	{
		to: "/departments",
		label: "Departments"
	},
	{
		to: "/admissions",
		label: "Admissions"
	},
	{
		to: "/student-profile",
		label: "Students"
	},
	{
		to: "/placements",
		label: "Placements"
	},
	{
		to: "/faculty",
		label: "Faculty"
	},
	{
		to: "/hostel",
		label: "Hostel"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var ABOUT = {
	intro: "Indira Gandhi Engineering College, Sagar is the 4th among the five government autonomous engineering colleges of Madhya Pradesh. The college was established by the Government of Madhya Pradesh in November 1981 to support the industrial development of the Bundelkhand region. It began as Government Engineering College, Sagar, and was later renamed Indira Gandhi Engineering College, Sagar.",
	campus: "In 1981 the institute started at its old site near Dr. Hari Singh Gour University, Sagar. In December 1986 it moved to newly constructed buildings on a 220-acre campus allotted in 1985, on a hillock near Baheriya village — about 10 km from Sagar city, on Jabalpur Road near Makroniya Railway Station.",
	branchesHistory: "Civil Engineering commenced in 1984–85, Mechanical Engineering in 1985–86, Electrical Engineering in 1988–89, Electronics & Communication Engineering in 1990–91, and Information Technology in 2000. The college was initially affiliated to Sagar University and, from 2000, to Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal.",
	governance: "IGEC Sagar has been declared autonomous by the Government of Madhya Pradesh. It is governed by the Indira Gandhi Engineering College Society (established 1997). The Board of Governors is chaired by the Hon’ble Minister, Technical Education and Manpower Planning, Government of Madhya Pradesh, with the Principal as Member Secretary.",
	vision: "To produce a generation of engineering enabled in Economics, Environmental concern with Entrepreneur skills — Empowered and Enthused for Sustainable Development of the society and country in the competitive world.",
	mission: [
		"Ensure easy access to knowledge and the state of the art for students through the information highway.",
		"Implement the university curriculum in true spirit for holistic development of the student.",
		"Create infrastructure comparable to international standards.",
		"Provide excellent facilities in well-equipped laboratories and a well-stacked library that match other centres of higher learning.",
		"Ensure a conducive environment and equal opportunities so students can acquire knowledge and skills of international standards.",
		"Motivate faculty to meet challenges of liberalisation, privatisation and globalisation, and to provide quality education.",
		"Offer all-round, learner-centric education with skills and specialisation that match industry needs and the global market."
	]
};
var PROGRAMS = [
	{
		slug: "civil",
		name: "Civil Engineering",
		started: "1984–85",
		seats: 68,
		lateral: 6,
		summary: "Foundational and advanced study of structures, surveying, materials, water resources and infrastructure for the Bundelkhand region and beyond."
	},
	{
		slug: "mechanical",
		name: "Mechanical Engineering",
		started: "1985–86",
		seats: 68,
		lateral: 12,
		summary: "Thermal engineering, design, manufacturing, CAD/CAM and laboratory practice across machine shop, heat transfer, fluids and metrology."
	},
	{
		slug: "electrical",
		name: "Electrical Engineering",
		started: "1988–89",
		seats: 68,
		lateral: 12,
		summary: "Power systems, machines, control, electronics and computing — from electrical power analysis to microprocessors and real-time systems."
	},
	{
		slug: "ece",
		name: "Electronics & Communication Engineering",
		started: "1990–91",
		seats: 68,
		lateral: 12,
		summary: "Electronics, communication systems, digital design and related laboratories supporting modern information and signal technologies."
	},
	{
		slug: "it",
		name: "Information Technology",
		started: "2000",
		seats: 68,
		lateral: 12,
		summary: "IT careers spanning computer science, information theory and communication. Department laboratories include project, software engineering and network engineering labs on a LAN of 150+ computers."
	}
];
var APPLIED = [
	"Applied Physics",
	"Applied Chemistry",
	"Applied Mathematics",
	"Applied Geology",
	"Communication Skills / English",
	"Workshop"
];
var FACULTY = [
	{
		name: "Dr. Anurag Trivedi",
		designation: "Principal",
		department: "Administration",
		qualification: "Ph.D.",
		specialization: "Measurement & Instrumentation, Control Systems"
	},
	{
		name: "Prof. Shiv Datt Sharma",
		designation: "Professor & HOD",
		department: "Mechanical",
		qualification: "M.Tech., Ph.D."
	},
	{
		name: "Prof. R. S. S. Rawat",
		designation: "Associate Professor",
		department: "Mechanical",
		qualification: "B.E., M.E."
	},
	{
		name: "Prof. Amit Kumar",
		designation: "Assistant Professor",
		department: "Mechanical",
		qualification: "M.Tech.",
		specialization: "Thermal Engineering"
	},
	{
		name: "Prof. Vinayak Barewar",
		designation: "Assistant Professor",
		department: "Mechanical",
		qualification: "M.Tech.",
		specialization: "Thermal Engineering"
	},
	{
		name: "Prof. Yogendra Kumar",
		designation: "Assistant Professor",
		department: "Mechanical",
		qualification: "M.Tech.",
		specialization: "Thermal Engineering"
	},
	{
		name: "Prof. Vinay Pandit",
		designation: "Assistant Professor",
		department: "Mechanical",
		qualification: "M.Tech."
	},
	{
		name: "Prof. Rajendra Prasad",
		designation: "Assistant Professor & HOD",
		department: "Electrical",
		qualification: "M.E."
	},
	{
		name: "Prof. Savita Baraskar",
		designation: "Assistant Professor",
		department: "Electrical",
		qualification: "—",
		specialization: "Power Electronics"
	},
	{
		name: "Prof. Amy Alice Kujur",
		designation: "Assistant Professor (HOD, Information Technology)",
		department: "IT",
		qualification: "M.Tech. (Digital Communication)",
		specialization: "Digital Communication"
	},
	{
		name: "Dr. Anand Kumar Jain",
		designation: "Associate Professor",
		department: "Humanities",
		qualification: "—",
		specialization: "English"
	},
	{
		name: "Dr. Manish Kumar Soni",
		designation: "Assistant Professor",
		department: "Administration",
		qualification: "—"
	}
];
var HOSTEL = {
	boysWarden: {
		name: "Mr. Kamal Ahirwar",
		phone: "9630416438"
	},
	girlsWarden: {
		name: "Mr. Satish Vishwakarma",
		phone: "9303260247"
	},
	notes: [
		"Separate hostels for boys and girls with boarding and recreational facilities.",
		"Each hostel has its own mess serving hygienic meals.",
		"Spacious common rooms for indoor games, discussions and gatherings.",
		"Cubical / well-furnished rooms on campus (hostels are within walking distance of academic blocks).",
		"Campus also includes administration, applied science, workshop and residential quarters."
	]
};
/** Placement figures are left blank until the Training & Placement Cell supplies official data. */
var PLACEMENT = {
	highest: "To be updated",
	average: "To be updated",
	percentage: "To be updated",
	companies: "To be updated",
	note: "Official placement statistics and recruiter lists will be published here by the Training & Placement Cell. The TPO office may be reached at 07582-263873.",
	yearly: [
		{
			year: "2022–23",
			placed: 0,
			companies: 0
		},
		{
			year: "2023–24",
			placed: 0,
			companies: 0
		},
		{
			year: "2024–25",
			placed: 0,
			companies: 0
		}
	]
};
var NEWS = [
	{
		date: "2026",
		title: "NCC admission notice for academic year 2026–27",
		kind: "Admission"
	},
	{
		date: "2025–26",
		title: "College-level counselling and lateral-entry counselling notices",
		kind: "Admission"
	},
	{
		date: "Aug 2025",
		title: "Boys hostel allotment 2025–26 (joining dates notified)",
		kind: "Hostel"
	},
	{
		date: "2025–26",
		title: "Girls hostel allotment for 2nd and 3rd year students",
		kind: "Hostel"
	},
	{
		date: "2025–26",
		title: "B.Tech. admission documents list",
		kind: "Admission"
	},
	{
		date: "2025–26",
		title: "National Scholarship / Post-Matric scholarship notices",
		kind: "Scholarship"
	},
	{
		date: "2024–25",
		title: "Admission brochure and college admission poster",
		kind: "Admission"
	},
	{
		date: "2023",
		title: "Techutsav 2K23 — annual technical festival",
		kind: "Event"
	}
];
var GALLERY = [
	{
		src: "/images/campus-main.webp",
		alt: "Main academic block, IGEC Sagar campus",
		cat: "Campus"
	},
	{
		src: "/images/campus-courtyard.webp",
		alt: "Inner courtyard of an academic block",
		cat: "Campus"
	},
	{
		src: "/images/campus-gate.jpeg",
		alt: "College gate on Jabalpur Road in monsoon",
		cat: "Campus"
	},
	{
		src: "/images/hostel-block.jpeg",
		alt: "Hostel block entrance with students",
		cat: "Hostel"
	},
	{
		src: "/images/event-techfest.jpeg",
		alt: "Tech Fest 2K26 student stall",
		cat: "Events"
	},
	{
		src: "/images/event-awards-1.jpeg",
		alt: "College cultural award ceremony on stage",
		cat: "Events"
	},
	{
		src: "/images/event-awards-2.jpeg",
		alt: "Mr and Ms campus title presentation",
		cat: "Events"
	},
	{
		src: "/images/cultural-udghosh.jpg",
		alt: "Folk dance performance at Udghosh",
		cat: "Activities"
	},
	{
		src: "/images/campus-ganesh.jpeg",
		alt: "Ganesh sthapana on campus",
		cat: "Activities"
	},
	{
		src: "/images/activity-holi.jpeg",
		alt: "Holi celebration with students",
		cat: "Activities"
	},
	{
		src: "/images/sports-trophy.jpeg",
		alt: "Sports team with trophy and medals",
		cat: "Sports"
	},
	{
		src: "/images/campus-life-dusk.jpeg",
		alt: "Students together at dusk on campus grounds",
		cat: "Activities"
	},
	{
		src: "/images/campus-excellence.jpeg",
		alt: "Students near Centre of Excellence board",
		cat: "Campus"
	},
	{
		src: "/images/campus-night.jpeg",
		alt: "Evening gathering near the college signboard",
		cat: "Campus"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SiteChrome({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-navy-deep text-gold-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs tracking-wide sm:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-medium",
						children: [
							"Government of Madhya Pradesh · Established ",
							COLLEGE.established,
							" · AICTE · RGPV Bhopal"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${COLLEGE.phones.counselling[0]}`,
						className: "inline-flex items-center gap-1.5 text-gold-soft hover:text-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-3.5",
								"aria-hidden": true
							}),
							"Counselling ",
							COLLEGE.phones.counselling[0]
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper/95 shadow-sm backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-3 px-3 py-2.5 sm:px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-w-0 flex-1 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/logo.png",
								alt: "IGEC Sagar emblem",
								className: "size-12 shrink-0 rounded-full bg-cream object-contain ring-1 ring-gold/50 sm:size-14"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-sm font-semibold leading-tight text-navy sm:text-base",
									children: "Indira Gandhi Engineering College"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[11px] uppercase tracking-[0.14em] text-muted sm:text-xs",
									children: "Sagar, Madhya Pradesh"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admissions",
							className: "hidden rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-paper shadow-sm transition hover:bg-navy lg:inline-flex",
							children: "Apply Now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-md border border-line bg-cream text-navy lg:hidden",
							"aria-expanded": open,
							"aria-controls": "site-menu",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden border-t border-line bg-navy lg:block",
					"aria-label": "Primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mx-auto flex max-w-6xl flex-wrap items-stretch px-2",
						children: NAV.map((item) => {
							const active = pathname === item.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("relative block px-2.5 py-3 text-xs font-semibold tracking-wide text-gold-soft/90 transition hover:bg-navy-deep hover:text-paper xl:px-3 xl:text-[13px]", active && "bg-navy-deep text-gold after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:bg-gold"),
								children: item.label
							}) }, item.to);
						})
					})
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "site-menu",
				className: "fixed inset-0 z-50 bg-navy-deep/40 lg:hidden",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-paper shadow-xl",
					onClick: (e) => e.stopPropagation(),
					"aria-label": "Mobile",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-line px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display font-semibold text-navy",
								children: "Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-md text-navy",
								"aria-label": "Close menu",
								onClick: () => setOpen(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex-1 overflow-y-auto p-2",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("block rounded-md px-3 py-3 text-base font-medium text-ink", pathname === item.to ? "bg-cream text-navy" : "hover:bg-cream"),
								children: item.label
							}) }, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admissions",
							className: "m-3 rounded-full bg-maroon px-4 py-3 text-center font-semibold text-paper",
							children: "Apply Now"
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto bg-navy-deep text-gold-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 lg:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/logo.png",
							alt: "",
							className: "size-12 rounded-full bg-paper object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-semibold text-paper",
							children: COLLEGE.shortName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm italic text-gold",
							children: COLLEGE.motto
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-relaxed text-gold-soft/80",
						children: [
							"Government autonomous engineering college serving Bundelkhand since ",
							COLLEGE.established,
							"."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.16em] text-gold",
					children: "Campus"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
					className: "mt-3 not-italic text-sm leading-relaxed text-gold-soft/85",
					children: COLLEGE.addressLines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: l
					}, l))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.16em] text-gold",
					children: "Important links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: NAV.filter((n) => n.to !== "/").map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "hover:text-paper",
						children: n.label
					}) }, n.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.16em] text-gold",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-gold-soft/85",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Phone: ", COLLEGE.phones.counselling.join(", ")] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["TPO: ", COLLEGE.phones.tpo] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Email:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline decoration-gold/40",
								href: `mailto:${COLLEGE.email}`,
								children: COLLEGE.email
							})
						] })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-navy px-4 py-4 text-center text-xs text-gold-soft/70",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				COLLEGE.name,
				". All rights reserved."
			]
		})]
	});
}
var styles_default = "/assets/styles-Dp-BezcB.css";
var APP_NAME = "Indira Gandhi Engineering College, Sagar";
var Route$12 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Official website of Indira Gandhi Engineering College, Sagar (M.P.) — a government autonomous engineering college established in 1981, affiliated to RGPV Bhopal and approved by AICTE."
			},
			{
				name: "theme-color",
				content: "#0F2D4A"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		className: "antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-cream text-ink font-sans",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$11 = () => import("./routes-l3HdZDVi.mjs");
var Route$11 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./about-R_o2B6gA.mjs");
var Route$10 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./academics-DGNXNvgS.mjs");
var Route$9 = createFileRoute("/academics")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./admissions-HwWJqlKc.mjs");
var Route$8 = createFileRoute("/admissions")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./contact-sRMTsLHC.mjs");
var Route$7 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./departments-DfmEB4cF.mjs");
var Route$6 = createFileRoute("/departments")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./faculty-DRURr3EO.mjs");
var Route$5 = createFileRoute("/faculty")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./gallery-B5t30ewa.mjs");
var Route$4 = createFileRoute("/gallery")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./hostel-Cloy_wiH.mjs");
var Route$3 = createFileRoute("/hostel")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./news-Cf1lC6Uq.mjs");
var Route$2 = createFileRoute("/news")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./placements-B92cWjlf.mjs");
var Route$1 = createFileRoute("/placements")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./student-profile-CGA7tbrL.mjs");
var Route = createFileRoute("/student-profile")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AboutRoute: Route$10.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$12
	}),
	AcademicsRoute: Route$9.update({
		id: "/academics",
		path: "/academics",
		getParentRoute: () => Route$12
	}),
	AdmissionsRoute: Route$8.update({
		id: "/admissions",
		path: "/admissions",
		getParentRoute: () => Route$12
	}),
	ContactRoute: Route$7.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$12
	}),
	DepartmentsRoute: Route$6.update({
		id: "/departments",
		path: "/departments",
		getParentRoute: () => Route$12
	}),
	FacultyRoute: Route$5.update({
		id: "/faculty",
		path: "/faculty",
		getParentRoute: () => Route$12
	}),
	GalleryRoute: Route$4.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$12
	}),
	HostelRoute: Route$3.update({
		id: "/hostel",
		path: "/hostel",
		getParentRoute: () => Route$12
	}),
	NewsRoute: Route$2.update({
		id: "/news",
		path: "/news",
		getParentRoute: () => Route$12
	}),
	PlacementsRoute: Route$1.update({
		id: "/placements",
		path: "/placements",
		getParentRoute: () => Route$12
	}),
	StudentProfileRoute: Route.update({
		id: "/student-profile",
		path: "/student-profile",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { COLLEGE as a, HOSTEL as c, PROGRAMS as d, APPLIED as i, NEWS as l, cn as n, FACULTY as o, ABOUT as r, GALLERY as s, router_exports as t, PLACEMENT as u };
