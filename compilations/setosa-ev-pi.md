# Setosa EV - Pi (pi)

**Source Compilation:** [setosa-ev](https://setosa.io/ev/)
**Website URL:** [https://setosa.io/ev/pi/](https://setosa.io/ev/pi/)
**Author/Domain:** Victor Powell and Lewis Lehe (Setosa)

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://setosa.io/ev/pi/`
- Page title seen by crawler: `Pi (π) explained visually`
- Static DOM media/control tags: `canvas=0, svg=0, input=5, button=0, video=0, audio=0`
- Script assets detected: `/ev/scripts/d3.js`, `/ev/scripts/angular.js`, `/ev/scripts/common.js`, `/ev/pi/script.js`
- Evidence confidence: `Medium`

## What the Site is About
- Explains pi as ratio of circumference to diameter using geometric manipulation.
- The page emphasizes visual decomposition and approximation to build intuition for why pi is constant.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Circle-to-line unwrap demo | interactive simulation/diagram module | Unwraps circumference into a line segment to compare directly against diameter length. | radius control, unwrap toggle | line segment and ratio readout adjust with circle size |
| Polygon approximation ladder | chart/plot module | Approximates circle using regular polygons with increasing side count. | side-count slider/stepper | perimeter estimate converges toward true circumference |
| Area decomposition panel | interactive simulation/diagram module | Slices circle into sectors to show area relationships linked to pi. | sector count, animate rearrangement | rearranged shape becomes more rectangle-like with more slices |
| Ratio tracker | chart/plot module | Displays C/D and A/r^2 estimates as controls change. | mode switch, precision selector | numeric error and approximation bars update live |
| Scale invariance checker | interactive simulation/diagram module | Demonstrates that changing radius scales both C and D proportionally. | radius drag/input | ratio remains constant while absolute lengths scale |
| Pi intuition challenge | interactive simulation/diagram module | Asks user to estimate values before revealing computed results. | guess input, reveal answer | feedback compares estimate error and explanation text |

### Interaction Surface Summary
- Most controls manipulate geometric granularity (radius, slices, polygon sides).
- Educational power comes from convergence animations and ratio invariance checks.
- Numeric readouts should display both estimate and error to support intuition-building.

### Evidence Snippets
- "The distance from the center point is called the and the distance along the outer edge of the circle is called the ."

## Interactivity Level
- Overall rating: **Medium**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Observed scripts include shared EV runtime (`d3.js`, `angular.js`, `common.js`) plus page script.
- Likely vector-based 2D drawing with animation updates tied to small numeric controls.
- Design pattern matches Setosa's explainer architecture: text-first + embedded manipulable diagrams.

## Source Code Orientation
- Live page: `https://setosa.io/ev/pi/`.
- A dedicated `script.js` drives pi-specific geometry scenes.
- When replicating, separate approximation math from rendering and animate only derived geometry.

## Replication Blueprint (Implementation-Ready)
- Implement reusable geometry primitives (circle, polygon, sector) and interpolation utilities.
- Add deterministic side-count presets for reproducible comparisons.
- Display both symbolic formulas and computed numbers in synchronized panels.
- Precompute heavy geometry for large side counts to avoid frame drops.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
