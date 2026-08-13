# 21 — Make Modelview self-contained and accessible

Type: task
Status: resolved
Blocked by: none

**What to build:** Modelview loads its interactive car experience without third-party runtime requests and exposes every working control through correct keyboard and assistive-technology semantics, while preserving its current visual behavior and graceful model-load fallback.

- [x] A production Modelview visit loads the selected local model under a same-origin-only network policy with no external decoder request, console error, or failed core request.
- [x] Zoom, reset, comparison, inspection, quality, and wind-mode controls are reachable and operable by keyboard and are represented by valid button, pressed-state, or complete tab semantics.
- [x] Reduced-motion mode stops autonomous or decorative movement without hiding required state or controls.
- [x] Model loading, retry, unsupported-browser fallback, and narrow-screen behavior remain usable and accessible.
- [x] Type checking, production build, static smoke, and a targeted browser acceptance check pass.

## Answer

Implemented in `f1-racing` commits `1b5c00a` and `a2432de`. Modelview now ships its Draco runtime locally, derives the decoder URL from the same-origin Next asset prefix, removes the external decoder CSP allowance, exposes accurate pressed-state and keyboard controls, restores the Studio camera on reset, and stops decorative hotspot and wheel motion under reduced motion.

The production-artifact browser probe verifies an actual local Draco decode, same-origin-only core requests, clean console and page diagnostics, keyboard control state, model failure and retry, unsupported-browser fallback, reduced motion, and narrow-screen overflow. Verified with `npm run quality`, `npm run build`, `npm run smoke:static`, and `npm run test:modelview:browser`; the final independent review reported no findings.
