# Setosa EV - Exponentiation

**Source Compilation:** [setosa-ev](https://setosa.io/ev/)
**Website URL:** [https://setosa.io/ev/exponentiation/](https://setosa.io/ev/exponentiation/)
**Author/Domain:** Victor Powell and Lewis Lehe (Setosa)

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://setosa.io/ev/exponentiation/`
- Page title seen by crawler: `Exponentiation explained visually`
- Static DOM media/control tags: `canvas=0, svg=0, input=10, button=4, video=0, audio=0`
- Script assets detected: `/ev/scripts/d3.js`, `/ev/scripts/angular.js`, `/ev/scripts/common.js`
- Evidence confidence: `Medium`

## What the Site is About
- Contrasts linear growth and exponential growth through animated step processes.
- Users can restart and vary rates to see why compounding quickly dominates additive change.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Linear growth stepper | interactive simulation/diagram module | Adds a constant amount per step and visualizes predictable straight-line increase. | rate control, steps, restart | bars/points extend linearly at each tick |
| Exponential growth stepper | interactive simulation/diagram module | Multiplies by a fixed factor each step to reveal compounding acceleration. | multiplier control, speed, restart | curve steepness changes dramatically with multiplier |
| Side-by-side comparator | chart/plot module | Places linear and exponential trajectories on the same axes for direct contrast. | toggle synchronized start, axis scale mode | cross-over point and divergence update immediately |
| Virus-spread toy model | interactive simulation/diagram module | Applies exponentiation concept to simple contagion assumptions. | initial infected, growth factor, steps | population bars and warning thresholds update each step |
| Rate-speed playback panel | interactive simulation/diagram module | Provides temporal controls for replaying growth at different tempos. | play/pause, speed, restart | animation pacing changes while preserving numeric trajectory |
| Formula annotation strip | algorithm walkthrough module | Shows recurrence equations for additive vs multiplicative update rules. | mode switch | active formula and highlighted terms track selected model |

### Interaction Surface Summary
- Replay + speed controls are central to learning (watching compounding unfold over time).
- Comparison view should support both linear and logarithmic y-scale to avoid visual clipping.
- Narrative should explicitly call out cross-over points where exponential overtakes linear.

### Evidence Snippets
- "Restart rate: steps: {{opts.steps}} speed: {{opts.speed}} Linear growth Most of us already have an intuition for linear growth."
- "restart rate: steps: {{opts.steps}} speed: {{opts.speed}} Exponential growth With exponential growth, on the other hand, each step multiplies the total by a fixed amount."
- "restart rate: steps: {{opts.steps}} speed: {{opts.speed}} Example The following is a naive model of the spread of a virus in a population."
- "restart speed: {{opts.speed}} For more explanations, visit the Explained Visually project homepage."

## Interactivity Level
- Overall rating: **High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Observed scripts include `d3.js`, `angular.js`, and shared EV runtime utilities.
- UI emphasizes numeric controls and animated chart redraws per simulation tick.
- No heavy framework shell; interactions are embedded inside article sections.

## Source Code Orientation
- Live page: `https://setosa.io/ev/exponentiation/`.
- Look for restart/speed logic in page-specific controllers tied to shared EV components.
- Rebuild with a generic discrete-time engine reusable by other growth demos.

## Replication Blueprint (Implementation-Ready)
- Implement two update rules (`x += c`, `x *= r`) sharing one timeline controller.
- Add deterministic frame stepping for screenshot reproducibility.
- Expose editable presets (finance, population, contagion) to broaden transfer learning.
- Instrument chart redraw cost to keep animation smooth on low-end devices.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
