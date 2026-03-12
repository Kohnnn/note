# Setosa EV - Image Kernels

**Source Compilation:** [setosa-ev](https://setosa.io/ev/)
**Website URL:** [https://setosa.io/ev/image-kernels/](https://setosa.io/ev/image-kernels/)
**Author/Domain:** Victor Powell and Lewis Lehe (Setosa)

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://setosa.io/ev/image-kernels/`
- Page title seen by crawler: `Image Kernels explained visually`
- Static DOM media/control tags: `canvas=0, svg=0, input=4, button=0, video=0, audio=0`
- Script assets detected: `/ev/scripts/d3.js`, `/ev/scripts/angular.js`, `/ev/scripts/common.js`, `/ev/scripts/exif.js`, `/ev/image-kernels/script.js`
- Evidence confidence: `Medium`

## What the Site is About
- Teaches convolution kernels by letting users inspect how output pixels are computed from neighborhoods.
- Focuses on practical filters (blur, sharpen, edge detect) and boundary handling effects.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Input/output image pair | interactive simulation/diagram module | Displays source image beside filtered result for immediate visual comparison. | kernel preset selector | output image regenerates after kernel change |
| Kernel matrix editor | interactive simulation/diagram module | Lets users edit kernel coefficients directly. | matrix cell inputs | convolution output updates with modified coefficients |
| Pixel neighborhood inspector | interactive simulation/diagram module | Highlights active neighborhood around hovered pixel and corresponding weighted sum. | hover pointer | window overlay and arithmetic breakdown panel follow pointer location |
| Edge handling mode switch | algorithm walkthrough module | Compares clamped/extended/other edge treatments to explain border artifacts. | boundary mode toggle | border pixels change immediately to show edge-policy impact |
| Filter preset gallery | interactive simulation/diagram module | Cycles through blur, sharpen, outline, emboss, and related kernels. | preset buttons | kernel values and visual output jump to selected operator |
| Computation breakdown panel | chart/plot module | Shows numeric weighted-sum equation for currently selected pixel. | hover pixel, precision selector | term-by-term multiplication and total value update live |

### Interaction Surface Summary
- Hover-based pixel inspection is central and must remain low latency.
- Kernel edits should be constrained and validated before recomputation.
- Preset switching should update both matrix values and explanatory text together.

### Evidence Snippets
- "Hover over a pixel on either image to see how its value is computed."
- "One way to fix this is to extend the edge values out by one in the original image while keeping our new image the same size."
- "An outline kernel (also called an "edge" kernel) is used to highlight large differences in pixel values."

## Interactivity Level
- Overall rating: **High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Observed scripts: `d3.js`, `angular.js`, `common.js`, `exif.js`, and page script.
- Likely image-processing pipeline runs in browser on pixel buffers, then renders output preview.
- Architecture is suitable for pure JS convolution plus SVG/DOM overlays for explanation.

## Source Code Orientation
- Live page: `https://setosa.io/ev/image-kernels/`.
- Page-specific script likely contains convolution loops and hover inspector logic.
- Replicate with typed-array pixel pipeline and memoized kernel applications.

## Replication Blueprint (Implementation-Ready)
- Implement convolution on RGBA buffers with explicit boundary policy module.
- Create a synchronized inspector that maps cursor -> kernel window -> equation breakdown.
- Add kernel normalization warnings for unstable coefficient sets.
- Support custom image upload while keeping deterministic demo presets.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
