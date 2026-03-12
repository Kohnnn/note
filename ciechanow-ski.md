# Bartosz Ciechanowski Blog

**Source Compilation:** Featured in [awesome-explanations](https://github.com/Kohnnn/awesome-explanations)
**Website Examples:** [Internal Combustion Engine](https://ciechanow.ski/internal-combustion-engine/)

## What the Site is About
A deep-dive mechanical explanation of how complex systems work. It breaks down systems into core components (pistons, crankshafts, gears) using highly detailed, playable 3D models embedded directly seamlessly into the reading flow.

## Interactive Elements & Interactivity Level
- **3D Model Manipulation:** Full 3D models are rendered natively in the browser. Users can click and freely drag/rotate the models with inertia-like smoothness to inspect them from any angle. **Interactivity Level:** Extremely High.
- **Mechanical Manipulation Sliders:** Sliders dictate the physical state of the machine over time. Moving a slider rotates a crankshaft, which mathematically forces the connecting rods, pistons, and valves to move in perfect physical synchronization. 
- **Playback Controls:** Play, pause, and speed controls allow the engine to run automatically in a localized animation loop.

## Tech Stack & Architecture (How to Replicate)
Ciechanowski's site takes a radically different approach from MLU-Explain, prioritizing raw computational performance for 3D rendering overhead above all else.

*   **Rendering Medium:** HTML5 **`<canvas>`** element.
*   **Graphics API:** **WebGL**. The 3D models are rendered directly onto the GPU.
*   **Core Framework:** **Vanilla JavaScript**. There is no React, Svelte, or Vue. By avoiding heavy framework lifecycles, the site ensures maximum frames per second during complex 3D calculations.
*   **3D Library:** **Custom WebGL Engine**. Surprisingly, it does *not* use popular libraries like Three.js. It relies on bespoke shader programs and matrix math scripts (`base.js`) optimized purely for a specific technical-drawing aesthetic (flat shading, thick outlines). 
*   **Asset Pipeline:** 3D models are not loaded as external `.obj` or `.gltf` files. They are likely procedurally generated via code or serialized into highly compacted binary/Float32 arrays directly within the JavaScript files. This results in near-instant load times with zero "loading..." spinners.

### Replication Strategy for Modern Developers
Writing raw WebGL requires intense matrix mathematics knowledge. To replicate this level of 3D interactivity productively today, you should use:
1.  **React Three Fiber (R3F):** A React wrapper for **Three.js**.
2.  **Hierarchical Kinematics:** To make gears/pistons move together, you parent the 3D objects in a strict hierarchy (e.g., Piston is a child of the Connecting Rod, which is a child of the Crankshaft). 
3.  **Single Time Variable:** Bind a slider to a highly reactive state variable (like a Jotai atom or Zustand store). Use this single value as "Time" or "Degrees of Rotation" inside R3F's `useFrame` hook to calculate the trigonometric positions of all linked parts simultaneously.
4.  **GLTFJSX:** Use this tool to compress your 3D models into React components for instant loading.
