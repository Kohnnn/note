# Encode the manifest experience contract

Type: task
Status: open
Blocked by: 05, 06, 07, 09

## Question

Implement the complete manifest-owned experience schema for all 83 Routes: shell family and variant, navigation mode and any chapter/native-control declaration, theme ownership, primary/runtime surface, interaction or explicit read-only probe, network policy, and `suggestedNextSlug`. Validate cross-Route targets and mode-specific requirements in `tools/sync-route-metadata.mjs`, preserve unchanged generation into `pages.json`, move the five `routeChapterConfigs` declarations out of `shared/engineering-sandbox.js`, and leave focused validation tests. Do not change Route HTML or UI in this slice.
