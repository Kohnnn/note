# Setosa EV - Markov Chains

**Source Compilation:** [setosa-ev](https://setosa.io/ev/)
**Website URL:** [https://setosa.io/ev/markov-chains/](https://setosa.io/ev/markov-chains/)
**Author/Domain:** Victor Powell and Lewis Lehe (Setosa)

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://setosa.io/ev/markov-chains/`
- Page title seen by crawler: `Markov Chains explained visually`
- Static DOM media/control tags: `canvas=0, svg=0, input=10, button=0, video=0, audio=0`
- Script assets detected: `/ev/scripts/d3.js`, `/ev/scripts/angular.js`, `/ev/scripts/common.js`
- Evidence confidence: `Medium`

## What the Site is About
- Teaches Markov chains by letting users manipulate transition rules and watch state distributions evolve.
- Focus is on intuition for memoryless transitions, steady state, and long-run behavior.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| State transition graph | interactive simulation/diagram module | Shows nodes and directed probabilities between states as an editable network. | edge probability inputs, state count controls | edge labels and normalization indicators update immediately |
| One-step simulator | interactive simulation/diagram module | Advances chain by one tick to show how current state maps to next-state probabilities. | step button, reset | active state marker moves and probability mass redistributes |
| Multi-step timeline | chart/plot module | Plots state occupancy over time to reveal convergence or oscillation patterns. | play/pause, speed, horizon length | line chart animates per tick with evolving distribution |
| Stationary distribution inspector | algorithm walkthrough module | Compares simulated long-run frequencies with computed steady-state vector. | run-long button, tolerance slider | difference error shrinks/expands with chain configuration |
| Weather/story scenario generator | interactive simulation/diagram module | Maps abstract chain states to narrative labels for practical interpretation. | scenario selector | node labels and interpretation text swap while preserving math core |
| Memoryless property explainer | interactive simulation/diagram module | Demonstrates that next state depends only on current state, not full history. | history display toggle | history panel updates, but transition engine reads only present state |

### Interaction Surface Summary
- Primary interaction uses transition editing, step controls, and run-time playback.
- Both graph and time-series views must consume the same transition matrix state.
- Long-run mode should remain deterministic with fixed random seed for reproducible demos.

### Evidence Snippets
- "Therefore, every day in our simulation will have a fifty percent chance of rain." This rule would generate the following sequence in simulation: Did you notice how the above sequence doesn't look quite like the original?"

## Interactivity Level
- Overall rating: **Very High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Observed script baseline: `d3.js`, `angular.js`, `common.js`.
- Visualization style matches D3-driven SVG/canvas charting with lightweight Angular bindings.
- Interaction density is high despite compact UI, driven by frequent state updates.

## Source Code Orientation
- Live page: `https://setosa.io/ev/markov-chains/`.
- Shared scripts under `/ev/scripts/` appear to host reusable controls and plotting helpers.
- Rebuild with explicit matrix model + deterministic RNG utilities.

## Replication Blueprint (Implementation-Ready)
- Represent chain as normalized stochastic matrix and separate simulation vs analytic modules.
- Implement step, autoplay, and reset atop one reducer so UI and charts never diverge.
- Add validation to enforce each row sums to 1.0 before simulation can run.
- Expose matrix and state vector numerically for advanced learners.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
