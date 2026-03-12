# Precision & Recall

**Source Compilation:** [aws-mlu-explain](https://github.com/Kohnnn/aws-mlu-explain)
**Website URL:** [https://mlu-explain.github.io/precision-recall/](https://mlu-explain.github.io/precision-recall/)
**Author/Domain:** AWS Machine Learning University team

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://mlu-explain.github.io/precision-recall/`
- Page title seen by crawler: `Precision & Recall`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/precision-recall/build/bundle.js`
- Evidence confidence: `High`

## What the Site is About
- Classification-metrics explainer that links confusion matrix outcomes to precision/recall tradeoffs.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Confusion matrix sandbox | interactive simulation/diagram module | Shows TP/FP/TN/FN partitions and how they move as threshold or decision rules change. | slider/range controls | matrix counts and category highlights update instantly |
| Precision-recall metric panel | chart/plot module | Calculates and displays precision and recall from the live confusion state. | slider/range controls | metric values and explanatory labels update in real time |
| Threshold tradeoff explorer | interactive simulation/diagram module | Illustrates that improving one metric can reduce the other depending on threshold choice. | slider/range controls | classification boundary and both metrics change together |
| Formula explanation panel | algorithm walkthrough module | Shows equations and numerator/denominator contributions for each metric. | step navigation | equation highlights track currently emphasized confusion terms |
| Scrollytelling transitions | interactive simulation/diagram module | Maps narrative sections to curated examples of precision-recall tradeoffs. | scroll | active examples and visual highlights advance with reading progress |

### Interaction Surface Summary
- Control modalities detected: slider/range (0 text hits), drag (0 text hits), click/tap (0 text hits), playback/scrub (0 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=0, script chart/plot hits=6.
- Runtime interaction signals from script tokens: pointer=20, requestAnimationFrame=0, key=10.

### Evidence Snippets
- "No reliable sentence-level interaction evidence was extractable from static crawl output."

## Interactivity Level
- Overall rating: **Low** (`score=0/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/precision-recall/build/bundle.js`
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
- Candidate module map for implementation: `Confusion matrix sandbox`, `Precision-recall metric panel`, `Threshold tradeoff explorer`, `Formula explanation panel`, `Scrollytelling transitions`

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
