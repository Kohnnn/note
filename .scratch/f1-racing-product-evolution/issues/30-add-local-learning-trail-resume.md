# 30 — Add local learning-trail resume

Type: task
Status: resolved
Blocked by: 17, 26

**What to build:** A learner can leave and later resume the last approved subsystem brief, Learn position, Modelview focus, and validated Replay evidence state on the same browser without an account, remote profile, or hidden activity history.

- [x] Only the allowlisted state approved by the progress contract is stored locally, versioned, bounded, and inspectable; raw telemetry, free text, analytics identity, and full interaction history are excluded.
- [x] The Dashboard shows an accessible Resume action only when a valid trail exists and explains that progress remains in this browser.
- [x] Resume restores the approved brief, lesson position or completion, Modelview focus, and validated Replay URL state without corrupting newer route state.
- [x] Malformed, expired, unknown-version, removed-content, private-mode, quota, and cleared-storage cases fail safely and never block public content.
- [x] Cross-tab updates and an explicit clear/reset action behave deterministically.
- [x] No network request, account prompt, or authentication dependency is introduced; focused storage and browser journey checks pass.

## Answer

Implemented in `f1-racing` commit `33bc9c978a574a1aa03a1da3d7261b623cb43113`. One 8 KiB versioned document stores only allowlisted brief, Learn, Modelview, Replay, and explicit Read/Completed state. Dashboard handoffs create the trail deliberately; successful module checks preserve `#check`; deliberate Modelview changes update validated focus; Replay uses an explicit Save as resume point control for exact validated URL state. Invalid or removed trail targets are pruned without deleting valid module progress; future versions remain untouched; blocked/private/quota/corrupt/expired/cleared cases keep public content usable. One accessible Resume action appears only for valid state, with specific target links, export, clear, disclosure, and deterministic same-tab/cross-tab updates.

Verified with `npm run test:learning-trail`, TypeScript checks, `npm run test:dashboard:browser`, the full Node.js 22 quality/build/static/browser matrix, and zero external/client-measurement network assertions. Final standards/spec review reported no actionable findings.
