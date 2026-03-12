# GPS

**Source Compilation:** [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website URL:** [https://ciechanow.ski/gps/](https://ciechanow.ski/gps/)
**Author/Domain:** Bartosz Ciechanowski

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ciechanow.ski/gps/`
- Page title seen by crawler: `GPS - Bartosz Ciechanowski`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/js/base.js`, `/js/gps.js`
- Evidence confidence: `High`

## What the Site is About
- End-to-end GPS explainer including trilateration, clock bias, orbital motion, satellite visibility, and signal propagation constraints.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| GPS | interactive simulation/diagram module | Demonstrates satellite geometry and timing calculations used to estimate receiver position and clock bias. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Simple Positioning | interactive simulation/diagram module | Notice that the intersection point of the three spheres lets us pinpoint the position and altitude even as you drag the figurine around: Throughout these examples we’ve been using the simple system of measuring tapes, so let’s try to go back to the solution that used sound waves and pseudoranges. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Time of Flight | interactive simulation/diagram module | In the simulation below you can control the progress of time with the slider. | slider/range | parameter values update continuously while slider position changes |
| Do you hear me? | interactive simulation/diagram module | Explains Do you hear me? within GPS using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Do I hear you? | interactive simulation/diagram module | Explains Do I hear you? within GPS using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Leveling Up | interactive simulation/diagram module | Explains Leveling Up within GPS using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Higher, Better, Faster, Stronger | interactive simulation/diagram module | Explains Higher, Better, Faster, Stronger within GPS using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Orbits | interactive simulation/diagram module | Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| GPS Orbits | interactive simulation/diagram module | Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Keplerian Elements | interactive simulation/diagram module | Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Time | interactive simulation/diagram module | In the simulation below you can control the progress of time with the slider. | slider/range | parameter values update continuously while slider position changes |
| Signal Propagation | interactive simulation/diagram module | In many cases the receiver will never get the signal unless we put the emitter high enough using the second slider: By putting the emitter at an altitude we can thankfully mitigate that problem on a local scale. | slider/range | parameter values update continuously while slider position changes |
| Drag the view around to see it from different angles: | interactive simulation/diagram module | Here’s a current constellation of active satellites, you can drag the view around to see it from different angles: However, the satellites are just a part of what makes GPS possible. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Drag the landscape itself to change the viewing angle | interactive simulation/diagram module | You can also drag the landscape itself to change the viewing angle. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| We’re sending two drones at the same time, the slider | interactive simulation/diagram module | In the demonstration below we’re sending two drones at the same time, the slider once again controls the time : As the drones arrive to their destinations we get the direct measure of distance to each landmark as shown by the length of their bars on the timeline. | slider/range | parameter values update continuously while slider position changes |
| Thankfully, with two clocks side by side we | interactive simulation/diagram module | Thankfully, with two clocks side by side we can try to correct for that bias using the second slider: Notice that the timeline at the bottom shows progress of both the system clock and the user clock - if the clocks are not synchronized they’re not tracking the same time. | slider/range | parameter values update continuously while slider position changes |
| You can control the user’s vertical position with a slider | interactive simulation/diagram module | In the demonstration below you can control the user’s vertical position with a slider. | slider/range | parameter values update continuously while slider position changes |
| Experience in the following simulation | interactive simulation/diagram module | So far we assumed that our local environment is perfectly flat, but when a radio wave encounters a hill it gets blocked, which you can experience in the following simulation. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| You can drag the yellow object around | interactive simulation/diagram module | In the demonstration below you can drag the yellow object around. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| As the object starts to move a yellow | interactive simulation/diagram module | As the object starts to move a yellow arrow reflects its current velocity: Note that the strength at which the object is pulled towards the planet varies with distance. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| You can once again drag the object around, but this | interactive simulation/diagram module | In the demonstration below you can once again drag the object around, but this time it will have some initial velocity that was perhaps given to it by a rocket. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Notice that the speed of the object , | interactive simulation/diagram module | Notice that the speed of the object , as shown by the length of the yellow arrow , varies over the course of its journey. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| Play and pause them by clicking tapping on the button | interactive simulation/diagram module | Before we continue, I need to note that some demonstrations in the following sections are animated - you can play and pause them by clicking tapping on the button in their bottom left corner. | play/pause | time progression can be paused/resumed for frame-by-frame inspection |
| Globally pause all the following demonstrations | interactive simulation/diagram module | By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause all the following demonstrations. | play/pause | time progression can be paused/resumed for frame-by-frame inspection |
| You may have noticed that the red slider | interactive simulation/diagram module | You may have noticed that the red slider controls the inclination of the orbit which is the angle between the orbital plane and the plane passing through the Earth’s equator known as equatorial plane . | slider/range | parameter values update continuously while slider position changes |
| You can drag the red point around to change its | interactive simulation/diagram module | In the demonstration below you can drag the red point around to change its position on the globe. | drag | dragging repositions objects/camera and recomputes geometry instantly |

### Interaction Surface Summary
- Control modalities detected: slider/range (23 text hits), drag (7 text hits), click/tap (9 text hits), playback/scrub (4 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=13, script chart/plot hits=22.
- Runtime interaction signals from script tokens: pointer=16, requestAnimationFrame=8, key=0.

### Evidence Snippets
- "Here’s a current constellation of active satellites, you can drag the view around to see it from different angles: However, the satellites are just a part of what makes GPS possible."
- "You can also drag the landscape itself to change the viewing angle."
- "In the simulation below you can control the progress of time with the slider."
- "In the demonstration below we’re sending two drones at the same time, the slider once again controls the time : As the drones arrive to their destinations we get the direct measure of distance to each landmark as shown by the length of their bars on the timeline."
- "Thankfully, with two clocks side by side we can try to correct for that bias using the second slider: Notice that the timeline at the bottom shows progress of both the system clock and the user clock - if the clocks are not synchronized they’re not tracking the same time."
- "In the demonstration below you can control the user’s vertical position with a slider."
- "Notice that the intersection point of the three spheres lets us pinpoint the position and altitude even as you drag the figurine around: Throughout these examples we’ve been using the simple system of measuring tapes, so let’s try to go back to the solution that used sound waves and pseudoranges."
- "So far we assumed that our local environment is perfectly flat, but when a radio wave encounters a hill it gets blocked, which you can experience in the following simulation."
- "In many cases the receiver will never get the signal unless we put the emitter high enough using the second slider: By putting the emitter at an altitude we can thankfully mitigate that problem on a local scale."
- "In the demonstration below you can drag the yellow object around."

## Interactivity Level
- Overall rating: **Very High** (`score=92/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/js/base.js`, `/js/gps.js`
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
- Candidate module map for implementation: `GPS`, `Simple Positioning`, `Time of Flight`, `Do you hear me?`, `Do I hear you?`, `Leveling Up`, `Higher, Better, Faster, Stronger`, `Orbits`, `GPS Orbits`, `Keplerian Elements`, `Time`, `Signal Propagation`, ...

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
