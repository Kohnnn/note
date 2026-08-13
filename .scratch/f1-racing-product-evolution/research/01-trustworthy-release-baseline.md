# Trustworthy release baseline

**Observed:** 2026-08-10T17:49:49Z (UTC)  
**Scope:** read-only inspection of `f1-racing/` and `https://f1-demo.netlify.app`; no credentials, `.env` files, deploy, source edit, ticket/map edit, or commit.

## Verdict

**Conditional release baseline: local artifact and canonical production manifest/assets are verified, but this is not yet a fully trustworthy release baseline.** All documented local gates pass at the exact clean `f1-racing` commit, and the canonical production manifests plus sampled static assets are byte-identical to the rebuilt local output. Release remains blocked on removing or explicitly accepting the Modelview route's external Draco-decoder dependency and on documenting/closing the stale QA deployment URLs. The 1.89 GB artifact is also a material release-risk warning, dominated by duplicated full and chunked replay payloads.

## Source and repository state

| Item | Evidence |
| --- | --- |
| Repository | `C:\Users\Admin\Desktop\PersonalWebsite\interactive-note\f1-racing` |
| Branch / upstream | `main...origin/main` at the same commit |
| HEAD | `de8a4eb37f87de6f21357c4afde3dd19e3f3b4f7` (`de8a4eb`) |
| HEAD subject / timestamp | `feat(wind): isolated Floor delta chip, GLB-hull resample, smoke coverage`; `2026-07-24T08:48:08+07:00` |
| `f1-racing` status | Clean before and after checks; no staged or unstaged source changes. Build outputs and season-pack directories remain ignored. |
| Parent workspace status at final observation | Parent `interactive-note` had `M CONTEXT.md` and `?? .scratch/`; neither is attributed to this task. This report is the sole permitted task-created file within `.scratch/`. |

The release contract declares a Netlify static export at the canonical URL and `apps/web/out` output (`README.md:13-17`; `docs/deploy-guide.md:3-8`). The deployment configuration publishes that directory and redirects `/live` to `/race-desk` (`netlify.toml:1-14`). `apps/web/out` and the generated season packs are intentionally ignored (`.gitignore:7,13-17`), so the release artifact cannot be reconstructed from a source-only checkout; the documented process correctly requires locally verified generated inputs (`docs/deploy-guide.md:24-35,95-105`).

## Documented local gates

All commands ran from `f1-racing/` against the clean commit above.

| Command | Result | Exact evidence |
| --- | --- | --- |
| `npm run quality` | PASS | `tsc --noEmit`, `replay-director.test.mjs: ok`, `replay-chunks.test.mjs: ok`, then `Sample data manifests and sim packs validated.` |
| `npm run check:featured` | PASS | `Featured race and season mirrors are current.` |
| `python -m unittest backend.test_path_validation` | PASS | `Ran 4 tests in 0.007s` / `OK` |
| `python -m py_compile backend/main.py` | PASS | Exit 0, no output |
| `npm run build` | PASS | Next.js `15.5.14`; compiled successfully; type validation passed; `Generating static pages (339/339)`; static export completed. |
| `npm run smoke:static` | PASS | Exit 0, no output after `node tools/smoke-static.mjs`. |

These match the documented release sequence (`docs/deploy-guide.md:22-35`). The static smoke validates the featured-pack frame/chunk acceptance, required model/replay UI bundle markers, attribution presence, the 2.1 MB Replay-3D budget, and local HTTP serving of core assets (`tools/smoke-static.mjs:87-205`).

Build output reports 103 kB shared first-load JS; route first-load JS is 167 kB for a replay detail route, 136 kB for Race Desk, and 125 kB for Modelview. These figures exclude static data/model payloads.

## Generated manifests and source selection

`latest.json` selects **2026 Miami Grand Prix Race**: session key `11280`, track `miami`, path `/sessions/2026/miami-grand-prix/race` (`apps/web/public/data/manifests/latest.json:2-17`). The season index is generated at `2026-05-03T17:00:00.000Z` and contains 2026, 2025, and 2024 (`apps/web/public/data/manifests/seasons.json:2-6`); the rebuilt index contains 81 sessions.

The application reads `latest.json` and `seasons.json` from public data (`apps/web/src/lib/data.ts:400-435`), derives the landing replay link from `latest.path` (`apps/web/src/app/page.tsx:13-25`), and uses the same latest session for Race Desk (`apps/web/src/app/race-desk/page.tsx:10-24`). Replay static generation is sourced from the season index (`apps/web/src/app/replay/[season]/[grandPrix]/[session]/page.tsx:13-25`); its first render loads metadata plus only the first chunk and falls back to full `replay.json` if chunk metadata is unavailable (`apps/web/src/app/replay/[season]/[grandPrix]/[session]/page.tsx:52-67`).

The sitemap and page metadata hard-code the same canonical origin (`apps/web/src/app/sitemap.ts:7-25`; `apps/web/src/app/layout.tsx:6-30`).

## Artifact measurements

Measured after the passing production build; values are uncompressed filesystem bytes.

| Artifact / group | Files | Bytes | Share of `apps/web/out` |
| --- | ---: | ---:| ---:|
| Full `apps/web/out` | 2,507 | 1,889,381,725 | 100% |
| `apps/web/public` mirrored into output | 1,791 | 1,829,088,438 | 96.81% |
| Season packs | 1,515 | 1,615,839,738 | 85.52% |
| Full `replay.json` files | 82 | 799,603,723 | 42.32% |
| Chunked `replay.frames/` files | 617 | 774,807,269 | 41.01% |
| GLB models | 9 | 198,406,224 | 10.50% |
| Prerendered HTML/text | 671 | 57,318,709 | 3.03% |
| Next static JS/CSS | 45 | 2,943,335 | 0.16% |
| Replay-3D assets | 15 | 1,843,357 | 0.10% |

The largest individual files are `models/2025/mclaren/mcl39-original.glb` (122,044,944 bytes), `models/2025/alpine/a525.glb` (104,210,440 bytes), and 2026 full replay payloads of roughly 10.6–11.5 MB each. The prior roadmap identifies GLB optimization as a release concern (`README.md:249-253`); the old deployment journal also calls out 37 MB GLBs (`docs/dev-journal-2026-04-01.md:79-84`).

### Duplication contributors

The material duplication is **semantic rather than byte-identical**: full replay JSON adds 799,603,723 bytes alongside the independently chunked frames adding 774,807,269 bytes. That is 1,574,410,992 bytes, 83.33% of the output, for two representations of replay frames. The source exposes both representations (`apps/web/src/lib/data.ts:632-645`) and uses full replay as fallback (`apps/web/src/app/replay/[season]/[grandPrix]/[session]/page.tsx:52-67`; `apps/web/src/app/race-desk/page.tsx:29-43`).

Exact-content duplicate groups account for only 45,483 reclaimable bytes. Largest are `images/teams/racing-bulls/wiki-logo.webp` and `images/teams/rb/wiki-logo.webp` (18,072 bytes duplicated), four identical 2026 `drivers.json` files (13,701 reclaimable bytes), and duplicate 404 HTML (8,651 bytes). These are negligible beside full/chunked replay duplication.

## Canonical production observations

All requests below targeted only `https://f1-demo.netlify.app` on the observation timestamp.

### HTTP probes

| Route / asset | Result |
| --- | --- |
| `/`, `/replay/`, featured Miami replay, compare-query replay, `/race-desk/`, `/compare/`, `/stints/`, `/cars/current-spec/`, `/learn/` | All HTTP 200 |
| `/live` | HTTP 301, `Location: /race-desk` |
| `/fonts/roboto-latin-400-v51.woff` | HTTP 200, 69,772 bytes |
| `/data/manifests/latest.json` | HTTP 200, `public,max-age=60`, 343 bytes |
| `/data/manifests/seasons.json` | HTTP 200, `public,max-age=60`, 37,052 bytes |
| Featured replay metadata / first chunk | HTTP 200, 201,807 / 1,494,554 bytes, respectively |
| `/models/2025/mclaren/mcl39.glb` | HTTP 200, `public,max-age=86400`, 38,003,860 bytes |

Browser probes in Microsoft Edge headless found no console errors, page errors, failed requests, or same-origin HTTP failures for `/`, replay index/detail/query, Race Desk, redirecting `/live`, Compare, Stints, and Learn. `/live` resolved in-browser to `/race-desk/`. This supports the canonical route and redirect contract in `docs/deploy-guide.md:43-59,107-122`.

### Production identity

Production `latest.json` and `seasons.json` SHA-256 values exactly match both the source public mirror and the passing rebuilt `apps/web/out`:

| File | SHA-256 |
| --- | --- |
| `data/manifests/latest.json` | `8e610787f61b792f752aeda48049f991d941d52a4506e7b6790e8ab8225b4180` |
| `data/manifests/seasons.json` | `4406008e494c3fea0dc66b00f0ac9e45c6138f3ad86fbcebc29b5f0e4caf34df` |

The featured replay metadata, first frame chunk, MCL39 GLB, global CSS, and all eight homepage-referenced static assets also matched local bytes and SHA-256 exactly. This is strong artifact evidence that production serves the locally rebuilt public baseline. It is **not** cryptographic proof that the deployed site came from commit `de8a4eb`: neither the output nor the production response exposes a commit/release identifier.

### Modelview external dependency warning

A production browser probe of `/cars/current-spec/` revealed requests to external Google-hosted Draco decoder assets:

- `https://www.gstatic.com/draco/versioned/decoders/1.5.6/draco_wasm_wrapper.js`
- `https://www.gstatic.com/draco/versioned/decoders/1.5.6/draco_decoder.wasm`

The probe intentionally blocked non-canonical origins to honor the investigation scope; it then produced `net::ERR_FAILED` and a model-viewer `TypeError: Failed to fetch`. This does **not** establish that the live external host is failing, but it establishes that Modelview is not self-contained and cannot pass a same-origin-only network policy. The direct dynamic import occurs in `apps/web/src/lib/model-viewer-loader.ts:14-46`; Modelview invokes it on mount (`apps/web/src/components/model-viewer/car-model-browser.tsx:177-189`); the installed `@google/model-viewer` dependency is declared in `apps/web/package.json:11-22`.

**Release blocker unless explicitly accepted:** ship/localize a decoder configuration or amend the release contract to permit, monitor, and test this third-party runtime dependency. The current guide requires failed core-route requests to remain empty (`docs/deploy-guide.md:107-122`), which this route cannot demonstrate under canonical-only access.

## Documentation reconciliation

| Status | Finding |
| --- | --- |
| Canonical / current | `README.md:13-17`, `docs/deploy-guide.md:3-8`, `apps/web/src/app/sitemap.ts:7-25`, `apps/web/src/app/layout.tsx:6-30`, and `docs/roadmap.md:170-176` consistently name `https://f1-demo.netlify.app`. |
| Stale QA | `docs/qa-evaluation-report-v4.md:3-11`, `docs/qa-evaluation-report-v5.md:3-8`, and `docs/evaluation.md:3-6` identify `https://playful-peony-77899c.netlify.app` as production. These reports are dated 2026-05-28/29 and should be marked historical or updated to prevent testing the wrong deployment. |
| Stale deployment history | `docs/dev-journal-2026-04-01.md:64-75` names `https://magical-palmier-8cd5d3.netlify.app`; this is historical, not the release target. |
| Provenance limitation | The roadmap names accepted deploy `6a5d0b70dee70866f4e5410b` (`docs/roadmap.md:172-176`), while local source is `de8a4eb`. Manifest and sampled asset identity match, but no production commit marker links these states. |

## Release decision and required follow-up

**Do not call this an unconditional release baseline yet.** The local release gates and production static-content identity pass. Before release-train work relies on it:

1. Resolve or explicitly approve the external Draco dependency for Modelview, then rerun an unrestricted canonical browser probe and preserve its network/console evidence.
2. Establish a deploy-visible immutable identity (commit SHA and/or artifact manifest digest) so production can be tied to the verified source/artifact.
3. Mark stale `playful-peony-77899c.netlify.app` and `magical-palmier-8cd5d3.netlify.app` QA/deployment references historical; keep `https://f1-demo.netlify.app` as the sole canonical release URL.
4. Treat the 1.89 GB artifact and dual full/chunked replay representation as release warnings. Keep the fallback only if required; otherwise eliminate or externalize one representation before bandwidth/storage limits become a deployment blocker.
