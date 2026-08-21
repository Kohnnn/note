# 27 — Add the Mexico Aero evidence tracer

Type: task
Status: resolved
Blocked by: 26

**What to build:** A learner can use the Unified Dashboard to study Aero through a Mexico race lap comparison that shows a whole-lap advantage, recorded DRS and control evidence, and the explicit limit that telemetry cannot prove one aerodynamic cause.

- [x] The pipeline generates the approved Mexico brief from the exact driver, lap, sector, speed, control, and DRS anchors in the releasable pack.
- [x] The brief reuses the approved Dashboard and evidence-label system rather than adding a second content model or layout.
- [x] The Replay handoff restores the exact comparison state; the explanatory handoff opens the relevant Aero lesson and rear-wing Modelview focus without presenting either as session measurement.
- [x] Copy states the observed all-sector timing advantage and explicitly rejects unsupported drag, downforce, setup, rear-wing, or single-corner causal claims.
- [x] Removing or changing a required evidence anchor causes deterministic generation or validation to fail.
- [x] Keyboard, narrow-screen, sharing, provenance, and end-to-end browser acceptance checks pass.

## Answer

Implemented in `f1-racing` commit `33bc9c978a574a1aa03a1da3d7261b623cb43113`. The same versioned generator and Dashboard contract anchor NOR/LEC lap 45, all three NOR-led timing-sector windows, sampled speed/control/DRS states, deterministic sector aggregation, explicit absent aerodynamic fields, exact Replay comparison state, Aero handoff, and rear-wing Modelview focus. Visible copy rejects drag, downforce, setup, rear-wing, single-corner, and causal conclusions.

Verified under Node.js `v22.23.0` with the full quality/build/static/browser/release-tooling matrix recorded in ticket 26. Generator tests mutate Mexico sector and absence anchors and fail closed; the Dashboard browser probe checks exact URLs, keyboard activation, responsive layouts, local continuation, and zero external or client-measurement requests. Final standards/spec review reported no actionable findings.
