# 32 — Ship the Unified Dashboard pilot release

Type: task
Status: open
Blocked by: 19, 25, 27, 28, 29, 30, 31

**What to build:** The canonical production site ships the verified Unified Dashboard pilot with three trustworthy subsystem journeys, hardened core experiences, local resume, approved measurement, measurable release outcomes, and a tested rollback path.

- [ ] One immutable release identity passes every approved source, generated-data, accessibility, responsive, performance, security, resilience, privacy, build, static-smoke, and browser gate.
- [ ] Production serves the canonical Dashboard and all three subsystem journeys with exact evidence links, explanation handoffs, local resume, and no unexpected console, page, hydration, or core-network failure.
- [ ] Historical Race Desk, Replay, Learn, Modelview, Compare, Stints, metadata, sitemap, legacy redirects, models, packs, fonts, and reduced-motion behavior pass regression acceptance.
- [ ] Production exposes the verified source and asset release identity, and the retained previous release remains a usable rollback target.
- [ ] Approved aggregate and event measurement is verified without forbidden payload fields, and the baseline reporting window starts with documented owners and thresholds.
- [ ] Release notes state what shipped, what remains deferred, and that true live timing and accounts remain unavailable until their proof thresholds pass.

## Comments

### 2026-08-21 — local pilot acceptance complete, release blocked

Tickets 26–30 passed local acceptance before commit: the generated three-brief Dashboard, exact evidence/explanation handoffs, browser-local Resume, canonical routes, 390 px/1440 px browser journeys, zero-client analytics assertions, full quality/build/static/browser regressions, release-data E2E, and release-gate tests pass under Node.js `v22.23.0`.

Ticket 32 remains open. The verified pilot and deterministic release-input hardening are committed through `f1-racing` source `e684a4d22a9930c52f28e7ea8a2b6f4c04ad92c0`. On 2026-08-22, a second `npm run release:artifact` attempt resolved the canonical brief mirror and Miami/Austin identity failures but stopped the initial release-data audit before build or Netlify access; retained candidate `candidate-cbmlx0` has no release ID. All 81 indexed sessions still lack normalized results, weather, and approved provenance entries, and ambiguous source stint boundaries remain fail-closed. Ticket 31 still lacks host analytics, operator contact, and an actual 30-day baseline. No production release, measurement-window start, retained prior release, or rollback evidence can be claimed.

### 2026-08-22 — release evidence capture ready, regeneration blocked

The verified pilot is now committed through `f1-racing` source `a300aa157bb3fce4c7ae4b0fdbca79a00c163efb`. Candidate OpenF1 retrievals automatically retain exact private response evidence, replay generation is deterministic, candidate writes are path-hardened, and the full sequential local gate chain passes. The official `npm run release:artifact` retained `candidate-IeimL8` but stopped before build or Netlify access because the copied ignored pack tree was not regenerated: 81 sessions still lack results, weather, ledger entries, and dependent digests; stale stint findings, five empty lap packs, two missing chequered observations, rights approval, and latest-index derivation remain blocked. Ticket 31's host analytics, operator contact, and 30-day baseline also remain external. No production release or rollback evidence can be claimed; ticket 32 remains open.
