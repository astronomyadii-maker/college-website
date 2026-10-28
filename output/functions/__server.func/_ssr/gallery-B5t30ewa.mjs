import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn, s as GALLERY } from "./router-CLCoVLSO.mjs";
import { t as PageHero } from "./PageHero-CvAr15-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-B5t30ewa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	"All",
	"Campus",
	"Hostel",
	"Events",
	"Sports",
	"Activities"
];
function GalleryPage() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const [open, setOpen] = (0, import_react.useState)(null);
	const items = (0, import_react.useMemo)(() => GALLERY.filter((g) => cat === "All" || g.cat === cat), [cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Media",
			title: "Campus gallery",
			lede: "Photographs from the IGEC Sagar campus, hostels and student events. No stock imagery."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCat(c),
					className: cn("min-h-11 rounded-full border px-4 text-sm font-semibold", cat === c ? "border-navy bg-navy text-paper" : "border-line bg-paper"),
					children: c
				}, c))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 columns-1 gap-3 sm:columns-2 lg:columns-3",
				children: items.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mb-3 block w-full overflow-hidden rounded-lg",
					onClick: () => setOpen(i),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: g.src,
						alt: g.alt,
						className: "w-full object-cover"
					})
				}, g.src))
			})]
		}),
		open !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/90 p-4",
			onClick: () => setOpen(null),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": items[open]?.alt,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: items[open].src,
				alt: items[open].alt,
				className: "max-h-[90vh] max-w-full rounded-lg object-contain"
			})
		}) : null
	] });
}
//#endregion
export { GalleryPage as component };
