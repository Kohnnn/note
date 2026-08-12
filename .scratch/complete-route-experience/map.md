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

## Not yet specified

- Independently owned iframe-child migrations may graduate only when a family ticket proves a stable authored seam; parent Route completion does not imply child-document theming.

## Out of scope

- Changing Route interaction behavior, learner-facing content, URLs, archived assets, or runtime dimensions.
- Adding accounts, analytics, completion tracking, or persistent Progress to ordinary Routes.
- Personalized or tag-inferred recommendations; Suggested Next Route is explicitly curated.
- Recoloring intrinsic canvas, WebGL, image, or video content without an existing supported theme hook.
- Replacing proven runtimes or rewriting vendored bundles to simplify styling.
