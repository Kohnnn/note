# 27 — Add the Mexico Aero evidence tracer

Type: task
Status: open
Blocked by: 26

**What to build:** A learner can use the Unified Dashboard to study Aero through a Mexico race lap comparison that shows a whole-lap advantage, recorded DRS and control evidence, and the explicit limit that telemetry cannot prove one aerodynamic cause.

- [ ] The pipeline generates the approved Mexico brief from the exact driver, lap, sector, speed, control, and DRS anchors in the releasable pack.
- [ ] The brief reuses the approved Dashboard and evidence-label system rather than adding a second content model or layout.
- [ ] The Replay handoff restores the exact comparison state; the explanatory handoff opens the relevant Aero lesson and rear-wing Modelview focus without presenting either as session measurement.
- [ ] Copy states the observed all-sector timing advantage and explicitly rejects unsupported drag, downforce, setup, rear-wing, or single-corner causal claims.
- [ ] Removing or changing a required evidence anchor causes deterministic generation or validation to fail.
- [ ] Keyboard, narrow-screen, sharing, provenance, and end-to-end browser acceptance checks pass.
