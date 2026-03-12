# The Evolution of Trust

**Source Compilation:** [ncase-primary-interactive](https://github.com/ncase?tab=repositories)
**Website URL:** [https://ncase.me/trust/](https://ncase.me/trust/)
**Repository URL:** [https://github.com/ncase/trust](https://github.com/ncase/trust)
**Author/Domain:** Nicky Case

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ncase.me/trust/`
- Page title seen by crawler: `The Evolution of Trust`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/trust/js/lib/helpers.js`, `/trust/js/lib/pegasus.js`, `/trust/js/lib/minpubsub.src.js`, `/trust/js/lib/q.js`, `/trust/js/lib/pixi.min.js`, `/trust/js/lib/howler.js`, `/trust/js/lib/tweenjs-0.6.2.min.js`, `/trust/js/lib/sharing.js`, `/trust/js/core/Loader.js`, `/trust/js/core/Slideshow.js`, `/trust/js/core/SlideSelect.js`, `/trust/js/core/Button.js`
- Evidence confidence: `Medium`

## What the Site is About
- Interactive learning experience from the `ncase/trust` project.
- This page is included in the primary interactive-only Nicky Case scope and is documented for replication with source-code orientation.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Prisoner's dilemma payoff board | interactive simulation/diagram module | Shows payoff outcomes for cooperate/defect combinations. | payoff matrix selection | score outcomes recalculate per matchup |
| Strategy selector | interactive simulation/diagram module | Choose agent strategies (copycat, always cheat, random, etc.). | strategy dropdown/buttons | round outcomes and trust evolution change with strategy choice |
| Repeated round simulator | interactive simulation/diagram module | Runs multi-round games to show retaliation, forgiveness, and exploitation. | round count, play/step | scoreboard and history traces update each round |
| Population tournament | interactive simulation/diagram module | Pits mixed strategy populations against each other over many interactions. | population mix sliders | population shares and dominance trends evolve over time |
| Noise/miscommunication controls | interactive simulation/diagram module | Injects accidental mistakes to show impact on cooperation stability. | noise slider | cooperation collapses or recovers based on error rate |
| Policy sandbox | interactive simulation/diagram module | Test interventions that restore trust under noisy conditions. | forgiveness and punishment parameter controls | long-run equilibrium shifts with policy settings |

### Interaction Surface Summary
- This project uses interaction-first pedagogy: users learn by manipulating state, not by passive reading.
- Primary modalities vary by project (dragging, choice clicks, simulation transport, and sandbox edits).
- Repository metadata: primary language `JavaScript`, stars `6164`.

## Interactivity Level
- Overall rating: **Very High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Nicky Case projects commonly use custom JavaScript runtimes with bespoke scene/state controllers.
- Many titles include audio and animation libs (for example Pixi/Howler in some projects) and chapter-state engines.
- Rendering patterns vary per project: canvas-heavy game scenes, DOM narrative layers, or mixed simulation overlays.

## Source Code Orientation
- Repository: `https://github.com/ncase/trust`.
- Live URL: `https://ncase.me/trust/`.
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
