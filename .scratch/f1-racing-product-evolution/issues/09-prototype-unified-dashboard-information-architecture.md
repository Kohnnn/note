# Prototype the Unified Dashboard information architecture

Type: prototype
Status: resolved
Blocked by: 07, 08

## Question

Which low-cost Dashboard composition lets a first-time engineering learner identify one useful question, open its recorded race evidence, understand the mechanism, try the related analysis, continue an existing learning trail, and distinguish Historical Race Desk without creating another dense control room? Prototype desktop and narrow-screen states using existing content and routes, then resolve the hierarchy through live human review.

## Prototype artifact

- `/` is a static Dashboard prototype: Monza braking is the sole featured question, with exact Replay, Learn, and Modelview links plus Recorded, Derived, and Unknown evidence boundaries.
- Mexico and Zandvoort form a restrained next-question queue; the existing Learn sequence appears as a local-trail continuation affordance.
- Primary navigation is Dashboard, Replay, Learn, and Modelview. Historical Race Desk remains secondary and explicitly labeled as a replay simulation, not live timing.
- Desktop uses an evidence column and a narrow support rail. At 800px and below, the reading order becomes question, evidence labels, actions, queue, trail, then product surfaces.

## Human review checklist

- [x] The first screen makes the learner question more prominent than product navigation or controls.
- [x] "Open recorded evidence" is the primary action; Learn and Modelview are subordinate.
- [x] Recorded, Derived, and Unknown labels state the evidence boundary directly.
- [x] Mexico and Zandvoort remain visible as the two restrained follow-up briefs.
- [x] Braking is the prototype continuation until local progress-resume work replaces the static state.
- [x] Historical Race Desk is distinct as an historical simulation on desktop and narrow screens.
- [x] `/` passed accessibility-snapshot, no-overflow, link, console, desktop, and 390px browser checks against the static export.

## Answer

Approve the prototype hierarchy represented by `/`: one featured engineering question and dominant Replay evidence action; three explicit evidence classes; optional Learn and Modelview handoffs; two follow-up briefs; a compact local learning trail; and a final route-role index with Historical Race Desk visually and verbally secondary. Desktop uses a main evidence column with one support rail. Narrow screens preserve the reading order question → evidence boundary → actions → route context → follow-up briefs → trail → surfaces. This composition is the reference for implementation and the visual-system prototype; downstream work must replace prototype-only progress copy with real local resume state rather than expand the first screen into a control room.
