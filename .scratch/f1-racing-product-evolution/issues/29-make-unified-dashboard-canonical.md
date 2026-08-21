# 29 — Make the Unified Dashboard canonical

Type: task
Status: resolved
Blocked by: 08, 26, 27, 28

**What to build:** A first-time visitor enters an engineering-learning journey through the Unified Dashboard, while existing Replay, Learn, Modelview, Historical Race Desk, Compare, Stints, and legacy URLs retain the exact canonical ownership and compatibility behavior approved by the route decision.

- [x] The canonical home/Dashboard relationship matches the approved route decision and gives one dominant action: choose a subsystem and open race evidence.
- [x] Global navigation presents Dashboard, Replay, Learn, Modelview, and Historical Race Desk in the approved hierarchy; Compare and Stints follow their approved discovery or compatibility role.
- [x] Historical Race Desk remains clearly labeled as accelerated historical simulation and never implies true live timing.
- [x] Existing bookmarks, Replay query state, Compare/Stints links, `/live`, canonical metadata, sitemap entries, and redirects preserve approved intent without duplicate canonical ownership.
- [x] The three pilot briefs are discoverable from the canonical entry and each complete its full evidence and explanation journey.
- [x] Desktop, narrow-screen, keyboard, screen-reader, metadata, static-export, and browser navigation checks pass.

## Answer

Implemented in `f1-racing` commit `33bc9c978a574a1aa03a1da3d7261b623cb43113`. `/` is the canonical Dashboard with one primary Replay-evidence action, generated Monza/Mexico/Zandvoort journeys, runtime-validated handoffs, and explicit surface roles. Navigation keeps Dashboard, Replay, Learn, and Modelview primary and Historical Race Desk secondary; Compare/Stints remain Replay-owned; `/sessions` and `/live` preserve compatibility redirects; canonical metadata and sitemap ownership remain singular; Historical Race Desk says accelerated historical replay simulation, not live timing.

Verified under Node.js `v22.23.0` with `npm run build` (340 pages), static smoke, release redirect tests, Replay/Modelview probes, and the Dashboard browser journey at 390 px and 1440 px with keyboard and metadata assertions. Final standards/spec review reported no actionable findings.
