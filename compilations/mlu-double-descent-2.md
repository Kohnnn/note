# Double Descent 2

**Source Compilation:** [aws-mlu-explain](https://github.com/Kohnnn/aws-mlu-explain)
**Website URL:** [https://mlu-explain.github.io/double-descent2/](https://mlu-explain.github.io/double-descent2/)
**Author/Domain:** AWS Machine Learning University team

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://mlu-explain.github.io/double-descent2/`
- Page title seen by crawler: `Double Descent 2`
- Static DOM media/control tags: `canvas=0, svg=1, input=0, button=0, video=0, audio=0`
- Script assets detected: `/double-descent2/js.47ac2d4d.js`, `/double-descent2/katexCalls.a524eba6.js`
- Evidence confidence: `High`

## What the Site is About
- Second part of the double-descent series, focused on mathematical derivation and interpolation-threshold behavior.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| MLU-expl AI n | interactive simulation/diagram module | Explains MLU-expl AI n within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Double Descent | interactive simulation/diagram module | Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Part 2: A Mathematical Explanation | interactive simulation/diagram module | Explains Part 2: A Mathematical Explanation within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Brent Werness & Jared Wilber , December 2021 | interactive simulation/diagram module | Explains Brent Werness & Jared Wilber , December 2021 within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| A Sketch of the Mathematics | interactive simulation/diagram module | Explains A Sketch of the Mathematics within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Our Piecewise Linear Model | algorithm walkthrough module | Explains Our Piecewise Linear Model within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Below The Interpolation Threshold | interactive simulation/diagram module | Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| At The Interpolation Threshold | interactive simulation/diagram module | Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| To Infinity! (But Not Beyond) | interactive simulation/diagram module | Explains To Infinity! (But Not Beyond) within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Summary | reference/narrative section | Narrative/reference section in Double Descent 2 that summarizes results and links supporting resources. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Resources + Open Source: | reference/narrative section | Narrative/reference section in Double Descent 2 that summarizes results and links supporting resources. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |

### Interaction Surface Summary
- Control modalities detected: slider/range (3 text hits), playback/scrub (0 text hits).
- Visual surfaces detected: canvas=0, svg=1, chart-language hits=1, script chart/plot hits=35.
- Runtime interaction signals from script tokens: pointer=8, requestAnimationFrame=2, key=20.

### Evidence Snippets
- "No reliable sentence-level interaction evidence was extractable from static crawl output."

## Interactivity Level
- Overall rating: **Low** (`score=7/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/double-descent2/js.47ac2d4d.js`, `/double-descent2/katexCalls.a524eba6.js`
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
- Candidate module map for implementation: `MLU-expl AI n`, `Double Descent`, `Part 2: A Mathematical Explanation`, `Brent Werness & Jared Wilber , December 2021`, `A Sketch of the Mathematics`, `Our Piecewise Linear Model`, `Below The Interpolation Threshold`, `At The Interpolation Threshold`, `To Infinity! (But Not Beyond)`, `Summary`, `Resources + Open Source:`

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
