# The Wisdom and/or Madness of Crowds

**Source Compilation:** [ncase-primary-interactive](https://github.com/ncase?tab=repositories)
**Website URL:** [https://ncase.me/crowds/](https://ncase.me/crowds/)
**Repository URL:** [https://github.com/ncase/crowds](https://github.com/ncase/crowds)
**Author/Domain:** Nicky Case

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ncase.me/crowds/`
- Page title seen by crawler: `The Wisdom and/or Madness of Crowds`
- Static DOM media/control tags: `canvas=2, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/crowds/js/lib/helpers.js`, `/crowds/js/lib/inobounce.js`, `/crowds/js/lib/minpubsub.src.js`, `/crowds/js/lib/howler.min.js`, `/crowds/js/lib/Key.js`, `/crowds/js/lib/Mouse.js`, `/crowds/js/lib/Sprite.js`, `/crowds/js/slideshow/Slideshow.js`, `/crowds/js/slideshow/Pencil.js`, `/crowds/js/slideshow/Boxes.js`, `/crowds/js/slideshow/Scratch.js`, `/crowds/js/slideshow/Navigation.js`
- Evidence confidence: `Medium`

## What the Site is About
- Interactive learning experience from the `ncase/crowds` project.
- This page is included in the primary interactive-only Nicky Case scope and is documented for replication with source-code orientation.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Network drawing canvas | interactive simulation/diagram module | Draw people and links to create custom social graphs. | draw/add/delete tools | graph topology updates immediately |
| Contagion seeding controls | interactive simulation/diagram module | Mark initial infected/active nodes for spread experiments. | seed toggle | initial condition affects spread trajectory |
| Simulation transport | interactive simulation/diagram module | Run, pause, and reset spread dynamics. | play/pause/reset | infection/adoption states evolve over ticks |
| Connection cutter tool | interactive simulation/diagram module | Remove links during runtime to test intervention strategies. | cut-link drag tool | pathways break and contagion routes reroute |
| Chapter scenario presets | interactive simulation/diagram module | Switches between different contagion archetypes and network assumptions. | scenario selector | rules and visuals load per selected chapter |
| Sandbox mode | interactive simulation/diagram module | Open experimentation with all graph and contagion parameters. | full tool palette | users can reproduce and extend chapter examples |

### Interaction Surface Summary
- This project uses interaction-first pedagogy: users learn by manipulating state, not by passive reading.
- Primary modalities vary by project (dragging, choice clicks, simulation transport, and sandbox edits).
- Repository metadata: primary language `HTML`, stars `447`.

### Evidence Snippets
- "An interactive guide to human networks: 0 0."
- "Draw a network & run the simulation, so that everyone gets infected with the "contagion"."
- "Draw Network Add Person Add "Infected" Drag Person Delete Person CLEAR IT ALL (...or, use keyboard shortcuts!) [1]: Add Person [2]: Add "Infected" [Space]: Drag [Backspace]: Delete IN CONCLUSION: it's all about..."
- "“The great triumphs and tragedies of history are caused, not by people being fundamentally good or fundamentally bad, but by people being fundamentally people.” ~ Neil Gaiman & Terry Pratchett <3 created by NICKY CASE play my other shtuff · follow my tweeter lots of love and thanks to MY PATREON SUPPORTERS help me make more like this!"
- "<3 see my supporters · see my playtesters ♫ music is "Friends 2018" and "Friends 2068" by Komiku </> Crowds is fully open source WIN start simulation reset & re-draw Fan-made translations: What the, no fan-made translations exist yet?!"
- "Here's an excerpt: Preface & Chapter 1 Interactive: The Evolution of Trust by Nicky Case (me) (2017)."
- "Interactive: Parable of the Polygons by Vi Hart and Nicky Case (also me) (2014)."
- "Or, if you just want to see a whole gallery of interactive edu-things, here's Explorable Explanations , a hub for learning through play!"

## Interactivity Level
- Overall rating: **High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Nicky Case projects commonly use custom JavaScript runtimes with bespoke scene/state controllers.
- Many titles include audio and animation libs (for example Pixi/Howler in some projects) and chapter-state engines.
- Rendering patterns vary per project: canvas-heavy game scenes, DOM narrative layers, or mixed simulation overlays.

## Source Code Orientation
- Repository: `https://github.com/ncase/crowds`.
- Live URL: `https://ncase.me/crowds/`.
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
