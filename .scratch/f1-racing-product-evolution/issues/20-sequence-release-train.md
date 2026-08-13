# Sequence the release train and graduate implementation tickets

Type: grilling
Status: resolved
Blocked by: 09, 11, 12, 14, 15, 16, 17, 18, 19

## Question

In what release order should baseline hardening, Unified Dashboard, deeper core experiences, the broadcast-and-editorial migration, search and metadata, true live timing if retained, and accounts or progress if retained ship? Define release outcomes, dependencies, parallel-safe work, atomic commit boundaries, feature flags, migration and rollback boundaries, acceptance evidence, and the exact implementation tickets that graduate from the map's fog.

## Answer

Ship two immutable release lines. **Release A — Hardened baseline** completes Modelview self-containment and accessibility, Replay keyboard and recovery behavior, one isolated audited candidate pack tree, and chunk-only replay delivery; it then promotes one verified baseline with release identity and rollback evidence. **Release B — Unified Dashboard pilot** adds the deterministic Monza brief template, reuses it for Mexico and Zandvoort, makes the Dashboard canonical, adds the one browser-local learning trail, records only approved host aggregates, and promotes the three-journey pilot after every Release A regression gate still passes.

The implementation order and atomic save points are:

1. Ticket 21: localize Modelview runtime dependencies and close control, fallback, narrow-screen, and reduced-motion accessibility gaps.
2. Ticket 22: add one keyboard-equivalent driver-selection seam, explicit optional/required failure states, stable retry/focus behavior, and a browser probe. Tickets 21 and 22 are parallel-safe except for shared CSS/test-script conflict resolution.
3. Ticket 23: build the isolated candidate-tree, deterministic manifest, provenance/freshness validation, seeded failures, and release commands. It may proceed while 21/22 run, but its final candidate must include their commits.
4. Ticket 24: remove full replay payloads and fallback references only after ticket 23 can prove chunk completeness and candidate immutability.
5. Ticket 25: create and promote the Release A artifact from one clean source commit; no feature work enters this release after its candidate identity is computed.
6. Ticket 26: introduce one versioned, allowlisted evidence-brief contract and generator with Monza as the tracer; replace hard-coded Dashboard evidence with validated generated output.
7. Tickets 27 and 28: add Mexico and Zandvoort fixtures/templates independently against ticket 26’s contract, then merge only after each deterministic and browser path passes.
8. Ticket 29: finalize canonical navigation, metadata, sitemap, redirects, and all three Dashboard journeys. The already-approved `/` composition is the reference, not a separate implementation fork.
9. Ticket 30: add the bounded local trail and Read/Completed migration as one client-side continuity slice. It may develop after ticket 26 but ships only with the canonical Dashboard.
10. Ticket 31: verify/document existing host aggregates and explicitly mark activation, learning completion, funnels, return use, and RUM `not measured`; no client analytics code is permitted.
11. Ticket 32: build one clean Release B candidate, run every gate and production probe, promote without rebuild, start the 30-day aggregate window, and retain Release A as rollback target.

Each numbered implementation ticket is one logical commit unless its tests must land with the behavior they prove; generated manifests belong in the same commit as their generator contract. Refactors, dependency updates, and unrelated visual cleanup do not share a feature commit. Every commit must leave `quality:source` passing; candidate-affecting slices also pass the relevant data/build/static/browser gate before merge.

No runtime feature flag, duplicate Dashboard route, service-side switch, or long-lived branch is approved. Incomplete work stays off the promoted immutable deploy. Release selection is the deployment boundary: preview the exact built artifact, promote that artifact unchanged, and roll back by repromoting the prior recorded immutable deployment. Schema changes use versioned readers and fail-safe migration; public pack changes publish under a new release identity and never mutate a promoted tree.

Tickets 21–32 are the exact graduated implementation tickets. Search/metadata remains static; true live and accounts do not graduate because their proof thresholds failed. Every implementation ticket records its commands and acceptance evidence before resolving. Tickets 25 and 32 additionally record source commit, artifact and pack IDs, preview/production identities, approvals, production probes, and tested rollback target.
