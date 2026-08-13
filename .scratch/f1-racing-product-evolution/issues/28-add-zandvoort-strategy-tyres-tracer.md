# 28 — Add the Zandvoort Strategy and Tyres tracer

Type: task
Status: open
Blocked by: 26

**What to build:** A learner can use the Unified Dashboard to study Strategy and Tyres through the recorded Zandvoort safety-car chronology, see where neutralisation invalidates raw pace comparison, and move between exact Replay race-control evidence and the relevant explanations without receiving an invented strategy outcome.

- [ ] The pipeline generates the approved Zandvoort brief from the exact safety-car deploy, in-this-lap, track-clear, DRS-resume, and recorded stint-boundary evidence.
- [ ] The brief segments pre-neutralisation, safety-car, restart, and post-restart evidence so raw pace is never compared across invalid bands.
- [ ] The Replay handoff opens the exact race-control or stint state, and next steps open the approved Strategy, Tyres, and tyre-focused Modelview explanations.
- [ ] Copy explicitly rejects unsupported claims about cheap stops, undercuts, tyre warm-up, team intent, measured pit loss, or causal advantage.
- [ ] Required chronology, provenance, completeness, or uncertainty changes fail deterministic validation.
- [ ] Keyboard, narrow-screen, sharing, and end-to-end browser acceptance checks pass.
