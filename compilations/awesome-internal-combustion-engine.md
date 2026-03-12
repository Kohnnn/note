# Internal Combustion Engine

**Source Compilation:** [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website URL:** [https://ciechanow.ski/internal-combustion-engine/](https://ciechanow.ski/internal-combustion-engine/)
**Author/Domain:** Bartosz Ciechanowski

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ciechanow.ski/internal-combustion-engine/`
- Page title seen by crawler: `Internal Combustion Engine - Bartosz Ciechanowski`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/js/base.js`, `/js/ice.js`
- Evidence confidence: `High`

## What the Site is About
- Mechanical ICE explainer that decomposes crankshaft kinematics, cam timing, piston motion, and cycle behavior with synchronized animated parts.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Internal Combustion Engine | interactive simulation/diagram module | The plot in the upper part shows the offset of the bucket relative to its normal position as the function of cam rotation angle : The shape of the cam is critical for defining the way the engine operates. | slider/range, drag, click/tap | plots and numeric readouts recalculate with current parameters |
| Crank | interactive simulation/diagram module | You can control the rotation of the crankshaft with a slider: Notice that when the crank arm has done a 90° turn , i.e. | slider/range | parameter values update continuously while slider position changes |
| Engine Block | interactive simulation/diagram module | The plot in the upper part shows the offset of the bucket relative to its normal position as the function of cam rotation angle : The shape of the cam is critical for defining the way the engine operates. | slider/range, drag, click/tap | plots and numeric readouts recalculate with current parameters |
| Crankshaft | interactive simulation/diagram module | You can control the rotation of the crankshaft with a slider: Notice that when the crank arm has done a 90° turn , i.e. | slider/range | parameter values update continuously while slider position changes |
| Pistons | interactive simulation/diagram module | Animates linked engine components to show kinematic coupling, phase timing, and cycle transitions. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Closing the Lid | interactive simulation/diagram module | Explains Closing the Lid within Internal Combustion Engine using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Combustion | interactive simulation/diagram module | Animates linked engine components to show kinematic coupling, phase timing, and cycle transitions. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Further Watching | reference/narrative section | Narrative/reference section in Internal Combustion Engine that summarizes results and links supporting resources. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Final Words | reference/narrative section | Narrative/reference section in Internal Combustion Engine that summarizes results and links supporting resources. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Drag it around to see it from other angles: It’s | interactive simulation/diagram module | You can drag it around to see it from other angles: It’s hard to talk about a mechanical device without visualizing its motion, so many demonstrations in this blog post are animated. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Globally pause them | interactive simulation/diagram module | By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause them. | play/pause | time progression can be paused/resumed for frame-by-frame inspection |
| Let’s look at the plot of the velocity | chart/plot module | Let’s look at the plot of the velocity of a piston as it moves up and down the cylinder when the crankshaft rotates with a constant angular velocity: You may be surprised that the plot isn’t symmetrical, but it’s just a consequence of the already discussed behavior of the crank mechanism taking more time to move through the lower half of the stroke compared to the upper half of the stroke. | implicit controls | plots and numeric readouts recalculate with current parameters |
| Let’s consider a piston in a top dead | interactive simulation/diagram module | Let’s consider a piston in a top dead center position - as the piston reaches that point its velocity is 0, so the crankshaft has to drag the piston down. | drag | dragging repositions objects/camera and recomputes geometry instantly |

### Interaction Surface Summary
- Control modalities detected: slider/range (3 text hits), drag (2 text hits), click/tap (1 text hits), playback/scrub (1 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=7, script chart/plot hits=0.
- Runtime interaction signals from script tokens: pointer=18, requestAnimationFrame=10, key=1.

### Evidence Snippets
- "You can drag it around to see it from other angles: It’s hard to talk about a mechanical device without visualizing its motion, so many demonstrations in this blog post are animated."
- "By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause them."
- "You can control the rotation of the crankshaft with a slider: Notice that when the crank arm has done a 90° turn , i.e."
- "The plot in the upper part shows the offset of the bucket relative to its normal position as the function of cam rotation angle : The shape of the cam is critical for defining the way the engine operates."
- "Let’s look at the plot of the velocity of a piston as it moves up and down the cylinder when the crankshaft rotates with a constant angular velocity: You may be surprised that the plot isn’t symmetrical, but it’s just a consequence of the already discussed behavior of the crank mechanism taking more time to move through the lower half of the stroke compared to the upper half of the stroke."
- "Let’s consider a piston in a top dead center position - as the piston reaches that point its velocity is 0, so the crankshaft has to drag the piston down."

## Interactivity Level
- Overall rating: **Low-Medium** (`score=20/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/js/base.js`, `/js/ice.js`
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
- Candidate module map for implementation: `Internal Combustion Engine`, `Crank`, `Engine Block`, `Crankshaft`, `Pistons`, `Closing the Lid`, `Combustion`, `Further Watching`, `Final Words`, `Drag it around to see it from other angles: It’s`, `Globally pause them`, `Interactive scene 3: Let’s look at the plot of the velocity`, ...

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
