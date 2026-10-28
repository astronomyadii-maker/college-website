import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as PROGRAMS, i as APPLIED } from "./router-CLCoVLSO.mjs";
import { t as PageHero } from "./PageHero-CvAr15-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/departments-DfmEB4cF.js
var import_jsx_runtime = require_jsx_runtime();
function DepartmentsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Departments",
		title: "Departments of engineering & applied sciences",
		lede: "Five undergraduate engineering departments, workshop, applied sciences and humanities — as listed by the college."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Engineering"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: PROGRAMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: p.slug,
					className: "rounded-xl border border-line bg-paper p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: p.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm",
							children: [
								"Established ",
								p.started,
								" · B.E. intake ",
								p.seats
							]
						})
					]
				}, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Applied sciences & humanities"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: APPLIED.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg border border-line bg-cream px-4 py-4 font-medium text-navy",
					children: a
				}, a))
			})
		]
	})] });
}
//#endregion
export { DepartmentsPage as component };
