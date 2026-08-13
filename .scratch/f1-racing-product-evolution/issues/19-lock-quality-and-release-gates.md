# Lock accessibility, performance, resilience, and release gates

Type: grilling
Status: resolved
Blocked by: 01, 10, 11, 13, 14, 18

## Question

Which automated and browser acceptance gates must every release pass across Dashboard, Replay, Learn, Modelview, Race Desk, data packs, and any selected services? Include keyboard-equivalent driver selection, correct control semantics, reduced motion, narrow screens, 2D and 3D fallbacks, GLB and replay budgets, loading and retry states, console and network cleanliness, schema and hash validation, canonical deployment parity, security checks, monitoring, promotion, and rollback evidence.

## Answer

Every production promotion is fail-closed. A **blocker** prevents preview approval or production promotion. A **warning** records bounded debt but does not prevent promotion only when the release operator records a time-limited waiver. The current bridge remains the one verified `apps/web/out` Netlify artifact; target Pages/R2 releases add the ticket 13 immutable-prefix checks without weakening bridge gates.

### Required commands

Run from `f1-racing/`, on the exact source revision and generated inputs intended for release:

```bash
npm ci
npm run quality
npm run check:featured
python -m unittest backend.test_path_validation
python -m py_compile backend/main.py
npm run build
npm run smoke:static
```

These are the existing blocking commands. `quality` covers TypeScript, replay-director, replay-chunk, and sample-pack validation; `check:featured` validates the current deterministic index; `smoke:static` already checks the featured replay’s chunk coverage/end, chequered evidence, pit cycle, laps, static route/asset serving, required recovery controls, attributions, and the 2.1 MB Replay-3D budget.

Before the first release governed by this decision, implement these blocking commands. Their names, inputs, and exit conditions are fixed; they are not currently present and therefore cannot be claimed as passing today:

```bash
npm run release:artifact
npm run release:data
npm run release:browser
npm run release:security
npm run release:parity -- <immutable-preview-or-production-url>
```

`release:artifact` writes a canonical sorted SHA-256 manifest for `apps/web/out`, records file count/bytes/MIME/cache policy, verifies the embedded release record/ID against that manifest, and enforces the budgets below. `release:data` schema-validates every public manifest/pack, validates cross-file season/session/track IDs, timestamps, coverage ledgers, declared chunks, source/provenance/rights records, and all declared digests. It must implement ticket 14’s complete-pack and featured-selection fixtures.

`release:browser` runs the same assertions in current Chromium, Firefox, and WebKit at 1440px and 390px widths, with `prefers-reduced-motion: reduce`; it saves screenshots plus console, page-error, and request logs. Current locally installed browser tooling may be used, but no browser/version is accepted without recording its exact version in release evidence. `release:security` scans the final artifact and preview response headers. `release:parity` fetches the exact deployed artifact and compares its release identity, manifest keys, byte lengths, SHA-256 values, content types, cache headers, redirects, and sampled critical assets to the local verified artifact. For the Netlify bridge it also records the immutable deploy permalink; for Pages/R2 it checks the embedded `assetReleaseId`, exact R2 prefix, CORS, and CSP.

### Blocking gate matrix

| Gate | Blocking acceptance | Owner |
| --- | --- | --- |
| Product and content | Dashboard opens the named question and exact Replay evidence; Replay exposes source/position coverage and limits; Learn remains conceptual; Modelview/wind state their illustrative ceiling; Race Desk visibly says “Historical replay simulation — not live timing”; Compare/Stints remain Replay-owned. Unsupported causal, live, continuous-position, validated-CFD, or unlabelled derived claims fail. | Product/content owner |
| Accessibility and responsive behavior | At 1440px and 390px, keyboard-only users can select a driver, play/pause/seek, choose tabs, use 2D pan/zoom/reset, activate all controls, and reach the equivalent evidence without pointer, hover, canvas, or WebGL. Native controls preserve their correct role/name/value/state; custom controls expose equivalent semantics. Visible focus, landmarks/headings, text evidence labels, 44px touch targets for primary actions, no horizontal overflow at 390px, and reduced motion with no autonomous rotation/nonessential animation are required. | Accessibility owner |
| Browser/fallback/resilience | Core Dashboard, Replay index/detail/share URL, Race Desk, `/live` redirect, Compare, Stints, Learn, and Modelview load without console/page errors or failed required requests. Replay initially loads bounded data, can explicitly load remaining chunks, and gives a recoverable loading/error state. Modelview gives a usable static/2D/orientation fallback and Retry when GLB/WebGL fails; 2D Replay always remains usable. Browser tests inject failed replay chunk, GLB, and optional 3D requests and assert an honest retry/fallback state without a crash or unsupported claim. | Frontend owner |
| Data integrity and freshness | Every public pack is schema-valid, hash-valid, internally consistent, complete per ticket 14, rights/provenance-complete, and references existing files. No missing chunk interval, mismatched ID, invalid chronology, future/partial/demo featured race, or unverifiable source is indexed. `latest` selection, stale/unavailable state, and the 168-hour featured-latency rule pass deterministic fixtures. | Data owner |
| Artifact identity and production parity | Local output has a full manifest SHA-256 and source commit. Production exposes the matching immutable release ID and deploy identity. Preview passes before promotion; production passes after promotion. Bridge output, manifests, featured metadata/first chunk, one full replay fallback, both largest GLBs, shell CSS/JS, and homepage-referenced assets match local hashes. A mismatch blocks promotion or triggers rollback. | Release operator |
| Performance and artifact limits | `apps/web/out` is at most **1,950,000,000 bytes** and its file count is recorded. No individual GLB exceeds **125,000,000 bytes**; no full `replay.json` exceeds **12,000,000 bytes**; no frame chunk exceeds **1,600,000 bytes**; Replay-3D remains at most **2,100,000 bytes**. The release evidence records total output, public-data, full-replay, chunked-replay, GLB, Replay-3D, and Next static JS/CSS bytes. These ceilings deliberately accommodate the observed 1,889,378,658-byte artifact, 122,044,944-byte largest GLB, 11,544,256-byte replay, 1,512,073-byte chunk, and 1,843,357-byte Replay-3D baseline; they do not pretend to set an unmeasured LCP/FPS target. | Frontend/data owner |
| Security and privacy | Final artifact contains no credentials, private source paths, build commands, source maps intended to be private, or unsanitized user-controlled path traversal. HTTPS responses use a reviewed CSP, `nosniff`, frame-embedding policy, and only necessary cross-origin permissions. No browser request sends telemetry, replay selections, query/fragment data, identifiers, cookies, or custom events to an analytics endpoint. The only permitted measurement is existing host aggregate analytics under ticket 18, after the production privacy notice is accurate. The Modelview Draco decoder is same-origin/localized, or an explicitly reviewed third-party origin is listed in CSP, tested, monitored, and approved as a release exception. | Security/privacy owner |
| Deployment and rollback | Only the named release operator promotes a passing immutable preview. The recorded prior verified deploy can be repromoted without rebuild or mutation. A rollback drill restores that deploy, confirms its original identity/hashes and featured state, runs core route/pack probes, and records the rollback event. Current, prior, and pending verified artifacts are retained through the provider-proven rollback window plus 30 days. | Release operator |

### Current baseline classification

The current `smoke:static` 2.1 MB Replay-3D limit and the measured 1.89 GB artifact are blockers only where the stated ceiling is exceeded. The dual full/chunked replay representation, 1.89 GB overall size, 122 MB GLB, stale QA URLs, and absent deploy-visible release identity are **warnings until the corresponding release contract is implemented**; a release cannot assert artifact identity or target freshness compliance without the new commands. The external Google Draco runtime dependency is a **blocker** for a canonical-origin-only release and a **conditional blocker** otherwise: it needs the explicit security/privacy exception above before promotion. Historical QA reports naming `playful-peony-77899c.netlify.app` or `magical-palmier-8cd5d3.netlify.app` are never valid production evidence; only `https://f1-demo.netlify.app` is canonical on the bridge.

### Waivers, evidence, monitoring, and promotion

A warning waiver requires the release operator, affected owner, precise risk, user-visible behavior, compensating check, expiry (no later than the next release), and linked remediation issue. A blocker waiver is prohibited for hash/schema/rights failures, broken accessibility equivalence, privacy/tracking violations, secrets, missing rollback target, production-parity mismatch, or unsafe/false product claims. The sole allowable blocker exception is a documented third-party runtime dependency, approved by both security/privacy and the release operator for one named release, with CSP/CORS/network proof and a rollback plan. No verbal, permanent, or retrospective waiver is valid.

Each promotion writes an immutable release evidence record containing: release ID and full manifest digest; source commit; build host/runtime and exact commands/results; generated-input digests; budget measurements; browser/version/viewport/reduced-motion results with logs/screenshots; data/schema/hash/provenance results; security/header/network report; preview URL/deployment ID; production URL/deployment ID/permalink; canonical parity result; approvals/waivers; `publishedAt`; prior release ID; and rollback target. The product owner reviews the existing Netlify aggregate dashboard monthly under ticket 18; it is operational context only, never a release gate or a substitute for error/performance telemetry.

Promotion order is build and local gates, immutable preview publication, preview parity/browser/security gates, operator approval, production promotion, then production parity/browser probes and evidence finalization. Any post-promotion blocker, identity mismatch, privacy/security breach, data corruption, or core-route failure immediately repromotes the recorded prior immutable deployment, without rebuild or hot-edit, and records reason/operator/time/restored release ID. No map or product code is changed by this decision.
