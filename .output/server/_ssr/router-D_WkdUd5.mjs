import { i as __toESM } from "../_runtime.mjs";
import { _ as createRootRoute, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createServerFn, r as getServerFnById, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
import { t as __exportAll } from "./actions-CDRMRX-i.mjs";
import { n as ShieldCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D_WkdUd5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var saveLead = createServerFn({ method: "POST" }).validator((data) => {
	return objectType({
		name: stringType().min(1),
		email: stringType().email(),
		phone: stringType().optional(),
		leadType: enumType([
			"contact",
			"investor",
			"newsletter"
		]),
		message: stringType().optional()
	}).parse(data);
}).handler(createSsrRpc("b269b7b1feff1aa2f8e13ef84501dc64cb2e2b1ffc655ecff782e63e3085735e"));
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full bg-cream min-h-[70vh] flex flex-col items-center justify-center text-center px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-8xl font-serif font-bold text-forest mb-4",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-forest mb-6",
				children: "Halaman Tidak Ditemukan"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-forest/70 mb-8 max-w-md",
				children: "Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak lagi tersedia."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "px-8 py-3 bg-forest text-cream font-bold rounded-sm hover:bg-forest/90 transition-colors",
				children: "Kembali ke Beranda"
			})
		]
	});
}
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				property: "og:image",
				content: "/assets/og-image.png"
			},
			{
				property: "og:title",
				content: "Cetrofarm - Agrikultur Terintegrasi Indonesia"
			},
			{
				property: "og:description",
				content: "Cetrofarm merawat rantai pasok pangan dari petani binaan sampai meja konsumen. Memberikan kepastian bagi offtaker dan kesejahteraan bagi petani."
			},
			{
				name: "description",
				content: "Perusahaan agrikultur terintegrasi yang menghubungkan petani lokal dengan offtaker ritel, hotel, dan restoran. Sertifikasi organik dan standar mutu tinggi."
			}
		],
		links: [
			{
				rel: "icon",
				href: "/assets/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:ital,wght@0,300..900;1,300..900&display=swap"
			},
			{
				rel: "canonical",
				href: "https://cetrofarm.com"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				"name": "PT Cetrofarm Pangan Nusantara",
				"url": "https://cetrofarm.com",
				"logo": "https://cetrofarm.com/assets/favicon.png",
				"contactPoint": {
					"@type": "ContactPoint",
					"telephone": "+62-85-8603-00-111",
					"contactType": "customer service"
				},
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Jl. Setro Raya, Desa Gondoriyo, Kec. Bergas",
					"addressLocality": "Semarang",
					"addressRegion": "Jawa Tengah",
					"postalCode": "50552",
					"addressCountry": "ID"
				}
			})
		}]
	}),
	component: RootComponent,
	notFoundComponent: NotFound
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootDocument, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "id",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function Navbar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 w-full border-b border-cream/20 bg-cream/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4 h-20 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/",
					className: "text-2xl font-serif text-forest font-bold tracking-tight",
					children: ["Cetrofarm", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-wheat",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-8 text-sm font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/tentang",
							className: "hover:text-wheat transition-colors",
							children: "Tentang"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/ekosistem",
							className: "hover:text-wheat transition-colors",
							children: "Ekosistem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/produk",
							className: "hover:text-wheat transition-colors",
							children: "Produk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/investor",
							className: "hover:text-wheat transition-colors",
							children: "Investor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/artikel",
							className: "hover:text-wheat transition-colors",
							children: "Artikel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/kontak",
							className: "hover:text-wheat transition-colors",
							children: "Kontak"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/faq",
							className: "hover:text-wheat transition-colors",
							children: "FAQ"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/investor",
						className: "hidden lg:inline-flex px-5 py-2.5 bg-forest text-cream rounded-sm hover:bg-forest/90 transition-all font-bold text-sm",
						children: "Kemitraan B2B"
					})
				})
			]
		})
	});
}
function NewsletterForm() {
	const [status, setStatus] = import_react.useState("idle");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("loading");
		const formData = new FormData(e.currentTarget);
		try {
			if ((await saveLead({
				name: "Newsletter Subscriber",
				email: formData.get("email"),
				leadType: "newsletter"
			})).success) {
				setStatus("success");
				e.currentTarget.reset();
			} else setStatus("error");
		} catch {
			setStatus("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "flex gap-2 relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "email",
				name: "email",
				required: true,
				placeholder: "Email Anda",
				className: "px-4 py-2 w-full text-forest rounded-sm bg-cream focus:outline-none focus:ring-2 focus:ring-wheat"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: status === "loading",
				className: "px-4 py-2 bg-wheat text-forest font-bold rounded-sm hover:bg-white transition-colors disabled:opacity-70",
				children: status === "loading" ? "..." : "Kirim"
			}),
			status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute -bottom-6 text-xs text-wheat font-bold",
				children: "Terima kasih telah berlangganan!"
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute -bottom-6 text-xs text-red-400 font-bold",
				children: "Terjadi kesalahan. Coba lagi."
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-forest text-cream py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-1 md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl font-serif font-bold mb-4",
							children: ["Cetrofarm", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-wheat",
								children: "."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-cream/80 text-sm leading-relaxed mb-6",
							children: [
								"bringing nature inside.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Merawat rantai pasok pangan dari petani binaan sampai meja keluarga Anda, sejak 2018."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-sm text-cream/90 font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									size: 18,
									className: "text-wheat"
								}), " Bersertifikat Organik"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-sm text-cream/90 font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									size: 18,
									className: "text-wheat"
								}), " Terdaftar Kemenkumham & NIB"]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl mb-4 text-wheat",
					children: "Kontak Kami"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "not-italic text-cream/80 text-sm space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Jl. Setro Raya, Desa Gondoriyo,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Kec. Bergas, Kab. Semarang"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "024 6933 5138" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "+62 85 8603 00 111" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "customerrelation@cetrofarm.com" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl mb-4 text-wheat",
					children: "Tautan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "text-cream/80 text-sm space-y-3 flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/tentang",
							className: "hover:text-white transition-colors",
							children: "Tentang Kami"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/produk",
							className: "hover:text-white transition-colors",
							children: "Katalog Produk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/investor",
							className: "hover:text-white transition-colors",
							children: "Peluang Investasi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/faq",
							className: "hover:text-white transition-colors",
							children: "Pusat Bantuan (FAQ)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/kontak",
							className: "hover:text-white transition-colors",
							children: "Hubungi Kami"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-xl mb-4 text-wheat",
						children: "Newsletter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream/80 text-sm mb-4",
						children: "Dapatkan info produk terbaru dan ringkasan peluang investasi bulanan."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4 mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/50 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" PT Cetrofarm Pangan Nusantara. Hak Cipta Dilindungi."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "hover:text-cream transition-colors",
					children: "Syarat & Ketentuan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "hover:text-cream transition-colors",
					children: "Kebijakan Privasi"
				})]
			})]
		})]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-C8tGdRcp.mjs");
var Route$3 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./faq-7uVV7yDB.mjs");
var Route$2 = createFileRoute("/faq")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [
		{ title: "FAQ & Bantuan | Cetrofarm" },
		{
			name: "description",
			content: "Pertanyaan umum seputar produk, minimum order, area distribusi, dan sertifikasi Cetrofarm."
		},
		{
			property: "og:title",
			content: "FAQ & Bantuan | Cetrofarm"
		}
	] })
});
var $$splitComponentImporter$1 = () => import("./investor-DbFiHKxg.mjs");
var Route$1 = createFileRoute("/investor")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [
		{ title: "Investor & Kemitraan | Cetrofarm" },
		{
			name: "description",
			content: "Investasi di ekosistem pangan dan agrikultur Indonesia. Peluang kemitraan strategis dengan Cetrofarm."
		},
		{
			property: "og:title",
			content: "Investor & Kemitraan | Cetrofarm"
		},
		{
			property: "og:description",
			content: "Investasi di ekosistem pangan dan agrikultur Indonesia."
		}
	] })
});
var $$splitComponentImporter = () => import("./kontak-DeRV5WWh.mjs");
var Route = createFileRoute("/kontak")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [
		{ title: "Hubungi Kami | Cetrofarm" },
		{
			name: "description",
			content: "Hubungi Cetrofarm untuk pertanyaan, peluang kemitraan, atau informasi pemesanan bahan pangan segar."
		},
		{
			property: "og:title",
			content: "Hubungi Kami | Cetrofarm"
		},
		{
			property: "og:description",
			content: "Hubungi Cetrofarm untuk informasi pemesanan bahan pangan."
		}
	] })
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	FaqRoute: Route$2.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$4
	}),
	InvestorRoute: Route$1.update({
		id: "/investor",
		path: "/investor",
		getParentRoute: () => Route$4
	}),
	KontakRoute: Route.update({
		id: "/kontak",
		path: "/kontak",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { saveLead as n, router_exports as t };
