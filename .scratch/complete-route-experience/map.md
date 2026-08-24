# Complete Route Experience

Label: wayfinder:map
Status: active

## Destination

Ship a complete, reviewed experience across all 83 manifest Routes: every Route adopts the Engineering Sandbox contract with navigation fitted to its runtime, all HTML and runtime-owned UI supports the shared light/dark system, and every Route offers one curated Suggested Next Route.

Behavior, content, URLs, assets, accessibility, and runtime dimensions remain invariant. Intrinsic canvas, WebGL, image, and video palettes remain unchanged unless the runtime already exposes a supported theme hook. Progress remains exclusive to Guided Paths.

## Notes

- This effort carries execution inside the map after its architecture and editorial decisions resolve.
- Use the canonical Atlas, Route, Guided Path, Progress, Learning Guide, and Suggested Next Route vocabulary from `CONTEXT.md`.
- Visual approval is agent-driven. Automated geometry, accessibility, interaction, responsive, theme, policy, and runtime-cleanliness checks are mandatory.
- Deliver one runtime-family slice at a time as an atomic local commit. Run focused smoke checks during iteration and the full repository gate before each family commit.
- Preserve runtime-owned behavior and content even when reskinning HTML controls and surfaces.
- Do not edit minified, bundled, archived, or vendored runtime assets. Add isolation and adaptation at authored seams.
- Work from the parent `interactive-note` Git repository; the nested repository has divergent history.
- Consult `frontend-skill`, `git-workflow-and-versioning`, `code-review`, and family-specific debugging skills during execution.

## Decisions so far

- [Research safe shell isolation and full UI theming](issues/01-research-shell-isolation-and-theming.md) — use additive authored seams, explicit selector boundaries, namespaced tokens, declared theme ownership, and root-scoped adapters; intrinsic and opaque runtimes stay isolated.
- [Research complete-experience acceptance gates](issues/02-research-complete-experience-gates.md) — make the manifest the experience source of truth and require exact all-Route theme, navigation, interaction, geometry, accessibility, network, visual, performance, and full-suite gates.
- [Research the Suggested Next Route map](issues/03-research-suggested-next-route-map.md) — a static candidate covers all 83 Routes with no self-links or missing targets; the matrix exposed one Music Guided Path conflict and one undocumented engineering loop for the contract decision.
- [Build the authoritative Route migration matrix](issues/04-build-authoritative-route-matrix.md) — all 83 Routes now have evidence-backed shell, runtime-boundary, UI-theme, intrinsic-exclusion, candidate-navigation, continuation, smoke-gap, risk, and provisional-wave records.
- [Choose the canonical shell isolation model](issues/05-choose-shell-isolation-model.md) — keep body metadata and body-level chrome as the universal seam, preserve each Route's existing main/runtime placement, and permit only declared family-root adapters instead of wrappers or global styling.
- [Choose the canonical theme adapter model](issues/06-choose-theme-adapter-model.md) — apply one pre-paint saved-theme contract, classify every Route as shell-only, runtime-hook, or fixed-runtime, and permit only namespaced root-scoped adapters with explicit iframe-child migrations.
- [Assign Route navigation modes and ownership boundaries](issues/07-assign-route-navigation-modes.md) — assign all 83 Routes exactly once across 43 generated, 15 native, and 25 none modes, with explicit native-control contracts and opaque runtime boundaries.
- [Lock the acceptance and rollback contract](issues/08-lock-acceptance-and-rollback-contract.md) — require exact per-family and 83-Route static, viewport, theme, interaction, geometry, accessibility, network, performance, and full-suite gates with atomic rollback.
- [Lock the Suggested Next Route contract](issues/09-lock-suggested-next-route-contract.md) — adopt one manifest-owned continuation per Route, preserve the published Music edge, remove the undocumented engineering loop, and keep ordinary continuations separate from Progress.
- [Sequence family execution and graduate implementation tickets](issues/10-sequence-family-execution.md) — establish four foundation commits followed by 14 complete family slices from authored HTML to opaque runtimes and one repository-wide close gate.
- [Encode the manifest experience contract](issues/11-encode-manifest-experience-contract.md) — make the manifest authoritative for all 83 Route shell, theme, surface, interaction, network, and Suggested Next Route declarations; validate exact schema and cross-Route invariants while preserving generated `pages.json` parity.
- [Synchronize universal Route HTML seams](issues/12-synchronize-universal-route-html-seams.md) — deterministically synchronize canonical body metadata and shared theme/Sandbox assets across all 83 top-level Routes while preserving authored main/runtime placement, script order, child documents, and parity evidence.
- [Render shared Route and Atlas continuation UI](issues/13-render-shared-continuation-ui.md) — consume the canonical manifest to render one accessible local continuation on every Route and Atlas card while preserving subpath URLs, footer geometry, focus behavior, and Guided Path Progress isolation.
- [Enforce complete-experience acceptance gates](issues/14-enforce-complete-experience-gates.md) — freeze manifest-driven viewport, theme, navigation, continuation, surface, accessibility, network, persisted geometry, and comparative performance gates; keep strict `--experience` checks scoped to migrated Routes and baseline recording explicit and atomic.
- [Migrate local hubs and Guided Paths](issues/15-migrate-local-hubs-and-guided-paths.md) — theme authored Music, Primary, and Blockchain bridge surfaces; preserve numbered Music and Blockchain Progress, keep Primary unnumbered, and verify manifest navigation, continuation, parity, and complete-experience gates.
- [Migrate MLU Explain Routes](issues/16-migrate-mlu-routes.md) — migrate all ten MLU Routes with exact-family authored-surface theming, manifest chapters for nine Routes, the preserved responsive native TOC for Train/Test/Validation, intrinsic compiled scenes, Route-owned cold-jump compatibility for Bias-Variance, and green focused, family, static, and full smoke gates.
- [Migrate Explained Visually Routes](issues/17-migrate-explained-visually-routes.md) — migrate all nine Explained Visually Routes with exact-family authored-surface theming, manifest-owned generated chapters, intrinsic runtime and MathJax output, authored-root narrow containment, and green focused, family, static, and full smoke gates.
- [Migrate authored engineering longforms](issues/18-migrate-authored-engineering-longforms.md) — migrate all 11 authored engineering longforms with exact-route authored-surface theming, manifest-owned generated chapters, preserved media and interaction geometry, the canonical Lights and Shadows continuation, and green static, focused strict experience, Bicycle regression, and full 83-Route smoke gates.
- [Migrate systems Routes](issues/19-migrate-systems-routes.md) — migrate all four systems Routes with exact manifest chapters, canonical SamWho runtime hooks, authored-only Hysteresis theming, intrinsic Nuxt/WebGL output, preserved state and geometry, and green static, focused strict experience, final review, and full 83-Route smoke gates.
- [Migrate Anders Brownworth labs](issues/20-migrate-anders-labs.md) — migrate all three Anders labs with declared authored runtime roots, semantic Bootstrap state theming, native keyboard-owned navigation, intrinsic jVectorMap output, preserved cryptographic behavior and dimensions, and green static, focused strict experience, final review, and full 83-Route smoke gates.
- [Migrate Teoria practice Routes](issues/21-migrate-teoria-practice-routes.md) — migrate all six Teoria practices with an exact generated-DOM theme hook, intrinsic audio/notation exclusions, preserved mount and score state, pointer/keyboard reveal parity, and green static, focused strict experience, final review, and full 83-Route smoke gates.

## Not yet specified

- Independently owned iframe-child migrations may graduate only when a family ticket proves a stable authored seam; parent Route completion does not imply child-document theming.

## Out of scope

- Changing Route interaction behavior, learner-facing content, URLs, archived assets, or runtime dimensions.
- Adding accounts, analytics, completion tracking, or persistent Progress to ordinary Routes.
- Personalized or tag-inferred recommendations; Suggested Next Route is explicitly curated.
- Recoloring intrinsic canvas, WebGL, image, or video content without an existing supported theme hook.
- Replacing proven runtimes or rewriting vendored bundles to simplify styling.
