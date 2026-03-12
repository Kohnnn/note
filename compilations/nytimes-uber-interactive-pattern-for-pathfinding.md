# NYTimes Uber Interactive Pattern - Pathfinding Adaptation

**Source Compilation:** [custom-request](https://www.nytimes.com/interactive/2017/04/02/technology/uber-drivers-psychological-tricks.html?_r=0)
**Website URL:** [https://www.nytimes.com/interactive/2017/04/02/technology/uber-drivers-psychological-tricks.html?_r=0](https://www.nytimes.com/interactive/2017/04/02/technology/uber-drivers-psychological-tricks.html?_r=0)
**Author/Domain:** New York Times interactive-story pattern, adapted for pathfinding learning

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://www.nytimes.com/interactive/2017/04/02/technology/uber-drivers-psychological-tricks.html?_r=0`
- Page title seen by crawler: `How Uber Uses Psychological Tricks to Push Its Drivers’ Buttons - The New York Times`
- Static DOM media/control tags: `canvas=0, svg=0, input=1, button=7, video=0, audio=0`
- Script assets detected: `/vi-assets/static-assets/nyt5/decom-userinfo/js/framework.js`, `/public/3013110282/s/article_prod.js`
- Evidence confidence: `Medium`

## What the Site is About
- This is a replication spec for NYTimes-style scrollytelling structure, but the subject is changed from driver psychology to pathfinding algorithms.
- The adaptation keeps narrative + embedded simulation blocks while teaching BFS, Dijkstra, and A* with interactive map scenarios.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Narrative chapter scrollyteller | interactive simulation/diagram module | Long-form article sections trigger algorithm scenes at key points in the story. | scroll, chapter jump links | active visualization swaps as reader enters each chapter |
| Grid map editor | interactive simulation/diagram module | Users place start, goal, and obstacles on a 2D map. | click/tap paint, drag start/goal, erase mode | path candidates and blocked regions recalculate immediately |
| BFS explorer | algorithm walkthrough module | Shows breadth-first wavefront expansion over unweighted grids. | play/pause, step, speed | queue frontier expands layer-by-layer with visited-state coloring |
| Dijkstra explorer | algorithm walkthrough module | Demonstrates cost-aware expansion with weighted edges/cells. | weight painting tool, play/step | priority queue order and shortest-cost tree update live |
| A* explorer | algorithm walkthrough module | Adds heuristic guidance to Dijkstra behavior to show reduced search effort. | heuristic selector (Manhattan/Euclidean), tie-break toggle | frontier shape and node expansion count change per heuristic |
| Algorithm comparison dashboard | chart/plot module | Compares BFS/Dijkstra/A* on path length, expanded nodes, runtime, and success under constraints. | algorithm multi-select, scenario selector | metric table and bars update after each run |
| Traffic congestion simulation | interactive simulation/diagram module | Multi-agent variant demonstrates why shortest path can cause congestion and latency spikes. | agent count slider, spawn pattern toggle | edge load heatmap and average travel time evolve over simulation ticks |
| What-if challenge sandbox | interactive simulation/diagram module | Readers test custom maps and algorithm settings and then compare outcomes. | save scenario, replay, random map seed | stored scenarios replay deterministically for side-by-side learning |

### Interaction Surface Summary
- Narrative progression should not just scroll text; it must activate corresponding algorithm states.
- Core algorithm trio in this spec: BFS, Dijkstra, and A* (default implementation set).
- Comparison metrics must be computed from actual run traces, not static precomputed numbers.

### Evidence Snippets
- "Change the number of drivers in this ride-share simulation."
- "“But any driver can stop work literally at the tap of a button — the decision whether or not to drive is 100 percent theirs.” Uber’s recent emphasis on drivers is no accident."
- "“I think there’s something to that, but ultimately Zynga should worry mostly about how fun its games are rather than trying to get you to play a little bit more by some trick,” he said."
- "Amid the uproar, Uber introduced a pause button."
- "“In the middle of the trip, you can say, ‘Stop giving me requests.’ So you can have more control over when you want to stop driving.” It is true that drivers can pause the services’ automatic queuing feature if they need to refill their tanks, or empty them, as the case may be."
- "To disable it, they would have to pause it every time they picked up a new passenger."
- "By contrast, even Netflix allows users to permanently turn off its automatic queuing feature, known as Post-Play."
- "Making Post-Play the default can have the same effect."

## Interactivity Level
- Overall rating: **Very High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Observed NYTimes page loads article framework scripts and embeds simulation sections in story flow.
- Replication can use a modern framework (React/Svelte/Vue) plus a custom pathfinding engine module.
- Charting can be done with D3/Recharts/Plot while the map simulation runs on canvas or grid DOM.
- Use IntersectionObserver for chapter activation and sticky visualization transitions.

## Source Code Orientation
- Reference article URL: `https://www.nytimes.com/interactive/2017/04/02/technology/uber-drivers-psychological-tricks.html?_r=0`.
- This is a structural inspiration spec; direct NYTimes source code is not published as reusable project code.
- Your implementation should derive interaction behavior from observed UX pattern and implement original pathfinding logic/code.

## Replication Blueprint (Implementation-Ready)
- Implement a chapter registry that maps article sections to visualization presets and algorithm states.
- Build one shared pathfinding engine with pluggable strategy (`bfs`, `dijkstra`, `astar`).
- Record full run traces (expanded nodes order, final path, cost) for replay and comparison.
- Include deterministic seeds for maps and multi-agent demand patterns to keep examples reproducible.
- Add an exportable scenario format so readers can share specific pathfinding challenges.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
