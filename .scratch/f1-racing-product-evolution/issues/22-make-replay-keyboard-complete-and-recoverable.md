# 22 — Make Replay keyboard-complete and recoverable

Type: task
Status: claimed
Blocked by: none

**What to build:** A Replay user can select and inspect drivers without a pointer and can recover from route-data, insight-pack, and replay-chunk failures through clear, actionable states without losing the current replay context.

- [ ] The 2D track offers a documented keyboard-equivalent way to reach and select every available driver, with selected and focused state announced accessibly.
- [ ] Keyboard selection produces the same driver, leaderboard, telemetry, URL, and analysis state as pointer selection.
- [ ] Required route-data and replay-chunk failures show an actionable retry or safe fallback, while optional insight failures remain explicitly unavailable without blocking playback.
- [ ] Retry preserves valid replay time, selected drivers, analysis mode, and successful cached chunks.
- [ ] Focus remains visible and stable through loading, retry, Story/Workspace changes, and narrow-screen layouts.
- [ ] Focused automated checks and a targeted keyboard/browser replay probe pass.
