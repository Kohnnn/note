# Chrome Music Lab: Song Maker - Architecture & Replication Guide

**Website:** [https://musiclab.chromeexperiments.com/Song-Maker/](https://musiclab.chromeexperiments.com/Song-Maker/)

## What the Site is About
Song Maker is an iconic, highly visual web-based sequencer from Chrome Music Lab. Designed for maximum accessibility without deep musical knowledge, it features a colorful grid where the Y-axis controls pitch (following solfege rainbow patterns) and the X-axis controls rhythm.

## Interactive Elements & Interactivity Level
*   **Main Sequencer Canvas (Melody & Percussion):** Users click cells to paint notes. The grid supports click-and-drag rapid "painting" of melodies.
*   **Instrument Shifters:** Dedicated buttons click through multiple loaded sound sets (Marimba, Piano, Strings, Woodwind, Synth, Electronic, Kit, Conga).
*   **Tempo & Settings:** Real-time sliding UI for tempo (BPM) and granular grid adjustments (Length, Beats per bar, Root note, Scale mode).
*   **Mic Input Pitch Tracking:** Allows a user to sing a tone; the site identifies the pitch and plots it directly onto the Canvas grid.
*   **Animations:** The entire canvas bounces and dynamically pulses in sync with the beats, creating a highly "gamified" feel.

## Tech Stack & Architecture (How to Replicate)
Song Maker relies heavily on Canvas APIs and multi-sampled audio, trading DOM complexity for raw drawing performance.

### 1. Rendering Architecture (The Grid)
*   **Original Stack:** The UI is rendered entirely onto dual HTML5 **`<canvas>`** layers using the Canvas 2D API (`canvas.getContext('2d')`). It relies heavily on custom `requestAnimationFrame` drawing loops for its pulsing animations.
*   **Why Canvas?** Performance. With rapid dragging, rendering hundreds of individual DOM nodes or even SVGs might stutter on mobile. Canvas simply repaints rectangles.
*   **Replication Stack:** Follow the same logic relative to performance over framework comfort. Build an array of objects `[{x:0, y:5, active:true}, ...]`. In a massive `requestAnimationFrame` loop, clear the canvas `ctx.clearRect()`, recalculate the dimensions relative to the window width to ensure responsiveness, and redraw all rounded rectangles.

### 2. Audio Engine & Multi-Sampling
*   **Original Stack:** It relies on **Tone.js (v.14.x)**. However, instead of synths, the site makes heavy network calls to fetch highly optimized, extremely short `.mp3` samples for a large range of notes natively. 
    - *Example Path:* `https://[cdn]/sounds/marimba/C2.mp3`
*   **Replication Stack:** You must compile a large repository of single-hit .mp3 files for your instruments (Piano, Synths, Woodwinds). Map them to a `Tone.Sampler` instance. Tone.js handles pitch-shifting the samples perfectly to fill the required scale in Song Maker's backend logic. 

### 3. Frontend & Input
*   **Original Stack:** A robust custom vanilla Javascript component system (`Main.js`). No major UI frameworks like React or Vue obscure the DOM structure.
*   **Pitch Detection Module:** Uses an implementation of a pitch detection algorithm (like *YIN* or *Auto-correlation*) tied to the `navigator.mediaDevices.getUserMedia()` audio stream.
*   **Replication Strategy:** For modern replication, use **React** to structure the settings UI (modals, sliders, toolbars), but maintain an independent `useEffect` loop that holds pure, disconnected references to the `Canvas` and `Tone.js` engines to prevent React rerendering from crashing the audio loop.
