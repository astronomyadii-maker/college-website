import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as COLLEGE, u as PLACEMENT } from "./router-CLCoVLSO.mjs";
import { t as PageHero } from "./PageHero-CvAr15-I.mjs";
import { a as Bar, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/placements-B92cWjlf.js
var import_jsx_runtime = require_jsx_runtime();
function PlacementsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Training & Placement",
		title: "Placement records",
		lede: "Figures below remain placeholders until the Training & Placement Cell supplies the official year-wise report."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					["Highest package", PLACEMENT.highest],
					["Average package", PLACEMENT.average],
					["Placement percentage", PLACEMENT.percentage],
					["Recruiting companies", PLACEMENT.companies]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-paper p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl",
						children: v
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: PLACEMENT.note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 h-72 rounded-xl border border-line bg-paper p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: PLACEMENT.yearly,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "#d8d0c0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, { dataKey: "year" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { allowDecimals: false }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "placed",
								fill: "#0f2d4a",
								name: "Students placed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "companies",
								fill: "#c9a227",
								name: "Companies"
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-xl border border-dashed border-line bg-cream p-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Recruiter logos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: ["Company names and logos will be added only from official T&P records. TPO: ", COLLEGE.phones.tpo]
				})]
			})
		]
	})] });
}
//#endregion
export { PlacementsPage as component };
