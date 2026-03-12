# We Become What We Behold

**Source Compilation:** [ncase-primary-interactive](https://github.com/ncase?tab=repositories)
**Website URL:** [https://ncase.itch.io/wbwwb](https://ncase.itch.io/wbwwb)
**Repository URL:** [https://github.com/ncase/wbwwb](https://github.com/ncase/wbwwb)
**Author/Domain:** Nicky Case

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ncase.itch.io/wbwwb`
- Page title seen by crawler: `We Become What We Behold by Nicky Case!`
- Static DOM media/control tags: `canvas=0, svg=7, input=0, button=0, video=0, audio=0`
- Script assets detected: `/lib.min.js`, `/bundle.min.js`, `/lib/jquery.maskMoney.js`, `/game.min.js`
- Evidence confidence: `Medium`

## What the Site is About
- Interactive learning experience from the `ncase/wbwwb` project.
- This page is included in the primary interactive-only Nicky Case scope and is documented for replication with source-code orientation.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Camera framing loop | interactive simulation/diagram module | Player captures moments from a crowd; selected frames become headlines. | click capture | captured event changes crowd mood and behavior probabilities |
| Headline amplification | interactive simulation/diagram module | Media framing amplifies specific incidents over neutral background events. | timed capture choices | news feed biases future crowd actions |
| Panic escalation model | interactive simulation/diagram module | Small tensions spiral into extreme polarization through repeated signaling. | continued play decisions | social state transitions toward instability |
| Behavior feedback graph | interactive simulation/diagram module | Represents cyclical reinforcement between media and crowd reaction. | implicit via gameplay | feedback intensifies as certain events are over-sampled |
| Ending-state replay | interactive simulation/diagram module | Review how sequence of captured events produced final outcome. | replay/reset | scenario restarts for alternate player decision paths |

### Interaction Surface Summary
- This project uses interaction-first pedagogy: users learn by manipulating state, not by passive reading.
- Primary modalities vary by project (dragging, choice clicks, simulation transport, and sandbox edits).
- Repository metadata: primary language `JavaScript`, stars `1372`.

## Interactivity Level
- Overall rating: **High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Nicky Case projects commonly use custom JavaScript runtimes with bespoke scene/state controllers.
- Many titles include audio and animation libs (for example Pixi/Howler in some projects) and chapter-state engines.
- Rendering patterns vary per project: canvas-heavy game scenes, DOM narrative layers, or mixed simulation overlays.

## Source Code Orientation
- Repository: `https://github.com/ncase/wbwwb`.
- Live URL: `https://ncase.itch.io/wbwwb`.
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
