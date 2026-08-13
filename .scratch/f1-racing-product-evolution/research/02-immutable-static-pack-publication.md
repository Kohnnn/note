# Research: Immutable Static Pack Publication

**Wayfinder research:** Research immutable static pack publication  
**Scope:** research only; no product, map, ticket, deployment, credential, or Git changes.  
**Access date for every external source:** 2026-08-11.  
**Method:** local repository measurement first; provider statements below are limited to current official Netlify and Cloudflare documentation. A claim is marked **not confirmable** where those sources do not establish it.

## Decision-ready recommendation

Publish **one immutable, content-addressed asset release prefix in Cloudflare R2**, then promote it with **one small Cloudflare Pages shell deploy that has the asset release ID embedded at build time**. Treat that pair as one logical release, but recognize that the provider documentation does **not** establish a cross-product atomic transaction. The safe ordering is therefore:

1. build and validate locally;
2. upload every external asset to a new, never-overwritten R2 prefix such as `releases/<release-id>/`;
3. verify the uploaded release manifest and required object count/checksums through the storage API;
4. deploy the small Pages shell that refers only to that complete release ID;
5. smoke-test the production Pages deployment and the exact asset URLs;
6. retain the old prefix until the Pages rollback window and an explicit retention policy permit deletion.

The release unit is **not** an individual chunk, GLB, or mutable `latest.json`. It is a **complete asset namespace plus its referencing shell deploy**. Pages promotion/rollback is atomic and immediate within Pages; R2 writes are strongly consistent per object, so upload-before-reference avoids mixed pack versions. Roll back by rolling Pages back to the prior production deployment; that deployment must embed the prior R2 release ID. Do not overwrite R2 keys, and do not promote with a mutable external manifest.

This is the smallest release unit that preserves the app/data compatibility boundary while removing approximately 1.69 GiB of heavy public data and models from each Pages deploy. It is recommended over retaining the current monolithic Netlify artifact because the present artifact is 1.76 GiB, replays are shipped twice as full files and chunks, and one current GLB exceeds Cloudflare Pages' 25 MiB per-asset limit.

## Repository architecture and measurements

### Delivery architecture

| Finding | Evidence | Implication |
| --- | --- | --- |
| The web app is a Next.js static export. | `apps/web/next.config.mjs:9` sets `output: "export"`; `apps/web/next.config.mjs:10` sets trailing slashes. | A prebuilt static shell can go to either Netlify or Pages. |
| Netlify currently publishes the full static output. | `netlify.toml:1-4` runs `npm ci && npm run build`, publishes `apps/web/out`, and disables normal source builds with `ignore = "exit 0"`; `docs/deploy-guide.md:97-105` directs manual `--no-build` deploy of that exact directory. | Current production unit is one artifact, not independently promoted app/data assets. |
| The current operational guide calls the production frontend Netlify. | `docs/deploy-guide.md:3-7`. | This is the baseline comparison, despite older Cloudflare-oriented design notes. |
| Cloudflare is already a planned surface. | `workers/metadata-api/wrangler.jsonc:3-12` defines a Worker and a Pages `ASSET_ORIGIN`; `docs/deployment.md:9-17` recommends Pages, R2, and Workers. | Migration does not introduce a new platform family or package dependency. |
| Pack data is duplicated into both a pipeline source tree and the web public tree. | `pipeline/export/src/generate-sample-data.mjs:443-445` writes every JSON payload to both roots; `pipeline/export/src/generate-sample-data.mjs:448-465` recursively copies the season directory into public output. | The deployed output includes the public mirror; the source copy is release-input duplication, not necessarily a public-delivery requirement. |
| The web static pages read packs at build time from local files. | `apps/web/src/lib/data.ts:1-2` imports local filesystem APIs; `apps/web/src/app/replay/[season]/[grandPrix]/[session]/page.tsx:46-67` reads manifest, summary, replay metadata, and first chunk while building static pages. | Keep local release inputs during the build; externalizing public runtime assets need not prevent static generation. |
| Browser clients currently use same-origin absolute pack paths. | `apps/web/src/components/replay/replay-route-client.tsx:80-90`, `111-130`; `apps/web/src/components/live/live-route-client.tsx:210-235`. | An external asset origin needs a later code/config change; it cannot be activated only by changing hosting settings. |
| The app only falls back to a full replay when chunk metadata is missing. | `apps/web/src/app/replay/[season]/[grandPrix]/[session]/page.tsx:52-67`; `apps/web/src/app/race-desk/page.tsx:26-43`. | Chunk-only delivery is already the normal path and is the correct next packaging target. |
| Full-race loading caps chunk concurrency at four. | `apps/web/src/components/replay/replay-chunks.ts:6,24-49`. | External asset delivery must sustain parallel chunk reads, but no proxy is needed. |
| Pack browser caching is currently short-lived, while `_next` is immutable. | `apps/web/public/_headers:1-17`. | Immutable release paths need a later cache policy change; current 60–86,400 second pack/model TTLs do not exploit content-addressed URLs. |
| The current Content Security Policy allows only self plus the API endpoint for connections. | `apps/web/public/_headers:19-24`. | An external asset hostname requires a later `connect-src` change; model/image loading may require additional CSP review. |

### Measured release contents

Measurements run against the working tree on 2026-08-11; binary bytes are exact and GiB use `2^30` bytes.

| Surface | Files | Bytes | GiB | Result |
| --- | ---: | ---: | ---: | --- |
| `apps/web/out` current deploy artifact | 2,507 | 1,889,381,037 | 1.760 | Current single Netlify release artifact. |
| `apps/web/public/data` | 1,564 | 1,617,289,319 | 1.506 | 85.6% of the emitted artifact. |
| `apps/web/public/models` | 9 | 198,052,528 | 0.184 | 10.5% of the emitted artifact. |
| `apps/web/public/data/packs/seasons` full `replay.json` | 82 | 799,603,723 | 0.745 | First full replay copy. |
| same path, `replay.frames/*` chunks | 617 | 774,807,269 | 0.722 | Second replay representation. |
| same path, replay metadata/laps/race-control derivatives | 246 | 23,930,161 | 0.022 | Supporting replay derivatives. |
| same path, all remaining session files | 570 | 17,498,585 | 0.016 | Manifests, summaries, compare, strategy, and other packs. |

The full replay plus frame chunks total **1.467 GiB**, 97.4% of public pack bytes. The chunk generator intentionally writes all three derivative forms and retains the original full replay: `pipeline/export/src/split-replay-packs.mjs:73-121`. The full replay is not needed for the normal static-page initialization path, but it remains a compatibility fallback.

Large GLBs are also material:

| Object | Size | Hosting consequence |
| --- | ---: | --- |
| `apps/web/public/models/2025/mclaren/mcl39-original.glb` | 122,044,944 bytes / 116.39 MiB | Exceeds Cloudflare Pages' 25 MiB static-asset limit. |
| `apps/web/public/models/2025/mclaren/mcl39.glb` | 38,003,860 bytes / 36.24 MiB | Also exceeds that Pages limit. |
| Seven remaining GLBs | 2.68–9.94 MiB each | Each fits Pages' single-file limit, but belongs with large immutable assets for consistent release behavior. |

## Provider facts that materially affect the choice

### Netlify

- **Atomic publication:** Netlify says files are compared with the prior deploy, no change goes live before all uploads finish, and the completed version immediately goes live on the CDN. This is a direct match for the current single-artifact release. [Deploy overview](https://docs.netlify.com/deploy/deploy-overview.md#how-atomic-deploys-work).
- **Immutable version address:** every successful deploy has a deploy permalink whose content never changes. [Deploy overview](https://docs.netlify.com/deploy/deploy-overview.md#branches-and-deploys).
- **Rollback:** publishing a previous successful deploy does not create a new deploy and is instantaneous. Auto-publishing a later Git-triggered production deploy can overwrite the rollback. [Manage deploys](https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview.md#rollbacks).
- **Rollback retention risk:** automatic deploy deletion is 30 days by default or 90 days on paid plans, with exceptions for the published, most recent successful production, and most recent successful branch deploy. Enterprise can change retention up to 365 days. Old deleted deploys and permalinks are unavailable. [Manage deploys](https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview.md#automatic-deploy-deletion).
- **Cache behavior:** static assets are globally cached and automatically invalidated when a deploy changes them. Netlify's static default is CDN `s-maxage=31536000` and browser `max-age=0`; each new deploy invalidates cache for that deploy context. [Caching overview](https://docs.netlify.com/build/caching/caching-overview.md#default-caching-behavior), [automatic invalidation](https://docs.netlify.com/build/caching/caching-overview.md#automatic-invalidation-with-atomic-deploys).
- **Current artifact delivery cost under new credit plans:** Web Bandwidth consumes 20 credits per GB and production deploys consume 15 credits. New accounts use credit-based plans; Free includes 300 credits/month with a hard limit. [Credit-based pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans.md#traffic--delivery), [plan table](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans.md#monthly-plan-credits). A complete uncached 1.760 GiB artifact transfer is roughly 1.89 decimal GB, or about 38 credits before request costs; this is an illustrative upper bound per full cold transfer, not a traffic forecast.
- **Legacy-account variance:** legacy Free/Starter includes 100 GB/month and legacy Pro 1 TB/month, then specified overages. The active account plan is **not confirmable** without account access. [Legacy pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/legacy-pricing-plans.md#legacy-pricing-plan-details).
- **Directory limit:** Netlify documents no per-deploy file limit but does cap each publish-directory directory at 54,000 files. This measured output has 2,507 files, so the documented directory limit is not the immediate blocker. [Deploy overview](https://docs.netlify.com/deploy/deploy-overview.md#how-atomic-deploys-work).
- **Domains:** custom domains are supported for production, previews, and branches, and deploy-permalink URLs are immutable. [Understand domains](https://docs.netlify.com/manage/domains/domains-fundamentals/understand-domains.md).
- **External object assets, officially viable?** A Netlify-native public object origin appropriate for direct immutable delivery of this pack is **not confirmable**. Netlify Blobs is documented as a key/value/basic database accessed through Functions, Edge Functions, Build Plugins, or CLI; its docs say blobs can only be accessed through the site’s own code. Blobs also default to eventual consistency for updates/deletes, though deploy-specific stores prevent a failed deploy overwriting production data. [Netlify Blobs](https://docs.netlify.com/build/data-and-storage/netlify-blobs.md), [consistency](https://docs.netlify.com/build/data-and-storage/netlify-blobs.md#consistency), [deploy-specific stores](https://docs.netlify.com/build/data-and-storage/netlify-blobs.md#deploy-specific-stores). Serving 1.69 GiB through a Function or Edge Function would add a proxy and metered invocation/compute surface; it is not the smallest static solution.
- **Netlify maximum individual static-file size:** **not confirmable** from the official Netlify sources reviewed. Do not assume the 116.39 MiB GLB is within a current Netlify limit without validating against the active plan/support documentation.

### Cloudflare Pages

- **Static Next.js support:** Cloudflare documents deployment of a Next.js static export to Pages. [Static site](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/).
- **Page deployment rollback:** any successfully built production deployment is a rollback target; switching production to it is instant. Preview deployments are not rollback targets. [Pages rollbacks](https://developers.cloudflare.com/pages/configuration/rollbacks/).
- **Current artifact cannot be deployed unchanged:** Free Pages allows 20,000 files per site and 25 MiB maximum per static asset; paid plans can reach 100,000 files after the specified variable, but the 25 MiB asset limit remains stated. The artifact's 2,507 files fit; the 116.39 and 36.24 MiB GLBs do not. [Pages limits](https://developers.cloudflare.com/pages/platform/limits/).
- **Direct upload constraint:** Wrangler direct uploads have 20,000 files and 25 MiB per file; drag/drop has 1,000 files and 25 MiB per file. [Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/#limits). The current artifact exceeds drag/drop file count and fails either upload mode on its two oversized GLBs.
- **Caching:** Pages keeps deployed assets cached until the next deployment, automatically serves static assets from Tiered Cache, and sends ETags. Its own guidance cautions that custom caching can serve stale assets after deployment; cache rules are appropriate for fingerprinted immutable paths. [Serving Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/#caching-and-performance). Pages' `_headers` supports browser caching headers for fingerprinted assets. [Pages headers](https://developers.cloudflare.com/pages/configuration/headers/#configure-custom-browser-cache-behavior).
- **Custom domains:** a Pages custom apex must be a Cloudflare zone; a custom subdomain can use a CNAME after associating it in Pages. [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

### Cloudflare R2 and CDN

- **Suitable object capacity:** R2 allows unlimited storage and object count per bucket, with objects up to 5 TiB minus 5 GiB, and multipart uploads up to that limit. The current 1.76 GiB pack and individual GLBs fit comfortably. [R2 limits](https://developers.cloudflare.com/r2/platform/limits/).
- **Object semantics:** R2 is strongly globally consistent for reads after writes, metadata updates, deletes, and listings; two writes to the same key are last-completed-writer-wins. That confirms upload verification but does not create an atomic multi-object release transaction. [R2 consistency](https://developers.cloudflare.com/r2/reference/consistency/).
- **No native S3 object versioning:** R2's S3 compatibility table marks `GetBucketVersioning` and `PutBucketVersioning` unimplemented. Therefore version releases must use immutable key prefixes rather than relying on bucket object versioning. [R2 S3 API compatibility](https://developers.cloudflare.com/r2/api/s3/api/).
- **Public delivery:** R2 buckets are private by default. For production, Cloudflare directs public content to a custom domain, not `r2.dev`; the latter has variable rate limiting and is for non-production. A custom domain enables CDN/cache configuration. [Public buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/).
- **Caching caveat:** only certain extensions are cached by default; Cloudflare specifically does not cache JSON by default. R2 public-bucket documentation says cache all files requires a Cache Everything rule. Use an explicit Cache Everything rule limited to immutable release paths and send long-lived `Cache-Control` metadata at upload. [Default cache behavior](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/), [R2 public buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/#caching).
- **No overwrite promotion:** with a cached R2 custom-domain object, overwriting a key can continue serving the previous object until TTL expiry/eviction or purge. Cached 404s can also persist after upload. Immutable paths avoid both hazards. [R2 consistency](https://developers.cloudflare.com/r2/reference/consistency/#caching).
- **Purge:** Cloudflare offers Instant Purge by URL, hostname, tag, prefix, or all content; it is a recovery/operations feature, not the normal release mechanism. [Purge cache](https://developers.cloudflare.com/cache/how-to/purge-cache/).
- **CORS:** a public R2 bucket on an external asset hostname needs an allowlist CORS policy for browser fetches; custom-domain CORS headers appear on valid cross-origin requests. The rule can allow the production app origin and `GET`. [R2 CORS](https://developers.cloudflare.com/r2/buckets/cors/).
- **Pricing:** R2 Standard is $0.015/GB-month, Class A $4.50/million, Class B $0.36/million, and Internet egress is free. Monthly Standard free tier is 10 GB-month, 1 million Class A, and 10 million Class B operations. Infrequent Access adds retrieval fees and has a 30-day minimum, so it is unsuitable for active replay assets. [R2 pricing](https://developers.cloudflare.com/r2/pricing/).
- **Retention safeguard:** R2 Bucket Lock can prevent deletion and overwriting by prefix for a duration or indefinitely; lifecycle rules can later expire old release prefixes, but Bucket Lock takes precedence. Use a finite lock only if human rollback protection outweighs the operational inability to clean up early. [Bucket locks](https://developers.cloudflare.com/r2/buckets/bucket-locks/), [object lifecycles](https://developers.cloudflare.com/r2/buckets/object-lifecycles/).

## Options compared

| Option | Release/version semantics | Measured-fit and limits | Cache/rollback outcome | Cost facts | Verdict |
| --- | --- | --- | --- | --- | --- |
| **A. Current single Netlify artifact** | One 1.760 GiB artifact; Netlify atomic deploy is confirmed. Immutable deploy permalinks and instantaneous rollback are confirmed, subject to deploy retention. | Existing architecture works unchanged; 2,507 files are below Netlify's documented 54,000-files-per-directory limit. Netlify's max individual static asset is not confirmable from reviewed official docs. | Provider invalidates changed static assets with a new deploy. Rollback restores an old self-contained artifact, so shell/data compatibility is strongest. | Credit plan delivery: 20 credits/GB; full cold delivery is material. Active plan is not confirmable. | **Best zero-code-change bridge.** Keep only while traffic and release latency are acceptable. |
| **B. Netlify shell plus versioned external object assets** | Netlify shell can publish atomically, but an externally hosted asset namespace cannot be atomically committed with it. Netlify-native direct object CDN/versioning fit is not confirmable. | Requires later code changes for asset-origin URLs, CSP, and likely CORS. Netlify Blobs does not document direct public static delivery; proxying it is unnecessary complexity. | Rollback needs independent shell and external-prefix discipline; Netlify rollback alone cannot guarantee asset availability unless every prior prefix is retained. | External provider costs are out of scope unless officially documented by that provider. Netlify delivery and function/edge usage remain relevant if proxying. | **Reject as a Netlify-native target.** Only reconsider if an approved external static object CDN is selected separately. |
| **C. Cloudflare Pages shell plus R2 immutable assets** | R2 provides strongly consistent individual object writes, so a complete immutable prefix can be verified before promotion. Pages production deployment promotion and rollback are instant. Cross-product atomicity is not documented. | Pages shell is a direct fit; moving `data` and `models` out resolves the current Pages 25 MiB GLB limit. R2 supports 5 TiB objects. | Versioned URL paths permit `Cache-Control: public, max-age=31536000, immutable`; immutable URLs avoid overwrite/cache-staleness. Pages rollback restores prior release ID if it is embedded in the shell. | Current measured pack fits R2's 10 GB Standard free storage allowance; no Internet egress charge. Reads/writes can become billable above operation allowances. | **Recommend.** Small, provider-native, and resolves the hard Pages asset-size limit. |

## Recommended publication pattern

### Naming and composition

Use a deterministic release ID based on the complete external asset manifest, for example a content digest. Store the release only under that ID:

```text
releases/<release-id>/data/packs/seasons/...
releases/<release-id>/data/silhouettes/...
releases/<release-id>/data/wind-profiles/...
releases/<release-id>/models/...
releases/<release-id>/release-manifest.json
```

Do not expose a mutable `latest.json` that clients must resolve before every pack request. The Pages build should embed a single `assetReleaseId`/asset-base value and create all runtime pack and model URLs under that immutable prefix. This avoids an extra mutable caching contract and couples the app's schema/code to exactly one asset version.

The shell should retain only route HTML, `_next`, fonts, small static UI/media, and security headers. It should not contain `data/packs`, large model assets, or duplicate full replay files after the required runtime paths are externalized. Keep local packs as build inputs because static generation presently reads them from disk.

### Promotion and rollback runbook

1. Produce the existing locally verified export and a release manifest that enumerates every R2 key, byte length, content type, cache metadata, and cryptographic digest.
2. Upload all external files to a new immutable R2 prefix. Use `Cache-Control: public, max-age=31536000, immutable` on immutable objects where the chosen uploader supports object metadata. R2's S3-compatible `PutObject` supports `Cache-Control`; multipart is supported for larger objects. [R2 S3 API compatibility](https://developers.cloudflare.com/r2/api/s3/api/).
3. Read/list and validate the release manifest through R2 before the shell references it. Strong R2 read-after-write/list consistency supports this verification.
4. Deploy the Pages shell with that release ID embedded. This is the user-visible promotion point and has the documented Pages production rollback semantics.
5. Probe the Pages deployment, a JSON pack, a frame chunk, and both oversized GLBs. Check CORS, CSP, response `Cache-Control`, and `CF-Cache-Status` on repeat requests.
6. If release smoke fails, roll Pages back to the prior production deployment. Do not delete, overwrite, or mutate the bad release prefix during incident response; remove it only under the retention rule.
7. Retain at least the current, previous, and pending R2 release prefixes. Choose a retention period longer than the actual Pages rollback horizon and any deploy retention policy. The exact Pages deployment retention behavior is **not confirmable** from the official Pages rollback documentation reviewed; verify it before relying on automatic cleanup.

### Cache and domain policy

- Use `app.<domain>` for Pages and `assets.<domain>` for the R2 custom domain. R2 `r2.dev` must not be the production asset origin.
- Add a CDN Cache Everything rule scoped only to `assets.<domain>/releases/*`; JSON is not cached by Cloudflare CDN's default extension list.
- Use a one-year immutable browser/CDN policy only on versioned objects. Do not apply it to mutable aliases, if aliases are introduced later.
- Configure R2 CORS for the exact Pages production origin(s) and `GET`; add preview origins only when preview testing requires live external assets.
- Update the application CSP `connect-src` for the asset origin before making cross-origin fetches. Inspect model loading directives before declaring the final CSP.
- Purge only as recovery for a mistaken cache rule, CORS change, or a sensitive accidental publication. Normal versioned releases should not require cache purge.

## Risks, assumptions, and migration triggers

### Assumptions

1. The measured `apps/web/out` is representative of the cited roughly 1.9 GB release; it is 1.889 GB decimal / 1.760 GiB at measurement time.
2. Historical data is public and can be served from a public R2 custom domain. If licensing or entitlement changes, public bucket delivery is no longer sufficient.
3. A later implementation can introduce a build-stamped asset base/release ID without changing the underlying pack schemas.
4. Current local pack inputs remain available during static page generation.
5. The 82 full replay files are retained initially for fallback compatibility, then can be removed only after fallback behavior and all static routes are changed and tested.

### Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| A shell points at a partly uploaded R2 release. | Broken client loads; Pages rollback cannot repair an incomplete target prefix. | Never deploy the shell until manifest/object-count/hash verification succeeds. Immutable prefixes make the check deterministic. |
| Existing client paths are same-origin. | External assets return 404s from Pages until code changes. | Implement and test a single asset-base URL builder later; no DNS-only migration. |
| Cross-origin CSP/CORS omission. | Browser blocks JSON/chunk/model requests. | Add exact R2 custom domain to CSP and R2 CORS, then run browser network smoke tests. |
| Cache rule misses JSON or caches mutable paths. | Repeated origin reads or stale manifests/objects. | Cache Everything only under immutable `/releases/<id>/`; never overwrite those keys. |
| Pages direct deployment is attempted before externalization. | It fails on the 116.39 and 36.24 MiB GLBs. | Move all models to R2 in the same migration slice; do not treat it as optional. |
| Full replay and chunks remain duplicated externally. | Storage and upload cost remain about double for frames. | Preserve first for compatibility; remove the full-replay fallback on a later, separately verified release. |
| Old R2 releases are deleted too early. | Pages rollback yields broken assets. | Retain current/previous/pending prefixes and set explicit lifecycle policy only after verifying rollback retention. |
| R2 requests scale beyond free operations. | Class B read costs after 10 million/month. | Monitor pack/chunk request counts; use immutable caching, chunk sizing, and no Worker proxy. |
| R2 Standard is switched to Infrequent Access. | Retrieval charge and 30-day minimum conflict with active replay use. | Keep active releases in Standard; only consider IA for archived, rarely fetched source artifacts. |

### Migration triggers

Start the Pages/R2 migration when any one of these becomes true:

- a Cloudflare Pages deployment is required now; the current artifact already has a hard 25 MiB asset incompatibility;
- Netlify credit/bandwidth usage becomes material relative to the traffic budget;
- ingest/replay releases need independent asset publication or a smaller shell promotion;
- the season expands beyond the current 1.760 GiB artifact and deploy time/rollback retention becomes operationally awkward;
- the full-replay fallback is eliminated, allowing a substantial reduction in release pack size.

Stay temporarily with Option A when the priority is an immediate, zero-product-change release and observed Netlify cost/deploy duration is acceptable. Do not build Option B with Netlify Blobs/Functions as a large-object delivery layer.

## Facts not confirmable from the allowed sources

- The active Netlify account plan, included usage, current traffic, deploy duration, and actual billed cost.
- Netlify's current maximum single static-file size for this site's plan.
- A documented Netlify-native direct public object/CDN product with immutable version-prefix semantics suitable for the measured artifact.
- An atomic transaction that promotes an R2 multi-object prefix and a Pages deployment together.
- Cloudflare Pages historical deployment retention duration sufficient for the desired rollback window.
- Current custom-domain ownership/DNS layout and whether it is already in the required Cloudflare account.
- Exact R2 object count, Class A upload count, Class B request rate, cache-hit ratio, and monthly bill for production traffic.
- Whether all GLBs and generated packs are legally appropriate for public redistribution.

## Sources

All provider sources below are official primary documentation, accessed 2026-08-11.

### Netlify

- [Deploy overview — atomic deploys, deploy permalinks](https://docs.netlify.com/deploy/deploy-overview.md)
- [Manage deploys — rollback and retention](https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview.md)
- [Caching overview](https://docs.netlify.com/build/caching/caching-overview.md)
- [Credit-based pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans.md)
- [Legacy pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/legacy-pricing-plans.md)
- [Netlify Blobs](https://docs.netlify.com/build/data-and-storage/netlify-blobs.md)
- [Understand domains](https://docs.netlify.com/manage/domains/domains-fundamentals/understand-domains.md)
- [Custom headers](https://docs.netlify.com/manage/routing/headers/)

### Cloudflare Pages, R2, and CDN

- [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/)
- [Cloudflare Pages rollbacks](https://developers.cloudflare.com/pages/configuration/rollbacks/)
- [Cloudflare Pages static Next.js export](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Cloudflare Pages serving and cache behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/)
- [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Cloudflare Pages headers](https://developers.cloudflare.com/pages/configuration/headers/)
- [Cloudflare Pages direct upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)
- [R2 limits](https://developers.cloudflare.com/r2/platform/limits/)
- [R2 consistency model](https://developers.cloudflare.com/r2/reference/consistency/)
- [R2 S3 API compatibility](https://developers.cloudflare.com/r2/api/s3/api/)
- [R2 public buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/)
- [R2 CORS](https://developers.cloudflare.com/r2/buckets/cors/)
- [R2 pricing](https://developers.cloudflare.com/r2/pricing/)
- [R2 bucket locks](https://developers.cloudflare.com/r2/buckets/bucket-locks/)
- [R2 object lifecycles](https://developers.cloudflare.com/r2/buckets/object-lifecycles/)
- [Cloudflare default cache behavior](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/)
- [Cloudflare cache purge](https://developers.cloudflare.com/cache/how-to/purge-cache/)
