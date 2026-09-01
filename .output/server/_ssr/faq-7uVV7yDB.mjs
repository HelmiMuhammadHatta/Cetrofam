import { i as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ArrowUpRight, u as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-7uVV7yDB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FAQItem({ question, answer }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-forest/10 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setIsOpen(!isOpen),
			className: "w-full text-left py-5 flex justify-between items-center hover:text-wheat transition-colors font-bold text-forest text-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				size: 20,
				className: `transform transition-transform ${isOpen ? "rotate-180" : ""}`
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-forest/70 leading-relaxed",
				children: answer
			})
		})]
	});
}
function FAQPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full bg-cream min-h-screen pt-24 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4 max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block px-3 py-1 bg-wheat/20 text-wheat rounded-sm text-sm font-bold tracking-widest uppercase mb-4",
							children: "Pusat Bantuan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl md:text-5xl font-serif font-bold text-forest mb-4",
							children: "Pertanyaan Umum"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-forest/70",
							children: "Segala hal yang perlu Anda ketahui tentang berbelanja dan bermitra dengan Cetrofarm."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white p-8 md:p-10 rounded-sm shadow-sm border border-forest/5 mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
							question: "Apakah ada minimum order (MOQ) untuk pembelian produk?",
							answer: "Untuk pelanggan ritel (B2C), minimum order disesuaikan dengan agen terdekat di kota Anda. Untuk pelanggan B2B (Hotel, Restoran, Kafe, dan Supermarket), minimum order bervariasi mulai dari 50kg per pengiriman untuk menjamin efisiensi rantai dingin."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
							question: "Ke mana saja area distribusi Cetrofarm saat ini?",
							answer: "Saat ini fasilitas logistik rantai dingin kami mencakup pengiriman reguler ke seluruh area Jawa Tengah, Yogyakarta, dan perluasan ke beberapa titik di Jawa Timur serta Bali."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
							question: "Bagaimana cara menjadi agen atau mitra B2B?",
							answer: "Anda dapat mengunjungi halaman Investor & Kemitraan untuk mengajukan diri sebagai Offtaker B2B, atau hubungi tim sales kami melalui WhatsApp di +62 85 8603 00 111 untuk menjadi agen distribusi ritel."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
							question: "Apakah sayuran Cetrofarm bersertifikat organik?",
							answer: "Ya, lini Sayuran Segar kami dibudidayakan menggunakan standar organik tanpa pestisida kimia sintetis, dan telah melewati uji sertifikasi organik independen serta standar keamanan pangan BPOM."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
							question: "Berapa lama waktu pengiriman (lead time) setelah pemesanan?",
							answer: "Untuk kontrak B2B yang sudah berjalan, kami menerapkan sistem pengiriman harian (H+1 dari panen). Untuk pesanan insidental, lead time standar adalah 1-2 hari kerja."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-forest text-cream p-10 rounded-sm text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-serif font-bold mb-4",
							children: "Masih punya pertanyaan?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-cream/80 mb-8",
							children: "Tim customer relation kami siap membantu Anda menjawab pertanyaan lebih spesifik."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/kontak",
							className: "inline-flex items-center gap-2 px-8 py-3 bg-wheat text-forest font-bold rounded-sm hover:bg-white transition-colors",
							children: ["Hubungi Kami Sekarang ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
						})
					]
				})
			]
		})
	});
}
//#endregion
export { FAQPage as component };
