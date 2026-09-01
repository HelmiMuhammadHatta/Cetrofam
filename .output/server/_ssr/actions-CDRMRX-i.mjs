import { n as createServerFn, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
import { a as serial, i as text, n as pgTable, o as src_default, r as timestamp, t as drizzle } from "../_libs/drizzle-orm+postgres.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/actions-CDRMRX-i.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var schema_exports = /* @__PURE__ */ __exportAll({ leads: () => leads });
var leads = pgTable("leads", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	phone: text("phone"),
	leadType: text("lead_type").notNull(),
	message: text("message"),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
var connectionString = process.env.DATABASE_URL;
var client = src_default(connectionString, { prepare: false });
var db = drizzle(client, { schema: schema_exports });
var saveLead_createServerFn_handler = createServerRpc({
	id: "b269b7b1feff1aa2f8e13ef84501dc64cb2e2b1ffc655ecff782e63e3085735e",
	name: "saveLead",
	filename: "src/server/actions.ts"
}, (opts) => saveLead.__executeServer(opts));
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
}).handler(saveLead_createServerFn_handler, async (ctx) => {
	try {
		await db.insert(leads).values({
			name: ctx.data.name,
			email: ctx.data.email,
			phone: ctx.data.phone || null,
			leadType: ctx.data.leadType,
			message: ctx.data.message || null
		});
		return { success: true };
	} catch (error) {
		console.error("Failed to save lead:", error);
		return {
			success: false,
			error: "Failed to save to database"
		};
	}
});
//#endregion
export { saveLead_createServerFn_handler, __exportAll as t };
