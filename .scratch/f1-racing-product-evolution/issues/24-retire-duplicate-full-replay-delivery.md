# 24 — Retire duplicate full-replay delivery

Type: task
Status: resolved
Blocked by: 23

**What to build:** Replay and Historical Race Desk preserve their current initial load, full-race playback, analysis, sharing, and recovery behavior using replay metadata and bounded frame chunks, while public releases stop shipping a second full-session frame payload.

- [x] Replay and Historical Race Desk load the initial window and requested full race exclusively from validated metadata and chunks.
- [x] Missing or corrupt chunk metadata produces the approved actionable unavailable/retry state rather than silently fetching a full replay duplicate.
- [x] Exported public assets contain no full replay frame payload and contain no route, manifest, sitemap, or client reference to one.
- [x] Featured replay, complete-race analysis, pit-cycle evidence, Race Desk playback, URL restoration, and retries remain behaviorally equivalent.
- [x] The release audit reports the removed bytes and verifies that every indexed race remains complete and playable.
- [x] Quality, production build, static smoke, and targeted Replay and Race Desk browser checks pass.

## Answer

Implemented in `f1-racing` commits `f47908a` and `11e324f`. Replay and Historical Race Desk now initialize and hydrate complete sessions from strict `replay.meta.json` metadata and ordered bounded chunks, preserve successful chunks during retry, and show actionable same-route recovery for missing or corrupt metadata and chunks.

Public, client, and backend delivery of `replay.json`, `manifest.replay`, `/full`, and full-payload fallbacks is removed. Backend playback reconstructs the stream from validated chunk coverage, while the release audit rejects forbidden full-payload references, verifies indexed race completeness, and reports deterministic removed frame-payload bytes.

Verified with `npm run quality`, `npm run test:release-data`, `npm run build` (339 pages), `npm run smoke:static`, `npm run test:replay-keyboard`, `npm run test:backend`, `npm run test:split-replay`, `npm run check:data`, JavaScript syntax checks, Python compilation, and `git diff --check`; independent standards and specification reviews both passed.
