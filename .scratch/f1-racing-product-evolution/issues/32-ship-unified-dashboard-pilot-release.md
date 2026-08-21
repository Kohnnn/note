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

Ticket 32 remains open. The verified pilot is committed as `f1-racing` source `33bc9c978a574a1aa03a1da3d7261b623cb43113`. On 2026-08-22, `npm run release:artifact` passed the clean-source gate but failed the initial release-data audit before build or Netlify access; retained candidate `candidate-8LwYib` has no release ID. Missing provenance ledger, normalized results/weather, digest coverage, valid stints, canonical brief mirror, unique 2024 United States identifiers, and current manifest selection block ticket 25; ticket 31 still lacks host analytics, operator contact, and an actual 30-day baseline. No production release, measurement-window start, retained prior release, or rollback evidence can be claimed.
