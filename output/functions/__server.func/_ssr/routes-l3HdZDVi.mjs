import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Building2, a as Trophy, b as ArrowRight, d as House, f as GraduationCap, i as Users, p as FlaskConical, u as Landmark, v as BookOpen, y as Award } from "../_libs/lucide-react.mjs";
import { a as COLLEGE, d as PROGRAMS, l as NEWS, n as cn, r as ABOUT, s as GALLERY, u as PLACEMENT } from "./router-CLCoVLSO.mjs";
import { a as Bar, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-l3HdZDVi.js
var import_jsx_runtime = require_jsx_runtime();
function ButtonLink({ to, children, variant = "primary", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cn("inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition", variant === "primary" && "bg-maroon text-paper hover:bg-navy", variant === "gold" && "bg-gold text-navy-deep hover:bg-gold-soft", variant === "ghost" && "border border-paper/40 bg-navy/20 text-paper hover:bg-paper/10", className),
		children
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[78vh] overflow-hidden bg-navy-deep",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/campus-main.webp",
					alt: "Academic block of Indira Gandhi Engineering College, Sagar",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/75 to-navy/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:justify-center sm:pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.22em] text-gold",
							children: ["Government Autonomous · Est. ", COLLEGE.established]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-paper sm:text-5xl lg:text-6xl",
							children: "Indira Gandhi Engineering College, Sagar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-lg text-gold-soft",
							children: COLLEGE.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/about",
								variant: "gold",
								children: "Explore College"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/admissions",
								variant: "ghost",
								children: "Admissions"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 mx-auto -mt-10 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					to: "/student-profile",
					icon: GraduationCap,
					title: "Student Profile",
					text: "Courses, academic details and student activities — without publishing private records."
				},
				{
					to: "/placements",
					icon: Trophy,
					title: "Placement Records",
					text: "Training & Placement Cell updates, campus recruitment and career support."
				},
				{
					to: "/faculty",
					icon: Users,
					title: "Faculty Information",
					text: "Teaching staff listed from official college records, by department."
				},
				{
					to: "/hostel",
					icon: House,
					title: "Hostel Facility",
					text: "Boys and girls hostels, mess, security and on-campus amenities."
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: c.to,
				className: "group rounded-xl border border-line bg-paper p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
						className: "size-7 text-maroon",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-xl text-navy",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: c.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-maroon",
						children: ["View details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			}, c.to))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/campus-courtyard.webp",
				alt: "Courtyard of an IGEC Sagar academic block",
				className: "h-80 w-full rounded-xl object-cover shadow-md ring-1 ring-line"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-maroon",
					children: "About the college"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl text-navy",
					children: "Indira Gandhi Engineering College"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: ABOUT.intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: ABOUT.campus
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-5 border-l-4 border-gold pl-4 font-display text-lg italic text-navy",
					children: ABOUT.vision
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/about",
					className: "mt-6 bg-navy text-paper hover:bg-maroon",
					children: "Read more"
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.18em] text-maroon",
						children: "Academics"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl",
						children: "Our academic programmes"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/academics",
						className: "text-sm font-semibold text-maroon",
						children: "All programmes →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: PROGRAMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/departments",
						className: "rounded-xl border border-line bg-cream p-5 transition hover:border-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-wider text-muted",
								children: [
									"B.E. · ",
									p.seats,
									" seats"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-xl",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: p.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-4 inline-block text-sm font-semibold text-maroon",
								children: "Learn more"
							})
						]
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.18em] text-maroon",
							children: "Careers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl",
							children: "Placement records"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm text-muted",
							children: PLACEMENT.note
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/placements",
						className: "text-sm font-semibold text-maroon",
						children: "View complete placement records →"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
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
							className: "mt-2 font-display text-2xl text-navy",
							children: v
						})]
					}, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 h-64 rounded-xl border border-line bg-paper p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted",
						children: "Year-wise chart (awaiting official figures)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "90%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: PLACEMENT.yearly,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "#d8d0c0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "year",
									tick: { fontSize: 12 }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									allowDecimals: false,
									tick: { fontSize: 12 }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "placed",
									fill: "#0f2d4a",
									radius: [
										6,
										6,
										0,
										0
									],
									name: "Students placed"
								})
							]
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy py-16 text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:col-span-2 lg:col-span-3",
					children: "College highlights"
				}), [
					{
						icon: Landmark,
						t: "Modern infrastructure",
						d: "220-acre hill campus with academic, workshop and residential blocks."
					},
					{
						icon: Users,
						t: "Experienced faculty",
						d: "Teaching staff drawn from official college directories."
					},
					{
						icon: FlaskConical,
						t: "Engineering laboratories",
						d: "Department computer centres, workshops and specialised labs."
					},
					{
						icon: Award,
						t: "Student activities",
						d: "Tech fest, cultural evenings, festivals and student clubs."
					},
					{
						icon: BookOpen,
						t: "Placement support",
						d: "Dedicated TPO office and campus recruitment process."
					},
					{
						icon: Building2,
						t: "Sports & culture",
						d: "Grounds, indoor recreation, and events such as Udghosh and Techutsav."
					}
				].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-gold/20 bg-navy-deep/50 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(h.icon, { className: "size-6 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-xl text-paper",
							children: h.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-gold-soft/80",
							children: h.d
						})
					]
				}, h.t))]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Campus gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/gallery",
					className: "text-sm font-semibold text-maroon",
					children: "Open gallery"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-3 md:grid-cols-4",
				children: GALLERY.slice(0, 8).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: g.src,
					alt: g.alt,
					className: "h-36 w-full rounded-lg object-cover ring-1 ring-line sm:h-44"
				}, g.src))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Latest news & announcements"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/news",
						className: "text-sm font-semibold text-maroon",
						children: "All notices"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: NEWS.slice(0, 6).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-line bg-cream p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-maroon",
								children: [
									n.kind,
									" · ",
									n.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-lg",
								children: n.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/news",
								className: "mt-3 inline-block text-sm font-semibold text-navy",
								children: "Read more"
							})
						]
					}, n.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/cultural-udghosh.jpg",
					alt: "",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-3xl px-4 py-20 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-paper sm:text-4xl",
							children: "Start your engineering journey with us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-gold-soft",
							children: "Explore academic opportunities, campus facilities and career pathways at Indira Gandhi Engineering College, Sagar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/admissions",
								variant: "gold",
								children: "Apply now"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/contact",
								variant: "ghost",
								children: "Contact us"
							})]
						})
					]
				})
			]
		})
	] });
}
//#endregion
export { HomePage as component };
