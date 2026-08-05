# Design Document: Keith Kitchen - Digital Garden

This document is for agentic coding agents working in `ProjectObsidian`.
Treat `keith-digital-garden/` as the live application. Treat `personal-portfolio/` as protected and off-limits unless explicitly requested.

For `interactive-explanation/`, use the scoped storytelling brief in
`interactive-explanation/ENGINEERING_SANDBOX.md` when applying the related editorial shell.

## Interactive Explanation Atlas

The main index at `interactive-explanation/index.html` is a management atlas for the shipped
replica inventory, not just a launch pad. When editing that surface, keep these rules in mind:

- Treat `interactive-explanation/pages.json` as the source of truth for the live route inventory
- Use `interactive-explanation/shared/site.js` and `interactive-explanation/shared/site.css` as the
  customization surface for the atlas
- Keep the top of the page focused on orientation: route counts, source-family coverage, docs
  coverage, and direct access to the route inventory
- Organize the collection by source family with clear color coding and a visible legend or family
  board; Bartosz, Ableton, Teoria, Nicky Case, and similar families should be scannable at a glance
- Provide practical management controls on the index: family filters, text search, and direct links
  to the replica, docs page, and upstream/reference source when available
- Preserve subpath-safe relative links everywhere on the public surface
- Keep the atlas visually editorial rather than dashboard-generic: warm paper layers, strong
  typography, compact metadata, and color used as navigation context instead of decoration
- Avoid returning to the old “single endless ribbon of route pills” pattern once the inventory grows

## 1. Build, Lint, Test, and Local Commands

Run app commands from `keith-digital-garden/`, not the repository root.

### Environment

- Node: `>=22` and pinned locally to `v22.16.0`
- npm: `>=10.9.2`
- `.npmrc` enforces `engine-strict=true`

### Install

- Local install: `npm install`
- CI-consistent install: `npm ci`
- If npm version mismatch blocks install: `npx -p npm@10.9.2 npm install`

### Build and Preview

- Full build: `npx quartz build`
- Local preview: `npx quartz build --serve`
- Docs content set: `npm run docs`
- Profiled build: `npm run profile`
- Quartz sync helper: `npx quartz sync`

### Typecheck, Lint, and Format

- Project check: `npm run check`
  - Runs `tsc --noEmit && npx prettier . --check`
- Format in place: `npm run format`

### Tests

- Full suite: `npm run test`
- Single test file: `npm run test -- quartz/util/path.test.ts`
- Single test by name within a file: `npm run test -- --test-name-pattern "simplifySlug" quartz/util/path.test.ts`
- Single test name across the suite: `npm run test -- --test-name-pattern "search encoder"`
- Direct script being used: `tsx --test`

### Verification Expectations

- After TypeScript, component, script, or plugin edits: run `npm run check` and the most relevant focused test file(s)
- After layout or styling changes: run `npx quartz build --serve` and verify the rendered page on desktop and mobile widths
- If preview fails with `EADDRINUSE`, port `8080` is already in use

## 2. Repository Boundaries and Safe Targets

### High-level scope

- Main application: `keith-digital-garden/`
- Root docs and planning files are editable when the task is documentation or planning
- Protected area: `personal-portfolio/`
- Generated output: `keith-digital-garden/public/`, `node_modules/`, `.quartz-cache/`

### Preferred customization surface

- Site behavior: `keith-digital-garden/quartz.config.ts`
- Layout composition: `keith-digital-garden/quartz.layout.ts`
- Site-wide styling overrides: `keith-digital-garden/quartz/styles/custom.scss`
- Components: `keith-digital-garden/quartz/components/`
- Browser scripts: `keith-digital-garden/quartz/components/scripts/`
- Component styles: `keith-digital-garden/quartz/components/styles/`

Avoid editing Quartz core unless the task explicitly requires it.

## 3. Code Style Guidelines

### Formatting

- Prettier is the formatting source of truth
- Active settings:
  - `printWidth: 100`
  - `tabWidth: 2`
  - `trailingComma: all`
  - `quoteProps: as-needed`
  - `semi: false`
- Follow existing file formatting instead of hand-formatting around Prettier

### TypeScript strictness

- `strict: true` is enabled and must remain enabled
- `noUnusedLocals: true` and `noUnusedParameters: true` are active
- Prefer explicit exported types for public utilities, options objects, and component contracts
- Avoid `any` unless there is no practical alternative and the reason is obvious from context

### Imports

- Group imports in practical order: built-ins, external packages, internal modules, then styles/scripts
- Prefer `import type { ... }` for type-only imports
- Keep imports extensionless for local TS and TSX modules unless the surrounding file already differs
- Match local relative import style instead of introducing aliases

### Component and Quartz patterns

- Use `QuartzComponentProps` for component prop typing
- Use `QuartzComponent` and `QuartzComponentConstructor` patterns for Quartz components
- Export component factories with `satisfies QuartzComponentConstructor`
- Keep singleton layout components unique; do not duplicate `Explorer`, `Graph`, or other DOM-ID-based surfaces
- Keep component order stable in `quartz.layout.ts`

### Functions and control flow

- Prefer `const` plus arrow functions for most helpers and components
- Use `function` declarations when hoisting or readability genuinely helps
- Prefer guard clauses and early returns over nested conditionals
- Keep logic narrow and composable rather than introducing broad refactors

### Naming conventions

- Components and component filenames: `PascalCase`
- Types and interfaces: `PascalCase`
- Variables and functions: `camelCase`
- Long-lived constants: `SCREAMING_SNAKE_CASE` when idiomatic
- Inline browser scripts: `*.inline.ts`
- Component stylesheets: `*.scss`, usually component-scoped and kebab-case in selectors
- Tests: `*.test.ts`

### Error handling and defensive UI code

- Validate queried DOM nodes before use in browser scripts
- Handle missing optional data gracefully; return `null` instead of crashing a component when the surface is absent
- Register cleanup for listeners, observers, timers, and animation hooks via existing `window.addCleanup(...)` patterns
- Prefer deterministic fallbacks over throwing in user-facing UI code

### Testing conventions

- Test runner: Node's `node:test` API through `tsx --test`
- Prefer deterministic unit-style coverage over networked or flaky tests
- Keep tests close to the implementation they cover
- Test names should describe behavior, not implementation trivia
- When fixing a bug, add or update a focused regression test when practical

## 4. Markdown and Content Conventions

- Use Obsidian wikilinks: `[[Note Name]]`
- Use callouts: `> [!note]`, `> [!info]`, and similar Quartz/Obsidian-compatible syntax
- Use H1 for page title and H2+ for document structure
- Frontmatter should stay consistent, typically `title`, `tags`, and optional fields such as `draft`, `aliases`, `description`, `cssclasses`, `permalink`, `note_id`
- AI-generated draft content belongs in `keith-digital-garden/content/AI_Sandbox/` until manually reviewed
- Preserve author voice; do not rewrite notes into generic AI prose

## 5. Creative North Star: The Curated Atheneum

Keith Kitchen should feel like a curated atheneum: part editorial journal, part private library, part research kitchen. It rejects frantic SaaS chrome and generic dashboard composition in favor of quiet confidence, asymmetry, and warm spatial rhythm.

- Vibe: reflective, practical, ambient, warm, and intellectually composed
- Concept: thoughts as ingredients, notes as recipes, publishing as service
- Core principle: whitespace is structure; typography and tonal contrast do more work than lines
- Layout principle: asymmetry is allowed when it improves narrative balance
- Interaction principle: motion stays light and meaningful; content remains the hero

This system should feel grown and intentional rather than manufactured. Sections should read like layered sheets of paper on a desk, not boxed widgets on a grid.

## 6. Design System Tokens and Visual Rules

### Atmospheric palette

Use the live tokens from `keith-digital-garden/quartz.config.ts` as canonical. The design language maps to them as follows:

- Base surface / Bone: `#eae0cf`
- Secondary surface / Warm neutral: `#d7cdbe`
- Lifted light surface: use `#eae0cf` mixed toward white in component backgrounds
- Primary ink: `#0f141e`
- Deep accent / Prussian Blue: `#0f3f6c`
- Muted supporting tone / Cool Steel: `#6f8fa3`
- Dark mode base: `#0f141e`
- Dark mode text: `#f3ebdd`

### Surface hierarchy and tonal layering

Treat the UI as stacked fine-paper sheets rather than boxed panels.

- Base layer: site background and broad reading canvas
- Secondary containers: slightly shifted warm surfaces for grouping
- Floating or interactive surfaces: lighter, more lifted surfaces with subtle opacity or tonal separation
- Prefer boundaries created by background shifts, spacing, and tonal layering over obvious divider lines
- Component-level borders are allowed when needed for density, clarity, or accessibility, but they should stay low-contrast and warm

### The no-line rule, scoped

- Do not use `1px` borders as the default tool for large-scale page sectioning
- Separate major zones with whitespace, background shifts, or tonal panels first
- Borders may still be used on chips, cards, callouts, dense metadata surfaces, and controls when the current system already relies on them
- If a border is necessary, keep it soft, blended, and low-opacity rather than crisp and mechanical

### Glass and gradient rule

- Glassmorphism is reserved for floating navigation, context surfaces, overlays, or specialty interactive controls
- Use warm surface colors at reduced opacity with moderate backdrop blur when glass is appropriate
- Primary CTA treatments can use a `135deg` gradient anchored in `#0f3f6c` and adjacent live accent tones
- Do not spread glass effects across the entire site; most content surfaces should still feel like paper, not acrylic

### Typography: the editorial voice

- Header font: `Be Vietnam Pro`
- Body font: `Be Vietnam Pro`
- Code and metadata font: `IBM Plex Mono`
- Display and headline styles should feel oversized, editorial, and slightly asymmetrical when the composition benefits
- Headings use tight tracking, strong weight, and balanced wrapping
- Body copy remains comfortable and literary, usually around `1.6-1.65` line height
- Metadata, tags, timestamps, and technical labels should often use the mono face to create an annotated journal feel

### Depth, radius, and motion

- Prefer tonal layering over heavy shadow-first depth
- Ambient shadows are acceptable for floating surfaces, but keep them diffuse and quiet
- Standard radii should remain soft, generally `8px` to `24px`
- Large editorial or hero containers can go larger; avoid harsh `0px` corners unless matching a very deliberate local pattern
- Motion should be calm and purposeful: hover lift, subtle reveal, restrained transitions, no noisy perpetual effects

### Signature components

- Primary buttons: pill-shaped or near-pill, gradient-backed, with stronger hover intensity rather than harsh outlines
- Editorial cards: no hard mandatory borders; prioritize lifted surface contrast, generous padding, and whitespace between card sections
- Navigation chips: compact, typographic, and often mono-led; selection states should feel inked-in rather than neon-highlighted
- Inputs and fields: prefer quiet containers with a focused accent treatment instead of thick boxed outlines
- Interactive Seed: any floating specialty action should feel like a polished research artifact, using glass only when it improves hierarchy

### Do and don't

- Do embrace asymmetry when it improves composition
- Do use whitespace as a structural device
- Do use mono typography for technical detail and metadata
- Do use surface tokens to create zones instead of defaulting to divider lines
- Do keep everything grounded in paper, ink, and deep water tones
- Do not use pure black, sterile gray-only palettes, purple branding, neon accents, or generic SaaS card grids
- Do not use standard divider bars as the main way to organize content
- Do not flatten the experience into plain white blocks unless matching an existing local surface

## 7. Culinary Taxonomy and Product Lingo

Use these names to preserve the site's metaphor, but keep the real technical names in code and navigation.

- The Kitchen: the home page and primary note dashboard
- Pantry: the archive and explorer-driven note inventory
- Prep Station: the focused reading and writing surface for a single note
- Ingredients: tags, metadata, and linked concepts
- Ingredients Ledger: graph, backlinks, related notes, and tag-driven context surfaces
- Service Counter: the published note experience and stacked note navigation surface
- The Bar: the portfolio and case-study area
- Kitchenette: branch hubs for themed note collections such as tech journal, thoughtpieces, and market tape
- Arena: curated external-link and research map surface

## 8. Screen Architecture

### The Kitchen (`content/index.md`, `kitchen-home`)

- Entry surface for the digital garden
- Should feel like a pass board: orienting, editorial, high-signal, and spatially calm
- Uses warm gradients, strong typographic anchors, and layered cards instead of generic hero blocks
- Large empty space is acceptable when it improves pacing and hierarchy

### Prep Station (default content pages)

- Main reading surface for a single note
- Header stack usually contains breadcrumbs, title, metadata, and tags unless hidden for portfolio surfaces
- The article body must remain readable first; supporting widgets stay secondary
- Reading pages should feel like editorial sheets on a warm desk, not application dashboards

### Pantry (Explorer + list surfaces)

- Archive and navigation system powered by `Explorer`, list pages, and folder/tag pages
- Left sidebar should stay practical and compact: title, search, quick controls, explorer tree
- Functional density is welcome here, but visual noise is not

### Ingredients Ledger (right rail context)

- Right sidebar context stack includes graph/map toggle, table of contents, and backlinks on note pages
- Related notes, backlinks grid, and arena enhancements live in after-body or contextual supporting surfaces
- This rail should explain relationships, not overwhelm the article
- Use tonal distinction and typographic labeling to keep context readable without looking boxed-in

### Service Counter (public publishing surface)

- Published notes should feel plated and intentional
- `StackedNotes` and `StackedNotesContainer` create persistent public navigation context
- Reading mode and navigation controls should support focus, not compete with prose
- If a surface floats, it should feel curated and lightweight rather than app-like

### The Bar (`content/Portfolio/`, `portfolio-page`, `portfolio-hub`, `casefile-page`)

- Portfolio pages are a separate but related experience: more presentational, still text-led
- Use stronger card choreography, route boards, proof strips, and casefile layouts
- Portfolio surfaces may hide the standard note chrome to preserve intentional storytelling
- This is the best place to lean into asymmetry, oversized editorial headers, and stronger presentation rhythm

### Kitchenette (branch hubs)

- Branch pages such as market reports, thoughtpieces, tech journal, and similar themed hubs use the same system with tuned accents
- Each branch can have a local accent flavor, but must still read as part of the same kitchen brand
- Accent shifts should come from tonal variation, not from introducing unrelated color families

### Arena (`content/Notes/Arena.md`, `arena-hub`)

- A curated research and link surface
- Supports filtering, scanning, and broad discovery
- Keep dense information organized with cards, index lists, and strong metadata labels
- When density increases, use tonal grouping and spacing before reaching for hard separators

## 9. Conflict Resolution for Future Agents

- When a visual ideal in this document conflicts with the live codebase, prefer the live repo tokens, existing Quartz architecture, and proven component patterns
- Treat `quartz.config.ts` as the source of truth for colors and typography tokens
- Treat `quartz.layout.ts` as the source of truth for composition and singleton placement
- Treat `quartz/styles/custom.scss` and local component styles as the source of truth for what is already visually established
- Use this document to guide direction and consistency, not to justify broad visual rewrites without an explicit task

## 10. AI Agent Workflow Rules

- Keep edits minimal, local, and reversible
- Prefer configuration, layout, and custom styles over deep Quartz core edits
- Do not hand-edit generated output in `public/`
- Do not touch `personal-portfolio/` without explicit instruction
- For docs/content generation, keep drafts in `content/AI_Sandbox/` until manual review
- After code changes, report what changed, what you verified, and any follow-up risk

## 11. Practical Defaults for Future Agents

- If the task is site behavior, start in `keith-digital-garden/quartz.config.ts`
- If the task is composition or sidebars, start in `keith-digital-garden/quartz.layout.ts`
- If the task is visual polish, start in `keith-digital-garden/quartz/styles/custom.scss`
- If the task is a reusable UI surface, work in `keith-digital-garden/quartz/components/`
- If the task is client-side interaction, work in `keith-digital-garden/quartz/components/scripts/`
- If the task changes TypeScript or UI behavior, run `npm run check` and the most relevant focused tests
- If the task changes layout or styling, run `npx quartz build --serve` and visually verify the affected surface

## 12. Delivered Product Shape

When an agent finishes work in this repository, the ideal delivery is:

- minimal diff
- no edits in protected or generated directories
- consistent with Quartz component and styling patterns
- tested with the smallest meaningful command set
- visually aligned with the Keith Kitchen system rather than generic defaults
