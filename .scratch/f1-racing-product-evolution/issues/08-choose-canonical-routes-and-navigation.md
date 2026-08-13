# Choose canonical routes and navigation

Type: grilling
Status: resolved
Blocked by: 07

## Question

What is the canonical cross-surface journey and route ownership once the Unified Dashboard is flagship? Decide whether `/` becomes or leads to `/dashboard`, how Dashboard, Replay, Learn, Modelview, and Historical Race Desk appear in navigation, whether Compare and Stints remain discovery or compatibility routes, and how legacy URLs preserve intent without competing with Replay Workspace.

## Answer

`/` is the Unified Dashboard and the only canonical Dashboard URL. Do not add `/dashboard` or split ownership between two entry routes. The dominant journey is Dashboard question → exact Replay evidence → matching Learn explanation or Modelview focus → explicit evidence ceiling and next step.

Primary navigation is Dashboard, Replay, Learn, and Modelview. Historical Race Desk follows as a clearly labeled historical simulation rather than a live product. Compare and Stints are Replay-owned analysis capabilities: keep their existing index and detail URLs for discovery, deep links, and bookmarks, but present them below Replay rather than as peer product pillars.

`/replay` remains the session library and `/replay/{season}/{grandPrix}/{session}` remains the canonical evidence workspace. Existing Replay query state remains valid. `/sessions` and session-detail URLs remain compatibility redirects to their Replay equivalents and must not appear in canonical navigation or the sitemap. `/live` remains a permanent compatibility redirect to `/race-desk`. Existing Compare and Stints URLs remain stable; links from the Dashboard should open the matching Replay Workspace state when that is the clearer continuation, without breaking standalone bookmarked analysis routes.
