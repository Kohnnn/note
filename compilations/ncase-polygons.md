# Parable of the Polygons

**Source Compilation:** [ncase-primary-interactive](https://github.com/ncase?tab=repositories)
**Website URL:** [https://ncase.me/polygons/](https://ncase.me/polygons/)
**Repository URL:** [https://github.com/ncase/polygons](https://github.com/ncase/polygons)
**Author/Domain:** Nicky Case

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ncase.me/polygons/`
- Page title seen by crawler: `Parable of the Polygons - a playable post on the shape of society`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/polygons/js/Mouse.js`, `/polygons/js/intro.js`
- Evidence confidence: `Medium`

## What the Site is About
- Interactive learning experience from the `ncase/polygons` project.
- This page is included in the primary interactive-only Nicky Case scope and is documented for replication with source-code orientation.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Neighborhood board | interactive simulation/diagram module | Move shapes around a grid to satisfy local tolerance rules. | drag and drop | unhappy/happy states update immediately |
| Bias threshold slider | interactive simulation/diagram module | Adjusts individual preference threshold for similar neighbors. | slider | segregation dynamics change sharply near critical thresholds |
| Auto-run simulation | interactive simulation/diagram module | Lets system evolve automatically under current bias settings. | play/pause/reset | population rearrangement evolves over simulated time |
| Segregation metric graph | interactive simulation/diagram module | Tracks macro segregation score while local moves occur. | auto-run + parameter changes | graph trend updates per simulation step |
| Anti-bias intervention controls | interactive simulation/diagram module | Injects corrective behavior to test de-segregation policies. | anti-bias slider/toggle | long-run segregation decreases under stronger intervention |
| Large-scale sandbox | interactive simulation/diagram module | Runs bigger populations for emergent behavior comparison. | population size controls | small local rules produce visible macro patterns |

### Interaction Surface Summary
- This project uses interaction-first pedagogy: users learn by manipulating state, not by passive reading.
- Primary modalities vary by project (dragging, choice clicks, simulation transport, and sandbox edits).
- Repository metadata: primary language `JavaScript`, stars `1345`.

### Evidence Snippets
- "drag & drop unhappy polygons until nobody is unhappy: (just move them to random empty spots."
- "There's also a graph that tracks how much segregation there is over time."
- "(Or if you're feeling particularly nasty today, more bias?) use the slider to adjust the shapes' individual bias: Notice how much more segregated things become, when you increase the bias beyond 33%."
- "Let's see this play out on a larger scale, when we change the amount of bias and anti-bias for all shapes."
- "finally, a big ol' sandbox to play around in."
- "Male-Female Differences: A Computer Simulation shows how a small gender bias compounds as you move up the corporate ladder."

## Interactivity Level
- Overall rating: **High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Nicky Case projects commonly use custom JavaScript runtimes with bespoke scene/state controllers.
- Many titles include audio and animation libs (for example Pixi/Howler in some projects) and chapter-state engines.
- Rendering patterns vary per project: canvas-heavy game scenes, DOM narrative layers, or mixed simulation overlays.

## Source Code Orientation
- Repository: `https://github.com/ncase/polygons`.
- Live URL: `https://ncase.me/polygons/`.
- Inspect project-specific `js/` or `scripts/` directories for scene setup, simulation logic, and chapter flow controllers.
- Prioritize understanding state machines and interaction handlers before visual polish when replicating.

## Replication Blueprint (Implementation-Ready)
- Implement chapter/state progression as explicit finite states; avoid hidden side effects.
- Separate simulation core from presentation so behavior can be unit-tested.
- Add replay/reset functionality early because many learning moments depend on rerunning scenarios.
- Capture event logs for each interaction to validate parity against original behavior.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
