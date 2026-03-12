# Setosa EV - Sine and Cosine

**Source Compilation:** [setosa-ev](https://setosa.io/ev/)
**Website URL:** [https://setosa.io/ev/sine-and-cosine/](https://setosa.io/ev/sine-and-cosine/)
**Author/Domain:** Victor Powell and Lewis Lehe (Setosa)

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://setosa.io/ev/sine-and-cosine/`
- Page title seen by crawler: `Sine and Cosine explained visually`
- Static DOM media/control tags: `canvas=0, svg=0, input=3, button=0, video=0, audio=0`
- Script assets detected: `/ev/scripts/d3.js`, `/ev/scripts/angular.js`, `/ev/scripts/common.js`, `/mathjax/2.0-latest/MathJax.js`, `/ev/sine-and-cosine/script.js`
- Evidence confidence: `Medium`

## What the Site is About
- Builds intuition for sin(theta) and cos(theta) by linking unit-circle motion to waveform output.
- Encourages play with angle and time so trigonometric values are seen as geometry, not memorized tables.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Unit circle angle controller | interactive simulation/diagram module | Rotates a radius around the circle to define current angle theta. | play button, angle drag, angle input | radius orientation and projection legs update instantly |
| Sine projection panel | chart/plot module | Highlights vertical projection from unit circle and maps it to sine value. | angle controls | sine marker and numeric value animate continuously |
| Cosine projection panel | chart/plot module | Highlights horizontal projection and maps it to cosine value. | angle controls | cosine marker and numeric value update with same phase source |
| Wave trace over time | chart/plot module | Traces periodic sine/cosine signals as angle/time advances. | play/pause, speed | curve extends in sync with rotating point |
| Cartesian-polar converter | interactive simulation/diagram module | Converts between x/y coordinates and polar representation. | coordinate toggles, angle/radius edits | all coordinate labels and vectors stay synchronized |
| Phase comparison overlay | interactive simulation/diagram module | Shows pi/2 phase shift between sine and cosine with aligned reference lines. | overlay toggle | alignment guides and phase labels appear/disappear without changing data |

### Interaction Surface Summary
- Core control is angle progression, either manual drag or autoplay.
- All views (circle, projections, waveforms, formulas) should share one authoritative theta state.
- High educational value comes from synchronized multi-representation updates.

### Evidence Snippets
- "Below, click play to see this process unfold."
- "Play with the figures below to see real-time conversion between Cartesian (i.e., x/y coordinates) and polar coordinates."

## Interactivity Level
- Overall rating: **High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Observed scripts: `d3.js`, `angular.js`, `common.js`, MathJax, and page-specific script.
- Math notation overlays suggest dynamic formula rendering during interaction.
- Rendering style is lightweight 2D visual math, likely SVG plus DOM labels.

## Source Code Orientation
- Live page: `https://setosa.io/ev/sine-and-cosine/`.
- Page includes a dedicated `script.js` alongside shared EV runtime files.
- Replicate with a state-first model (`theta`) that drives all dependent visuals.

## Replication Blueprint (Implementation-Ready)
- Create a common derived-state function returning sin, cos, projections, and phase markers.
- Use requestAnimationFrame for smooth autoplay and exact pause/resume position retention.
- Add angle snapping presets (0, pi/6, pi/4, pi/3, pi/2) for classroom use.
- Ensure accessibility with keyboard angle stepping and text readouts.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
