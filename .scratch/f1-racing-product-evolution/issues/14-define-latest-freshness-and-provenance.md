# Define latest, freshness, provenance, and rollback semantics

Type: grilling
Status: resolved
Blocked by: 13

## Question

What exactly may become the featured `latest` session, when may future or partial sessions appear, how late may a completed race pack publish, and what metadata proves freshness and provenance? Lock completeness gates, source and retrieval timestamps, generated and published timestamps, data coverage, release identity, deterministic tie-breaking, stale-data behavior, promotion, and rollback semantics.

## Answer

`latest` means **the most recent completed Race pack that this release verified and published**, never the most recent scheduled event, source response, or browser-clock event. It is a static editorial selection, not a live-timing claim.

### Static-first publication states

A canonical session may be in exactly one of these publication states:

| State | Public behaviour | `latest` eligible |
| --- | --- | --- |
| `future` | Not emitted in `seasons.json`, `latest.json`, or Replay routes. A separately authored schedule may name it only as scheduled and without timing/position/strategy content. | No |
| `partial` | Not emitted publicly. Retain it only in private pipeline work until it passes the complete-pack gate. | No |
| `historical` | Listed and routable only after the complete-pack gate and release promotion; it is available history, not fresh by implication. | Yes, subject to the featured-latency gate |
| `featured` | The one selected `latest` pack in the current release. UI calls it “Latest available completed race” and shows its event and publication timestamps. | Yes |
| `stale` | A formerly featured pack whose current release is beyond the freshness window, or whose release metadata is incomplete. It remains historical if its artifact is valid, but is not featured. | No |
| `unknown` | Missing, invalid, contradictory, or unverifiable timestamp, source, coverage, or release data. It is not publicly indexed or linked. | No |

Do not publish a partial or future session merely because `manifest.json`, `summary.json`, or one replay frame exists. The current `refresh-seasons-index.mjs` first-frame/full-replay check is an availability precondition only; it is not sufficient evidence of completed-session coverage or freshness. The current `seasons.json.generatedAt`, derived from the newest session `startDate`, is event chronology, not generation time, and must not be displayed as either generation or freshness time.

### Complete-pack and featured eligibility

A session becomes `historical` only when all conditions below are true:

1. It is a non-demo canonical OpenF1 session whose `sessionSlug` is exactly `race` for `latest` selection. Other completed session types may be historical library entries but cannot become `latest`.
2. The source record contains a parseable UTC `sourceEventStartAt` and `sourceEventEndAt`; `sourceEventEndAt >= sourceEventStartAt`; and a terminal-completion observation explicitly records the source outcome. No end time may be inferred from the last frame, last lap, build time, or scheduled duration.
3. Every required pack member is present, schema-valid, bound to the same `season`, `sessionKey`, and `trackId`, digest-verified, and listed in the coverage ledger: session result, drivers, laps, stints, weather, race control, replay metadata plus every declared frame chunk (or the declared full replay fallback), summary, and manifest. Required source coverage must be `complete`; a source that is genuinely unavailable is `unavailable` with a reason and makes the pack ineligible until the product contract explicitly makes that field optional.
4. The replay contains at least one valid frame and has no missing declared chunk interval. Its coverage ledger records observed start/end timestamps, frame count, expected and observed driver/result coverage, and known limitations. A non-empty frame array alone does not pass this gate.
5. Every upstream input has approved source identity, retrieval timestamp, source-response digest, rights/provenance reference, and no unresolved provenance status. Generated or derived fields identify their inputs and derivation version.
6. The pack, generated manifests, and release artifact pass the release gates; the promoted release record names this pack and is complete.

Among eligible Race packs, select descending by `sourceEventEndAt`, then descending integer `sessionKey`, then ascending canonical `path`. This replaces `startDate` as the primary ordering key. The selection must not depend on filesystem enumeration order, wall-clock time, build order, or source request order. If no pack meets every condition, emit no `latest` value and render the explicit unavailable state; never select a future or partial fallback.

### Freshness, latency, and UI language

Historical availability and freshness are separate facts. A complete immutable pack remains usable history indefinitely, but it is fresh only within the stated publication window.

- The featured-latency gate is `publishedAt - sourceEventEndAt <= 168 hours` (seven 24-hour periods). It is a release gate, not an estimate or an SLA for upstream data.
- A complete pack first promoted after 168 hours is historical-only. It may be added to the library with “Published after the latest window” but must not become `latest` in that or a later release without an explicit policy revision.
- A currently featured pack becomes `stale` once the viewer's clock is more than 168 hours after `sourceEventEndAt`, or immediately if its required freshness/provenance fields cannot be verified. The page retains the last valid data but removes the featured/latest treatment.
- `publishedAt` is the actual successful production-promotion completion time, not a build start, upload start, manifest timestamp, deployment request time, or CDN observation time. It is the sole anchor for “published”.
- The UI must show: “Latest available completed race”, event completed timestamp, retrieved range, generated timestamp, published timestamp, source name, coverage/limitations link, and release ID. Stale UI says “No current featured race pack. This historical replay was published at <publishedAt>.” Unknown UI says “Replay availability is unverified; no session data is shown.”
- The UI must never say “live”, “current timing”, “up to date”, “real time”, or imply an expected refresh cadence. It must not calculate or display a false age from `generatedAt` when `sourceEventEndAt` or `publishedAt` is absent.

A production build may preserve an already-valid historical library while emitting no featured card. It must not silently retain an older `latest` pointer as if it described the newest completed race.

### Required provenance and release records

Each release contains a canonical `release-record.json`; every listed session pack has a canonical `provenance.json` or equivalent manifest section. All timestamps are RFC 3339 UTC strings with millisecond precision where available; absent values are `null`, never substituted.

```json
{
  "schemaVersion": 1,
  "releaseId": "sha256-<asset-manifest-digest>",
  "sourceCommit": "<full-git-sha>",
  "assetReleaseId": "sha256-<asset-manifest-digest>",
  "generatedAt": "<artifact-generation-completed-at>",
  "publishedAt": "<production-promotion-completed-at>",
  "previousReleaseId": "<prior-production-release-id-or-null>",
  "promotion": {
    "provider": "netlify|cloudflare-pages",
    "deploymentId": "<immutable-production-deploy-id>",
    "approvedBy": "<release-operator-id>",
    "promotedAt": "<same-as-publishedAt>"
  },
  "featured": {
    "path": "/sessions/<season>/<grand-prix>/race",
    "status": "featured|none",
    "selectedBy": ["sourceEventEndAt desc", "sessionKey desc", "path asc"]
  },
  "manifestSha256": "<sha256>",
  "gateEvidence": "<immutable-check-output-or-record-digest>"
}
```

For each source input, provenance records source provider and endpoint/dataset identifier, approved rights/attribution reference, `retrievedAt`, response digest, and any source-native observation/update timestamp without renaming it as retrieval time. For each session pack, record `sourceEventStartAt`, `sourceEventEndAt`, terminal outcome, `retrievedAtMin`, `retrievedAtMax`, `generatedAt`, coverage ledger, generator/version, pack digest, and the release ID that first published it. `generatedAt` is set only after the validated pack is assembled. Existing summary/replay `generatedAt` values remain artifact facts but are insufficient alone.

The bridge release record required by ticket 13 additionally records the Netlify immutable deploy permalink and full-output SHA-256 manifest. In the target Pages/R2 design it records the Pages deployment ID, embedded `assetReleaseId`, shell-output digest, and immutable R2 manifest digest. A pair is auditable compatibility evidence, not a claimed cross-product atomic transaction.

### Promotion, rollback, and failure behaviour

Promotion is fail-closed: generate and validate every pack and manifest, verify the complete immutable artifact/prefix and its digests, run preview probes, then promote the one shell/deploy that references that verified release. Only the named release operator may approve promotion. Set `publishedAt` only after that promotion succeeds; an uploaded but unreferenced R2 prefix has no `publishedAt` and is not public data.

On source failure, missing completion evidence, partial coverage, invalid timestamps, hash mismatch, generator failure, or preview/production probe failure: do not rewrite `latest.json`, do not promote a new release, do not expose the new session, and retain the prior verified production release. Record the failed candidate and reason outside the public release record; never invent an “unknown” pack or downgrade it into a featured fallback.

Rollback is a new promotion event of the prior verified immutable deployment, without rebuild or artifact mutation. Its record names `rollbackOfReleaseId`, `restoredReleaseId`, reason, operator, and actual `rolledBackAt`; the restored release keeps its original `generatedAt` and `publishedAt`. Never overwrite, delete, or edit an immutable artifact/prefix during rollback. Retain pending, current, and prior verified artifacts for at least the provider's proven rollback window plus 30 days; do not automate deletion until that window is recorded. A post-promotion defect that threatens correctness triggers this rollback path, not a hot edit to manifests or packs.

### Testable acceptance

- [ ] Fixtures prove a future Race, partial Race, demo weekend, mismatched IDs, missing required source, missing chunk interval, invalid/end-before-start timestamp, missing rights record, and missing release record are absent from public indexes and cannot be selected.
- [ ] A complete non-race session is indexed historically but cannot be selected; complete races select strictly by end time, then session key, then path for equal values.
- [ ] A build with no eligible race emits `featured.status: "none"` and the unavailable UI; it does not retain or fabricate a prior pointer.
- [ ] A complete Race promoted within 168 hours is featured and exposes exact source-event, retrieved, generated, published, coverage, source, release-ID, and digest values. No displayed value is synthesized from `startDate`.
- [ ] A pack first promoted after 168 hours is historical-only and visibly labelled late; a viewer beyond the 168-hour window receives the stale UI with no “latest”, “live”, or “up to date” wording.
- [ ] Manifest validation rejects timestamps that are missing, non-UTC/invalid, or chronologically impossible; it rejects `publishedAt` before generation/promotion and release IDs/digests that do not match the artifact.
- [ ] Promotion tests prove the shell/deploy references only a fully verified immutable artifact; failure leaves the deployed release ID and public indexes unchanged.
- [ ] Rollback tests repromote a recorded prior immutable deployment, preserve original artifact hashes/timestamps, link rollback and restored release IDs, and confirm the restored featured state plus core route/pack probes.
- [ ] Release smoke captures the visible provenance and stale/unknown states and asserts no client request for live timing or mutable latest pointer is required.

Implementation work, not this ticket, must extend the pack/index schemas and generators, add release records and validations, update release documentation, and add these fixtures. Until then the existing `latest.json` is only a deterministic newest-available local-pack pointer; it has no established freshness or production-provenance proof.
