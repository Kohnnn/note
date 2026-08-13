# 25 — Ship the hardened baseline release

Type: task
Status: claimed
Blocked by: 19, 21, 22, 23, 24

**What to build:** The canonical production site receives one verified baseline release whose source, generated packs, static artifact, deployment identity, browser behavior, and rollback target can be tied together and independently checked.

- [ ] The full approved source, data, backend, build, accessibility, performance, security, and static-artifact gates pass against one immutable release identity.
- [ ] The artifact records the source commit, pack release identity, hashes, generated and published timestamps, build result, smoke result, and canonical hostname.
- [ ] The verified artifact is published through the approved promotion workflow without rebuilding or mutating pack objects during promotion.
- [ ] Canonical production probes pass for Dashboard/home, Replay library and featured Replay, Historical Race Desk, Compare, Stints, Modelview, Learn, manifests, chunks, models, fonts, metadata, and legacy redirects with no unexpected console, page, or core-network failures.
- [ ] The production site exposes enough immutable identity to prove it serves the verified release.
- [ ] A retained previous release is verified as a usable rollback target, and the rollback runbook can restore it without rebuilding.
