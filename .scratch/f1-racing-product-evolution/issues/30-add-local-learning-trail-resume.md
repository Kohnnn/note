# 30 — Add local learning-trail resume

Type: task
Status: open
Blocked by: 17, 26

**What to build:** A learner can leave and later resume the last approved subsystem brief, Learn position, Modelview focus, and validated Replay evidence state on the same browser without an account, remote profile, or hidden activity history.

- [ ] Only the allowlisted state approved by the progress contract is stored locally, versioned, bounded, and inspectable; raw telemetry, free text, analytics identity, and full interaction history are excluded.
- [ ] The Dashboard shows an accessible Resume action only when a valid trail exists and explains that progress remains in this browser.
- [ ] Resume restores the approved brief, lesson position or completion, Modelview focus, and validated Replay URL state without corrupting newer route state.
- [ ] Malformed, expired, unknown-version, removed-content, private-mode, quota, and cleared-storage cases fail safely and never block public content.
- [ ] Cross-tab updates and an explicit clear/reset action behave deterministically.
- [ ] No network request, account prompt, or authentication dependency is introduced; focused storage and browser journey checks pass.
