import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as NEWS } from "./router-CLCoVLSO.mjs";
import { t as PageHero } from "./PageHero-CvAr15-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-Cf1lC6Uq.js
var import_jsx_runtime = require_jsx_runtime();
function NewsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Notices",
		title: "Latest news & announcements",
		lede: "Headlines drawn from college notices. Full PDFs remain on the official notice board."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-3xl px-4 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-4",
			children: NEWS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-line bg-paper p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-maroon",
					children: [
						n.kind,
						" · ",
						n.date
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-xl",
					children: n.title
				})]
			}, n.title))
		})
	})] });
}
//#endregion
export { NewsPage as component };
