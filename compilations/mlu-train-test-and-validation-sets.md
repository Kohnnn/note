# Train, Test, and Validation Sets

**Source Compilation:** [aws-mlu-explain](https://github.com/Kohnnn/aws-mlu-explain)
**Website URL:** [https://mlu-explain.github.io/train-test-validation/](https://mlu-explain.github.io/train-test-validation/)
**Author/Domain:** AWS Machine Learning University team

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://mlu-explain.github.io/train-test-validation/`
- Page title seen by crawler: `Train,Test, and Validation Sets`
- Static DOM media/control tags: `canvas=0, svg=1, input=0, button=4, video=0, audio=0`
- Script assets detected: `/train-test-validation/js.6c47f979.js`, `/train-test-validation/roughAnnotations.51d9685b.js`
- Evidence confidence: `High`

## What the Site is About
- Data-splitting lesson that demonstrates training, validation, and testing roles through interactive examples.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| MLU-EXPL AI N | interactive simulation/diagram module | Explains MLU-EXPL AI N within Train, Test, and Validation Sets using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Train , Test , and Validation Sets | algorithm walkthrough module | Drag each animal in the training set to a new position to see how the boundary updates! | drag | dragging repositions objects/camera and recomputes geometry instantly |
| The Importance of Data Splitting | interactive simulation/diagram module | Shows candidate split boundaries and how node partitioning changes class purity and downstream tree structure. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Train, Test, and Validation Splits | algorithm walkthrough module | Drag each animal in the training set to a new position to see how the boundary updates! | drag | dragging repositions objects/camera and recomputes geometry instantly |
| The Training Set | algorithm walkthrough module | Drag each animal in the training set to a new position to see how the boundary updates! | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Building Our Model | algorithm walkthrough module | Drag the pets across the line to see how the model performance updates! | drag | dragging repositions objects/camera and recomputes geometry instantly |
| The Validation Set | algorithm walkthrough module | Shows data split roles and how model selection/evaluation differs across train, validation, and test partitions. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| The Testing Set | algorithm walkthrough module | Shows data split roles and how model selection/evaluation differs across train, validation, and test partitions. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Summary | reference/narrative section | Narrative/reference section in Train, Test, and Validation Sets that summarizes results and links supporting resources. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |

### Interaction Surface Summary
- Control modalities detected: slider/range (0 text hits), drag (2 text hits), click/tap (0 text hits), playback/scrub (0 text hits).
- Visual surfaces detected: canvas=0, svg=1, chart-language hits=0, script chart/plot hits=9.
- Runtime interaction signals from script tokens: pointer=14, requestAnimationFrame=0, key=62.

### Evidence Snippets
- "Drag each animal in the training set to a new position to see how the boundary updates!"
- "Drag the pets across the line to see how the model performance updates!"

## Interactivity Level
- Overall rating: **Low** (`score=4/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/train-test-validation/js.6c47f979.js`, `/train-test-validation/roughAnnotations.51d9685b.js`
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
- Candidate module map for implementation: `MLU-EXPL AI N`, `Train , Test , and Validation Sets`, `The Importance of Data Splitting`, `Train, Test, and Validation Splits`, `The Training Set`, `Building Our Model`, `The Validation Set`, `The Testing Set`, `Summary`

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
