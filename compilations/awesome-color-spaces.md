# Color Spaces

**Source Compilation:** [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website URL:** [https://ciechanow.ski/color-spaces/](https://ciechanow.ski/color-spaces/)
**Author/Domain:** Bartosz Ciechanowski

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://ciechanow.ski/color-spaces/`
- Page title seen by crawler: `Color Spaces - Bartosz Ciechanowski`
- Static DOM media/control tags: `canvas=2, svg=0, input=0, button=0, video=0, audio=0`
- Script assets detected: `/js/base.js`, `/js/color_spaces.js`
- Evidence confidence: `High`

## What the Site is About
- Color science explainer spanning RGB spaces, chromaticity, transfer curves, gamut boundaries, and matrix conversions with interactive plots.
- The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Color Spaces | interactive simulation/diagram module | We can finally present the chromaticities of primaries of both R G B and R G B color spaces in a single graph: Comparison of primaries I’ll discuss the meaning of the little cross in the middle soon, but the important fact is that a triangle depicts all representable chromaticities of a color space. | slider/range, drag, click/tap | plots and numeric readouts recalculate with current parameters |
| Color Pickers | interactive simulation/diagram module | We can compare some of the colors for the same slider positions side by side. | slider/range | parameter values update continuously while slider position changes |
| Normalized Range | interactive simulation/diagram module | The encoded value is on the horizontal axis and it’s symbolized with a binary code: Tone response curve of sRGB While the curve may look like a single power function, in the range of 0 to 0.04045 it actually is a linear segment: (intensity value) = (encoded value)/12.92 When encoded value is larger than 0.04045 the intensity value is indeed defined by a slightly nudged power function with exponent of 2.4: (intensity value) = (((encoded value) + 0.055)/1.055) 2.4 The transition between the two parts is continuous and I marked its location on the plot with a little bump. | slider/range | parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters |
| Intensity Mismatch | interactive simulation/diagram module | Here’s a comparison of some of the colors for different slider values: A color space can specify how the numeric values of the red, green, and blue components map to intensity of the corresponding light source. | slider/range | parameter values update continuously while slider position changes |
| Primary Differences | interactive simulation/diagram module | Explains Primary Differences within Color Spaces using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Primaries Matched | interactive simulation/diagram module | We can finally present the chromaticities of primaries of both R G B and R G B color spaces in a single graph: Comparison of primaries I’ll discuss the meaning of the little cross in the middle soon, but the important fact is that a triangle depicts all representable chromaticities of a color space. | slider/range, drag, click/tap | plots and numeric readouts recalculate with current parameters |
| Mixing Things Up | interactive simulation/diagram module | Explains Mixing Things Up within Color Spaces using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Seeing the Matrix | chart/plot module | Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| There and Back Again | interactive simulation/diagram module | Explains There and Back Again within Color Spaces using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Negative Values | interactive simulation/diagram module | The results of the experiments were standardized as rgb color matching functions that can be presented on a graph: CIE rgb color matching functions Notice the presence of negative values. | slider/range, drag, click/tap | plots and numeric readouts recalculate with current parameters |
| The Matrix Seeing | chart/plot module | Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Breaking the Boundaries | interactive simulation/diagram module | Explains Breaking the Boundaries within Color Spaces using a parameterized scene that updates calculations and visuals as controls change. | slider/range, drag, click/tap | moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch state, select entities, or trigger discrete events |
| Try using the one below: The gist of | interactive simulation/diagram module | Try using the one below: The gist of the behavior of that new picker is the same - the red slider controls the red component, the green slider affects the green component, and the blue slider acts on the blue component. | slider/range | parameter values update continuously while slider position changes |
| In other words, the position of a slider | interactive simulation/diagram module | In other words, the position of a slider may not be equal to intensity of the light the slider controls. | slider/range | parameter values update continuously while slider position changes |
| Drag the cubes around to see them from different angles | interactive simulation/diagram module | You can drag the cubes around to see them from different angles and control the R G B color indicator using the sliders: As an experiment I encourage you to set red and green components to 0 and just play with the blue slider. | slider/range, drag, play/pause | parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; time progression can be paused/resumed for frame-by-frame inspection |
| Reading from the color matching plot we can | chart/plot module | Reading from the color matching plot we can tell that the color match required 0.16768 units of R , 0.17087 units of G and -0.00135 units of B . | implicit controls | plots and numeric readouts recalculate with current parameters |
| If we read the color matching value for | chart/plot module | If we read the color matching value for every wavelength we obtain the following plot: You may wonder why the spectrum curve doesn’t go through the pure red, green, or blue endpoints of the CIE RGB cube, but it’s simply the result of normalization and scaling applied to the color matching functions by the committee. | implicit controls | plots and numeric readouts recalculate with current parameters |
| xy Chromaticity Diagram Three dimensional diagrams are fun | chart/plot module | xy Chromaticity Diagram Three dimensional diagrams are fun to play with, but they’re often not particularly practical - a 2D plot is often easier to work with and reason about. | play/pause | time progression can be paused/resumed for frame-by-frame inspection; plots and numeric readouts recalculate with current parameters |
| Rejection of z is equivalent to a flat | chart/plot module | Rejection of z is equivalent to a flat projection onto xy plane: If we repeat that step for every combination of spectral colors we can finally present the 2D plot known as CIE xy chromaticity diagram in its full glory. | implicit controls | plots and numeric readouts recalculate with current parameters |
| The colors on the inside of the plot | chart/plot module | The colors on the inside of the plot are just some combinations of the spectral colors and the colors outside of the plot don’t exist . | implicit controls | plots and numeric readouts recalculate with current parameters |
| In some areas of the plot one has | chart/plot module | In some areas of the plot one has to move relatively far away from a chosen color to notice the difference in chromaticity, while in some other areas the distance to change is much smaller . | implicit controls | plots and numeric readouts recalculate with current parameters |
| You can drag the slider to see how the extent | interactive simulation/diagram module | In the simulation below you can drag the slider to see how the extent of the chromaticity triangle corresponds to the representable colors. | slider/range, drag | parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly |
| Click tap the image to change it: Your browser doesn't | interactive simulation/diagram module | You can click tap the image to change it: Your browser doesn't support WebGL which is required for this demo. | click/tap | click actions trigger state transitions or object selection |
| See what happens when you drag all the | interactive simulation/diagram module | See what happens when you drag all the sliders to the right : The color space form the bottom half defines its white as a slightly different color than the top color space. | drag | dragging repositions objects/camera and recomputes geometry instantly |
| Tone Response Curve Let’s look at the plot | chart/plot module | Tone Response Curve Let’s look at the plot of the tone response curve of the sRGB color space. | implicit controls | plots and numeric readouts recalculate with current parameters |

### Interaction Surface Summary
- Control modalities detected: slider/range (35 text hits), drag (3 text hits), click/tap (2 text hits), playback/scrub (2 text hits).
- Visual surfaces detected: canvas=2, svg=0, chart-language hits=27, script chart/plot hits=31.
- Runtime interaction signals from script tokens: pointer=1, requestAnimationFrame=4, key=0.

### Evidence Snippets
- "Try using the one below: The gist of the behavior of that new picker is the same - the red slider controls the red component, the green slider affects the green component, and the blue slider acts on the blue component."
- "We can compare some of the colors for the same slider positions side by side."
- "Here’s a comparison of some of the colors for different slider values: A color space can specify how the numeric values of the red, green, and blue components map to intensity of the corresponding light source."
- "In other words, the position of a slider may not be equal to intensity of the light the slider controls."
- "You can drag the cubes around to see them from different angles and control the R G B color indicator using the sliders: As an experiment I encourage you to set red and green components to 0 and just play with the blue slider."
- "The results of the experiments were standardized as rgb color matching functions that can be presented on a graph: CIE rgb color matching functions Notice the presence of negative values."
- "Reading from the color matching plot we can tell that the color match required 0.16768 units of R , 0.17087 units of G and -0.00135 units of B ."
- "If we read the color matching value for every wavelength we obtain the following plot: You may wonder why the spectrum curve doesn’t go through the pure red, green, or blue endpoints of the CIE RGB cube, but it’s simply the result of normalization and scaling applied to the color matching functions by the committee."
- "xy Chromaticity Diagram Three dimensional diagrams are fun to play with, but they’re often not particularly practical - a 2D plot is often easier to work with and reason about."
- "Rejection of z is equivalent to a flat projection onto xy plane: If we repeat that step for every combination of spectral colors we can finally present the 2D plot known as CIE xy chromaticity diagram in its full glory."

## Interactivity Level
- Overall rating: **Very High** (`score=100/100`).
- Rating combines extracted control language, detected runtime interaction tokens, and chart/simulation evidence.

## Tech Stack (Evidence-Backed)
- `Observed scripts`: `/js/base.js`, `/js/color_spaces.js`
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
- Candidate module map for implementation: `Color Spaces`, `Color Pickers`, `Normalized Range`, `Intensity Mismatch`, `Primary Differences`, `Primaries Matched`, `Mixing Things Up`, `Seeing the Matrix`, `There and Back Again`, `Negative Values`, `The Matrix Seeing`, `Breaking the Boundaries`, ...

## Replication Risks and Validation Checklist
- Validate each module row with deterministic presets and screenshot/video diff checks.
- Confirm every listed control updates both visuals and numeric/label outputs without desynchronization.
- Track performance under aggressive interaction (fast dragging/scrubbing) and keep frame pacing stable.
- Log behavior mismatches against source and keep explicit mitigation notes during implementation.
