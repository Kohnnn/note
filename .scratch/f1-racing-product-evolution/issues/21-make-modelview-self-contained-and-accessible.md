# 21 — Make Modelview self-contained and accessible

Type: task
Status: claimed
Blocked by: none

**What to build:** Modelview loads its interactive car experience without third-party runtime requests and exposes every working control through correct keyboard and assistive-technology semantics, while preserving its current visual behavior and graceful model-load fallback.

- [ ] A production Modelview visit loads the selected local model under a same-origin-only network policy with no external decoder request, console error, or failed core request.
- [ ] Zoom, reset, comparison, inspection, quality, and wind-mode controls are reachable and operable by keyboard and are represented by valid button, pressed-state, or complete tab semantics.
- [ ] Reduced-motion mode stops autonomous or decorative movement without hiding required state or controls.
- [ ] Model loading, retry, unsupported-browser fallback, and narrow-screen behavior remain usable and accessible.
- [ ] Type checking, production build, static smoke, and a targeted browser acceptance check pass.
