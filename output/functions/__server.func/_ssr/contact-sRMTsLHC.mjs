import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as COLLEGE, c as HOSTEL } from "./router-CLCoVLSO.mjs";
import { t as PageHero } from "./PageHero-CvAr15-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-sRMTsLHC.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Reach us",
		title: "Contact",
		lede: COLLEGE.addressLines.join(", ")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-line bg-paper p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Directory"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 space-y-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Counselling",
						v: COLLEGE.phones.counselling.join(" / ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Admission",
						v: COLLEGE.phones.admission
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Training & Placement",
						v: COLLEGE.phones.tpo
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Scholarship",
						v: COLLEGE.phones.scholarship
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Fax",
						v: COLLEGE.phones.fax
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Email",
						v: COLLEGE.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Boys hostel",
						v: `${HOSTEL.boysWarden.name} · ${HOSTEL.boysWarden.phone}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Girls hostel",
						v: `${HOSTEL.girlsWarden.name} · ${HOSTEL.girlsWarden.phone}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Students section",
						v: "Mr. G.S. Bhaskar · 9770003528"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Principal",
						v: `${COLLEGE.principal.name} · ${COLLEGE.principal.designation}`
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/campus-gate.jpeg",
			alt: "Gate of Indira Gandhi Engineering College, Sagar",
			className: "h-64 w-full rounded-xl object-cover ring-1 ring-line"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-muted",
			children: [
				"Official notices continue to be issued at ",
				COLLEGE.website,
				". This site presents public information for students, parents and visitors."
			]
		})] })]
	})] });
}
function Item({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-line pb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 font-medium text-navy",
			children: v
		})]
	});
}
//#endregion
export { ContactPage as component };
