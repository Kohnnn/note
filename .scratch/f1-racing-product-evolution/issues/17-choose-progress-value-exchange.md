# Choose the progress value exchange

Type: grilling
Status: resolved
Blocked by: 05, 07, 12, 15

## Question

What useful continuity should exist browser-locally before sign-in, and what added value would justify an optional account? Decide the canonical learning-trail model, saved evidence or investigations, resume behavior, cross-device sync, conflict handling, data minimization, export and deletion, recovery, retention, anonymous-to-account migration, and the threshold that must be met before authentication ships.

## Answer

Use a browser-local **learning trail**, not an account. Its user value is one deliberate same-browser continuation: resume the last approved Dashboard brief, Learn location, optional Modelview focus, and exact validated Replay evidence state. It does not promise recovery after browser-data clearing, private browsing, a device change, or a different browser.

### Disclosure and value exchange

Show this adjacent to the first local-progress control and the Dashboard Resume action:

> Progress and your most recent learning trail stay in this browser only. Nothing is sent to us. Clearing site data, using private browsing, or changing browser/device can remove it. Replay links keep their own shareable state.

No sign-in prompt, email capture, tracking ID, upload, network request, or hidden interaction history belongs in this pilot. “Resume” must be absent rather than disabled when no valid trail exists. An explicit **Clear local progress and trail** control describes that it removes local Learn states and the resume point from this browser only.

### Canonical local model

Store one bounded JSON document at `f1-racing.learning-trail.v1`. It contains only current, allowlisted product identifiers and relative URLs:

```json
{
  "schemaVersion": 1,
  "updatedAt": "2026-08-12T12:00:00.000Z",
  "trail": {
    "updatedAt": "2026-08-12T12:00:00.000Z",
    "briefId": "monza-braking",
    "learn": { "slug": "braking", "anchor": "check" },
    "modelviewHref": "/cars/current-spec?season=2025&constructor=mclaren&focus=brakes",
    "replayHref": "/replay/2025/italian/qualifying?t=74.2&tab=telemetry&drivers=NOR&focus=braking#analysis"
  },
  "modules": {
    "braking": {
      "readAt": "2026-08-12T11:48:00.000Z",
      "completedAt": "2026-08-12T11:59:00.000Z"
    }
  }
}
```

`briefId`, Learn slug/anchor, Modelview route/query, Replay route/query, and hashes are validated against the deployed allowlists before write and again before Resume. Replay remains URL-owned: `replayHref` is an opaque, validated relative pointer to the existing Replay URL contract, not duplicated or decomposed into local state. Its current `t`, `tab`, `drivers`, `focus`, and `#analysis` validation and URL synchronization stay authoritative. Modelview likewise resumes only its validated URL selection. Never store frames, telemetry, evidence-pack contents, free text, saved investigations, playback history, arbitrary URLs, or query parameters.

The six current module keys are the sole allowed `modules` keys: `car`, `aero`, `tyres`, `braking`, `setup`, and `strategy`. A future approved brief or anchor is added to the allowlist with its release; removed content is pruned and cannot be resumed.

### Read, Completed, and resume semantics

This preserves ticket 12 exactly:

- `Read` is written only after the learner explicitly acknowledges a module. It is not inferred from visiting, scrolling, elapsed time, Replay playback, Modelview use, or analytics.
- `Completed` is written only when that module’s deterministic accessible check is submitted successfully. A successful check also writes `readAt` when absent.
- Marking a module unread removes both timestamps. `Completed` therefore never survives without `Read`; neither label claims subject mastery.
- The trail records one current snapshot after a user deliberately opens an approved brief, follows an approved Learn/Replay/Modelview handoff, changes an approved Modelview focus, or chooses an explicit “Save as resume point” action. It replaces the prior snapshot; it is not an event log.
- Resume opens the stored brief or next valid surface, preserves the stored Learn anchor/state, and opens the exact validated Replay URL when present. If one target is gone or invalid, omit it and continue to the remaining public target. Resume never overwrites a newer URL already supplied by the active navigation; an explicit shared URL wins.

Same-origin tabs use the `storage` event. On receipt, validate the whole document and use the valid document with the later top-level `updatedAt`; equal timestamps retain the already-rendered value. Writes use a fresh timestamp and a read-validate-merge-write cycle: merge per module by later timestamp, and replace `trail` only when its `updatedAt` is later. This gives deterministic last-write-wins behavior without a history table or cross-device claim.

### Versioning, expiry, migration, and failures

- Schema version is the integer `schemaVersion`. Version `1` is the only writable version. Ignore an unknown future version without overwriting it; hide Resume and leave public content usable. A supported older version is migrated in memory, validated, written as v1, then the old key is removed only after the new write succeeds.
- Migrate the current `f1-racing.learn.progress.v1` boolean map once: allowlisted `true` becomes `{ "readAt": migrationTime }`; `false`, unknown keys, and any `completedAt` are absent. Write the v1 record before deleting the legacy key. The old boolean never means `Completed`.
- `trail` expires 90 days after `trail.updatedAt`; expiration removes only the trail, not module progress. Module progress has no automatic TTL: it remains until the learner clears it, storage is cleared, or an obsolete module is pruned. This is durable local acknowledgement, not a retention promise outside the browser.
- Enforce a small hard payload ceiling of 8 KiB before write. Reject oversize, malformed, non-object, invalid timestamp, unknown-key, non-relative, invalid-route, or expired values; remove only the invalid v1 record or invalid trail field when safe, then continue without Resume.
- `localStorage` access, JSON parse, quota, and private-mode failures are caught. The current page remains usable; its progress control reports that this browser cannot save progress for the session, Resume is unavailable after reload, and no retry/network fallback occurs.
- Export downloads the validated v1 JSON locally. It is available only when a valid document exists. Reset deletes `f1-racing.learning-trail.v1` and the legacy key, updates same-tab UI immediately, and other tabs through `storage`; it does not affect shared Replay URLs or server data because none exists.

### No-account boundary and later migration

No remote anonymous identity exists, so there is nothing to recover or migrate until a user opts into a future account. Browser-local data is the source while unsigned-in; export is the only manual transfer path. Do not create anonymous cloud records, account-backed Replay state, social login, or a custom backend.

Reconsider optional accounts only when all three are documented from testing: (1) learners explicitly need cross-device continuation or recovery, (2) retained work is materially valuable beyond this six-module map and one resume pointer, and (3) one shipping account-only capability, such as private named Replay collections, annotations, or a multi-session plan, cannot be served by local storage plus URLs. Sign-in then remains optional and is offered only with its concrete benefit, for example “Save progress across devices.”

The smallest later service is ticket 05’s optional passwordless Supabase identity and one owner-scoped RLS progress record. Migrate only after identity verification: validate and merge the local module timestamps with the remote record per module by latest timestamp; preserve the latest valid trail snapshot; write the merged remote record; then retain local state as offline cache. On stale write, refetch, merge, and retry once. Failed sync leaves local state intact and reports that it is not yet synced. Do not delete local data until a successful durable write.

Before that account release, define and test owner/non-owner/unauthenticated RLS, email rate and abuse controls, selected region and privacy notice, export, deletion of progress plus identity and local cache, backup/restore, auth/write monitoring, offline retry, two-device conflicts, sign-out, expired sessions, and support ownership. Account data retains only the active progress record and is deleted on request; no raw Replay activity or analytics history is retained. Authentication ships only after these operational controls and all three product-value conditions pass.
