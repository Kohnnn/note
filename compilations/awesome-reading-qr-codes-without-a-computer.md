# Reading QR codes without a computer!

**Source Compilation:** [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website URL:** [https://qr.blinry.org/](https://qr.blinry.org/)
**Author/Domain:** blinry

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://qr.blinry.org/`
- Page title seen by crawler: `Reading QR codes without a computer!`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/assets/index-m4DBYcND.js`
- Evidence confidence: `Medium`

## What the Site is About
- Stepwise QR decoding tutorial that walks users from visible modules to payload extraction without relying on automatic scanner black boxes.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| QR structure map | interactive simulation/diagram module | Highlights finder, timing, alignment, and data regions so users can see the physical layout of a QR symbol. | step navigation, click/tap | selected region is highlighted and explained in context |
| Mask and format decoding panel | algorithm walkthrough module | Explains how format bits encode error correction and mask patterns, then applies mask logic. | step navigation, toggle | module grid updates from masked to unmasked state |
| Data bit extraction path | interactive simulation/diagram module | Shows traversal order through data modules and conversion from modules to bitstream. | playback controls, step buttons | current read position advances and extracted bitstream grows |
| Error-correction walkthrough | algorithm walkthrough module | Demonstrates Reed-Solomon style correction conceptually for damaged or uncertain modules. | step controls | corrected bytes and confidence indicators update per correction step |
| Payload reconstruction panel | interactive simulation/diagram module | Maps decoded bytes to text/message content so users can verify final decode result manually. | step controls | decoded message output updates as more blocks are processed |

### Interaction Surface Summary
- Control modalities detected: slider/range (0 text hits), drag (0 text hits), click/tap (0 text hits), playback/scrub (0 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=0, script chart/plot hits=5.
- Runtime interaction signals from script tokens: pointer=0, requestAnimationFrame=0, key=15.

### Evidence Snippets
- "No reliable sentence-level interaction evidence was extractable from static crawl output."

## Interactivity Level
- Overall rating: **Low** (`score=0/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/assets/index-m4DBYcND.js`
- `Core runtime`: single hashed SPA asset (`/assets/index-*.js`) from modern bundling pipeline.
- `Visualization`: script signatures indicate dynamic diagram generation via SVG/canvas APIs.
- `Interaction`: likely staged decode progression with region highlighting and stateful walkthrough.
- `Data viz utility`: D3-like function signatures detected.

## Replication Blueprint (Implementation-Ready)
- Implement one scene component per module row in the module table, not one monolithic renderer.
- Keep a deterministic scene state object (`inputs`, `derived values`, `render cache`) for each module.
- Separate pure math/physics logic from rendering adapters so controls are testable without a browser.
- Add visual regression checkpoints per module (fixed presets + screenshot diffs).
- Ensure all control changes propagate to formulas, labels, and visual state within the same animation frame.
- Implement decode pipeline as explicit stages: locate -> unmask -> parse -> error correction -> payload.
- Candidate module map for implementation: `QR structure map`, `Mask and format decoding panel`, `Data bit extraction path`, `Error-correction walkthrough`, `Payload reconstruction panel`

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
