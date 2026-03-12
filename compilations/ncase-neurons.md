# Neurotic Neurons

**Source Compilation:** [ncase-primary-interactive](https://github.com/ncase?tab=repositories)
**Website URL:** [https://ncase.me/neurons/](https://ncase.me/neurons/)
**Repository URL:** [https://github.com/ncase/neurons](https://github.com/ncase/neurons)
**Author/Domain:** Nicky Case

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ncase.me/neurons/`
- Page title seen by crawler: `Neurotic Neurons`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: no script paths captured
- Evidence confidence: `Medium`

## What the Site is About
- Interactive learning experience from the `ncase/neurons` project.
- This page is included in the primary interactive-only Nicky Case scope and is documented for replication with source-code orientation.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Neuron firing network | interactive simulation/diagram module | Shows neurons activating through weighted connections over time. | play/pause, scenario triggers | activation states propagate across network |
| Hebbian learning demonstrator | interactive simulation/diagram module | Illustrates 'fire together wire together' strengthening. | learning mode toggle | connection strengths increase with co-activation |
| Anti-hebbian suppression mode | interactive simulation/diagram module | Contrasts inhibitory adaptation and decorrelation behavior. | mode toggle | selected connections weaken under anti-correlation |
| Trigger-response storyline | interactive simulation/diagram module | Links emotional triggers to neural pathway reinforcement. | scene progression controls | path dominance shifts as repeated triggers occur |
| Parameter sandbox | interactive simulation/diagram module | Lets users adjust thresholds/weights and observe stability. | parameter sliders/inputs | network convergence and oscillation behavior changes |

### Interaction Surface Summary
- This project uses interaction-first pedagogy: users learn by manipulating state, not by passive reading.
- Primary modalities vary by project (dragging, choice clicks, simulation transport, and sandbox edits).
- Repository metadata: primary language `JavaScript`, stars `201`.

### Evidence Snippets
- "Neurotic Neurons NEUROTIC NEURONS: AN INTERACTIVE EXPLANATION Neurons only skims the surface of psychology/neuroscience, so if you want a deeper dive, do check out this Crash Course video on conditioning, and these Wikipedia articles on Hebbian Learning and Anti-Hebbian Learning ."
- "The other part of Neurons is its weird interactive format, a hybrid of "game" and animated explainers like Vi Hart, CGP Grey, and Kurzgesagt."
- "I was inspired by Bret Victor's 2011 article, Explorable Explanations , another interactive hybrid."

## Interactivity Level
- Overall rating: **High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Nicky Case projects commonly use custom JavaScript runtimes with bespoke scene/state controllers.
- Many titles include audio and animation libs (for example Pixi/Howler in some projects) and chapter-state engines.
- Rendering patterns vary per project: canvas-heavy game scenes, DOM narrative layers, or mixed simulation overlays.

## Source Code Orientation
- Repository: `https://github.com/ncase/neurons`.
- Live URL: `https://ncase.me/neurons/`.
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
