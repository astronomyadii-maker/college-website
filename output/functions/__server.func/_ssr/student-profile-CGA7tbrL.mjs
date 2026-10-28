import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./PageHero-CvAr15-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/student-profile-CGA7tbrL.js
var import_jsx_runtime = require_jsx_runtime();
function StudentProfilePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Students",
		title: "Student profile",
		lede: "A public layout of how student academic information is organised. Individual marks, attendance and personal data are not published on this website."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-xl border border-gold/40 bg-gold-soft/30 p-4 text-sm text-navy",
			children: "Privacy: roll numbers, contact details, photographs tied to academic records, and grade sheets are issued by the college offices — they are not stored or displayed here."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-paper p-6 lg:col-span-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-16 items-center justify-center rounded-full bg-navy font-display text-xl text-gold",
						children: "SP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-2xl",
						children: "Sample record"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Illustrative layout only"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Programme",
								v: "B.E. — Information Technology"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Semester",
								v: "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Registration",
								v: "Issued by Academic Section"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Status",
								v: "Enrolled (college records)"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:col-span-2",
				children: [
					["Academic performance", "SGPA / CGPA statements are available from the examination cell."],
					["Attendance", "Maintained by the concerned department; not shown publicly."],
					["Achievements", "College, sports and cultural distinctions may be featured in the gallery with consent."],
					["Activities", "Tech fest, Udghosh, sports, NCC and student clubs."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-cream p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: d
					})]
				}, t))
			})]
		})]
	})] });
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-4 border-b border-line py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-medium text-navy",
			children: v
		})]
	});
}
//#endregion
export { StudentProfilePage as component };
