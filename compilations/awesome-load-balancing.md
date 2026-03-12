# Load Balancing

**Source Compilation:** [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website URL:** [https://samwho.dev/load-balancing/](https://samwho.dev/load-balancing/)
**Author/Domain:** Sam Rose

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://samwho.dev/load-balancing/`
- Page title seen by crawler: `Load Balancing`
- Static DOM media/control tags: `canvas=0, svg=2, input=2, button=0, video=0, audio=0`
- Script assets detected: `/js/load-balancers.js`
- Evidence confidence: `Low-Medium`

## What the Site is About
- Systems-performance explainer comparing load-balancing algorithms through live request/server simulations and metric plots.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Load Balancing | interactive simulation/diagram module | Each simulation varied only by the load balancing algorithm used. | slider/range, playback/scrub | visual state recomputes in real time when active parameters or scenario change |
| Visualising the problem | interactive simulation/diagram module | Explains Visualising the problem within Load Balancing using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| When round robin doesn't cut it | interactive simulation/diagram module | The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front. | slider/range, playback/scrub | visual state recomputes in real time when active parameters or scenario change |
| Improving on round robin | interactive simulation/diagram module | The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front. | slider/range, playback/scrub | visual state recomputes in real time when active parameters or scenario change |
| Moving away from round robin | interactive simulation/diagram module | The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front. | slider/range, playback/scrub | visual state recomputes in real time when active parameters or scenario change |
| Optimizing for latency | interactive simulation/diagram module | Simulates request routing across servers to compare balancing strategies under variable load and service times. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| One last algorithm | algorithm walkthrough module | Let's see this in action in a similarly complex simulation, the same parameters we gave the dynamic weighted round robin algorithm above. | slider/range, playback/scrub | visual state recomputes in real time when active parameters or scenario change |
| Conclusion | reference/narrative section | Narrative/reference section in Load Balancing that summarizes results and links supporting resources. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| Playground | interactive simulation/diagram module | Explains Playground within Load Balancing using a parameterized scene that updates calculations and visuals as controls change. | slider/range, playback/scrub | moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection |
| In the following simulation, requests aren't equally expensive | interactive simulation/diagram module | In the following simulation, requests aren't equally expensive. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| If you watch the above simulation long enough, | interactive simulation/diagram module | If you watch the above simulation long enough, you might notice the requests subtly changing colour. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| In the next simulation we also vary the | interactive simulation/diagram module | In the next simulation we also vary the power of each server , which is represented visually with a darker shade of grey. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| In this simulation, we use each server's known | interactive simulation/diagram module | In this simulation, we use each server's known power value as its weight, and we give more powerful servers more requests as we loop through them. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| The following simulation uses randomised values, so feel | interactive simulation/diagram module | The following simulation uses randomised values, so feel free to refresh the page a few times to see it adapt to new variants. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| Higher percentiles will always be higher on the | chart/plot module | Higher percentiles will always be higher on the graph. | implicit controls | plots and numeric readouts recalculate with current parameters |
| The following is a graph of cumulative requests | chart/plot module | The following is a graph of cumulative requests dropped over time. | implicit controls | plots and numeric readouts recalculate with current parameters |
| Below is a simulation using an algorithm called | interactive simulation/diagram module | Below is a simulation using an algorithm called "peak exponentially weighted moving average" (or PEWMA). | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| I've set specific parameters for this simulation that | interactive simulation/diagram module | I've set specific parameters for this simulation that are guaranteed to exhibit an expected behaviour. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| To round this out, I leave you with | interactive simulation/diagram module | To round this out, I leave you with a version of the simulation that lets you tweak most of the parameters in real time. | implicit controls | visual state recomputes in real time when active parameters or scenario change |

### Interaction Surface Summary
- Control modalities detected: slider/range (1 text hits), playback/scrub (0 text hits).
- Visual surfaces detected: canvas=0, svg=2, chart-language hits=4, script chart/plot hits=22.
- Runtime interaction signals from script tokens: pointer=0, requestAnimationFrame=0, key=0.

### Evidence Snippets
- "In the following simulation, requests aren't equally expensive."
- "If you watch the above simulation long enough, you might notice the requests subtly changing colour."
- "In the next simulation we also vary the power of each server , which is represented visually with a darker shade of grey."
- "In this simulation, we use each server's known power value as its weight, and we give more powerful servers more requests as we loop through them."
- "The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front."
- "The following simulation uses randomised values, so feel free to refresh the page a few times to see it adapt to new variants."
- "Let's see this in action in a similarly complex simulation, the same parameters we gave the dynamic weighted round robin algorithm above."
- "Each simulation varied only by the load balancing algorithm used."
- "Higher percentiles will always be higher on the graph."
- "The following is a graph of cumulative requests dropped over time."

## Interactivity Level
- Overall rating: **Low** (`score=6/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/js/load-balancers.js`
- `Core runtime`: custom JavaScript article bundles.
- `Animation`: memory-allocation page explicitly loads GSAP and Pixi plugin assets.
- `Simulation architecture`: deterministic state updates power algorithm and systems visualizations.

## Replication Blueprint (Implementation-Ready)
- Implement one scene component per module row in the module table, not one monolithic renderer.
- Keep a deterministic scene state object (`inputs`, `derived values`, `render cache`) for each module.
- Separate pure math/physics logic from rendering adapters so controls are testable without a browser.
- Add visual regression checkpoints per module (fixed presets + screenshot diffs).
- Ensure all control changes propagate to formulas, labels, and visual state within the same animation frame.
- Model simulation logic as an event queue so timeline scrubbing and replay are deterministic.
- Candidate module map for implementation: `Load Balancing`, `# Visualising the problem`, `# When round robin doesn't cut it`, `# Improving on round robin`, `# Moving away from round robin`, `# Optimizing for latency`, `# One last algorithm`, `# Conclusion`, `# Playground`, `Interactive scene 1: In the following simulation, requests aren't equally expensive.`, `Interactive scene 2: If you watch the above simulation long enough,`, `Interactive scene 3: In the next simulation we also vary the`, ...

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
