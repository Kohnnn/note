# Choose the release artifact and data publication contract

Type: grilling
Status: resolved
Blocked by: 01, 02

## Question

What immutable unit is built, validated, published, promoted, and rolled back for each release? Decide the canonical production host, whether app and packs ship together or through versioned object storage, release identifiers and hashes, canonical/public mirror ownership, duplicate full-replay policy, cache headers, atomic pointer update, approval owner, and rollback procedure.

## Answer

Adopt a two-stage contract. The current, canonical production bridge remains the manually promoted Netlify site at `https://f1-demo.netlify.app`: one locally built and fully verified `apps/web/out` artifact, deployed with `npx netlify deploy --prod --no-build --dir apps/web/out`. It is the entire release unit, including shell, data, models, posters, and the currently required full-replay fallback. Netlify's immutable deploy permalink plus the source commit and a SHA-256 manifest of `apps/web/out` form the bridge release record. Promotion is the completed Netlify production deploy; rollback repromotes the recorded prior successful deploy without rebuilding. The release operator, named in that record, alone approves production promotion and rollback.

The target canonical architecture is Cloudflare Pages for the small static shell and a public R2 custom domain for heavy immutable assets. The logical release is a pair: one Pages production deployment with one embedded `assetReleaseId`, and exactly one complete R2 namespace. `assetReleaseId` is `sha256-<64 lowercase hex>` over the canonical, sorted asset manifest entries excluding `release-manifest.json`; entries contain each relative key, byte length, MIME type, cache policy, and SHA-256. The manifest records that ID, schema version, source commit, build timestamp, and every entry. The paired release record additionally stores the Pages deployment ID and shell-output SHA-256. This is an auditable compatibility boundary, not a claimed cross-product atomic transaction.

The sole public target namespace is:

```text
releases/<assetReleaseId>/data/...
releases/<assetReleaseId>/models/...
releases/<assetReleaseId>/posters/...
releases/<assetReleaseId>/release-manifest.json
```

Pipeline-generated packs and local models remain canonical build inputs. `apps/web/public/{data,models,posters}` is only the present build projection; in the target it is replaced by the R2 release projection and is never edited or treated as an independently promotable mirror. Keep full `replay.json` files in each target prefix only while the shipped fallback still reads them. Removing that duplicate delivery is a separate compatibility migration, not a release-time optimization.

Target publication is ordered and fail-closed: build and run the current release gates; produce the manifest; upload only to a new prefix; read/list every object and verify exact key set, byte length, metadata, and SHA-256; then create a Pages deployment whose generated shell embeds only that verified ID. Probe its Pages preview and exact R2 URLs before production promotion. Post-promotion, probe core routes plus a JSON pack, frame chunk, both oversized GLBs, headers, repeat-request cache status, CORS, CSP, console errors, and release identity. A failed probe never updates production. There is no mutable `latest.json`, asset alias, Worker resolution endpoint, or pointer object in this contract; the Pages deployment is the sole small promotion pointer.

For target rollback, promote the prior verified Pages production deployment, which already embeds its prior asset ID. Never overwrite, delete, or alter an R2 release prefix during rollback. Retain pending, current, and prior verified prefixes at minimum; do not automate lifecycle deletion until the actual Pages rollback-retention window and an explicit retention period are recorded. Purge is incident recovery only, never a normal promotion step.

Cache policy is path-scoped: Pages HTML and release metadata use `Cache-Control: no-cache`; fingerprinted shell assets under `/_next/static/` use `public, max-age=31536000, immutable`; R2 objects under `/releases/<assetReleaseId>/` use `public, max-age=31536000, immutable` at upload and a Cache Everything rule limited to `/releases/*`. This explicitly caches JSON and avoids stale writes and cached 404s because release keys are never overwritten. R2 must use a production custom domain, exact Pages-origin `GET` CORS allowlisting, and shell CSP that permits that asset origin before migration.

`docs/deploy-guide.md` and `netlify.toml` accurately describe the bridge. `docs/cloudflare-first-deploy.md` and the direct-Pages parts of `docs/deployment.md` are stale for the measured artifact: Pages cannot publish the two GLBs above its 25 MiB static-asset limit, and the target needs asset-base code, CSP, CORS, and R2 verification before it can replace Netlify. Do not correct those docs in this planning ticket; the implementation work must update them with the migration.

Public R2 delivery is conditional on a written rights review for every generated pack, GLB, poster, derived work, source attribution, and redistribution restriction. No release may promote an unreviewed asset to the public namespace; restricted inputs require exclusion, an approved license, or a non-public delivery design.
