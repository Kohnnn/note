# 28 — Add the Zandvoort Strategy and Tyres tracer

Type: task
Status: resolved
Blocked by: 26

**What to build:** A learner can use the Unified Dashboard to study Strategy and Tyres through the recorded Zandvoort safety-car chronology, see where neutralisation invalidates raw pace comparison, and move between exact Replay race-control evidence and the relevant explanations without receiving an invented strategy outcome.

- [x] The pipeline generates the approved Zandvoort brief from the exact safety-car deploy, in-this-lap, track-clear, DRS-resume, and recorded stint-boundary evidence.
- [x] The brief segments pre-neutralisation, safety-car, restart, and post-restart evidence so raw pace is never compared across invalid bands.
- [x] The Replay handoff opens the exact race-control or stint state, and next steps open the approved Strategy, Tyres, and tyre-focused Modelview explanations.
- [x] Copy explicitly rejects unsupported claims about cheap stops, undercuts, tyre warm-up, team intent, measured pit loss, or causal advantage.
- [x] Required chronology, provenance, completeness, or uncertainty changes fail deterministic validation.
- [x] Keyboard, narrow-screen, sharing, and end-to-end browser acceptance checks pass.

## Answer

Implemented in `f1-racing` commit `33bc9c978a574a1aa03a1da3d7261b623cb43113`. The generated brief anchors safety-car deploy, call-in, track-clear, DRS-resume, and NOR/PIA stint boundaries; derives only the approved pre-neutralisation, safety-car, restart, and post-restart bands; and renders the full Unknown ceiling plus visible prohibited conclusions for cheap stops, undercuts, tyre warm-up, intent, measured pit loss, and causal advantage. Handoffs restore the exact race-control view and open Strategy, Tyres, and tyre-focused Modelview context.

Verified under Node.js `v22.23.0` with the full matrix recorded in ticket 26. Generator tests mutate chronology/stint anchors and fail closed; Dashboard browser acceptance covers exact URLs, keyboard, 390 px and 1440 px layouts, local continuation, and zero external or client-measurement requests. Final standards/spec review reported no actionable findings.
