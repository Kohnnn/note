# 25 — Ship the hardened baseline release

Type: task
Status: claimed
Blocked by: 19, 21, 22, 23, 24

**What to build:** The canonical production site receives one verified baseline release whose source, generated packs, static artifact, deployment identity, browser behavior, and rollback target can be tied together and independently checked.

- [ ] The full approved source, data, backend, build, accessibility, performance, security, and static-artifact gates pass against one immutable release identity.
- [ ] The artifact records the source commit, pack release identity, hashes, generated and published timestamps, build result, smoke result, and canonical hostname.
- [ ] The verified artifact is published through the approved promotion workflow without rebuilding or mutating pack objects during promotion.
- [ ] Canonical production probes pass for Dashboard/home, Replay library and featured Replay, Historical Race Desk, Compare, Stints, Modelview, Learn, manifests, chunks, models, fonts, metadata, and legacy redirects with no unexpected console, page, or core-network failures.
- [ ] The production site exposes enough immutable identity to prove it serves the verified release.
- [ ] A retained previous release is verified as a usable rollback target, and the rollback runbook can restore it without rebuilding.

## Comments

### 2026-08-13 — local release-gate slice

Under Node.js `v22.23.0` and npm `10.9.8`, `npm run quality`, `npm run build` (339 static pages), `npm run smoke:static`, `npm run test:replay-keyboard`, `npm run test:modelview:browser`, `npm run test:release-data:e2e`, `npm run test:release-gates`, JavaScript syntax checks, and `git diff --check` pass. The targeted Chromium probes now assert observable 2D keyboard pan, zoom, and reset behavior; the release browser matrix covers `/live`, `/sessions`, and the featured legacy session redirect; Race Desk recovery asserts the required historical-not-live disclosure.

Ticket 25 remains claimed. No clean finalized candidate exists because truthful provenance, rights, retrieval-log, raw-response hash, terminal completion, and normalized pack evidence remain incomplete. Therefore no immutable three-engine browser evidence, remote security/parity evidence, preview publication, exact production promotion, retained prior-release proof, or rollback drill can be claimed.

### 2026-08-21 — candidate attempt after Dashboard acceptance

Under Node.js `v22.23.0`, `npm run release:artifact` stopped with `Release artifact requires a clean source revision.` before candidate creation or any Netlify action. Tickets 26–30 were locally verified but remained uncommitted, so no official artifact identity could truthfully bind them to a source commit. The provenance, rights, deployment, retained-release, and rollback blockers above remained unchanged.

### 2026-08-22 — source-bound candidate audit

The verified Dashboard slice is committed as `f1-racing` source `33bc9c978a574a1aa03a1da3d7261b623cb43113`. Under Node.js `v22.23.0`, `npm run release:artifact` passed the clean-source gate, created and retained `C:\Users\Admin\AppData\Local\Temp\f1-racing-release-candidates\bbd95a3292a0\candidate-8LwYib`, then failed the initial release-data audit before build, release-manifest creation, or Netlify access.

Observed blockers include a missing `release/provenance-ledger.json`, missing normalized `results.json` and `weather.json` files, missing pack ledger entries and digest coverage, overlapping or inverted stint records, duplicate 2024 United States session identifiers, a missing canonical `briefs/index.json` mirror, and stale `latest.json`/`seasons.json` selection metadata. No release ID, preview, production promotion, retained prior-release proof, or rollback evidence exists; ticket 25 remains claimed.

### 2026-08-22 — deterministic input hardening and second candidate audit

`f1-racing` source `e684a4d22a9930c52f28e7ea8a2b6f4c04ad92c0` adds owned-candidate-only generators, strict normalized result/weather/stint validation, exact canonical/public brief mirrors, a Miami/Austin manifest correction, hermetic candidate tests with complete promoted-tree SHA-256 immutability checks, and removal of tracked Python bytecode. Node.js 22 quality, 340-page build, static smoke, release-data E2E, release-gate tests, syntax checks, and `git diff --check` pass.

The official `npm run release:artifact` retained `C:\Users\Admin\AppData\Local\Temp\f1-racing-release-candidates\bbd95a3292a0\candidate-cbmlx0` and failed its initial audit before build or Netlify access. The canonical brief mirror and duplicate 2024 United States identifier errors are gone. All 81 indexed sessions still lack normalized `results.json`, `weather.json`, and provenance-ledger entries; the audit reports 753 ambiguous or overlapping stint-boundary findings plus dependent `latest.json` and `seasons.json` metadata errors. Truthful regeneration still requires actual source retrieval times, raw-response SHA-256 values, terminal completion observations, and an approved rights reference. No release ID or deployment exists; ticket 25 remains claimed.
