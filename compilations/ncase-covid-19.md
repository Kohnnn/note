# COVID-19 Futures

**Source Compilation:** [ncase-primary-interactive](https://github.com/ncase?tab=repositories)
**Website URL:** [https://ncase.me/covid-19/](https://ncase.me/covid-19/)
**Repository URL:** [https://github.com/ncase/covid-19](https://github.com/ncase/covid-19)
**Author/Domain:** Nicky Case

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ncase.me/covid-19/`
- Page title seen by crawler: `What Happens Next? COVID-19 Futures, Explained With Playable Simulations`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/covid-19/js/blerp.js`, `/covid-19/js/littlefoot.js`
- Evidence confidence: `Medium`

## What the Site is About
- Interactive learning experience from the `ncase/covid-19` project.
- This page is included in the primary interactive-only Nicky Case scope and is documented for replication with source-code orientation.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Scenario selector (0 to 4+) | interactive simulation/diagram module | Switches between intervention strategies from no action to testing/masks. | scenario tabs | model assumptions and projected curves swap |
| SEIR playable simulation | interactive simulation/diagram module | Runs compartment-model dynamics with real-time chart updates. | play/pause, speed | S/E/I/R trajectories animate over time |
| R-value calculator | interactive simulation/diagram module | Shows how hygiene/distancing/testing influence effective reproduction number. | policy sliders | R and growth/decay behavior update continuously |
| Lockdown schedule editor | interactive simulation/diagram module | Lets users design intervention timing windows. | lockdown sliders | curve peaks and healthcare load shift with schedule |
| ICU capacity overlay | interactive simulation/diagram module | Compares case severity projections against health-system threshold. | capacity controls | over-capacity regions highlight when exceeded |
| Long-term strategy sandbox | interactive simulation/diagram module | Tests multi-year outcomes under immunity/vaccine uncertainty. | immunity and intervention parameters | wave recurrence and cumulative burden change |

### Interaction Surface Summary
- This project uses interaction-first pedagogy: users learn by manipulating state, not by passive reading.
- Primary modalities vary by project (dragging, choice clicks, simulation transport, and sandbox edits).
- Repository metadata: primary language `HTML`, stars `233`.

### Evidence Snippets
- "COVID-19 Futures, Explained With Playable Simulations 🕐 30 min play/read · by Marcel Salathé (epidemiologist) & Nicky Case (art/code) "The only thing to fear is fear itself" was stupid advice."
- "click this footnote!→ 1 ) is meant to give you hope and fear."
- "In this simulation, Infectious people can turn Susceptible people into more Infectious people: It's estimated that, at the start of a COVID-19 outbreak, the virus jumps from an to an every 4 days, on average ."
- "You can re-play it later with different settings: (technical caveats: 3 ) This is the exponential growth curve."
- "Here's what that looks like, with a simulation starting with 100% : This is the opposite of exponential growth, the exponential decay curve."
- "7 What happens if we add that to the simulation?"
- "(caveats: 11 ) Play with this R 0 calculator, to see how R 0 depends on recovery time & new-infection time: But remember, the fewer s there are, the slower s become s."
- "We'll explain later.) Now, let's play the SEIR Model again, but showing R 0 , R over time, and the herd immunity threshold: NOTE: Total cases does not stop at herd immunity, but overshoots it!"

## Interactivity Level
- Overall rating: **Very High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Nicky Case projects commonly use custom JavaScript runtimes with bespoke scene/state controllers.
- Many titles include audio and animation libs (for example Pixi/Howler in some projects) and chapter-state engines.
- Rendering patterns vary per project: canvas-heavy game scenes, DOM narrative layers, or mixed simulation overlays.

## Source Code Orientation
- Repository: `https://github.com/ncase/covid-19`.
- Live URL: `https://ncase.me/covid-19/`.
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
