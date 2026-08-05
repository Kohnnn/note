# Teoria.com - Architecture & Replication Guide

**Website:** [https://www.teoria.com/](https://www.teoria.com/)

## What the Site is About
Teoria is a legacy but highly functional educational resource for music theory and ear training. It combines theoretical knowledge (tutorials/articles) with practical, interactive testing (exercises) such as interval recognition, rhythmic dictation, and chord building.

## Interactive Elements & Interactivity Level
*   **Interactive Staff Notation:** Musical scores update dynamically in response to user input (e.g., clicking an interval name renders the correct notes on a blank staff).
*   **Audio Playback Systems:** 
    -   **Speaker Icons:** Trigger individual note or interval samples.
    -   **Instrument Toggle:** Allows users to switch between piano, guitar, and other instrument sound profiles.
*   **Input Interfaces:** Custom on-screen buttons (piano keyboards, interval selectors) and **Web MIDI API** support for physical MIDI keyboard input.
*   **Progress Tracking:** Real-time counters for time, correct answers, and score percentages.

## Tech Stack & Architecture (How to Replicate)
To replicate Teoria's functionality today, you need a stack that handles precise sample playback and dynamic sheet music rendering.

### 1. Rendering (Graphics)
*   **Original Stack:** Teoria uses a custom, proprietary graphics library called **TeoGraf.js** which renders musical staves, clefs, and notes directly to HTML5 `<canvas>`.
*   **Replication Stack:** Use **VexFlow** (an open-source JavaScript library). VexFlow renders standardized music notation to Canvas or SVG and is the modern industry standard for replicating `TeoGraf`'s functionality.

### 2. Audio Engine & Sound Assets (Archiving)
*   **Original Stack:** It does *not* synthesize audio via oscillators. It uses high-quality **MP3 multi-samples** (e.g., individual MP3s for every piano key). A custom library, **musika.js**, manages loading and triggering these samples via the Web Audio API. 
    - *Asset Path Example:* `/res/musika_2024/audio/piano-2021/[MIDI_ID].mp3`
*   **Replication Stack:** Use **Tone.js** `Tone.Sampler`. You will need to scrape or source high-quality C, D#, F#, and A samples across 7 octaves, compile them into an object mapping, and let Tone.js pitch-shift the intermediate notes.

### 3. Frontend / Backend logic
*   **Original Stack:** Built heavily on **jQuery** and **Bootstrap 3** for layout and DOM manipulation, with **PHP** handling the backend routing and exercise state logic.
*   **Replication Stack:** A modern reactive framework (React/Svelte) managing the UI state, bound to VexFlow for visuals and Tone.js for audio.
