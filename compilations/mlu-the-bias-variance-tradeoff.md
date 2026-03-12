# The Bias Variance Tradeoff

**Source Compilation:** [aws-mlu-explain](https://github.com/Kohnnn/aws-mlu-explain)
**Website URL:** [https://mlu-explain.github.io/bias-variance/](https://mlu-explain.github.io/bias-variance/)
**Author/Domain:** AWS Machine Learning University team

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://mlu-explain.github.io/bias-variance/`
- Page title seen by crawler: `Bias Variance Tradeoff`
- Static DOM media/control tags: `canvas=0, svg=1, input=0, button=2, video=0, audio=0`
- Script assets detected: `/bias-variance/js.63b32ab2.js`, `/bias-variance/katexCalls.eb206bfb.js`
- Evidence confidence: `High`

## What the Site is About
- Bias-variance decomposition lesson connecting model complexity with underfitting/overfitting behavior.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| MLU-expl AI n | interactive simulation/diagram module | Explains MLU-expl AI n within The Bias Variance Tradeoff using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub, hover | moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for stepwise inspection |
| The Bias Variance Tradeoff | interactive simulation/diagram module | Specifically, variance measures how much, on average, predictions vary for a given data point : As you can see in the bottom plot, predictions from overfit (high-complexity) models show a lot more error from variance than from bias. | slider/range, playback/scrub, hover | plots and numeric readouts recalculate with current parameters |
| Jared Wilber & Brent Werness, January 2021 | interactive simulation/diagram module | Explains Jared Wilber & Brent Werness, January 2021 within The Bias Variance Tradeoff using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub, hover | moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for stepwise inspection |
| LOESS Regression | interactive simulation/diagram module | Visualizes decomposition of model error and sensitivity to complexity/smoothing choices. | slider/range, playback/scrub, hover | moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for stepwise inspection |
| K-Nearest Neighbors | interactive simulation/diagram module | Hover over a point to see its classification to the right, and the K-nearest neighbors used for consideration to the left. | hover | hover reveals contextual overlays or future trajectory hints |
| What About Double Descent? | interactive simulation/diagram module | Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions. | slider/range, playback/scrub, hover | moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for stepwise inspection |
| It's Finally Over | reference/narrative section | Narrative/reference section in The Bias Variance Tradeoff that summarizes results and links supporting resources. | slider/range, playback/scrub, hover | moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for stepwise inspection |
| References + Open Source | reference/narrative section | Narrative/reference section in The Bias Variance Tradeoff that summarizes results and links supporting resources. | slider/range, playback/scrub, hover | moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for stepwise inspection |
| These different model realizations are shown in the | chart/plot module | These different model realizations are shown in the top chart, while the error decomposition (for each point of data) is shown in the bottom chart. | implicit controls | plots and numeric readouts recalculate with current parameters |
| For each level of complexity, we’ll aggregate the | chart/plot module | For each level of complexity, we’ll aggregate the error decomposition across all data-points, and plot the aggregate errors at their level of complexity. | implicit controls | plots and numeric readouts recalculate with current parameters |
| The plot on the left shows the training | chart/plot module | The plot on the left shows the training data. | implicit controls | plots and numeric readouts recalculate with current parameters |
| The plot on the right shows decision regions | chart/plot module | The plot on the right shows decision regions based on the current value of K. | implicit controls | plots and numeric readouts recalculate with current parameters |

### Interaction Surface Summary
- Control modalities detected: slider/range (1 text hits), playback/scrub (0 text hits), hover (1 text hits).
- Visual surfaces detected: canvas=0, svg=1, chart-language hits=15, script chart/plot hits=60.
- Runtime interaction signals from script tokens: pointer=13, requestAnimationFrame=0, key=78.

### Evidence Snippets
- "These different model realizations are shown in the top chart, while the error decomposition (for each point of data) is shown in the bottom chart."
- "Specifically, variance measures how much, on average, predictions vary for a given data point : As you can see in the bottom plot, predictions from overfit (high-complexity) models show a lot more error from variance than from bias."
- "For each level of complexity, we’ll aggregate the error decomposition across all data-points, and plot the aggregate errors at their level of complexity."
- "The plot on the left shows the training data."
- "The plot on the right shows decision regions based on the current value of K."
- "Hover over a point to see its classification to the right, and the K-nearest neighbors used for consideration to the left."

## Interactivity Level
- Overall rating: **Low-Medium** (`score=18/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/bias-variance/js.63b32ab2.js`, `/bias-variance/katexCalls.eb206bfb.js`
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
- Candidate module map for implementation: `MLU-expl AI n`, `The Bias Variance Tradeoff`, `Jared Wilber & Brent Werness, January 2021`, `LOESS Regression`, `K-Nearest Neighbors`, `What About Double Descent?`, `It's Finally Over`, `References + Open Source`, `Interactive scene 1: These different model realizations are shown in the`, `Interactive scene 2: For each level of complexity, we’ll aggregate the`, `Interactive scene 3: The plot on the left shows the training`, `Interactive scene 4: The plot on the right shows decision regions`

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
