import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CartesianGrid, i as Area, n as YAxis, o as Tooltip, r as XAxis, s as ResponsiveContainer, t as AreaChart } from "../_libs/recharts+victory-vendor.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TractionChart-RRb50H4f.js
var import_jsx_runtime = require_jsx_runtime();
var data = [
	{
		quarter: "Q1 2025",
		revenue: 1.2,
		volume: 80
	},
	{
		quarter: "Q2 2025",
		revenue: 1.5,
		volume: 95
	},
	{
		quarter: "Q3 2025",
		revenue: 1.8,
		volume: 110
	},
	{
		quarter: "Q4 2025",
		revenue: 2.3,
		volume: 130
	},
	{
		quarter: "Q1 2026",
		revenue: 2.8,
		volume: 150
	}
];
function TractionChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full h-80 bg-white p-6 rounded-sm shadow-xl border border-forest/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold text-forest",
				children: "Traksi Keuangan & Volume Panen"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-forest/70",
				children: "Pertumbuhan konsisten (dalam Miliar IDR & Tonase)"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "80%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data,
				margin: {
					top: 10,
					right: 30,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "colorRevenue",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "5%",
							stopColor: "#173D2B",
							stopOpacity: .8
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "95%",
							stopColor: "#173D2B",
							stopOpacity: 0
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "colorVolume",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "5%",
							stopColor: "#C9A227",
							stopOpacity: .8
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "95%",
							stopColor: "#C9A227",
							stopOpacity: 0
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "quarter",
						stroke: "#173D2B",
						opacity: .5,
						fontSize: 12
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						stroke: "#173D2B",
						opacity: .5,
						fontSize: 12
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						strokeDasharray: "3 3",
						vertical: false,
						opacity: .2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						contentStyle: {
							backgroundColor: "#FAF7F0",
							border: "none",
							borderRadius: "4px",
							color: "#173D2B"
						},
						itemStyle: {
							color: "#173D2B",
							fontWeight: "bold"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "revenue",
						name: "Revenue (Miliar IDR)",
						stroke: "#173D2B",
						fillOpacity: 1,
						fill: "url(#colorRevenue)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "volume",
						name: "Volume (Ton)",
						stroke: "#C9A227",
						fillOpacity: 1,
						fill: "url(#colorVolume)"
					})
				]
			})
		})]
	});
}
//#endregion
export { TractionChart as t };
