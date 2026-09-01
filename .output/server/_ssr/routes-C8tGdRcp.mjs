import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as MoveRight, l as Download, m as ArrowRight, n as ShieldCheck, s as Leaf, t as Users } from "../_libs/lucide-react.mjs";
import { t as TractionChart } from "./TractionChart-RRb50H4f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C8tGdRcp.js
var import_jsx_runtime = require_jsx_runtime();
var metrics = {
	farmers: "210+",
	landArea: "340 ha",
	productLines: "3 lini",
	established: "2018",
	harvestVolume: "150 ton/bulan",
	distributionReach: "Jawa & Bali"
};
var products = [
	{
		id: "sayuran-segar",
		title: "Sayuran Segar",
		desc: "Dipanen langsung dari kebun dengan standar organik. Kualitas ekspor.",
		image: "/assets/produk-sayuran-segar.png"
	},
	{
		id: "bahan-pokok",
		title: "Bahan Pokok",
		desc: "Beras Rindjing dan hasil bumi berkualitas tinggi untuk stabilitas dapur Anda.",
		image: "/assets/produk-bahan-pokok.png"
	},
	{
		id: "protein-hewani",
		title: "Protein Hewani",
		desc: "Daging ayam dan telur dari peternakan terstandarisasi bebas residu antibiotik.",
		image: "/assets/produk-protein-hewani.png"
	}
];
var valueProps = [
	{
		title: "Traceability",
		desc: "Melacak perjalanan pangan Anda dari bibit, lahan, hingga meja makan dengan transparansi penuh."
	},
	{
		title: "Standar Mutu",
		desc: "Penyortiran ketat (Grade A) memastikan setiap produk memenuhi standar kesehatan dan kebersihan."
	},
	{
		title: "Dampak Sosial",
		desc: "Pemberdayaan 210+ petani dengan bagi hasil adil dan transfer teknologi agrikultur berkelanjutan."
	}
];
var steps = [
	{
		num: "01",
		title: "Pendampingan Petani",
		desc: "Edukasi budidaya dan suplai sarana pertanian terpadu."
	},
	{
		num: "02",
		title: "Panen & Standarisasi",
		desc: "Panen pada tingkat kematangan optimal dan quality control."
	},
	{
		num: "03",
		title: "Distribusi Terjaga",
		desc: "Sistem logistik rantai dingin meminimalkan kerusakan pangan."
	},
	{
		num: "04",
		title: "Sampai ke Keluarga",
		desc: "Bahan pangan segar nan bernutrisi tiba di meja Anda."
	}
];
var testimonials = [
	{
		quote: "Kualitas sayuran organik Cetrofarm sangat konsisten, memudahkan kami dalam menjaga standar restoran.",
		author: "Chef Budi",
		role: "Head Chef, Hotel Semarang"
	},
	{
		quote: "Sebagai offtaker, kami merasa aman karena kepastian suplai beras selalu terpenuhi tepat waktu.",
		author: "Ibu Rina",
		role: "Distributor Retail"
	},
	{
		quote: "Berkat pendampingan Cetrofarm, hasil panen dan pendapatan keluarga saya meningkat signifikan.",
		author: "Pak Yanto",
		role: "Petani Binaan"
	}
];
var articles = [
	{
		title: "Masa Depan Pertanian Organik di Jawa Tengah",
		slug: "masa-depan-pertanian-organik",
		image: "/assets/artikel-1.png",
		date: "12 Ags 2026"
	},
	{
		title: "Mengenal Beras Rindjing: Varian Unggulan",
		slug: "mengenal-beras-rindjing",
		image: "/assets/artikel-2.png",
		date: "05 Ags 2026"
	},
	{
		title: "Pentingnya Traceability dalam Rantai Pasok Pangan",
		slug: "traceability-rantai-pasok",
		image: "/assets/artikel-3.png",
		date: "28 Jul 2026"
	}
];
function Homepage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative w-full h-[90vh] min-h-[600px] flex items-center pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/hero-panen-golden-hour.png",
							alt: "Petani memanen saat golden hour",
							className: "w-full h-full object-cover opacity-80"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-forest/90 to-forest/20 mix-blend-multiply z-10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-forest/50 via-transparent to-cream z-10" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container mx-auto px-4 relative z-10 text-cream",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-5xl md:text-7xl font-serif font-bold leading-tight mb-6",
								children: ["Membangun Ketahanan Pangan, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-wheat italic",
									children: "Satu Panen Sekaligus."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg md:text-xl text-cream/90 mb-10 max-w-2xl font-light leading-relaxed",
								children: "Cetrofarm merawat rantai pasok pangan dari petani binaan langsung ke meja Anda. Memberikan kepastian bagi offtaker dan kesejahteraan bagi petani sejak 2018."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-4 mb-16 relative z-20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/profil",
									className: "px-6 py-3 bg-wheat text-forest font-bold rounded-sm hover:bg-white hover:shadow-lg transition-all flex items-center gap-2",
									children: ["Lihat Profil Perusahaan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/investor",
									className: "px-6 py-3 bg-transparent border-2 border-cream text-cream font-bold rounded-sm hover:bg-cream/10 transition-all",
									children: "Peluang Investasi"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-cream/20 relative z-20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-4xl font-serif font-bold text-wheat",
										children: metrics.farmers
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-cream/90 font-medium uppercase tracking-wider mt-1",
										children: "Mitra Peternak"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-4xl font-serif font-bold text-wheat",
										children: metrics.landArea
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-cream/90 font-medium uppercase tracking-wider mt-1",
										children: "Lahan Kelola"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-4xl font-serif font-bold text-wheat",
										children: metrics.productLines
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-cream/90 font-medium uppercase tracking-wider mt-1",
										children: "Lini Bisnis"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-4xl font-serif font-bold text-wheat",
										children: metrics.established
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-cream/90 font-medium uppercase tracking-wider mt-1",
										children: "Tahun Berdiri"
									})] })
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-cream py-10 border-b border-forest/10 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container mx-auto px-4 mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-forest/60 text-sm font-medium uppercase tracking-widest",
						children: "Dipercaya oleh mitra strategis & sertifikasi mutu"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex overflow-x-hidden group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24 opacity-60 grayscale transition-all group-hover:grayscale-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-serif text-2xl font-bold flex items-center gap-2 text-forest mx-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 28 }), " Sertifikasi Organik"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-serif text-2xl font-bold flex items-center gap-2 text-forest mx-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 28 }), " BPOM RI Teruji"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl font-bold text-forest mx-4",
								children: "Ritel Modern Partner"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl font-bold text-forest mx-4",
								children: "Hotel & Restoran"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl font-bold text-forest mx-4",
								children: "Distributor Regional"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl font-bold text-forest mx-4",
								children: "Mitra Ekspor"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24 opacity-60 grayscale transition-all group-hover:grayscale-0 absolute top-0",
						style: { transform: "translateX(100%)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-serif text-2xl font-bold flex items-center gap-2 text-forest mx-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 28 }), " Sertifikasi Organik"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-serif text-2xl font-bold flex items-center gap-2 text-forest mx-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 28 }), " BPOM RI Teruji"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl font-bold text-forest mx-4",
								children: "Ritel Modern Partner"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl font-bold text-forest mx-4",
								children: "Hotel & Restoran"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl font-bold text-forest mx-4",
								children: "Distributor Regional"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl font-bold text-forest mx-4",
								children: "Mitra Ekspor"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 bg-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container mx-auto px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-serif font-bold text-forest mb-4",
							children: "Membawa Alam Lebih Dekat"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-forest/70",
							children: "Kami tidak hanya menanam, kami merawat sebuah ekosistem kehidupan yang memberikan nilai tambah di setiap tahapnya."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-12",
						children: valueProps.map((prop, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-16 h-16 bg-forest/5 rounded-full flex items-center justify-center text-forest mb-6",
									children: idx === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { size: 28 }) : idx === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 28 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 28 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-serif font-bold text-forest mb-3",
									children: prop.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-forest/70 leading-relaxed",
									children: prop.desc
								})
							]
						}, idx))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 bg-forest text-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container mx-auto px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row gap-16 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:w-1/2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-4xl font-serif font-bold mb-6",
									children: "Ekosistem Rantai Pasok Terintegrasi"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-cream/80 text-lg mb-8 leading-relaxed",
									children: "Menghubungkan kerja keras petani langsung ke meja makan keluarga Anda dengan memotong rantai distribusi yang tidak efisien."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-8",
									children: steps.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl font-serif text-wheat font-bold",
											children: step.num
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xl font-bold mb-1",
											children: step.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-cream/70",
											children: step.desc
										})] })]
									}, idx))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:w-1/2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/ilustrasi-rantai-pasok.png",
								alt: "Alur Ekosistem Rantai Pasok",
								className: "rounded-sm w-full shadow-2xl"
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 bg-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container mx-auto px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-end mb-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-4xl font-serif font-bold text-forest mb-4",
								children: "Lini Produk Kami"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-forest/70",
								children: "Kualitas premium untuk kebutuhan keluarga maupun offtaker B2B."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/produk",
								className: "hidden md:flex items-center gap-2 text-forest font-medium hover:text-wheat transition-colors",
								children: ["Lihat Semua Katalog ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid md:grid-cols-3 gap-8",
							children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group block bg-white rounded-sm overflow-hidden border border-forest/10 hover:shadow-xl transition-all h-full flex flex-col cursor-pointer",
								onClick: () => window.location.href = `/produk#${p.id}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-64 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.title,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-8 flex flex-col h-[calc(100%-16rem)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-serif font-bold text-forest mb-3",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-forest/70 mb-8 flex-grow",
											children: p.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-3 mt-auto",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-wheat font-medium flex items-center gap-2 group-hover:gap-4 transition-all",
												children: ["Pelajari Lebih Lanjut ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `https://wa.me/6285860300111?text=Halo%20Cetrofarm,%20saya%20tertarik%20meminta%20penawaran%20untuk%20produk%20${p.title}.`,
												target: "_blank",
												rel: "noreferrer",
												onClick: (e) => {
													e.stopPropagation();
													window.dataLayer && window.dataLayer.push({
														event: "click_wa_product",
														product: p.title
													});
												},
												className: "w-full text-center py-2 border border-forest/20 text-forest font-bold rounded-sm hover:bg-forest hover:text-cream transition-colors text-sm",
												children: "Minta Penawaran (B2B)"
											})]
										})
									]
								})]
							}, p.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 text-center md:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/produk",
								className: "inline-flex items-center gap-2 text-forest font-medium border-b border-forest pb-1",
								children: ["Lihat Semua Katalog ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 bg-forest/5 border-y border-forest/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container mx-auto px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-16 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-serif font-bold text-forest mb-8",
							children: "Standar & Traksi Kami"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
									className: "text-wheat shrink-0 mt-1",
									size: 24
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-forest text-lg",
									children: "100% Organik & Bebas Kimia"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-forest/70 mt-1",
									children: "Menggunakan pupuk alami dan pestisida nabati buatan petani binaan sendiri."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "text-wheat shrink-0 mt-1",
									size: 24
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-forest text-lg",
									children: "Quality Control Ketat"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-forest/70 mt-1",
									children: "Setiap hasil panen melewati proses penyortiran di warehouse terpusat."
								})] })]
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white p-8 rounded-sm border border-forest/10 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold text-forest mb-6",
								children: "Pertumbuhan Ekosistem (Per Bulan)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-forest font-medium",
										children: "Volume Panen"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-forest font-bold",
										children: metrics.harvestVolume
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full bg-forest/10 h-2 rounded-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-forest w-[80%] h-full rounded-full" })
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-forest font-medium",
										children: "Jangkauan Distribusi"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-forest font-bold",
										children: metrics.distributionReach
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full bg-forest/10 h-2 rounded-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-wheat w-[65%] h-full rounded-full" })
								})] })]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 bg-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container mx-auto px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-serif font-bold text-center text-forest mb-16",
							children: "Dipercaya oleh Mereka"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid md:grid-cols-3 gap-8",
							children: testimonials.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white p-8 border border-forest/10 rounded-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-wheat mb-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "40",
											height: "40",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											xmlns: "http://www.w3.org/2000/svg",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.017 21L16.411 14.9433H11.4571V3H21V14.9433L18.4343 21H14.017ZM3.56 21L5.954 14.9433H1V3H10.5429V14.9433L7.97714 21H3.56Z" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-forest/80 text-lg mb-6 italic leading-relaxed",
										children: [
											"\"",
											t.quote,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-forest",
										children: t.author
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-forest/60",
										children: t.role
									})] })
								]
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center mt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/testimoni",
								className: "inline-block border border-forest text-forest px-6 py-2 rounded-sm hover:bg-forest hover:text-cream transition-colors font-medium",
								children: "Lihat Semua Testimoni"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 bg-forest text-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:w-1/2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-4xl font-serif font-bold mb-6",
								children: "Peluang Tumbuh Bersama"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/80 text-lg mb-8 leading-relaxed",
								children: "Model bisnis yang teruji dengan margin offtaker stabil, skalabilitas perluasan lahan, serta dukungan data analitik pertanian. Bergabunglah sebagai mitra strategis untuk memperkuat ketahanan pangan nasional."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/investor",
									className: "px-6 py-3 bg-wheat text-forest font-medium rounded-sm hover:bg-white transition-colors",
									children: "Baca Profil untuk Investor"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/unduh-cp",
									className: "px-6 py-3 border border-cream/30 text-cream font-medium rounded-sm hover:bg-cream/10 transition-colors flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 18 }), " Unduh Company Profile (PDF)"]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:w-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TractionChart, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 bg-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container mx-auto px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-end mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-serif font-bold text-forest",
							children: "Kabar Terbaru"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/artikel",
							className: "hidden md:flex items-center gap-2 text-forest font-medium hover:text-wheat transition-colors",
							children: ["Lihat Semua Artikel ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-8",
						children: articles.map((art, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `/artikel/${art.slug}`,
							className: "group block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden rounded-sm mb-4 h-56 border border-forest/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: art.image,
										alt: art.title,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-wheat font-medium mb-2",
									children: art.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold text-forest mb-2 group-hover:text-forest/80 transition-colors",
									children: art.title
								})
							]
						}, idx))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative py-16 text-cream border-y border-forest/10",
				style: {
					backgroundImage: "url(/assets/bg-newsletter.png)",
					backgroundSize: "cover",
					backgroundPosition: "center"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-forest/80 mix-blend-multiply" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container mx-auto px-4 text-center relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-serif font-bold mb-4",
							children: "Tetap Terhubung dengan Inovasi Pangan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-8 max-w-xl mx-auto",
							children: "Dapatkan Katalog Produk, update panen musim ini, dan Ringkasan Investasi langsung ke inbox Anda."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "max-w-md mx-auto flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								placeholder: "Alamat Email Anda",
								required: true,
								className: "flex-1 px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:ring-2 focus:ring-forest bg-white"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-6 py-3 bg-forest text-cream font-medium rounded-sm hover:bg-forest/90 transition-colors",
								children: "Dapatkan"
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Homepage as component };
