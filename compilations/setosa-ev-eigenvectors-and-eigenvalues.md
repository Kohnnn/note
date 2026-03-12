# Setosa EV - Eigenvectors and Eigenvalues

**Source Compilation:** [setosa-ev](https://setosa.io/ev/)
**Website URL:** [https://setosa.io/ev/eigenvectors-and-eigenvalues/](https://setosa.io/ev/eigenvectors-and-eigenvalues/)
**Author/Domain:** Victor Powell and Lewis Lehe (Setosa)

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://setosa.io/ev/eigenvectors-and-eigenvalues/`
- Page title seen by crawler: `Eigenvectors and Eigenvalues explained visually`
- Static DOM media/control tags: `canvas=0, svg=0, input=4, button=2, video=0, audio=0`
- Script assets detected: `/ev/scripts/d3.js`, `/ev/scripts/angular.js`, `/ev/scripts/common.js`, `/ajax/libs/mathjax/2.7.1/MathJax.js`, `/ev/scripts/topojson.js`, `/ev/eigenvectors-and-eigenvalues/script.js`
- Evidence confidence: `Medium`

## What the Site is About
- Explains eigenvectors/eigenvalues through direct matrix manipulation and transformed vector behavior.
- Users drag matrix columns and candidate vectors to discover invariant directions under transformation.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Matrix column drag editor | interactive simulation/diagram module | Allows users to drag basis columns of matrix A and instantly update transformation behavior. | drag handles on matrix columns | transformed grid and vector outputs refresh continuously |
| Eigenvector finder sandbox | interactive simulation/diagram module | Users move candidate vector v and test whether Av aligns with v. | vector drag, reset | alignment indicator flips when vector is eigen-direction |
| Eigenvalue magnitude display | chart/plot module | Shows scaling factor (lambda) when an eigenvector is identified. | matrix/vector controls | lambda readout updates with orientation and scale |
| Fibonacci recurrence example | algorithm walkthrough module | Connects eigen decomposition intuition to Fibonacci growth behavior. | step controls, sequence length input | sequence plot and dominant-mode explanation update |
| Steady-state Markov example | interactive simulation/diagram module | Uses eigen concepts to explain long-run state behavior in transitions. | state fraction drags, play/forward | distribution converges and steady-state highlight appears |
| Complex eigenvalue spiral demo | interactive simulation/diagram module | Illustrates rotation+scaling behavior for complex eigenvalues. | drag matrix arrows, play | spiral trajectories and complex-pair annotations update in real time |

### Interaction Surface Summary
- Heavy drag-based manipulation makes this one of the most interactive EV pages.
- Matrix edits must atomically update all dependent scenes (grid, vectors, examples).
- Complex-eigen section requires stable animation under frequent matrix changes.

### Evidence Snippets
- "Below, change the columns of $A$ and drag $v$ to be an eigenvector."
- "reset forward {{opt.pos[opt.curGen][0]}} {{opt.pos[opt.curGen][0] === 1 ?"
- "Drag the circles to decide these fractions and the number starting in each state."
- "Hover over the animation to see the system go to the steady state."
- "To see this, drag $A$'s columns (the arrows) around until you get a spiral."

## Interactivity Level
- Overall rating: **Very High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Observed scripts include `d3.js`, `angular.js`, `topojson.js`, MathJax, and page-specific script.
- Math-heavy UI combines symbolic rendering with geometry-first interaction.
- Page uses shared EV scaffolding with topic-specific transform logic.

## Source Code Orientation
- Live page: `https://setosa.io/ev/eigenvectors-and-eigenvalues/`.
- Look at matrix drag handlers and transform pipeline in page-specific script.
- Replicate with linear algebra core functions (multiply, eig approximation, normalization) separated from UI.

## Replication Blueprint (Implementation-Ready)
- Implement a transformation engine that accepts matrix A and emits transformed grid/vector primitives.
- Add eigen-test utility for directional alignment with tolerance controls.
- Include a complex-mode renderer for rotational dynamics under conjugate eigenpairs.
- Keep all numeric labels debounced to avoid jitter while dragging.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
