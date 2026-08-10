# Synchronize universal Route HTML seams

Type: task
Status: open
Blocked by: 11

## Question

Extend manifest synchronization so every top-level `<slug>/index.html` receives canonical body shell metadata, Engineering Sandbox assets, `<meta name="color-scheme" content="light dark">`, and synchronous `shared/theme-init.js` before Route styles without changing main/runtime placement or script order. Handle one-line documents, `<base>`, comments containing tag text, omitted closing tags, and existing partial shell markup deterministically. Never descend into child runtime documents. Add idempotence and special-structure tests, synchronize all 83 Routes, and update affected parity evidence.
