# 24 — Retire duplicate full-replay delivery

Type: task
Status: open
Blocked by: 23

**What to build:** Replay and Historical Race Desk preserve their current initial load, full-race playback, analysis, sharing, and recovery behavior using replay metadata and bounded frame chunks, while public releases stop shipping a second full-session frame payload.

- [ ] Replay and Historical Race Desk load the initial window and requested full race exclusively from validated metadata and chunks.
- [ ] Missing or corrupt chunk metadata produces the approved actionable unavailable/retry state rather than silently fetching a full replay duplicate.
- [ ] Exported public assets contain no full replay frame payload and contain no route, manifest, sitemap, or client reference to one.
- [ ] Featured replay, complete-race analysis, pit-cycle evidence, Race Desk playback, URL restoration, and retries remain behaviorally equivalent.
- [ ] The release audit reports the removed bytes and verifies that every indexed race remains complete and playable.
- [ ] Quality, production build, static smoke, and targeted Replay and Race Desk browser checks pass.
