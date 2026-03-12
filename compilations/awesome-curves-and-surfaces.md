# Curves and Surfaces

**Source Compilation:** [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website URL:** [https://ciechanow.ski/curves-and-surfaces/](https://ciechanow.ski/curves-and-surfaces/)
**Author/Domain:** Bartosz Ciechanowski

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ciechanow.ski/curves-and-surfaces/`
- Page title seen by crawler: `Curves and Surfaces - Bartosz Ciechanowski`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/js/base.js`, `/js/curves.js`
- Evidence confidence: `High`

## What the Site is About
- Geometric modeling deep dive from linear interpolation to bezier patches, splines, and subdivision surfaces with draggable control points.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Curves and Surfaces | chart/plot module | Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around to change the mask’s shape: Moreover, we’ll see how surfaces like that are a natural extension of plain two dimensional curves like the one below: Throughout this article I’ll keep jumping back and forth between curves and surfaces to highlight how the ideas we develop for wiggly lines can be expanded onto three dimensional shells that we can shape. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Defining the Shape | interactive simulation/diagram module | Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around to change the mask’s shape: Moreover, we’ll see how surfaces like that are a natural extension of plain two dimensional curves like the one below: Throughout this article I’ll keep jumping back and forth between curves and surfaces to highlight how the ideas we develop for wiggly lines can be expanded onto three dimensional shells that we can shape. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Linear Segment | interactive simulation/diagram module | Linear Segment In the demonstration below you can drag the control points A and B around to change their position. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| A Step Further | reference/narrative section | The slider controls the progress of our drawing - the more advanced the slider is the further into drawing we are. | slider/range | parameter values update continuously while slider position changes |
| Bezier Patches | interactive simulation/diagram module | When you move the selected 6 th point, the section of the curve near the 2 nd control point changes as well: When we look at the plot of the weight that each point has as we progress through the curve we can notice that, to some extent, they all contribute almost the entire curve: Single Bezier curves with many control points lack the property of local control , making them not as useful for expressing more complicated shapes, so for better or for worse we have to rethink our approach to designing complicated shapes. | slider/range, drag, click/tap | plots and numeric readouts recalculate with current parameters |
| Beyond Cubic | interactive simulation/diagram module | Explains Beyond Cubic within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Splines | interactive simulation/diagram module | Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Curved Mirror on The Wall | chart/plot module | By dragging the slider you can bend that surface into an arc of a circle, the black curve below shows a cross section of the mirror’s shape: Notice that as the mirror pulls away from the flat shape the reflection of the sphere gets narrower. | slider/range, drag | parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direction/magnitude changes |
| Building the Basis | interactive simulation/diagram module | Explains Building the Basis within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Bâspline Extravaganza | interactive simulation/diagram module | Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Cutting Corners | interactive simulation/diagram module | Explains Cutting Corners within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Subdivision Surfaces | interactive simulation/diagram module | Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around to change the mask’s shape: Moreover, we’ll see how surfaces like that are a natural extension of plain two dimensional curves like the one below: Throughout this article I’ll keep jumping back and forth between curves and surfaces to highlight how the ideas we develop for wiggly lines can be expanded onto three dimensional shells that we can shape. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| I built a system that lets you change the shape | chart/plot module | In the demonstration below I built a system that lets you change the shape of a curve by controlling its spiralâness and size : While fun to play with, this system is quite impractical. | play/pause | time progression can be paused/resumed for frame-by-frame inspection |
| You can drag each control point shown as to change | chart/plot module | In the demonstration below you can drag each control point shown as to change the curve’s form: Control points are often visualized with connecting lines that join them to their neighbors. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| You can tap click a control point to see how | chart/plot module | In the demonstration below you can tap click a control point to see how it affects the local shape - the redder the section of the curve the more influenced it is by that control point. | click/tap | click actions trigger state transitions or object selection |
| The slider controls a virtual red pen that | interactive simulation/diagram module | The slider controls a virtual red pen that is used to draw a segment between those two points: While this demo is the world’s most primitive drawing application, there are some important observations we can make here already. | slider/range | parameter values update continuously while slider position changes |
| Tap click the control points to change which one is | interactive simulation/diagram module | You can tap click the control points to change which one is selected: For a linear segment like that, weighting function is quite straightforward. | click/tap | click actions trigger state transitions or object selection |
| As we progress through the curve using the | chart/plot module | As we progress through the curve using the slider we decrease the weight of the point A and increase the weight of the point B : This hopefully makes intuitive sense. | slider/range | parameter values update continuously while slider position changes |
| The slider controls a virtual pen that paints | interactive simulation/diagram module | The slider controls a virtual pen that paints a linear segment : By dragging that point through space we’ve created a simple linear segment placed in three dimensions. | slider/range, drag | parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly |
| Let’s not forget that the segment we’re dragging | interactive simulation/diagram module | Let’s not forget that the segment we’re dragging is itself made by dragging a point between the segment’s endpoints, so the entire surface consists of points made from all possible values of two different progresses, one along the rails and another along the dragged segment : The sliders, and thus the progresses, are independent of each other, so we can think of the choice they offer as a 1x1 square: One slider controls the progress t of the dragged segment and the other slider controls the progress s within that segment. | slider/range, drag | parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly |
| As a result, we can create the very | interactive simulation/diagram module | As a result, we can create the very same surface by choosing to drag either the yellow or the blue segment through space - they both end up tracing the same surface: While we’re effectively just dragging a straight stick through the air, the surface it creates, known as a hyperbolic paraboloid , at some viewing angles doesn’t look straight at all - there are some curvy shapes to be found on this surface. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Tap click a control point to select it: There are | chart/plot module | You can tap click a control point to select it: There are a few interesting observations to be made here: When the progress is equal to 0 the weight function of control point A reaches 1 and all the other disappear, so the curve is guaranteed to start at point A Similarly, when the progress is equal to 1 the weight function of control point C reaches 1 and all the other disappear, so the curve is guaranteed to end at point C When progress is between those two extrema the position of the points on the curve is affected by all 3 control points It’s also worth pointing out that the “speed” of travel along the curve is no longer constant like it was for a linear segment. | click/tap | click actions trigger state transitions or object selection |
| We can visualize how uniform steps of progress | chart/plot module | We can visualize how uniform steps of progress map to the curve points: For some configurations when the slider is halfway along the progress, the curve is definitely not halfway drawn. | slider/range | parameter values update continuously while slider position changes |
| That plane also has a perpendicular direction which | interactive simulation/diagram module | That plane also has a perpendicular direction which we call a normal direction of the surface at that point - I’ve marked that direction with a red arrow : For two surfaces to be connected without a sharp edge we need the normals at the joining edge to be aligned in the same direction: Note that even when the surfaces don’t have any gaps it still requires a lot of adjustments to keep them connected and free of sharp edges. | implicit controls | vector arrows refresh to reflect direction/magnitude changes |
| Witness how quickly the local direction of the curve, shown | chart/plot module | By dragging the slider you can witness how quickly the local direction of the curve, shown as a black arrow , changes in the areas of large curvature: A straight line has no curvature and the arrow never turns, while a tight turn has a high curvature and the arrow turns very rapidly when passing through it. | slider/range, drag | parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direction/magnitude changes |

### Interaction Surface Summary
- Control modalities detected: slider/range (30 text hits), drag (4 text hits), click/tap (6 text hits), playback/scrub (1 text hits).
- Visual surfaces detected: canvas=0, svg=0, chart-language hits=169, script chart/plot hits=216.
- Runtime interaction signals from script tokens: pointer=28, requestAnimationFrame=5, key=0.

### Evidence Snippets
- "Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around to change the mask’s shape: Moreover, we’ll see how surfaces like that are a natural extension of plain two dimensional curves like the one below: Throughout this article I’ll keep jumping back and forth between curves and surfaces to highlight how the ideas we develop for wiggly lines can be expanded onto three dimensional shells that we can shape."
- "In the demonstration below I built a system that lets you change the shape of a curve by controlling its spiralâness and size : While fun to play with, this system is quite impractical."
- "In the demonstration below you can drag each control point shown as to change the curve’s form: Control points are often visualized with connecting lines that join them to their neighbors."
- "In the demonstration below you can tap click a control point to see how it affects the local shape - the redder the section of the curve the more influenced it is by that control point."
- "Linear Segment In the demonstration below you can drag the control points A and B around to change their position."
- "The slider controls a virtual red pen that is used to draw a segment between those two points: While this demo is the world’s most primitive drawing application, there are some important observations we can make here already."
- "The slider controls the progress of our drawing - the more advanced the slider is the further into drawing we are."
- "You can tap click the control points to change which one is selected: For a linear segment like that, weighting function is quite straightforward."
- "As we progress through the curve using the slider we decrease the weight of the point A and increase the weight of the point B : This hopefully makes intuitive sense."
- "The slider controls a virtual pen that paints a linear segment : By dragging that point through space we’ve created a simple linear segment placed in three dimensions."

## Interactivity Level
- Overall rating: **Very High** (`score=96/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/js/base.js`, `/js/curves.js`
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
- Candidate module map for implementation: `Curves and Surfaces`, `Defining the Shape`, `Linear Segment`, `A Step Further`, `Bezier Patches`, `Beyond Cubic`, `Splines`, `Curved Mirror on The Wall`, `Building the Basis`, `Bâspline Extravaganza`, `Cutting Corners`, `Subdivision Surfaces`, ...

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
