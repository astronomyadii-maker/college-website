import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as COLLEGE, d as PROGRAMS } from "./router-CLCoVLSO.mjs";
import { t as PageHero } from "./PageHero-CvAr15-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admissions-HwWJqlKc.js
var import_jsx_runtime = require_jsx_runtime();
function AdmissionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Admissions",
		title: "B.E. admissions at IGEC Sagar",
		lede: "Undergraduate engineering admissions are conducted through the counselling process notified by the college and the Directorate of Technical Education, Madhya Pradesh."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-paper p-6 lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "How to apply"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "mt-4 list-decimal space-y-2 pl-5 text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Follow the current year’s DTE Madhya Pradesh / college-level counselling notices." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Keep the B.Tech. admission document list ready (published by the college each year)." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Report as per allotment for document verification and fee payment." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Lateral-entry seats are notified separately for diploma holders." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-sm text-muted",
							children: [
								"Helpdesk: Counselling ",
								COLLEGE.phones.counselling.join(" / "),
								" · Admission",
								" ",
								COLLEGE.phones.admission,
								" · Mr. G.S. Bhaskar 9770003528"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-xl bg-navy p-6 text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-paper",
						children: "Contacts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-gold-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Scholarship: ", COLLEGE.phones.scholarship] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["TPO: ", COLLEGE.phones.tpo] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Email: ", COLLEGE.email] })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Intake (2024–25, as published)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto rounded-xl border border-line bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-xl text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-cream text-navy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-semibold",
								children: "Branch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-semibold",
								children: "Seats"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-semibold",
								children: "Lateral entry"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: PROGRAMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: p.seats
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: p.lateral
							})
						]
					}, p.slug)) })]
				})
			})
		]
	})] });
}
//#endregion
export { AdmissionsPage as component };
