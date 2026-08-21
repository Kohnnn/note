# 26 — Ship the Monza Braking Dashboard tracer

Type: task
Status: resolved
Blocked by: 09, 10, 11, 12

**What to build:** A learner can open the Unified Dashboard, choose Braking, follow a pipeline-generated Monza qualifying brief into exact Replay evidence, continue into the Braking explanation and brake-focused Modelview context, and understand which observations are recorded, derived, or unknown.

- [x] The approved Dashboard composition presents Braking as a clear subsystem choice and explains the expected learning outcome before opening evidence.
- [x] The generator emits the approved Monza driver/lap/sector and braking anchors from current packs through a deterministic, versioned template.
- [x] Every claim is visibly typed as Recorded, Derived, or Unknown, and missing provenance, coverage, anchor, or uncertainty data fails generation.
- [x] The brief opens the exact Replay comparison state and offers context-preserving next steps to the Braking module and brake-focused Modelview experience.
- [x] The brief never equates sampled brake thresholds with literal brake points or infers brake balance, temperature, setup, driver intent, or causality.
- [x] The complete Dashboard-to-evidence-to-explanation path is keyboard-accessible, responsive, shareable where approved, and covered by deterministic data assertions and a browser acceptance test.

## Answer

Implemented in `f1-racing` commit `33bc9c978a574a1aa03a1da3d7261b623cb43113`. The versioned evidence-brief generator anchors the approved Monza lap pair, three timing-sector windows, sampled controls, derived threshold annotation, explicit evidence ceiling, exact Replay query/hash, Braking handoff, and brake-focused Modelview handoff. The canonical Dashboard renders the generated learner outcome, all Recorded/Derived/Unknown claims, provenance limits, and prohibited conclusions rather than maintaining a second hand-written brief.

Verified under Node.js `v22.23.0` with `npm run quality`, `npm run build` (340 pages), `npm run smoke:static`, `npm run test:dashboard:browser`, `npm run test:replay-keyboard`, `npm run test:modelview:browser`, `npm run test:release-data:e2e`, `npm run test:release-gates`, JavaScript syntax checks, and `git diff --check`. The Dashboard browser probe covers exact handoffs, keyboard activation, Replay state preservation, Modelview focus preservation, 390 px and 1440 px layouts, and zero external or client-measurement requests. Final standards/spec review reported no actionable findings.
