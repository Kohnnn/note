# Lights and Shadows

**Source Compilation:** [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website URL:** [https://ciechanow.ski/lights-and-shadows/](https://ciechanow.ski/lights-and-shadows/)
**Author/Domain:** Bartosz Ciechanowski

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ciechanow.ski/lights-and-shadows/`
- Page title seen by crawler: `Lights and Shadows - Bartosz Ciechanowski`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/js/base.js`, `/js/light.js`
- Evidence confidence: `High`

## What the Site is About
- Physically-based light transport explainer covering radiance, angle and distance falloff, reflection models, shadows, and multiple bounces.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Lights and Shadows | interactive simulation/diagram module | Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Power | interactive simulation/diagram module | While this ball of light is not very exciting, you can at least control its brightness with the slider below: What this slider actually regulates is the power of the light source - the amount of energy emitted from it per second. | slider/range | parameter values update continuously while slider position changes |
| Position | interactive simulation/diagram module | Let’s see how we perceive the brightness of some source depending on its power: Notice that relative change in the perceived brightness strongly depends on the position of the slider. | slider/range | parameter values update continuously while slider position changes |
| Angles | interactive simulation/diagram module | You can also drag around the scene to see it from different angles: By the end of this article the effects of light in this demonstration should become more clear, but before we get there we have to take a few steps back and start with a much simpler setup. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Radians | interactive simulation/diagram module | Radians The car simulation displayed the angle using the unit of degrees, but observe that the length of the yellow arc also gets smaller as the angle gets smaller. | slider/range, drag, click/tap | visual state recomputes in real time when active parameters or scenario change |
| Solid Angles | interactive simulation/diagram module | You can also drag around the scene to see it from different angles: By the end of this article the effects of light in this demonstration should become more clear, but before we get there we have to take a few steps back and start with a much simpler setup. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Surface Vision | interactive simulation/diagram module | You can drag around the demo to see the scene from a different point of view: While on its own the surface doesn’t emit any light, it reflects the light emitted from the source. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Radiance | interactive simulation/diagram module | Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Reflections | interactive simulation/diagram module | Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Shadow | interactive simulation/diagram module | Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Color | interactive simulation/diagram module | Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Bounces | interactive simulation/diagram module | Explains Bounces within Lights and Shadows using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Position If you looked closely at the previous | interactive simulation/diagram module | Position If you looked closely at the previous simulation you may have noticed that the surface wasn’t uniformly lit. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| A red dot terminates a ray that used to hit | interactive simulation/diagram module | In the simulation below a red dot terminates a ray that used to hit the tiny patch in the perpendicular case, but it no longer does so after tilting: As soon as the light source slants away from the perpendicular direction some of the rays that used to hit the patch no longer do. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| The blue arrow shows the surface normal | interactive simulation/diagram module | The blue arrow shows the surface normal. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| The yellow arrow points towards the light source: | interactive simulation/diagram module | The yellow arrow points towards the light source: As the angle increases, a smaller portion of the original stream of light hits the surface. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| In the example below the yellow arrow shows | interactive simulation/diagram module | In the example below the yellow arrow shows the direction towards a distant light source: With the cosine factor covered we can now analyze how the distance to the light source affects the distribution of rays. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| Control its radius with a slider: Notice, that when the | interactive simulation/diagram module | That source is surrounded by a sphere - you can control its radius with a slider: Notice, that when the radius of the sphere increases, the density of the yellow intersection points decreases . | slider/range | parameter values update continuously while slider position changes |
| However, the light source itself doesn’t seem to | interactive simulation/diagram module | However, the light source itself doesn’t seem to undergo the same effects - it remains consistently bright even as we look at it from an oblique angle or move away from it with a slider: A matte surface seems to collect the surrounding light from every direction. | slider/range | parameter values update continuously while slider position changes |
| Every point of a Lambertian emitter emits light | interactive simulation/diagram module | Every point of a Lambertian emitter emits light in the following spherical pattern, the length of an arrow corresponds to relative number of photons per second emitted in the arrow’s direction: The lengths of the vectors are proportional to the cosine of the angle away from the normal which ends up forming a perfect sphere. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| As the viewing angle tilts, the length of | interactive simulation/diagram module | As the viewing angle tilts, the length of each arrow gets smaller, so each point of the surface contributes fewer photons towards the observer. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| The hemispherical model of light aggregation seems to | interactive simulation/diagram module | The hemispherical model of light aggregation seems to work well for a matte surface, but it certainly doesn’t explain the behavior of a plain mirror: Let’s try to visualize how a ray of incoming light, represented with a blue arrow , ends up being reflected by the mirror in the direction of a red arrow : Notice that you’ll only see the reflection of the light source in a place pointed to by an incoming ray if the outgoing ray points directly at you . | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| A scene is surrounded by a swarm of tiny light | interactive simulation/diagram module | In the simulation below a scene is surrounded by a swarm of tiny light sources, you can see their projections onto the hemisphere of the central point: In limit, if we cover the entire surrounding sphere with tiny light sources it would look like something in the demonstration below. | implicit controls | visual state recomputes in real time when active parameters or scenario change |
| Make the surrounding sphere of light so big that it | interactive simulation/diagram module | The light covers everything now so we can’t really see the scene anymore, but by dragging the slider you can make the surrounding sphere of light so big that it will start to encompass even you, revealing what’s hidden inside: For the final part of this article we will remain inside that sphere of light, it will completely surround us and the scenes we will look at. | slider/range, drag | parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly |

### Interaction Surface Summary
- Control modalities detected: slider/range (6 text hits), drag (2 text hits), click/tap (0 text hits), playback/scrub (0 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=5, script chart/plot hits=0.
- Runtime interaction signals from script tokens: pointer=2, requestAnimationFrame=5, key=0.

### Evidence Snippets
- "You can also drag around the scene to see it from different angles: By the end of this article the effects of light in this demonstration should become more clear, but before we get there we have to take a few steps back and start with a much simpler setup."
- "While this ball of light is not very exciting, you can at least control its brightness with the slider below: What this slider actually regulates is the power of the light source - the amount of energy emitted from it per second."
- "Let’s see how we perceive the brightness of some source depending on its power: Notice that relative change in the perceived brightness strongly depends on the position of the slider."
- "You can drag around the demo to see the scene from a different point of view: While on its own the surface doesn’t emit any light, it reflects the light emitted from the source."
- "Position If you looked closely at the previous simulation you may have noticed that the surface wasn’t uniformly lit."
- "In the simulation below a red dot terminates a ray that used to hit the tiny patch in the perpendicular case, but it no longer does so after tilting: As soon as the light source slants away from the perpendicular direction some of the rays that used to hit the patch no longer do."
- "The blue arrow shows the surface normal."
- "The yellow arrow points towards the light source: As the angle increases, a smaller portion of the original stream of light hits the surface."
- "In the example below the yellow arrow shows the direction towards a distant light source: With the cosine factor covered we can now analyze how the distance to the light source affects the distribution of rays."
- "That source is surrounded by a sphere - you can control its radius with a slider: Notice, that when the radius of the sphere increases, the density of the yellow intersection points decreases ."

## Interactivity Level
- Overall rating: **Low-Medium** (`score=21/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/js/base.js`, `/js/light.js`
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
- Candidate module map for implementation: `Lights and Shadows`, `Power`, `Position`, `Angles`, `Radians`, `Solid Angles`, `Surface Vision`, `Radiance`, `Reflections`, `Shadow`, `Color`, `Bounces`, ...

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
