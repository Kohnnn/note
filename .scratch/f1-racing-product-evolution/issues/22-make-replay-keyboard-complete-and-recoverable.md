# 22 — Make Replay keyboard-complete and recoverable

Type: task
Status: resolved
Blocked by: none

**What to build:** A Replay user can select and inspect drivers without a pointer and can recover from route-data, insight-pack, and replay-chunk failures through clear, actionable states without losing the current replay context.

- [x] The 2D track offers a documented keyboard-equivalent way to reach and select every available driver, with selected and focused state announced accessibly.
- [x] Keyboard selection produces the same driver, leaderboard, telemetry, URL, and analysis state as pointer selection.
- [x] Required route-data and replay-chunk failures show an actionable retry or safe fallback, while optional insight failures remain explicitly unavailable without blocking playback.
- [x] Retry preserves valid replay time, selected drivers, analysis mode, and successful cached chunks.
- [x] Focus remains visible and stable through loading, retry, Story/Workspace changes, and narrow-screen layouts.
- [x] Focused automated checks and a targeted keyboard/browser replay probe pass.

## Answer

Implemented in `f1-racing` commits `6e21bbf` and `7e5ecfd`. Replay now exposes every driver as a keyboard-operable pressed-state control with pointer-equivalent selection and comparison semantics, synchronized leaderboard, telemetry, URL, and analysis state, visible focus, and accessible focused/selected announcements.

Required route failures retain a safe static fallback; optional insight failures remain explicit without blocking playback. Concurrent replay-chunk failures retain independent Retry actions, successful chunks stay cached, duplicate retry activation is locked synchronously, and recovery preserves replay time, selected drivers, analysis mode, and focus without stealing focus for background failures.

Verified with `node --check tools/replay-keyboard-probe.mjs`, `npm run check:replay-keyboard`, `npm run typecheck`, `npm run build` (339 pages), two consecutive `npm run test:replay-keyboard` runs, `npm run quality`, and `npm run smoke:static`; the final standards and specification reviews both reported no findings.
