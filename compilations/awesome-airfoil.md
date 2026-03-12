# Airfoil

**Source Compilation:** [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website URL:** [https://ciechanow.ski/airfoil/](https://ciechanow.ski/airfoil/)
**Author/Domain:** Bartosz Ciechanowski

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ciechanow.ski/airfoil/`
- Page title seen by crawler: `Airfoil - Bartosz Ciechanowski`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/js/base.js`, `/js/airfoil.js`
- Evidence confidence: `High`

## What the Site is About
- Deep fluid-dynamics explainer focused on why wings generate lift, combining airflow, pressure, viscosity, and boundary-layer scenes that can be manipulated in real time.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Airfoil | interactive simulation/diagram module | Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’ll build some intuitions for why these different effects happen to airfoils and other objects placed in flowing air. | slider/range | parameter values update continuously while slider position changes |
| Visualizing Flow | interactive simulation/diagram module | Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’ll build some intuitions for why these different effects happen to airfoils and other objects placed in flowing air. | slider/range | parameter values update continuously while slider position changes |
| Velocity | interactive simulation/diagram module | If we wanted to, we could draw a velocity arrow at any of the seemingly empty spots on the right side. | slider/range, drag, click/tap | vector arrows refresh to reflect direction/magnitude changes |
| Relative Velocity | interactive simulation/diagram module | I adjusted the lengths of the arrows to prevent them from visually overlapping, but I also made sure to maintain their relative lengths - if one arrow is twice as long as the other, then the flow at that location is also twice as fast. | slider/range, drag, click/tap | vector arrows refresh to reflect direction/magnitude changes |
| Pressure | interactive simulation/diagram module | Maps pressure distribution and resulting force vectors across the shape to explain motion/lift/buoyancy effects. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Visualizing Pressure | interactive simulation/diagram module | Maps pressure distribution and resulting force vectors across the shape to explain motion/lift/buoyancy effects. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Airfoil Flow | interactive simulation/diagram module | Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’ll build some intuitions for why these different effects happen to airfoils and other objects placed in flowing air. | slider/range | parameter values update continuously while slider position changes |
| Viscosity | interactive simulation/diagram module | Demonstrates viscous drag and flow damping as fluid properties are adjusted. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Boundary Layer | interactive simulation/diagram module | Shows near-surface flow behavior and boundary-layer development around geometry. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Airfoil Shapes | interactive simulation/diagram module | Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’ll build some intuitions for why these different effects happen to airfoils and other objects placed in flowing air. | slider/range | parameter values update continuously while slider position changes |
| Further Reading and Watching | reference/narrative section | Narrative/reference section in Airfoil that summarizes results and links supporting resources. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Final Words | reference/narrative section | Narrative/reference section in Airfoil that summarizes results and links supporting resources. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| The slider lets you control the speed of | interactive simulation/diagram module | The slider lets you control the speed of time to observe in detail how the falling leaves and the bending blades of grass are visibly affected by the wind sweeping through this area: We intuitively understand that it’s the flowing air that pushes the vegetation around, but note that we only observe the effects that the wind has on other objects - we can’t see the motion of the air itself . | slider/range | parameter values update continuously while slider position changes |
| We can mimic this behavior with a collection | interactive simulation/diagram module | We can mimic this behavior with a collection of small arrows placed all over the area, as seen on the right side: Each arrow represents the direction and the speed of the flow of air at that location - the longer the arrow , the faster the flow. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| Note that we have some flexibility in how | interactive simulation/diagram module | Note that we have some flexibility in how the speed of wind corresponds to the length of an arrow . | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| Each marker represents an object so small and | interactive simulation/diagram module | Each marker represents an object so small and light that it instantly picks up the speed of the surrounding airflow. | implicit controls | particle/marker traces update as flow state changes |
| In fact, the motion of each marker is | interactive simulation/diagram module | In fact, the motion of each marker is equivalent to the motion of the parcel of air right around it. | implicit controls | particle/marker traces update as flow state changes |
| If you slow down time , you’ll be | interactive simulation/diagram module | If you slow down time , you’ll be able to see how each marker just moves in the direction of the arrows underneath it. | implicit controls | vector arrows refresh to reflect direction/magnitude changes; particle/marker traces update as flow state changes |
| I also made each marker leave a little | interactive simulation/diagram module | I also made each marker leave a little ghost trail behind it - this lets us track the path the air, as represented by the marker , took on the way to its current position. | implicit controls | particle/marker traces update as flow state changes |
| Let’s pause for a second to emphasize what | interactive simulation/diagram module | Let’s pause for a second to emphasize what the grass -like arrows and leaf -like markers represent - they both show the velocity of the flow of air, but in slightly different ways. | play/pause | time progression can be paused/resumed for frame-by-frame inspection; vector arrows refresh to reflect direction/magnitude changes; particle/marker traces update as flow state changes |
| An arrow is attached to its fixed point | interactive simulation/diagram module | An arrow is attached to its fixed point in space, so it represents the current direction and speed of the flow at that location . | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| See the whole spectrum of colors in the scale below | chart/plot module | You can see the whole spectrum of colors in the scale below the plot. | implicit controls | plots and numeric readouts recalculate with current parameters |
| Change using the second slider | interactive simulation/diagram module | Before we finish this section, let me bring up visualization of a simple airflow, but this time I’ll give you some control over its direction , which you can change using the second slider. | slider/range | parameter values update continuously while slider position changes |
| The first one once more controls the speed | interactive simulation/diagram module | The first one once more controls the speed of time : Don’t be misled by the frozen arrows, the wind is actually blowing there. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| - you can drag the cube around to change the | interactive simulation/diagram module | Velocity Let’s take a look at the air particles in a small, marked out volume of space seen in the demonstration below - you can drag the cube around to change the viewing angle. | drag | dragging repositions objects/camera and recomputes geometry instantly; particle/marker traces update as flow state changes |
| The slider controls the speed of time : | interactive simulation/diagram module | The slider controls the speed of time : You’re witnessing the motion of over twelve thousand air particles. | slider/range | parameter values update continuously while slider position changes; particle/marker traces update as flow state changes |

### Interaction Surface Summary
- Control modalities detected: slider/range (31 text hits), drag (33 text hits), click/tap (7 text hits), playback/scrub (8 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=8, script chart/plot hits=34.
- Runtime interaction signals from script tokens: pointer=52, requestAnimationFrame=7, key=6.

### Evidence Snippets
- "Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’ll build some intuitions for why these different effects happen to airfoils and other objects placed in flowing air."
- "The slider lets you control the speed of time to observe in detail how the falling leaves and the bending blades of grass are visibly affected by the wind sweeping through this area: We intuitively understand that it’s the flowing air that pushes the vegetation around, but note that we only observe the effects that the wind has on other objects - we can’t see the motion of the air itself ."
- "We can mimic this behavior with a collection of small arrows placed all over the area, as seen on the right side: Each arrow represents the direction and the speed of the flow of air at that location - the longer the arrow , the faster the flow."
- "Note that we have some flexibility in how the speed of wind corresponds to the length of an arrow ."
- "I adjusted the lengths of the arrows to prevent them from visually overlapping, but I also made sure to maintain their relative lengths - if one arrow is twice as long as the other, then the flow at that location is also twice as fast."
- "If we wanted to, we could draw a velocity arrow at any of the seemingly empty spots on the right side."
- "Each marker represents an object so small and light that it instantly picks up the speed of the surrounding airflow."
- "In fact, the motion of each marker is equivalent to the motion of the parcel of air right around it."
- "If you slow down time , you’ll be able to see how each marker just moves in the direction of the arrows underneath it."
- "I also made each marker leave a little ghost trail behind it - this lets us track the path the air, as represented by the marker , took on the way to its current position."

## Interactivity Level
- Overall rating: **Very High** (`score=100/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/js/base.js`, `/js/airfoil.js`
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
- Candidate module map for implementation: `Airfoil`, `Visualizing Flow`, `Velocity`, `Relative Velocity`, `Pressure`, `Visualizing Pressure`, `Airfoil Flow`, `Viscosity`, `Boundary Layer`, `Airfoil Shapes`, `Further Reading and Watching`, `Final Words`, ...

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
