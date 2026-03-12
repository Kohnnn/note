# Bicycle

**Source Compilation:** [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website URL:** [https://ciechanow.ski/bicycle/](https://ciechanow.ski/bicycle/)
**Author/Domain:** Bartosz Ciechanowski

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ciechanow.ski/bicycle/`
- Page title seen by crawler: `Bicycle - Bartosz Ciechanowski`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/js/base.js`, `/js/bicycle.js`
- Evidence confidence: `High`

## What the Site is About
- Mechanics-focused bicycle explainer covering forces, moments, stability, tire slip, braking, and frame stress using animated physics diagrams.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Bicycle | interactive simulation/diagram module | In the demonstration below, you can guide the rider with the slider , and you can also drag the view around to change the camera angle: Compared to internal combustion engines or mechanical watches , bicycles are fairly simple machines - most of their parts operate in plain sight. | slider/range, drag | parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly |
| Forces | interactive simulation/diagram module | You can still control the magnitude of the right-pushing force with the slider, but to make our experiments a little easier, I’ll restore that force to its original magnitude after you let go: Notice, that it’s not the mere presence of forces that causes an object to accelerate - the velocity changes only when these forces are not balanced . | slider/range | parameter values update continuously while slider position changes |
| Moments | interactive simulation/diagram module | While it’s harder to visualize the balance of moments, we can still do it by drawing colored rectangles spanning the length of the acting force arrow and the force arm: The red force wants to rotate the box in the counterclockwise direction. | slider/range, drag, click/tap | vector arrows refresh to reflect direction/magnitude changes |
| Up and Down | interactive simulation/diagram module | In the demonstration below, you can play with a lone wheel rolling down the road. | play/pause | time progression can be paused/resumed for frame-by-frame inspection |
| Forwards and Backwards | interactive simulation/diagram module | Explains Forwards and Backwards within Bicycle using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Left and Right | interactive simulation/diagram module | Recall that we’re representing the magnitude of forces using arrows of different sizes, so as long as the length of the right-pointing arrow is equal to the length of the left-pointing arrow , the box won’t change its velocity. | slider/range, drag, click/tap | vector arrows refresh to reflect direction/magnitude changes |
| Stability | interactive simulation/diagram module | Explores stable vs unstable configurations by perturbing the system and observing return/divergence behavior. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Wheels | interactive simulation/diagram module | The weight of the rider and the bike is then carried by the ground through the two contact points under the wheels: As you’ve probably realized, the yellow slider allows you to change the posture of the rider. | slider/range | parameter values update continuously while slider position changes |
| Simple Frame | interactive simulation/diagram module | In the demonstration below, you can guide the rider with the slider , and you can also drag the view around to change the camera angle: Compared to internal combustion engines or mechanical watches , bicycles are fairly simple machines - most of their parts operate in plain sight. | slider/range, drag | parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly |
| Bending | interactive simulation/diagram module | Visualizes frame deformation and stress concentration under load to explain structural limits. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Stresses in the Frame | interactive simulation/diagram module | Visualizes frame deformation and stress concentration under load to explain structural limits. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Further Reading and Watching | reference/narrative section | Narrative/reference section in Bicycle that summarizes results and links supporting resources. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Final Words | reference/narrative section | Narrative/reference section in Bicycle that summarizes results and links supporting resources. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Before we understand these more complicated interactions, we’ll | interactive simulation/diagram module | Before we understand these more complicated interactions, we’ll play with much simpler objects. | play/pause | time progression can be paused/resumed for frame-by-frame inspection |
| You can use the slider to apply a force to | interactive simulation/diagram module | In the demonstration below, you can use the slider to apply a force to this box. | slider/range | parameter values update continuously while slider position changes |
| Restart the simulation using the button: The red arrow represents | interactive simulation/diagram module | You can restart the simulation using the button: The red arrow represents the pushing force, which could be applied by a hand, or a strong gust of air. | reset/restart | reset/restart returns simulation to deterministic initial state; vector arrows refresh to reflect direction/magnitude changes |
| The size of that arrow reflects the magnitude | interactive simulation/diagram module | The size of that arrow reflects the magnitude of that force - the bigger the arrow, the stronger the pushing action. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| It’s worth pointing out once more that when | interactive simulation/diagram module | It’s worth pointing out once more that when the box starts to move due to force imbalance, just letting the slider go to balance the two forces again will not stop the box - it will keep moving with some velocity. | slider/range | parameter values update continuously while slider position changes |
| I added Earth-like gravity that attracts the cube to the | interactive simulation/diagram module | In the simulation below, I added Earth-like gravity that attracts the cube to the bottom of your screen. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| If we tally up all the small ground | interactive simulation/diagram module | If we tally up all the small ground forces and moments they create we can replace them with a single arrow centered at the bottom of the cube. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| Where the slider controls the time progress of this event | interactive simulation/diagram module | Let’s see this in a vastly exaggerated form in the demonstration below where the slider controls the time progress of this event: When the rider’s position shifts, the arm lengths for the reaction of the ground also change, which creates a net torque that rotates the bicycle counter-clockwise. | slider/range | parameter values update continuously while slider position changes |
| The slider lets you scrub back and forth | interactive simulation/diagram module | The slider lets you scrub back and forth in time: In this free-rolling scenario, the inner and outer parts of the tire stay in sync as the wheel smoothly rolls over the road. | slider/range | parameter values update continuously while slider position changes |
| Tweak the actual angular velocity of the wheel omega with | interactive simulation/diagram module | Just like before, you can tweak the actual angular velocity of the wheel omega with the second slider: When the wheel rotates at the free-rolling speed of the current velocity , the slip ratio is 0. | slider/range | parameter values update continuously while slider position changes |
| Control with the slider: When the wheel rotates faster than | chart/plot module | The plot below roughly demonstrates that dependence of the output force on the slip ratio, and the vertical load , which you can control with the slider: When the wheel rotates faster than the free-rolling speed and the slip ratio is positive, the generated force is positive and it pushes the bicycle forward . | slider/range | parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters |
| The slider controls the force applied by the rider on | interactive simulation/diagram module | In the demonstration below, the slider controls the force applied by the rider on the rear brake lever. | slider/range | parameter values update continuously while slider position changes |

### Interaction Surface Summary
- Control modalities detected: slider/range (31 text hits), drag (6 text hits), click/tap (1 text hits), playback/scrub (4 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=29, script chart/plot hits=0.
- Runtime interaction signals from script tokens: pointer=17, requestAnimationFrame=7, key=0.

### Evidence Snippets
- "In the demonstration below, you can guide the rider with the slider , and you can also drag the view around to change the camera angle: Compared to internal combustion engines or mechanical watches , bicycles are fairly simple machines - most of their parts operate in plain sight."
- "Before we understand these more complicated interactions, we’ll play with much simpler objects."
- "In the demonstration below, you can use the slider to apply a force to this box."
- "You can restart the simulation using the button: The red arrow represents the pushing force, which could be applied by a hand, or a strong gust of air."
- "The size of that arrow reflects the magnitude of that force - the bigger the arrow, the stronger the pushing action."
- "You can still control the magnitude of the right-pushing force with the slider, but to make our experiments a little easier, I’ll restore that force to its original magnitude after you let go: Notice, that it’s not the mere presence of forces that causes an object to accelerate - the velocity changes only when these forces are not balanced ."
- "Recall that we’re representing the magnitude of forces using arrows of different sizes, so as long as the length of the right-pointing arrow is equal to the length of the left-pointing arrow , the box won’t change its velocity."
- "It’s worth pointing out once more that when the box starts to move due to force imbalance, just letting the slider go to balance the two forces again will not stop the box - it will keep moving with some velocity."
- "While it’s harder to visualize the balance of moments, we can still do it by drawing colored rectangles spanning the length of the acting force arrow and the force arm: The red force wants to rotate the box in the counterclockwise direction."
- "In the simulation below, I added Earth-like gravity that attracts the cube to the bottom of your screen."

## Interactivity Level
- Overall rating: **Very High** (`score=100/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/js/base.js`, `/js/bicycle.js`
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
- Candidate module map for implementation: `Bicycle`, `Forces`, `Moments`, `Up and Down`, `Forwards and Backwards`, `Left and Right`, `Stability`, `Wheels`, `Simple Frame`, `Bending`, `Stresses in the Frame`, `Further Reading and Watching`, ...

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
