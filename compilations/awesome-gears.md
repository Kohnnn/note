# Gears

**Source Compilation:** [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website URL:** [https://ciechanow.ski/gears/](https://ciechanow.ski/gears/)
**Author/Domain:** Bartosz Ciechanowski

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ciechanow.ski/gears/`
- Page title seen by crawler: `Gears - Bartosz Ciechanowski`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/js/base.js`, `/js/gears.js`
- Evidence confidence: `Medium`

## What the Site is About
- Mechanical transmission explainer about angular velocity, torque transfer, involute tooth geometry, and multi-gear train behavior.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Gears | interactive simulation/diagram module | The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black arrow. | slider/range, drag, click/tap | vector arrows refresh to reflect direction/magnitude changes |
| Spinning | interactive simulation/diagram module | Explains Spinning within Gears using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Disc | interactive simulation/diagram module | In the demonstration below you can control its angular velocity with a slider: The small triangular indicator is there to help visualize the current orientation of the disc. | slider/range | parameter values update continuously while slider position changes |
| Transmission | interactive simulation/diagram module | Explains Transmission within Gears using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Torque | interactive simulation/diagram module | However, the radii of both discs are scaled by the same factor of cos(alpha) , where alpha is the pressure angle controlled by the slider in the simulation above: T out = T in · r out ·cos(α) / r in ·cos(α) In effect, the cosine factors cancel out and the constant ratio of torque transfer is maintained. | slider/range | parameter values update continuously while slider position changes |
| Tangent & Normal | interactive simulation/diagram module | The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black arrow. | slider/range, drag, click/tap | vector arrows refresh to reflect direction/magnitude changes |
| Strings Attached | interactive simulation/diagram module | I attached a piece of paper to the underside of the yellow disc so that we can see the trail left by the marker as the disc rotates: The straight part of the string represents the normal - that’s the direction in which the pushing force will act. | slider/range, drag, click/tap | particle/marker traces update as flow state changes |
| Multiple Gears | interactive simulation/diagram module | The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black arrow. | slider/range, drag, click/tap | vector arrows refresh to reflect direction/magnitude changes |
| Further Watching and Reading | reference/narrative section | Narrative/reference section in Gears that summarizes results and links supporting resources. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Final Words | reference/narrative section | Narrative/reference section in Gears that summarizes results and links supporting resources. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Play and pause them by clicking tapping on the button | interactive simulation/diagram module | Movement is important in this article so most of the visualizations are animated - you can play and pause them by clicking tapping on the button in their bottom left corner. | play/pause | time progression can be paused/resumed for frame-by-frame inspection |
| Globally pause all animations, just make sure to unpause them | interactive simulation/diagram module | By default the animations are enabled, but if you find them distracting, or you want to save power, you can globally pause all animations, just make sure to unpause them as needed. | play/pause | time progression can be paused/resumed for frame-by-frame inspection |
| You can control the fan’s speed using a slider | interactive simulation/diagram module | In the demonstration below you can control the fan’s speed using a slider: The speed of a rotating fan is a different kind of speed than that of a car - it describes how quickly a fan rotates . | slider/range | parameter values update continuously while slider position changes |
| Let’s investigate what’s going on by controlling the | interactive simulation/diagram module | Let’s investigate what’s going on by controlling the time back and forth with a slider. | slider/range | parameter values update continuously while slider position changes |
| See the flattened arcs of the paths traced by the | interactive simulation/diagram module | As the disc rotates the points leave a trace of the path they followed: At the bottom part of the simulation you can see the flattened arcs of the paths traced by the six points. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| The driving yellow disc is powered by some engine, which | interactive simulation/diagram module | In the demonstration below the driving yellow disc is powered by some engine, which I’ve indicated using a rotating arrow near the shaft. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| You can control the ratio of radii of the two | interactive simulation/diagram module | In the simulation below you can control the ratio of radii of the two discs. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| You can witness what happens to the effective circle radii | interactive simulation/diagram module | In the simulation below you can witness what happens to the effective circle radii when the line of force does not go through the pitch point: As you can see, if the acting force doesn’t lie on the line through the pitch point one of the circles effectively grows while the other one effectively shrinks. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| Let’s see what happens when we put a | interactive simulation/diagram module | Let’s see what happens when we put a little perpendicular red marker on that string and start unwinding it from one disc and winding it onto another. | implicit controls | particle/marker traces update as flow state changes |
| However, that’s exactly what the red marker does | chart/plot module | However, that’s exactly what the red marker does - at every point of the curve it is perpendicular to the string, and thus it’s perpendicular to the normal. | implicit controls | particle/marker traces update as flow state changes |
| We can look at this same situation from | interactive simulation/diagram module | We can look at this same situation from a point of view of the single disc, by unwinding a string with a marker from its surface: The shape we’ve created is called an involute . | implicit controls | particle/marker traces update as flow state changes |
| The magic marker at the end of the | interactive simulation/diagram module | The magic marker at the end of the string passes through the pitch circle , which corresponds to the idealized friction disc, only to end at the addendum circle which defines the outline of the teeth tips. | implicit controls | particle/marker traces update as flow state changes |
| The green line shows the pitch circle, the red line | interactive simulation/diagram module | In the simulation below the green line shows the pitch circle, the red line shows the base circle of the involute, and the slider controls the radius of the gear: Two matching involute gears with different number of teeth, and thus different radii, will have slightly different shapes of teeth. | slider/range | parameter values update continuously while slider position changes |

### Interaction Surface Summary
- Control modalities detected: slider/range (5 text hits), drag (0 text hits), click/tap (1 text hits), playback/scrub (3 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=16, script chart/plot hits=0.
- Runtime interaction signals from script tokens: pointer=0, requestAnimationFrame=7, key=0.

### Evidence Snippets
- "Movement is important in this article so most of the visualizations are animated - you can play and pause them by clicking tapping on the button in their bottom left corner."
- "By default the animations are enabled, but if you find them distracting, or you want to save power, you can globally pause all animations, just make sure to unpause them as needed."
- "In the demonstration below you can control the fan’s speed using a slider: The speed of a rotating fan is a different kind of speed than that of a car - it describes how quickly a fan rotates ."
- "In the demonstration below you can control its angular velocity with a slider: The small triangular indicator is there to help visualize the current orientation of the disc."
- "Let’s investigate what’s going on by controlling the time back and forth with a slider."
- "As the disc rotates the points leave a trace of the path they followed: At the bottom part of the simulation you can see the flattened arcs of the paths traced by the six points."
- "In the demonstration below the driving yellow disc is powered by some engine, which I’ve indicated using a rotating arrow near the shaft."
- "In the simulation below you can control the ratio of radii of the two discs."
- "The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black arrow."
- "However, the radii of both discs are scaled by the same factor of cos(alpha) , where alpha is the pressure angle controlled by the slider in the simulation above: T out = T in · r out ·cos(α) / r in ·cos(α) In effect, the cosine factors cancel out and the constant ratio of torque transfer is maintained."

## Interactivity Level
- Overall rating: **Low-Medium** (`score=33/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/js/base.js`, `/js/gears.js`
- `Core runtime`: custom vanilla JavaScript modules (`/js/base.js` + page-specific file).
- `Rendering`: mixed Canvas 2D and WebGL rendering signatures are present.
- `Interaction`: pointer event handlers plus slider/time widgets and reset/playback actions.
- `Animation`: requestAnimationFrame-driven render loop for coupled mechanical/physical scenes.

## Replication Blueprint (Implementation-Ready)
- Implement one scene component per module row in the module table, not one monolithic renderer.
- Keep a deterministic scene state object (`inputs`, `derived values`, `render cache`) for each module.
- Separate pure math/physics logic from rendering adapters so controls are testable without a browser.
- Add visual regression checkpoints per module (fixed presets + screenshot diffs).
- Ensure all control changes propagate to formulas, labels, and visual state within the same animation frame.
- Reuse a common orbit/time-control system across modules to keep interaction behavior consistent.
- Use lazy scene initialization by viewport entry to control startup cost.
- Candidate module map for implementation: `Gears`, `Spinning`, `Disc`, `Transmission`, `Torque`, `Tangent & Normal`, `Strings Attached`, `Multiple Gears`, `Further Watching and Reading`, `Final Words`, `Play and pause them by clicking tapping on the button`, `Globally pause all animations, just make sure to unpause them`, ...

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
