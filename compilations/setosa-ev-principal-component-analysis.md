# Setosa EV - Principal Component Analysis

**Source Compilation:** [setosa-ev](https://setosa.io/ev/)
**Website URL:** [https://setosa.io/ev/principal-component-analysis/](https://setosa.io/ev/principal-component-analysis/)
**Author/Domain:** Victor Powell and Lewis Lehe (Setosa)

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://setosa.io/ev/principal-component-analysis/`
- Page title seen by crawler: `Principal Component Analysis explained visually`
- Static DOM media/control tags: `canvas=0, svg=0, input=3, button=2, video=0, audio=0`
- Script assets detected: `/ev/scripts/d3.js`, `/ev/scripts/angular.js`, `/ev/scripts/common.js`, `/ev/scripts/three.js`, `/ev/scripts/OrthographicTrackballControls.js`, `/ev/scripts/numeric.js`, `/ev/principal-component-analysis/script.js`
- Evidence confidence: `Medium`

## What the Site is About
- Explains PCA by letting users drag datapoints and inspect changing principal axes.
- Extends from 2D and 3D intuition to a higher-dimensional real dataset narrative.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| 2D point-cloud sandbox | interactive simulation/diagram module | Users drag points in 2D and observe PCA basis rotate to maximize variance. | point drag, reset, show-PCA button | principal axes and projected coordinates recompute immediately |
| Variance direction meter | chart/plot module | Displays variance explained along candidate and principal directions. | axis rotation controls | explained-variance bars update continuously |
| 3D PCA viewer | interactive simulation/diagram module | Shows principal components in 3D with camera controls. | orbit/trackball drag, toggle components | camera and component vectors update in real time |
| Projection and reconstruction panel | algorithm walkthrough module | Projects data into reduced dimension and reconstructs approximation. | component count selector | reconstruction error and projected scatter update |
| High-dimensional UK food dataset view | chart/plot module | Uses PCA to map 17D data into interpretable low-dimensional plots. | component pair selector | country points move when chosen component pair changes |
| Official PCA toggle | interactive simulation/diagram module | Switches between intuitive alignment view and strict PCA computation view. | show PCA toggle | axes snap to computed eigenvectors and labels update |

### Interaction Surface Summary
- Direct point dragging plus 3D camera control create high interaction depth.
- PCA recomputation must remain fast; optimize covariance/eigendecomposition updates.
- Visual and numeric variance metrics should remain synchronized after every edit.

### Evidence Snippets
- "Drag the points around in the following visualization to see PC coordinate system adjusts."
- "To see the "official" PCA transformation, click the "Show PCA" button."
- "show PCA reset Eating in the UK (a 17D example) Original example from Mark Richardson's class notes Principal Component Analysis What if our data have way more than 3-dimensions?"
- "Here's the plot of the data along the first principal component."

## Interactivity Level
- Overall rating: **Very High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Observed scripts include `d3.js`, `angular.js`, `three.js`, `OrthographicTrackballControls.js`, and `numeric.js`.
- 2D/3D hybrid rendering suggests D3 for plots and Three.js for 3D component views.
- Numeric linear algebra likely handled through `numeric.js` routines.

## Source Code Orientation
- Live page: `https://setosa.io/ev/principal-component-analysis/`.
- Track point-drag handlers, covariance update logic, and eigen solver calls in page script.
- Rebuild with memoized covariance + incremental updates for smoother drag interactions.

## Replication Blueprint (Implementation-Ready)
- Implement PCA engine (center data, covariance, eigendecomposition, projection) as pure module.
- Create separate render adapters for 2D scatter and 3D component views.
- Add deterministic seed dataset presets for reproducible walkthroughs.
- Instrument frame time during drag and defer expensive recompute if needed.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
