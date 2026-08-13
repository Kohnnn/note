# Choose the staged service boundary

Type: grilling
Status: resolved
Blocked by: 02, 03, 04, 05, 13

## Question

Which capabilities remain static or browser-local, which justify a thin metadata/search service, and which require separately owned live or account services? Decide the sequence and hard boundaries for generated search indexes, metadata freshness, anonymous measurement, true live timing, identity, progress sync, large-pack delivery, failure fallbacks, observability, cost ceilings, and criteria for not deploying a service.

## Answer

Adopt a static-first pilot with no mandatory runtime service beyond the static host and direct immutable asset delivery. The public contract is one Pages shell with an embedded `assetReleaseId` and exactly one complete R2 prefix:

```text
Pages shell: build-stamped assetReleaseId
R2: releases/<assetReleaseId>/{data,models,posters,release-manifest.json}
```

The browser reads a compact, route-specific generated pack directly from that prefix. It may load a generated `data/manifests/seasons.json` search index and filter it locally. Learn completion remains `localStorage`; Replay state remains a validated URL. Pages HTML and `release-manifest.json` are `no-cache`; every object under the immutable R2 prefix is `public, max-age=31536000, immutable`. R2 uses its production custom domain, exact Pages-origin `GET` CORS, and a Cache Everything rule scoped only to `/releases/*`. No mutable `latest.json`, release alias, or runtime release-resolution endpoint is allowed.

### Delivery, promotion, and degradation

- The release operator owns the static release. Build, gate, hash-manifest, upload to a new R2 prefix, then read/list/hash-verify every object before deploying the Pages shell that embeds that prefix. Probe Pages plus a JSON pack, frame chunk, oversized GLBs, CORS, CSP, cache headers, repeat cache status, and console errors before promotion.
- Promote and roll back only through Pages deployments. Rollback promotes the prior verified shell; it never overwrites, deletes, or mutates an R2 prefix. Retain pending, current, and prior verified prefixes at minimum. Rights review is a promotion gate for every public pack, model, poster, and derivative.
- If a pack, model, or R2 origin fails, the affected route shows an explicit unavailable state with its release ID and a retry; it does not call the Worker, FastAPI backend, OpenF1, or another release as a fallback. Shell, Learn, and other already-loaded static routes remain usable. A failed release probe blocks promotion.
- This pilot has no self-operated availability SLA. The release operator owns release-gate failures and rollback; provider availability remains the provider contract. Do not advertise a delivery SLA absent a written provider commitment.

### Metadata and search Worker

The existing `workers/metadata-api` is optional and not part of the pilot release path. It may be activated only for `GET /api/health`, `GET /api/latest`, and `GET /api/search?q=` after the static local-index experience has a demonstrated product limitation: a tested generated search index exceeds 256 KiB gzip, cannot return the required bounded results without loading unrelated packs, or needs freshness between shell releases. Its only input is a small, generated, versioned metadata/search artifact; it returns bounded JSON metadata and never pack bytes. `GET /api/latest` may expose the shell-embedded release ID only, never select a different release.

The metadata service owner owns schema compatibility, input validation, rate limits, error logs, request/cost review, and a documented fallback. Its response is best-effort rather than a critical-path SLA: search failure falls back to the locally generated index or an unavailable-search message; it must not block direct route navigation. Freeze the cached metadata response to the referenced release ID and no longer than five minutes. Do not deploy the Worker while static search satisfies the pilot.

### True-live boundary

The current FastAPI backend is an optional historical replay helper, not a pilot dependency. Its `/api/live/status` and `/ws/live/...` output is `simulated-replay`; it must remain labeled as such and must never be promoted, proxied, or marketed as true live. Static packs remain the historical source of truth.

A true-live system is a separately owned backend, not an extension of the metadata Worker. It may enter planning only after all ticket 03 proof gates pass: written data and redistribution rights, authority chain, territories and terms, production credentials, price and limits, source SLA/latency/corrections, permitted retention and replay handoff, provenance/fallback wording, authorised-event technical acceptance, and legal/product sign-off. Before launch, its named live-service owner must define ingestion, durable source-of-record, idempotency/deduplication, reconnect/gap and correction handling, credentials rotation, rate limits, on-call escalation, measured latency, outage SLO, cost cap, and a degraded state that says `Live data unavailable` rather than falling back to stale or simulated frames. No rights proof means no live backend.

### Accounts and progress

No account, remote progress store, anonymous identity, or account Worker belongs in the pilot. The product owner owns browser-local progress behavior; users retain same-browser completion only, and Replay links remain public and portable.

Reconsider accounts only when all three conditions are documented: tested cross-device demand, materially valuable saved work that local storage and URLs cannot preserve, and one shipping account-only capability. Then the smallest service is optional Supabase passwordless auth plus one owner-scoped, RLS-protected progress record; no anonymous cloud users, social login, account-backed Replay state, or custom backend initially. The account-service owner must own privacy notice, selected region, email abuse controls, RLS tests, export, deletion, offline merge/retry behavior, auth/write monitoring, backup/restore, and support. No account SLA is promised until those controls and provider terms are approved.

### Measurement, observability, and cost controls

Use only the existing Netlify Web Analytics aggregate dashboard for the ticket 18 30-day pilot, if already available: aggregate route demand, referrers, 404s, bandwidth, and host-provided device categories. The product owner owns a monthly review; it is the only approved observability for product behavior. No browser beacon, custom events, RUM, error telemetry, cookie, persistent ID, local-progress upload, query-string capture, warehouse, or client-to-Worker analytics endpoint is allowed. After migration away from Netlify, no replacement analytics is implied; a new privacy decision is required.

The release operator reviews R2 storage and Class A/Class B operations monthly. Stop and require explicit owner approval before projected monthly use exceeds 80% of R2's documented 10 GB-month storage, 1 million Class A operations, or 10 million Class B operations free allowance, or before any paid service charge is forecast. The metadata Worker has the same stop rule for its confirmed plan limit and any paid invocation charge. Static caching, direct R2 delivery, and no proxy are mandatory cost controls. Account and live services have a cost ceiling of zero until their separate written approval records a provider quote, monthly cap, overage action, and owner.

### Forbidden proxies and service additions

- No Worker, FastAPI route, Pages Function, or third party may proxy R2 packs, replay chunks, GLBs, posters, full replays, or raw upstream telemetry.
- No browser fetches raw OpenF1 telemetry. No server forwards a consumer F1TV account, FastF1 recording, or unlicensed live feed to users.
- No metadata endpoint chooses a release, rewrites to a pack, hides R2 URLs, or becomes a generic `/api/*` mirror of static data.
- No service is deployed merely because scaffolding exists. Add the Worker only on the stated search/freshness trigger; add analytics only through a new ticket 18-compliant privacy decision; add accounts only on all three account triggers; add true live only on every ticket 03 proof gate.
