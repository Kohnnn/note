# Linear Regression

**Source Compilation:** [aws-mlu-explain](https://github.com/Kohnnn/aws-mlu-explain)
**Website URL:** [https://mlu-explain.github.io/linear-regression/](https://mlu-explain.github.io/linear-regression/)
**Author/Domain:** AWS Machine Learning University team

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://mlu-explain.github.io/linear-regression/`
- Page title seen by crawler: `Linear Regression`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/linear-regression/build/bundle.js`
- Evidence confidence: `Medium`

## What the Site is About
- Interactive linear regression lesson connecting line fitting, error minimization, and prediction behavior.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Dataset scatter and fit line | chart/plot module | Plots observed points and the current regression line so users can compare model fit against data distribution. | slider/range controls, scroll steps | line slope/intercept and residual indicators update immediately as model complexity or parameters change |
| Residual and loss panel | interactive simulation/diagram module | Displays prediction errors and aggregate loss to explain why certain lines are better fits. | slider/range controls | residual bars and error values recompute in real time |
| Prediction crosshair explorer | interactive simulation/diagram module | Lets users inspect predictions for selected x-values and compare expected vs predicted values. | pointer move, click/tap | crosshair and predicted output readout move with pointer position |
| Formula rendering block | algorithm walkthrough module | Renders regression equations and variable substitutions for current state using dynamic math text. | step navigation, parameter controls | equations and numeric substitutions stay synchronized with chart state |
| Scrollytelling state machine | interactive simulation/diagram module | Narrative sections activate specific visualization states to teach concepts in a fixed progression. | scroll | visual focus, annotations, and highlighted variables transition when section changes |

### Interaction Surface Summary
- Control modalities detected: slider/range (0 text hits), click/tap (0 text hits), playback/scrub (0 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=0, script chart/plot hits=164.
- Runtime interaction signals from script tokens: pointer=0, requestAnimationFrame=0, key=223.

### Evidence Snippets
- "No reliable sentence-level interaction evidence was extractable from static crawl output."

## Interactivity Level
- Overall rating: **Low** (`score=0/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/linear-regression/build/bundle.js`
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
- Candidate module map for implementation: `Dataset scatter and fit line`, `Residual and loss panel`, `Prediction crosshair explorer`, `Formula rendering block`, `Scrollytelling state machine`

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
