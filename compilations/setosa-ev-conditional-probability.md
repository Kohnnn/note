# Setosa EV - Conditional Probability

**Source Compilation:** [setosa-ev](https://setosa.io/ev/)
**Website URL:** [https://setosa.io/ev/conditional-probability/](https://setosa.io/ev/conditional-probability/)
**Author/Domain:** Victor Powell and Lewis Lehe (Setosa)

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://setosa.io/ev/conditional-probability/`
- Page title seen by crawler: `Conditional probability explained visually`
- Static DOM media/control tags: `canvas=0, svg=0, input=7, button=3, video=0, audio=0`
- Script assets detected: `/ev/scripts/d3.js`, `/ev/scripts/angular.js`, `/ev/scripts/common.js`
- Evidence confidence: `Medium`

## What the Site is About
- Explains conditional probability with visual sample spaces instead of formula-first teaching.
- Users manipulate event sizes and overlap to see how P(A|B), P(B|A), and related values shift in real time.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Sample space diagram | chart/plot module | Displays total outcome space and event regions so conditional filtering is visually concrete. | event toggles, proportion inputs | highlighted regions and probability labels update after each control change |
| Event overlap manipulator | interactive simulation/diagram module | Lets users adjust intersection size between A and B to inspect dependence vs independence. | numeric inputs, draggable boundaries | intersection area and conditional values reflow continuously |
| Given-this filter lens | interactive simulation/diagram module | Applies a conditioning lens that restricts universe to event B before measuring A. | given-event selector | non-conditioned outcomes dim; denominator and ratio recompute |
| Frequency-to-probability table | algorithm walkthrough module | Mirrors visual proportions as counts/fractions to connect intuition with symbolic computation. | count inputs, normalize toggle | counts, percentages, and formula substitutions stay synchronized |
| Bayes direction switch | interactive simulation/diagram module | Compares P(A\|B) versus P(B\|A) to show why reversing condition is non-trivial. | swap condition button | equation header and highlighted numerator/denominator swap instantly |
| Practice challenge cards | interactive simulation/diagram module | Presents mini scenarios where users predict conditional outcomes before revealing answers. | scenario picker, reveal button | feedback panel shows expected value and region explanation |

### Interaction Surface Summary
- Primary controls are compact numeric/event inputs tied directly to region geometry.
- Strong coupling exists between visual area, frequency table, and formula text.
- Replication must guarantee mathematically consistent updates across all representations.

## Interactivity Level
- Overall rating: **High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Observed script baseline: `d3.js`, `angular.js`, `common.js`.
- Pattern suggests D3-driven visuals with Angular-style binding for controls and labels.
- Layout is article-first with embedded interactive blocks rather than app-shell navigation.

## Source Code Orientation
- Live page: `https://setosa.io/ev/conditional-probability/`.
- Shared runtime assets are loaded from `/ev/scripts/` and reused across EV articles.
- Inspect control binding logic in shared scripts and page-specific directives/components.

## Replication Blueprint (Implementation-Ready)
- Build a synchronized triple-view: geometry, frequency table, and formula panel.
- Keep state normalized around base counts/proportions to avoid drift from rounding.
- Add invariants in tests (e.g., intersection <= each event; conditional in [0,1]).
- Provide explanation text that changes with state, not static textbook paragraphs.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
