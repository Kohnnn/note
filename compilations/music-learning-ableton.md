# Ableton Learning Music - Architecture & Replication Guide

**Website:** [https://learningmusic.ableton.com/](https://learningmusic.ableton.com/)

## What the Site is About
Ableton Learning Music is an interactive educational platform designed to teach the fundamentals of music theory and production (Beats, Notes, Scales, Chords, and Melodies). It uses a "learn-by-doing" approach where users interact with synchronized musical widgets directly within the browser, requiring no external equipment.

## Interactive Elements & Interactivity Level
*   **Drum Sequencer (Beats Track):** A 16-step horizontal grid sequencer. A moving playhead tracks across the grid in real-time. Clicking cells toggles multi-layered drum samples (Kick, Snare, Hi-hat).
*   **Piano Roll (Notes & Chords):** A vertical pitch axis and horizontal time axis where users place blocks to build melodies or stack them for chords.
*   **The Playground (Multi-track Sync):** All widgets (Beats, Basslines, Chords, Melodies) sync to a global master "Transport" clock. A master Tempo slider adjusts bpm in real-time.
*   **Visual Feedback:** Active notes "glow" or dim when toggled or played.
*   **Export to Live:** Allows users to download their browser patterns as a professional `.als` Ableton Live Set file.

## Tech Stack & Architecture (How to Replicate)
Ableton built a remarkably optimized, framework-free audio engine and UI combination.

### 1. Rendering Engine (The UI Grids)
*   **Original Stack:** The interactive grids and piano rolls are constructed using **pure SVG**, not Canvas or native DOM elements. This guarantees crisp zooming on retina screens and precise CSS styling.
*   **Frontend Logic:** It avoids heavy frameworks (no React or Vue), relying entirely on **Vanilla JavaScript**. Custom modular components (e.g., `SimplePianoRoll.js`, `widgets.min.js`) manage the state. `Microevent.js` handles lightweight event pub/sub.
*   **Replication Stack:** Use an SVG framework like **D3.js** or robust Svelte SVG templates to construct your 16x4 grids and piano rolls. Bind clicks to toggle CSS classes (`.active`, `.playing`) to manage visual states independently from the audio engine.

### 2. Audio Engine (Web Audio)
*   **Original Stack:** Driven entirely by **Tone.js**. Tone handles sample-accurate scheduling via the `Tone.Transport` (the global clock). A custom orchestrator (`Audiosupervisor.js`) synchronizes the multiple widgets.
*   **Replication Stack:** Replicate this pattern exactly. Use **Tone.js**. Map UI events not directly to `play()`, but to Tone's `ScheduleRepeat` loop. Calculate precisely which step (0-15) the transport is on and trigger the active samples. Keep a hidden metronome running to sync the visual SVG playhead with the audio playback.

### 3. Sound Assets (Archiving)
*   **Original Stack:** It uses multi-sampled **.ogg files** (e.g., `Piano_C1.ogg`, `Kick.ogg`) rather than synthesized oscillators for realism. To save loading time, intermediate notes are filled in via Tone.js's pitching capabilities.
*   **Replication Stack:** Source high-quality Ogg/WAV samples. Use `Tone.Sampler` to load C and F# across a few octaves to interpolate the rest of the chromatic scale in real-time memory. Ensure audio buffers prep and cache locally before enabling the "Play" UI.
