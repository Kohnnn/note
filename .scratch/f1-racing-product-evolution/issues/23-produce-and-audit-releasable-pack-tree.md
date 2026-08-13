# 23 — Produce and audit one releasable pack tree

Type: task
Status: resolved
Blocked by: 13, 14

**What to build:** A release operator can generate one isolated candidate data tree, audit every indexed public artifact and mirror before promotion, and receive a deterministic release manifest proving exactly what is safe to publish without mutating the current public tree on failure.

- [x] Candidate generation writes to an isolated staging location and leaves the currently promoted canonical and public assets untouched until every audit passes.
- [x] The audit validates every indexed manifest, summary, analysis pack, replay metadata file, frame chunk, lap file, race-control file, and required model reference against its contract.
- [x] The audit rejects dangling paths, incomplete chunk coverage, frame/session mismatches, missing chequered-flag evidence, stale mirrors, future or partial sessions forbidden by the approved freshness policy, and hash mismatches.
- [x] A successful run emits one deterministic release identity and manifest containing approved provenance, freshness, size, count, and cryptographic digest fields.
- [x] Seeded missing, corrupt, mismatched, and partial artifacts each produce a non-zero failure and leave the promoted tree unchanged.
- [x] The existing quality, featured-data, build, and static-smoke gates consume the candidate tree and pass.

## Answer

Implemented in `f1-racing` commit `99428615fabb69457b40f64af20e40e5dbd4e584`. Release candidates now use fresh marker-owned OS-temporary roots, isolate canonical data, public projection, build output, and release records, reject path and junction escapes, and never mutate promoted files during generation or audit.

The audit binds every indexed session to source identity, complete provenance, normalized results and weather, replay chunks and full fallback, chequered evidence, models, mirrors, freshness selection, artifact budgets, and canonical SHA-256 entries. Finalization emits a source-bound `releaseId`, byte-only `assetReleaseId`, sorted manifest, gate evidence, and explicit featured-or-none state. Promotion remains ticket 25 work and must deploy the exact verified candidate without rebuilding.

Verified with `npm run test:release-data`, `npm run test:release-data:e2e`, `npm run quality`, `npm run check:featured`, `npm run build`, and `npm run smoke:static`. Current production packs remain intentionally unreleasable because they predate required immutable source evidence, rights references, normalized results/weather, and complete terminal coverage; the gate fails rather than synthesizing those facts.
