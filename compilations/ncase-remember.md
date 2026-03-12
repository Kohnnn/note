# How To Remember Anything Forever-ish

**Source Compilation:** [ncase-primary-interactive](https://github.com/ncase?tab=repositories)
**Website URL:** [https://ncase.me/remember/](https://ncase.me/remember/)
**Repository URL:** [https://github.com/ncase/remember](https://github.com/ncase/remember)
**Author/Domain:** Nicky Case

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ncase.me/remember/`
- Page title seen by crawler: `How To Remember Anything Forever-ish`
- Static DOM media/control tags: `canvas=0, svg=1, input=0, button=0, video=0, audio=2`
- Script assets detected: `/remember/js/howler.core.min.js`, `/remember/js/minpubsub.src.js`, `/remember/js/comic.js`
- Evidence confidence: `Medium`

## What the Site is About
- Interactive learning experience from the `ncase/remember` project.
- This page is included in the primary interactive-only Nicky Case scope and is documented for replication with source-code orientation.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Interactive comic panels | interactive simulation/diagram module | Narrative progresses through clickable panels and embedded mini activities. | click next/back | story state and visual context advance per click |
| Forgetting curve simulator | interactive simulation/diagram module | Shows memory retention decay over time without rehearsal. | time slider/play | retention curve decays according to selected parameters |
| Active recall timing sandbox | interactive simulation/diagram module | Demonstrates ideal review windows for long-term retention. | review trigger controls | curve resets/boosts based on review timing |
| Leitner box workflow | interactive simulation/diagram module | Visualizes card promotion/demotion across spaced repetition boxes. | daily review controls | card box distribution shifts after each review cycle |
| Habit loop planner | interactive simulation/diagram module | Turns spaced repetition into repeatable daily behavior loop. | streak controls/checklist | consistency metrics update and predict retention outcomes |
| Downloadable card assets | interactive simulation/diagram module | Provides card packs and tools to continue practice outside the page. | download actions | resource panel updates with selected pack/language |

### Interaction Surface Summary
- This project uses interaction-first pedagogy: users learn by manipulating state, not by passive reading.
- Primary modalities vary by project (dragging, choice clicks, simulation transport, and sandbox edits).
- Repository metadata: primary language `HTML`, stars `342`.

### Evidence Snippets
- "How To Remember Anything Forever-ish HOW TO REMEMBER ANYTHING FOREVER-ISH play/read time: 20 minutes by nicky case · oct 2018 In Greek mythology, Mnemosyne, the goddess of Memory..."
- "What if I said there's a memory card game you can play, for 20 minutes a day, to store anything you choose into long-term memory, forever?* * until you die And it's awesome ."
- "teacher's coming That's why I made this badly-drawn interactive comic."
- "Here’s a playable simulation of the Forgetting Curve."
- "Here’s the simulation again, with a single active recall session."
- "Same simulation as before, but now it shows the sweet spot – where you’ve forgotten just a little bit."
- "It's like a card game you play against yourself!"
- "Here's a step-by-step simulation of the Leitner Box: (we'll see a month-by-month sim later) Each daily review takes 20-30 minutes."

## Interactivity Level
- Overall rating: **High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Nicky Case projects commonly use custom JavaScript runtimes with bespoke scene/state controllers.
- Many titles include audio and animation libs (for example Pixi/Howler in some projects) and chapter-state engines.
- Rendering patterns vary per project: canvas-heavy game scenes, DOM narrative layers, or mixed simulation overlays.

## Source Code Orientation
- Repository: `https://github.com/ncase/remember`.
- Live URL: `https://ncase.me/remember/`.
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
