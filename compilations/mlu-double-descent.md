# Double Descent

**Source Compilation:** [aws-mlu-explain](https://github.com/Kohnnn/aws-mlu-explain)
**Website URL:** [https://mlu-explain.github.io/double-descent/](https://mlu-explain.github.io/double-descent/)
**Author/Domain:** AWS Machine Learning University team

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://mlu-explain.github.io/double-descent/`
- Page title seen by crawler: `Double Descent`
- Static DOM media/control tags: `canvas=0, svg=1, input=0, button=0, video=0, audio=0`
- Script assets detected: `/double-descent/scrollCenter.9b85e06e.js`, `/double-descent/scrollSide.ff79d116.js`
- Evidence confidence: `Medium`

## What the Site is About
- Visual introduction to double descent showing how model complexity changes train/test error across regimes.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| MLU-expl AI n | interactive simulation/diagram module | Explains MLU-expl AI n within Double Descent using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Double Descent | interactive simulation/diagram module | Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Part 1: A Visual Introduction | interactive simulation/diagram module | Explains Part 1: A Visual Introduction within Double Descent using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Jared Wilber & Brent Werness, December 2021 | interactive simulation/diagram module | Explains Jared Wilber & Brent Werness, December 2021 within Double Descent using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| What's Going On? | interactive simulation/diagram module | Explains What's Going On? within Double Descent using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Minding The Gap | interactive simulation/diagram module | Explains Minding The Gap within Double Descent using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Final Takeaways | reference/narrative section | Narrative/reference section in Double Descent that summarizes results and links supporting resources. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| References & Open Source | reference/narrative section | Narrative/reference section in Double Descent that summarizes results and links supporting resources. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| To begin, we plot a simple model | chart/plot module | To begin, we plot a simple model. | implicit controls | plots and numeric readouts recalculate with current parameters |
| Next, we plot a model that's not too | chart/plot module | Next, we plot a model that's not too simple, nor too complex. | implicit controls | plots and numeric readouts recalculate with current parameters |
| This is reflected in the low error ( | chart/plot module | This is reflected in the low error ( ≤ 0.25) in the bottom chart. | implicit controls | plots and numeric readouts recalculate with current parameters |
| Now, let's plot a complex model, one where | chart/plot module | Now, let's plot a complex model, one where our number of features is equal to the number of dimensions. | implicit controls | plots and numeric readouts recalculate with current parameters |
| At this stage we're overfitting, which leads to | chart/plot module | At this stage we're overfitting, which leads to the high test error shown in the plot. | implicit controls | plots and numeric readouts recalculate with current parameters |
| Toggle the slider to modify the number of | interactive simulation/diagram module | Toggle the slider to modify the number of non-linear features used to build the models. | slider/range, toggle/switch | parameter values update continuously while slider position changes |

### Interaction Surface Summary
- Control modalities detected: slider/range (1 text hits), playback/scrub (0 text hits).
- Visual surfaces detected: canvas=0, svg=1, chart-language hits=9, script chart/plot hits=30.
- Runtime interaction signals from script tokens: pointer=18, requestAnimationFrame=4, key=63.

### Evidence Snippets
- "To begin, we plot a simple model."
- "Next, we plot a model that's not too simple, nor too complex."
- "This is reflected in the low error ( ≤ 0.25) in the bottom chart."
- "Now, let's plot a complex model, one where our number of features is equal to the number of dimensions."
- "At this stage we're overfitting, which leads to the high test error shown in the plot."
- "Toggle the slider to modify the number of non-linear features used to build the models."

## Interactivity Level
- Overall rating: **Low** (`score=12/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/double-descent/scrollCenter.9b85e06e.js`, `/double-descent/scrollSide.ff79d116.js`
- `Core runtime`: compiled frontend bundles (many pages expose `build/bundle.js`, consistent with Svelte output).
- `Visualization`: D3-style scale/axis/path signatures appear in loaded scripts.
- `Math typesetting`: KaTeX signatures appear on equation-heavy pages.
- `Narrative orchestration`: step-based scrollytelling transitions synchronize text with chart state.

## Replication Blueprint (Implementation-Ready)
- Implement one scene component per module row in the module table, not one monolithic renderer.
- Keep a deterministic scene state object (`inputs`, `derived values`, `render cache`) for each module.
- Separate pure math/physics logic from rendering adapters so controls are testable without a browser.
- Add visual regression checkpoints per module (fixed presets + screenshot diffs).
- Ensure all control changes propagate to formulas, labels, and visual state within the same animation frame.
- Use a two-column scrollytelling shell (sticky visual pane + narrative steps).
- Drive module transitions from a discrete `currentStep` state updated by observer events.
- Candidate module map for implementation: `MLU-expl AI n`, `Double Descent`, `Part 1: A Visual Introduction`, `Jared Wilber & Brent Werness, December 2021`, `What's Going On?`, `Minding The Gap`, `Final Takeaways`, `References & Open Source`, `Interactive scene 1: To begin, we plot a simple model.`, `Interactive scene 2: Next, we plot a model that's not too`, `Interactive scene 3: This is reflected in the low error (`, `Interactive scene 4: Now, let's plot a complex model, one where`, ...

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
