# Migrate NCase games and tools

Type: task
Status: resolved
Blocked by: 15

## Question

Complete and verify `trust`, `crowds`, `loopy`, `anxiety`, `wbwwb`, `coming-out-simulator-2014`, and `sim`. Preserve slideshow/game/editor state, native runtime controls, drawing and pointer coordinates, timing, audio, persistence, export/share behavior, and intrinsic canvas/image output. Add the missing deterministic `crowds` scenario. Update parity records and leave one atomic family commit after focused and full gates.

## Answer

Migrated all seven NCase games and tools with manifest-owned native preparation for Trust, Crowds, and Anxiety; dominant authored surfaces for LOOPY, WBWWB, Coming Out Simulator, and SIM; and deterministic runtime probes for every required behavior. The suite exercises real pointer coordinates, rendered controls, automatic authored pacing, exact Act IV persistence and sharing payloads, replay, audio, export/import, malformed-link fallbacks, intrinsic output, and the Crowds read-only initial scenario without changing opaque runtimes or immutable baselines.

Verified with `npm test` (363 passing tests), metadata synchronization, policy and syntax checks, `git diff --check`, the combined seven-Route strict experience gate, the full unfiltered 83-Route smoke suite under reversible scheduler isolation, and final green Standards/Spec reviews.
