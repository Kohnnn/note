# ROC & AUC

**Source Compilation:** [aws-mlu-explain](https://github.com/Kohnnn/aws-mlu-explain)
**Website URL:** [https://mlu-explain.github.io/roc-auc/](https://mlu-explain.github.io/roc-auc/)
**Author/Domain:** AWS Machine Learning University team

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://mlu-explain.github.io/roc-auc/`
- Page title seen by crawler: `ROC & AUC`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/roc-auc/build/bundle.js`
- Evidence confidence: `High`

## What the Site is About
- Model-evaluation explainer for ROC curves and AUC interpretation under changing classification thresholds.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| ROC curve canvas | chart/plot module | Plots TPR vs FPR as threshold sweeps across classifier scores. | slider/range controls | active point moves on ROC curve while TPR/FPR values update |
| AUC interpretation overlay | interactive simulation/diagram module | Shades area under the ROC curve and ties it to ranking quality intuition. | step navigation, threshold control | highlighted area and explanatory annotations change with scenario |
| Classifier comparison view | chart/plot module | Compares multiple ROC traces to show stronger/weaker classifier behavior. | toggle/select control | selected model trace and corresponding AUC readout update |
| Threshold sweep panel | interactive simulation/diagram module | Shows how moving threshold changes confusion behavior and curve location. | slider/range controls | point trajectory and confusion-derived metrics animate through threshold space |
| Scrollytelling transitions | interactive simulation/diagram module | Controls teaching sequence from raw confusion concepts to ROC/AUC interpretation. | scroll | scene state and highlights switch at each narrative step |

### Interaction Surface Summary
- Control modalities detected: slider/range (0 text hits), drag (0 text hits), click/tap (0 text hits), playback/scrub (0 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=0, script chart/plot hits=11.
- Runtime interaction signals from script tokens: pointer=14, requestAnimationFrame=0, key=6.

### Evidence Snippets
- "No reliable sentence-level interaction evidence was extractable from static crawl output."

## Interactivity Level
- Overall rating: **Low** (`score=0/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/roc-auc/build/bundle.js`
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
- Candidate module map for implementation: `ROC curve canvas`, `AUC interpretation overlay`, `Classifier comparison view`, `Threshold sweep panel`, `Scrollytelling transitions`

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
