globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/file.svg": {
		"type": "image/svg+xml",
		"etag": "\"187-+zgO7/6H1QtZc4NmTAKYKWTQ0ow\"",
		"mtime": "2026-08-31T06:16:18.000Z",
		"size": 391,
		"path": "../public/file.svg"
	},
	"/globe.svg": {
		"type": "image/svg+xml",
		"etag": "\"40b-LrojsBpGczu4Qj5tOOv19+lavsU\"",
		"mtime": "2026-08-31T06:16:18.000Z",
		"size": 1035,
		"path": "../public/globe.svg"
	},
	"/next.svg": {
		"type": "image/svg+xml",
		"etag": "\"55f-Pz6VYiYSuYnFvWoDKZowjG88fms\"",
		"mtime": "2026-08-31T06:16:18.000Z",
		"size": 1375,
		"path": "../public/next.svg"
	},
	"/vercel.svg": {
		"type": "image/svg+xml",
		"etag": "\"80-zruIUtWMiIa+PpBRomlX9Cu4Lxo\"",
		"mtime": "2026-08-31T06:16:18.000Z",
		"size": 128,
		"path": "../public/vercel.svg"
	},
	"/window.svg": {
		"type": "image/svg+xml",
		"etag": "\"181-VMSODapsqjF/4bTEGQB/2T6Ujbk\"",
		"mtime": "2026-08-31T06:16:18.000Z",
		"size": 385,
		"path": "../public/window.svg"
	},
	"/assets/bg-newsletter.png": {
		"type": "image/png",
		"etag": "\"1a5-85lpe4Q54MJfzy9eZmw8Z27EUBs\"",
		"mtime": "2026-08-31T08:04:57.664Z",
		"size": 421,
		"path": "../public/assets/bg-newsletter.png"
	},
	"/assets/chevron-down-DEzS0T3S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"74-12Zasd3v3mP7gmNkFi0ccVg+JCw\"",
		"mtime": "2026-09-01T08:15:55.870Z",
		"size": 116,
		"path": "../public/assets/chevron-down-DEzS0T3S.js"
	},
	"/assets/faq-DsiGrYAw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e27-KhfFnucL+ncaWcoLAZXWD+IITU0\"",
		"mtime": "2026-09-01T08:15:55.871Z",
		"size": 3623,
		"path": "../public/assets/faq-DsiGrYAw.js"
	},
	"/assets/favicon.png": {
		"type": "image/png",
		"etag": "\"349-6vd79IYRetYNxkDweALiz8fyuxw\"",
		"mtime": "2026-08-31T08:04:57.669Z",
		"size": 841,
		"path": "../public/assets/favicon.png"
	},
	"/assets/index-i96OTxPs.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"81a5-dXz135g8TZRB4OyViMnplv/FAyI\"",
		"mtime": "2026-09-01T08:15:55.882Z",
		"size": 33189,
		"path": "../public/assets/index-i96OTxPs.css"
	},
	"/assets/investor-CzFd1mm2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c94-mtzWEFIll8itsNZBSTZN5kFq1Fg\"",
		"mtime": "2026-09-01T08:15:55.871Z",
		"size": 11412,
		"path": "../public/assets/investor-CzFd1mm2.js"
	},
	"/assets/index-Y523zgEJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ffdd-XfPHvmOHFQrE8wTQs4B67uioo7M\"",
		"mtime": "2026-09-01T08:15:55.846Z",
		"size": 327645,
		"path": "../public/assets/index-Y523zgEJ.js"
	},
	"/assets/kontak-BvlssZFy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fc5-vonP10emsssP5THmFS0U2D5vs/s\"",
		"mtime": "2026-09-01T08:15:55.880Z",
		"size": 4037,
		"path": "../public/assets/kontak-BvlssZFy.js"
	},
	"/assets/og-image.png": {
		"type": "image/png",
		"etag": "\"1a5-eVXvl0QX8ToIIH1+4MzWDOGkynY\"",
		"mtime": "2026-08-31T08:04:57.661Z",
		"size": 421,
		"path": "../public/assets/og-image.png"
	},
	"/assets/routes-B5BNFh1L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b91-HybD87UktkL18Bl8gtIpLKg3+aI\"",
		"mtime": "2026-09-01T08:15:55.881Z",
		"size": 19345,
		"path": "../public/assets/routes-B5BNFh1L.js"
	},
	"/assets/TractionChart-DOUrLS4X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"566ed-W0Y95jqpZz8vpnHdvLSOK99LIy4\"",
		"mtime": "2026-09-01T08:15:55.847Z",
		"size": 354029,
		"path": "../public/assets/TractionChart-DOUrLS4X.js"
	},
	"/assets/artikel-2.png": {
		"type": "image/png",
		"etag": "\"d961a-d8P9QSYpJnWY229BuOj6JztbsXk\"",
		"mtime": "2026-08-31T08:01:25.450Z",
		"size": 890394,
		"path": "../public/assets/artikel-2.png"
	},
	"/assets/artikel-3.png": {
		"type": "image/png",
		"etag": "\"eec43-jdDkEFlV2505usSmf3B+mU9+5hM\"",
		"mtime": "2026-08-31T08:01:38.922Z",
		"size": 977987,
		"path": "../public/assets/artikel-3.png"
	},
	"/assets/hero-panen-golden-hour.png": {
		"type": "image/png",
		"etag": "\"eb67f-aTgS+omjsYL9Zj+C3f44Lb2dke8\"",
		"mtime": "2026-08-31T08:00:07.810Z",
		"size": 964223,
		"path": "../public/assets/hero-panen-golden-hour.png"
	},
	"/assets/ilustrasi-rantai-pasok.png": {
		"type": "image/png",
		"etag": "\"b7996-87DjtNIINpk+3f3x+3MsKomT/hQ\"",
		"mtime": "2026-08-31T08:00:19.328Z",
		"size": 752022,
		"path": "../public/assets/ilustrasi-rantai-pasok.png"
	},
	"/assets/produk-bahan-pokok.png": {
		"type": "image/png",
		"etag": "\"ad44a-3qElmTeauroyJ62TTAkZVo2jy4s\"",
		"mtime": "2026-08-31T08:00:41.881Z",
		"size": 709706,
		"path": "../public/assets/produk-bahan-pokok.png"
	},
	"/assets/produk-protein-hewani.png": {
		"type": "image/png",
		"etag": "\"9f9e7-4STBk62L/bP2muNxgO40VM/vj58\"",
		"mtime": "2026-08-31T08:01:00.685Z",
		"size": 653799,
		"path": "../public/assets/produk-protein-hewani.png"
	},
	"/assets/produk-sayuran-segar.png": {
		"type": "image/png",
		"etag": "\"c6c4b-nGBQYh+/5KExreOwf0pyYL5O25w\"",
		"mtime": "2026-08-31T08:00:31.451Z",
		"size": 814155,
		"path": "../public/assets/produk-sayuran-segar.png"
	},
	"/assets/artikel-1.png": {
		"type": "image/png",
		"etag": "\"103aa3-G22vTZHZMIv+YAmLngKIFIehgnk\"",
		"mtime": "2026-08-31T08:01:12.356Z",
		"size": 1063587,
		"path": "../public/assets/artikel-1.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_l5X1pq = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_l5X1pq
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
