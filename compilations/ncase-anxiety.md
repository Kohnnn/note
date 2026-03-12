# Adventures With Anxiety

**Source Compilation:** [ncase-primary-interactive](https://github.com/ncase?tab=repositories)
**Website URL:** [https://ncase.me/anxiety/](https://ncase.me/anxiety/)
**Repository URL:** [https://github.com/ncase/anxiety](https://github.com/ncase/anxiety)
**Author/Domain:** Nicky Case

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ncase.me/anxiety/`
- Page title seen by crawler: `Adventures With Anxiety!`
- Static DOM media/control tags: `canvas=1, svg=0, input=2, button=0, video=0, audio=0`
- Script assets detected: `/anxiety/scripts/lib/createImageBitmap.js`, `/anxiety/scripts/lib/tickable_observer.js`, `/anxiety/scripts/lib/helpers.js`, `/anxiety/scripts/lib/rsvp.min.js`, `/anxiety/scripts/lib/minpubsub.min.js`, `/anxiety/scripts/lib/howler.min.js`, `/anxiety/scripts/game/Loader.js`, `/anxiety/scripts/game/Game.js`, `/anxiety/scripts/game/Sprite.js`, `/anxiety/scripts/game/HP.js`, `/anxiety/scripts/game/BG_Anxiety.js`, `/anxiety/scripts/game/Character.js`
- Evidence confidence: `Medium`

## What the Site is About
- Interactive learning experience from the `ncase/anxiety` project.
- This page is included in the primary interactive-only Nicky Case scope and is documented for replication with source-code orientation.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Branching narrative dialogue | interactive simulation/diagram module | Interactive choices steer conversations with the anxiety character. | click or spacebar choices | next scenes and dialogue branches change by choice |
| Stress/health state meter | interactive simulation/diagram module | Tracks psychological pressure and coping status over scenes. | narrative decisions | meter state updates and influences upcoming events |
| Panic response mini-scenarios | interactive simulation/diagram module | Shows fight/flight style reactions in social and internal contexts. | choice actions | scene outcomes branch toward escalation or de-escalation |
| Pause and content note layer | interactive simulation/diagram module | Lets users pause and inspect support/context notes. | pause toggle, options panel | simulation halts and overlay metadata appears |
| Audio-driven feedback | interactive simulation/diagram module | Music and SFX reinforce emotional pacing during interaction. | volume/options | audio layers react to scene progression |
| Ending and resource handoff | interactive simulation/diagram module | Concludes with tailored reflection and mental-health resources. | continue/restart | ending state and resource pointers vary with playthrough |

### Interaction Surface Summary
- This project uses interaction-first pedagogy: users learn by manipulating state, not by passive reading.
- Primary modalities vary by project (dragging, choice clicks, simulation transport, and sandbox edits).
- Repository metadata: primary language `JavaScript`, stars `471`.

### Evidence Snippets
- "click or spacebar tap anywhere paused click anywhere to keep freaking out Adventures With Anxiety is about, well, anxiety."
- "other notes: alcohol abuse, sexuality , a @✩$!load of swearing mental health tips & resources 🔗 ok mental health resources — or — play more of my shtuff throw coins at me on Patreon please your ear-holes with Monplaisir's original soundtrack close And advance on click Volume: ok Created by Nicky Case Music by Monplaisir Extra code by Spacie Full credits Fan-Made Translations!"

## Interactivity Level
- Overall rating: **High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Nicky Case projects commonly use custom JavaScript runtimes with bespoke scene/state controllers.
- Many titles include audio and animation libs (for example Pixi/Howler in some projects) and chapter-state engines.
- Rendering patterns vary per project: canvas-heavy game scenes, DOM narrative layers, or mixed simulation overlays.

## Source Code Orientation
- Repository: `https://github.com/ncase/anxiety`.
- Live URL: `https://ncase.me/anxiety/`.
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
