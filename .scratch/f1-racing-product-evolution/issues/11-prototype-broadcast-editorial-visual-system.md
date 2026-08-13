# Prototype the broadcast and editorial visual system

Type: prototype
Status: resolved
Blocked by: 09, 10

## Question

Which whole-product visual system combines broadcast energy with editorial clarity while preserving dense technical readability, accessibility, and performance? Prototype the approved Dashboard plus representative Replay, Learn, and Modelview states; test typography, hierarchy, color and evidence semantics, shell/navigation, panel reduction, motion, responsive behavior, and progressive disclosure before approving tokens and component migrations.

## Answer

Approve the Dashboard as the whole-product reference: **broadcast restraint, editorial evidence**. The dark broadcast shell supplies session energy through one warm action color, cool data color, fine rules, and occasional circuit art; the page reads as an editorial brief, not a stack of glossy control-room cards. Every surface must make one task or question dominant, place evidence and its ceiling before interpretation, then progressively disclose controls or orientation tools.

### Tokens and typography

- Preserve the existing dark system foundation: page `#05070c`, strong surface `#0d121d`, white ink, muted ink, fine cool-grey rules, orange `--accent`, and blue `--cool`. Consolidate future declarations behind the existing root tokens rather than adding per-route hard-coded colours.
- Reserve orange for the single primary action, active navigation, and `Derived`; reserve blue for `Recorded`; define a neutral, non-accented `Unknown` token for limits, unavailable coverage, and caveats. Never use team, tyre, DRS, or wind colours as evidence authority. Colour is redundant with the visible word label and prose.
- Use the existing system sans (`Aptos`, `Segoe UI`, `Helvetica Neue`) for navigation, controls, body, metadata, and dense data; use the existing editorial serif (`Iowan Old Style`, `Palatino Linotype`, Georgia) only for brief and section headlines; use the existing `IBM Plex Mono`/Consolas stack only for timestamps, deltas, sampled metrics, and URLs. No web-font dependency is approved.
- Hierarchy is fixed: one page question or session identity at display scale; section title; compact uppercase contextual label; readable explanatory copy; then compact metadata. Do not use display type for telemetry, status, buttons, or multiple competing panels.

### Evidence and hierarchy semantics

- `Recorded` means source-pack facts, sampled traces, published timing, or source/position coverage. It receives blue rule/accent plus a visible label.
- `Derived` means deterministic annotation or calculation from named recorded inputs. It receives orange rule/accent plus a visible label and method/source path.
- `Unknown` means a stated boundary, missing measurement, unsupported attribution, or a reason to stop. It is neutral and equally prominent in text; it must never look disabled or optional.
- `Illustrative` is separate from all three: Modelview orientation, 3D camera aids, and wind output must name their static-reference/estimate ceiling. They cannot inherit `Recorded` styling or be placed beside session evidence without their disclosure.
- The approved Dashboard proves this order: question, three evidence classes, dominant “Open recorded evidence” action, optional Learn/Modelview handoffs, then follow-up briefs and route roles. Replay must foreground exact session identity, playback/coverage, and selected evidence before advanced analysis. Learn foregrounds concept and local progress; Modelview foregrounds component orientation and its non-session-evidence disclosure.

### Shell, navigation, and panel reduction

- Keep the shared bounded shell, compact translucent header, and four peer primary links: Dashboard, Replay, Learn, Modelview. Keep Historical Race Desk visually secondary in its separate reference group and retain “Historical replay simulation — not live timing” wherever it is entered.
- Current nav already expresses this route hierarchy, and Dashboard’s route-role grid already demotes Historical Race Desk correctly. Product work must preserve active state and route grouping, including Compare/Stints as Replay-owned rather than restoring them as peers.
- Prefer editorial sections separated by rules, whitespace, and one support rail over nested rounded cards. A panel is justified only when it contains an independently interactive workspace, grouped controls, a local-progress state, or a bounded fallback/error state. Do not wrap every paragraph, link, metric, and disclosure in a panel.
- Dashboard’s border-led brief list, evidence columns, and only-one boxed learning trail are the approved density model. Replay may retain its stage, controls, telemetry, and leaderboard containers because they are functional units; Learn keeps its progress and module groupings; Modelview keeps its model workspace. Remove decorative nesting during migration.

### Motion, responsiveness, accessibility, and performance

- Motion may confirm direct interaction only: 180ms colour/border changes and at most a 1–2px hover lift. No autoplayed ornamental animation, parallax, or pulsing evidence signal. Do not make motion the only active-state cue.
- Expand the existing `prefers-reduced-motion` treatment to disable every nonessential animation and transform transition, including card/button lift, model/wind affordances, and progress interpolation; preserve controls and immediate state changes.
- Desktop uses the Dashboard’s main reading column plus narrow support rail. At 800px and below, preserve semantic reading order: question/session identity, evidence boundary or coverage, primary action, contextual route/disclosure, follow-up content, then secondary surfaces. Do not merely squeeze control-room grids; stack, collapse nonessential rail art, and keep actions at least 44px tall.
- Maintain visible `:focus-visible` states, semantic headings/landmarks, text labels beside colour, keyboard-equivalent 2D Replay path, image alt text, and no information revealed only by hover, canvas, WebGL, or colour. Keep readable body leading near the Dashboard’s 1.55–1.7 range and prevent horizontal overflow at 390px.
- Retain system fonts, static circuit art, CSS gradients, lazy images/models, and Replay’s chunked data loading. New decorative media, extra font files, global blur layers, or animation libraries are out of scope. Use `content-visibility` only after measured below-the-fold benefit and without breaking anchor navigation or accessibility-tree expectations.

### Minimal migration scope

1. Establish the approved evidence and surface tokens in the shared stylesheet by reconciling existing `--accent`, `--cool`, ink, line, radius, and surface values; do not introduce a component library or redesign routes.
2. Migrate the shared shell/nav and reusable button, text-link, eyebrow, panel, status/evidence-label, and focus-visible patterns first. Remove route-local colour and panel variants only where they duplicate those rules.
3. Migrate the representative surfaces to the Dashboard hierarchy: Replay session/banner, coverage disclosure, stage/controls/sidebar; Learn index/module/progress; Modelview hero, focus controls, studio, and wind disclosure. Preserve current behavior, shareable URLs, local Learn progress, 2D fallback, and data-loading boundaries.
4. Downstream implementation tickets must migrate the remaining Replay Story/Workspace, Compare, Stints, 2D/optional 3D, wind visualizer, Historical Race Desk, and compatibility routes to these tokens and disclosure rules. They must not add a fifth primary navigation surface, account state, new content model, or session-specific claims from illustrative tools.

### What the current prototype proves

- `page.tsx` proves the approved one-question editorial composition, exact Replay handoff, restrained Learn/Modelview actions, explicit `Recorded`/`Derived`/`Unknown` content, secondary next briefs, local-trail placeholder, and Historical Race Desk demotion.
- `globals.css` proves the dark token base, sans/serif/mono role split, fine-rule hierarchy, blue/orange recorded/derived distinction, panel reduction on Dashboard, 800px single-column reflow, 44px primary buttons, and an initial reduced-motion override.
- Replay already proves dense functional containers and chunked data loading; Learn proves browser-local progress and focused modules; Modelview proves progressive 3D orientation with fallback/error handling and selected focus in the URL. These are retained capabilities, not visual authority to expand the Dashboard.

The visual system is approved for incremental migration. Dashboard is the reference; deviations need a functional reason, an explicit evidence role, and the same narrow-screen and reduced-motion behavior.
