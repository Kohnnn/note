# AGENTS.md

> Commands here run from this parent `interactive-note/` directory. The canonical command
> reference lives in `interactive-explanation/AGENTS.md` (run from inside that directory with `.`).
> The `interactive-explanation/` repo also defines npm scripts (`npm test`, `npm run audit`,
> `npm run smoke`) once dependencies are installed with `npm ci` in that directory.

## Quick Reference
- **Serve locally**: `python -m http.server 4173 --directory interactive-explanation`
- **Policy audit**: `node interactive-explanation/tools/check-public-surface.mjs interactive-explanation`
- **Full smoke test**: `node interactive-explanation/tools/smoke-bundle.mjs interactive-explanation`
- **Single route probe**: Use Playwright one-liner (see Single-test section)
- **JS syntax check**: `node --check <file>`

---

## Scope and Intent
- This file is for coding agents operating in `interactive-note`.
- Primary product surface is `interactive-explanation/` (static site with many route folders).
- `_vendor_archive/` and `.codex-temp/` are upstream/reference snapshots; treat them as read-only unless a task explicitly targets them.
- No Cursor or Copilot instruction files were found in this repo.

## Repository Layout (What Matters)
- `interactive-explanation/index.html` - landing page
- `interactive-explanation/pages.json` - route manifest used by shared UI
- `interactive-explanation/routes.manifest.json` - smoke test route metadata
- `interactive-explanation/shared/site.js` - renders route cards and docs parity cards
- `interactive-explanation/shared/site.css` and `shared/public-footer.css` - shared styling
- `interactive-explanation/docs/<slug>/` - parity/provenance docs for each live route
- `interactive-explanation/tools/check-public-surface.mjs` - policy/content audit
- `interactive-explanation/tools/smoke-bundle.mjs` - end-to-end smoke test harness

## Environment and Prerequisites
- Runtime: Node.js (ESM scripts in `tools/*.mjs`)
- Browser automation: Playwright (`chromium` import in smoke script)
- Python: useful for local static serving (`python -m http.server`)

---

## Build / Lint / Test Commands

### Serve locally
```bash
python -m http.server 4173 --directory interactive-explanation
```

### Policy audit
```bash
node interactive-explanation/tools/check-public-surface.mjs interactive-explanation
node interactive-explanation/tools/check-public-surface.mjs  # default root now resolves to the script's repo
```

### JS syntax check
```bash
node --check interactive-explanation/shared/site.js
node --check interactive-explanation/tools/check-public-surface.mjs
```

### Full smoke suite
```bash
node interactive-explanation/tools/smoke-bundle.mjs interactive-explanation
node interactive-explanation/tools/smoke-bundle.mjs  # default root now resolves to the script's repo
SMOKE_PORT=4174 node interactive-explanation/tools/smoke-bundle.mjs interactive-explanation  # custom port
```

### Smoke suite route filters
```bash
node interactive-explanation/tools/smoke-bundle.mjs interactive-explanation --route trust              # single route
node interactive-explanation/tools/smoke-bundle.mjs interactive-explanation --route trust --route anxiety  # multiple routes
node interactive-explanation/tools/smoke-bundle.mjs interactive-explanation --group ncase              # by family
node interactive-explanation/tools/smoke-bundle.mjs interactive-explanation --group all                # all groups
```

### Single-test / targeted test
There is no built-in `--grep` or `--test-name` selector. Use a minimal Playwright probe:

**Start server first** (in separate terminal):
```bash
python -m http.server 4173 --directory interactive-explanation
```

**Run probe**:
```bash
node --input-type=module -e "
import { chromium } from 'playwright';
const browser = await chromium.launch({headless:true});
const page = await browser.newPage();
await page.goto('http://127.0.0.1:4173/interactive-explanation/trust/', {waitUntil:'domcontentloaded'});
await page.waitForSelector('#reference-footer', {timeout:15000});
await browser.close();
"
```

**Recommended workflow**:
1. Start static server: `python -m http.server 4173 --directory interactive-explanation`
2. Run one-route Playwright probe (as above)
3. Run full smoke suite before finalizing larger changes

---

## Expected Agent Workflow
1. Read `interactive-explanation/pages.json` and target route files first
2. Keep route paths relative (for subpath hosting under `/interactive-explanation/`)
3. After edits, run `check-public-surface.mjs`
4. For non-trivial changes, run full `smoke-bundle.mjs`
5. Update `docs/<slug>/` parity notes when behavior changes

---

## Code Style Guidelines

### Language and module style
- JavaScript is plain JS (no TypeScript in this repo)
- Use ESM imports in `.mjs` tooling scripts
- Use double quotes for strings
- End statements with semicolons
- Prefer `const`; use `let` only when reassignment is required
- Prefer small, named functions over deeply nested inline logic

### Imports (tooling scripts)
- Order: Node built-ins first, then third-party modules
- One import per line; avoid unused imports
- Example from smoke-bundle.mjs:
```js
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { chromium } from "playwright";
```

### Formatting
- 2-space indentation
- Keep trailing commas in multiline arrays/objects/function args where already used
- Split long conditionals/objects across multiple lines
- Match existing file style before introducing new patterns

### Naming conventions
- `camelCase` for variables/functions
- `PascalCase` for constructor-like entities/classes (rare)
- `UPPER_SNAKE_CASE` only for true constants with global/static meaning
- Route directories and slugs: `kebab-case` (e.g., `train-test-validation`)

### Types and contracts
- No compile-time typing system configured
- Use runtime guards/assertions for critical assumptions in tooling scripts
- Validate external data shape when reading JSON (`pages.json`, parity JSON)
- Prefer explicit checks and clear failure messages over silent coercion

### Error handling
- Tool scripts: fail fast with thrown errors/assertions and non-zero exit status
- UI scripts: degrade gracefully (show fallback UI in catch blocks)
- Do not swallow errors silently unless there is an intentional UX fallback

### DOM and browser code
- Guard all DOM lookups (`querySelector`) before dereferencing
- Keep side effects inside lifecycle hooks (`DOMContentLoaded`) or clear init functions
- Prefer deterministic selectors (`data-*`, stable IDs) in tests

### Paths, URLs, and assets
- Use relative asset paths (`./`, `../`) instead of root-absolute paths
- Preserve local asset localization rules enforced by `check-public-surface.mjs`
- Avoid introducing upstream branding/reference leakage in public pages

### CSS and HTML conventions
- Reuse shared tokens and patterns from `shared/site.css` where possible
- Maintain semantic HTML structure and clear heading hierarchy
- Preserve responsive behavior; check narrow viewport layout regressions

### Testing expectations
- Small content edits: run policy audit at minimum
- Behavior or script edits: run full smoke suite
- If only one route is touched during iteration, do targeted probe first, then full smoke before completion

---

## Files Agents Should Usually Avoid Editing
- Minified vendor libraries (`*.min.js`, bundled third-party assets)
- `_vendor_archive/**` and `.codex-temp/**` unless task explicitly requests upstream sync work
- Generated or snapshot artifacts in `tmp_*` files unless task explicitly targets them

---

## When Adding or Changing Routes
1. Add/update route metadata in `interactive-explanation/pages.json`
2. Ensure route has a docs parity page under `interactive-explanation/docs/<slug>/`
3. Verify route appears on home page and docs entry resolves
4. Run policy audit and smoke tests before finalizing

---

## Agent skills

### Issue tracker

Issues live as markdown files under `.scratch/<feature-slug>/` in this repo; there is no remote tracker. See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical triage roles, each string equal to its name, written to an issue file's `Status:` line. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` plus `docs/adr/` at the repo root. See `docs/agents/domain.md`.
