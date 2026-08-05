# Interactive Note

A curated collection of interactive explanations and explorable explanations, organized as route-based replicas with parity documentation.

## Project Structure

```
interactive-note/
├── interactive-explanation/     # Main static site (the product)
│   ├── index.html               # Landing page / route atlas
│   ├── pages.json               # Route manifest
│   ├── routes.manifest.json     # Smoke test metadata
│   ├── docs/<slug>/             # Parity docs per route
│   ├── shared/                  # Shared JS/CSS (site.js, site.css)
│   ├── tools/                   # Dev tooling
│   │   ├── check-public-surface.mjs  # Policy audit
│   │   └── smoke-bundle.mjs          # E2E smoke tests
│   └── <route-slug>/            # Individual route folders
├── f1-racing/                   # Separate sub-project
├── _vendor_archive/             # Upstream reference snapshots (read-only)
└── .codex-temp/                 # Temporary working snapshots (read-only)
```

## Quick Commands

### Serve locally
```bash
python -m http.server 4173 --directory interactive-explanation
```

### Policy audit
```bash
node interactive-explanation/tools/check-public-surface.mjs
```

### Full smoke test
```bash
node interactive-explanation/tools/smoke-bundle.mjs
```

### Single route smoke
```bash
node interactive-explanation/tools/smoke-bundle.mjs --route=trust
```

### Filter by route family
```bash
node interactive-explanation/tools/smoke-bundle.mjs --group=ncase
```

### JS syntax check
```bash
node --check interactive-explanation/shared/site.js
```

---

## Development Workflow

### 1. Before making changes
- Read `interactive-explanation/pages.json` to understand route manifest
- Identify target route folder(s)
- Check existing parity docs in `interactive-explanation/docs/<slug>/`

### 2. Making route changes
- Keep paths relative (for subpath hosting under `/interactive-explanation/`)
- Use `data-*` or stable IDs for test selectors
- Avoid upstream branding in public pages

### 3. After changes
- Run `check-public-surface.mjs` for policy compliance
- Run smoke tests before submitting PR

### 4. Adding a new route
1. Add entry to `pages.json`
2. Create parity docs at `docs/<slug>/`
3. Run full smoke suite
4. Verify route appears on home page

---

## Pull Request Guidelines

### Small changes (content, styling)
- Run policy audit at minimum
- Target smoke test on affected route(s) only

### Medium changes (behavior, shared scripts)
- Run full smoke suite
- Verify home page and docs links still resolve

### Large changes (new routes, manifest edits)
- Run full smoke suite
- Verify all route families
- Check policy audit passes

### Before merging
- [ ] `check-public-surface.mjs` passes
- [ ] `smoke-bundle.mjs` passes
- [ ] No new files in `_vendor_archive/` or `.codex-temp/`
- [ ] `pages.json` manifest is valid JSON

---

## What to Avoid

- **Don't** edit minified vendor libraries (`*.min.js`)
- **Don't** modify `_vendor_archive/` or `.codex-temp/` unless explicitly tasked
- **Don't** hardcode root-absolute paths; use relative paths
- **Don't** introduce upstream branding (creator names, upstream URLs) into public pages

---

## File Responsibilities

| File | Purpose |
|------|---------|
| `pages.json` | Route manifest (source of truth) |
| `routes.manifest.json` | Smoke test route metadata |
| `shared/site.js` | Home page rendering, route cards |
| `shared/site.css` | Shared styling |
| `docs/<slug>/` | Parity/provenance docs per route |
| `tools/check-public-surface.mjs` | Policy audit (upstream branding, external refs) |
| `tools/smoke-bundle.mjs` | E2E smoke test (routes, interactions, responsive) |

---

## Code Style

- Plain JavaScript (no TypeScript)
- ESM imports in `.mjs` tooling scripts
- Double quotes, semicolons, 2-space indentation
- `const` by default; `let` only when reassigning
- Node built-ins before third-party imports
- Fail-fast in tooling scripts; graceful degradation in UI scripts

See `AGENTS.md` for full code style guidelines.
