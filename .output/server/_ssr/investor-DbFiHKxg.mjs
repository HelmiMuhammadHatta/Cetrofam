import { i as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Handshake, d as ChartColumn, l as Download, s as Leaf, t as Users, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as saveLead } from "./router-D_WkdUd5.mjs";
import { t as TractionChart } from "./TractionChart-RRb50H4f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/investor-DbFiHKxg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FAQItem({ question, answer }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-forest/10 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setIsOpen(!isOpen),
			className: "w-full text-left py-4 flex justify-between items-center hover:text-wheat transition-colors font-bold text-forest",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				size: 20,
				className: `transform transition-transform ${isOpen ? "rotate-180" : ""}`
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-forest/70",
				children: answer
			})
		})]
	});
}
function InvestorPage() {
	const [formStatus, setFormStatus] = (0, import_react.useState)("idle");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormStatus("loading");
		const formData = new FormData(e.currentTarget);
		if (window.dataLayer) window.dataLayer.push({ event: "submit_investor_form" });
		try {
			if ((await saveLead({
				name: formData.get("name"),
				email: formData.get("email"),
				phone: formData.get("phone"),
				leadType: "investor",
				message: `Nominal: ${formData.get("nominal")} - ${formData.get("message")}`
			})).success) {
				setFormStatus("success");
				e.currentTarget.reset();
			} else setFormStatus("error");
		} catch (err) {
			setFormStatus("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full bg-cream min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-forest text-cream pt-24 pb-32 relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 right-0 opacity-10 pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "600",
						height: "600",
						viewBox: "0 0 100 100",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "100",
							cy: "0",
							r: "80",
							fill: "currentColor"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container mx-auto px-4 relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-4xl mx-auto text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block px-3 py-1 bg-wheat/20 text-wheat rounded-sm text-sm font-bold tracking-widest uppercase mb-6",
								children: "Peluang Investasi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-5xl md:text-6xl font-serif font-bold leading-tight mb-6",
								children: ["Investasi di Masa Depan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-wheat italic",
									children: "Pangan Indonesia."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg md:text-xl text-cream/80 mb-10 leading-relaxed font-light",
								children: "Membangun rantai pasok agrikultur yang efisien, transparan, dan menguntungkan sejak 2018. Tumbuh bersama ekosistem yang terintegrasi."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap justify-center gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/assets/company-profile.pdf",
									target: "_blank",
									onClick: () => window.dataLayer && window.dataLayer.push({ event: "download_pitch_deck" }),
									className: "px-8 py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-white hover:shadow-lg transition-all flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 18 }), " Unduh Company Profile (PDF)"]
								})
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 -mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container mx-auto px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-4 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white p-6 rounded-sm shadow-xl border border-forest/5 hover:-translate-y-1 transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-forest font-bold mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
										size: 20,
										className: "text-wheat"
									}), " Pasar Tumbuh"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-forest/70 text-sm",
									children: "Permintaan stabil pada sektor ritel dan HORECA untuk bahan pangan segar berkualitas."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white p-6 rounded-sm shadow-xl border border-forest/5 hover:-translate-y-1 transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-forest font-bold mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
										size: 20,
										className: "text-wheat"
									}), " Terintegrasi"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-forest/70 text-sm",
									children: "Kendali penuh dari hulu (petani) hingga hilir (distribusi) untuk efisiensi margin maksimal."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white p-6 rounded-sm shadow-xl border border-forest/5 hover:-translate-y-1 transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-forest font-bold mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, {
										size: 20,
										className: "text-wheat"
									}), " Berpengalaman"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-forest/70 text-sm",
									children: "Tim pendiri dan praktisi agrikultur yang telah mengeksekusi model ini sejak 2018."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white p-6 rounded-sm shadow-xl border border-forest/5 hover:-translate-y-1 transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-forest font-bold mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
										size: 20,
										className: "text-wheat"
									}), " Dampak Sosial"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-forest/70 text-sm",
									children: "Setiap Rupiah investasi Anda meningkatkan taraf hidup 210+ mitra peternak lokal."
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container mx-auto px-4 max-w-5xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-serif font-bold text-forest mb-4",
							children: "Traksi & Pertumbuhan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-forest/70",
							children: "Pertumbuhan yang konsisten diukur dari volume tonase dan pendapatan."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TractionChart, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 bg-white border-y border-forest/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container mx-auto px-4 max-w-5xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-serif font-bold text-forest mb-12",
						children: "Model Bisnis Rantai Pasok"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/ilustrasi-rantai-pasok.png",
						alt: "Diagram Alur Rantai Pasok",
						className: "w-full max-w-4xl mx-auto rounded-sm shadow-lg"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 bg-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container mx-auto px-4 max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-serif font-bold text-forest mb-8 text-center",
						children: "Pertanyaan Seputar Investasi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white p-8 rounded-sm shadow-sm border border-forest/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
								question: "Apa struktur investasi yang ditawarkan?",
								answer: "Saat ini kami menawarkan instrumen ekuitas (saham) dan skema utang konversi (convertible note) bergantung pada putaran pendanaan."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
								question: "Berapa minimum nominal indikatif investasi?",
								answer: "Minimum ukuran tiket bervariasi. Untuk putaran pra-seri A kami biasanya mulai dari ekuivalen Rp 500 Juta."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
								question: "Bagaimana pelaporan berkala dilakukan?",
								answer: "Investor mendapatkan laporan metrik keuangan dan operasional setiap kuartal, serta laporan tahunan teraudit."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
								question: "Kapan timeline putaran pendanaan ini ditutup?",
								answer: "Target penutupan putaran (closing) akan dilakukan pada Q3 2026."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
								question: "Apa opsi exit strategy bagi investor?",
								answer: "Opsi exit meliputi M&A dengan pemain logistik yang lebih besar, secondary market sale pada putaran berikutnya, atau buyback dari perusahaan (syarat dan ketentuan berlaku)."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "form-diskusi",
				className: "py-24 bg-forest text-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container mx-auto px-4 max-w-4xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-4xl font-serif font-bold mb-4",
								children: "Jadwalkan Diskusi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/80 mb-8 leading-relaxed",
								children: "Tinggalkan detail Anda. Tim representatif kami akan menghubungi Anda secara privat dalam 1x24 jam untuk membahas peluang kemitraan strategis."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/6285860300111?text=Halo%20Cetrofarm,%20saya%20tertarik%20membahas%20peluang%20investasi.",
								target: "_blank",
								rel: "noreferrer",
								onClick: () => window.dataLayer && window.dataLayer.push({ event: "click_wa_investor" }),
								className: "inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-sm hover:opacity-90 transition-opacity",
								children: "Hubungi via WhatsApp"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-white text-forest p-8 rounded-sm",
							children: formStatus === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-16 h-16 bg-wheat/20 rounded-full flex items-center justify-center mx-auto mb-4 text-forest",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { size: 32 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-bold mb-2",
										children: "Terima Kasih!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-forest/70",
										children: "Pengajuan Anda telah kami terima. Kami akan segera menghubungi Anda kembali."
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-sm font-bold mb-1",
										children: "Nama Lengkap *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "name",
										required: true,
										className: "w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-sm font-bold mb-1",
										children: "Email *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										name: "email",
										required: true,
										className: "w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-sm font-bold mb-1",
										children: "No. HP / WhatsApp *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										name: "phone",
										required: true,
										className: "w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-sm font-bold mb-1",
										children: "Nominal Indikatif *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "nominal",
										required: true,
										className: "w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Pilih Rentang"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "< 100 Juta",
												children: "< Rp 100 Juta"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "100 - 500 Juta",
												children: "Rp 100 Juta - Rp 500 Juta"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "500 Juta - 1 Miliar",
												children: "Rp 500 Juta - Rp 1 Miliar"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "> 1 Miliar",
												children: "> Rp 1 Miliar"
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-sm font-bold mb-1",
										children: "Pesan (Opsional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										rows: 3,
										className: "w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30"
									})] }),
									formStatus === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-red-600 text-sm font-bold",
										children: "Terjadi kesalahan. Silakan coba lagi."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: formStatus === "loading",
										className: "w-full py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-wheat/80 transition-colors flex items-center justify-center gap-2",
										children: formStatus === "loading" ? "Mengirim..." : "Kirim Pengajuan"
									})
								]
							})
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { InvestorPage as component };
