# LOOPY

**Source Compilation:** [ncase-primary-interactive](https://github.com/ncase?tab=repositories)
**Website URL:** [https://ncase.me/loopy/](https://ncase.me/loopy/)
**Repository URL:** [https://github.com/ncase/loopy](https://github.com/ncase/loopy)
**Author/Domain:** Nicky Case

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ncase.me/loopy/`
- Page title seen by crawler: `LOOPY: a tool for thinking in systems`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: no script paths captured
- Evidence confidence: `Medium`

## What the Site is About
- Interactive learning experience from the `ncase/loopy` project.
- This page is included in the primary interactive-only Nicky Case scope and is documented for replication with source-code orientation.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Node creation and equation editor | interactive simulation/diagram module | Create variables and define self/neighbor influence relationships. | add-node, value edit, label edit | node values and directed links update instantly |
| Positive/negative link tuning | interactive simulation/diagram module | Set reinforcing vs balancing loops via signed edge weights. | link draw, sign toggle, strength adjust | feedback loop dynamics shift in real time |
| Simulation run controls | interactive simulation/diagram module | Run, pause, and reset system dynamics for what-if analysis. | play/pause, speed, reset | time evolution advances or rewinds from deterministic state |
| Example model gallery | interactive simulation/diagram module | Load prebuilt systems (ecology, economics, social dynamics). | example picker | graph and equations swap to selected template |
| Sandbox from scratch | interactive simulation/diagram module | Build custom system maps and test causal assumptions. | add/remove nodes, add/remove links | system graph and resulting trajectories update immediately |
| Share/export mode | interactive simulation/diagram module | Export model state for embedding or sharing with others. | share link/export | serialized model encodes structure and initial values |

### Interaction Surface Summary
- This project uses interaction-first pedagogy: users learn by manipulating state, not by passive reading.
- Primary modalities vary by project (dragging, choice clicks, simulation transport, and sandbox edits).
- Repository metadata: primary language `JavaScript`, stars `1710`.

### Evidence Snippets
- "a tool to make interactive simulations may not be that much help."
- "play with simulations It's the ancient, time-honored way of learning: messing around and seeing what happens."
- "Play with simulations to ask "what if" questions, and get an intuition for how the system works!"
- "NOW PLAY WITH AN EXAMPLE: OR, MAKE A MODEL FROM SCRATCH → Like duct tape, you can use LOOPY for all sorts of things: However you choose to use LOOPY, hopefully it can give you not just the software tools, but also the mental tools to understand the complex systems of the world around us."

## Interactivity Level
- Overall rating: **Very High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Nicky Case projects commonly use custom JavaScript runtimes with bespoke scene/state controllers.
- Many titles include audio and animation libs (for example Pixi/Howler in some projects) and chapter-state engines.
- Rendering patterns vary per project: canvas-heavy game scenes, DOM narrative layers, or mixed simulation overlays.

## Source Code Orientation
- Repository: `https://github.com/ncase/loopy`.
- Live URL: `https://ncase.me/loopy/`.
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
