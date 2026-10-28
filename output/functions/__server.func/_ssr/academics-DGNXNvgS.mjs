import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as PROGRAMS, i as APPLIED } from "./router-CLCoVLSO.mjs";
import { t as PageHero } from "./PageHero-CvAr15-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/academics-DGNXNvgS.js
var import_jsx_runtime = require_jsx_runtime();
function AcademicsPage() {
	const total = PROGRAMS.reduce((s, p) => s + p.seats, 0);
	const lateral = PROGRAMS.reduce((s, p) => s + p.lateral, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Academics",
		title: "Our academic programmes",
		lede: `Four-year Bachelor of Engineering programmes with ${total} approved seats and ${lateral} lateral-entry seats (as published for 2024–25).`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: PROGRAMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-paper p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-wider text-muted",
							children: ["Started ", p.started]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: p.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-navy",
							children: [
								"Intake ",
								p.seats,
								" · Lateral entry ",
								p.lateral
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/departments",
							className: "mt-4 inline-block text-sm font-semibold text-maroon",
							children: "Learn more"
						})
					]
				}, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-14 font-display text-2xl",
				children: "Supporting departments"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: APPLIED.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-lg border border-line bg-cream px-4 py-3",
					children: a
				}, a))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted",
				children: "Recognised by AICTE, New Delhi. Affiliated to RGPV, Bhopal. Seat figures follow the college’s published 2024–25 intake table."
			})
		]
	})] });
}
//#endregion
export { AcademicsPage as component };
