/**
 * Post-build script — runs Pagefind search indexing on the built output.
 *
 * Usage: node scripts/postbuild.mjs
 * Called automatically after `astro build` via the `build` script in package.json.
 */

async function main() {
	console.log("[postbuild] Indexing search with Pagefind...");

	try {
		const { createIndex } = await import("pagefind");

		const { index, errors } = await createIndex();

		if (errors?.length) {
			console.error("[postbuild] Pagefind warnings:", errors);
		}

		if (!index) {
			throw new Error("Failed to create Pagefind index");
		}

		const { pageCount } = await index.addDirectory({ path: "dist" });
		console.log(`[postbuild] ✓ Indexed ${pageCount} page(s).`);

		await index.writeFiles({ outputPath: "dist/pagefind" });
		console.log("[postbuild] ✓ Pagefind index written to dist/pagefind/.");
	} catch (err) {
		console.error("[postbuild] ✗ Pagefind indexing failed:", err.message);
		process.exit(1);
	}
}

main();
