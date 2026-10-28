import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn, o as FACULTY } from "./router-CLCoVLSO.mjs";
import { t as PageHero } from "./PageHero-CvAr15-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faculty-DRURr3EO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	"All",
	"Mechanical",
	"Electrical",
	"IT",
	"Humanities",
	"Administration"
];
function FacultyPage() {
	const [dept, setDept] = (0, import_react.useState)("All");
	const list = (0, import_react.useMemo)(() => FACULTY.filter((f) => dept === "All" || f.department === dept), [dept]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "People",
		title: "Faculty information",
		lede: "Names and designations below are taken from official IGEC Sagar staff and department pages. Photographs of faculty were not supplied, so monograms are used. The list is not exhaustive."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDept(f),
					className: cn("min-h-11 rounded-full border px-4 text-sm font-semibold", dept === f ? "border-navy bg-navy text-paper" : "border-line bg-paper text-navy hover:border-gold"),
					children: f === "All" ? "All departments" : f
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Civil and ECE directories will be added when the college provides a current staff list for those departments."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-paper p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-14 items-center justify-center rounded-full bg-navy font-display text-lg text-gold",
							children: initials(f.name)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-xl",
							children: f.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-maroon",
							children: f.designation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: f.department
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm",
							children: [f.qualification, f.specialization ? ` · ${f.specialization}` : ""]
						})
					]
				}, f.name))
			})
		]
	})] });
}
function initials(name) {
	return name.replace(/^Dr\.?\s|^Prof\.?\s|^Mr\.?\s|^Ms\.?\s/i, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}
//#endregion
export { FacultyPage as component };
