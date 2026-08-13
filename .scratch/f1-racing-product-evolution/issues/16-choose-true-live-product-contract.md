# Choose the true live product and operating contract

Type: grilling
Status: resolved
Blocked by: 03, 15

## Question

If true live timing survives research and the service-boundary decision, what user promise, source attribution, delay disclosure, session coverage, degradation behavior, replay handoff, availability target, monitoring, incident ownership, connection controls, geographic or rights restrictions, and ongoing cost define the product? Otherwise, explicitly defer it and preserve Historical Race Desk as the only timing simulation.

## Answer

True live timing is explicitly deferred. No reviewed source proves the rights, authority chain, operating terms, or support commitment required for a public product. Until the gates below pass, the only timing simulation is Historical Race Desk: it remains an accelerated, static-pack historical replay with the visible disclosure **“Historical replay simulation — not live timing.”** `/live` remains its compatibility redirect; the current backend's `simulated-replay` status and socket output remain replay-only and must not be described, proxied, or surfaced as live.

### Reopen gates

Planning may reopen only when a named product owner and a named live-service owner retain written legal and product approval plus all of the following evidence:

1. A signed agreement from the timing-data rights owner explicitly authorises this public web product's covered fields, collection, processing, display, redistribution, cache, retention, correction, archive, replay, approved attribution and trademark treatment, platforms, audience, territories, session windows, and termination/deletion duties.
2. If the supplier is an intermediary, written evidence of its authority chain from the rights owner covers the same use. A consumer F1TV subscription, FastF1, or OpenF1's published community access alone fails this gate.
3. The supplier contract names the exact covered sessions and fields; source authority; permitted territories and required geographic restriction method; production authentication; rate, concurrency, and quota limits; price, billing, renewal, overage, support, SLA, latency, correction, outage, and retention/replay terms.
4. Production credentials are issued to the service through the authorised route. No end-user account sharing, personal consumer subscription, browser-held upstream credential, or server-side reuse of a consumer login is permitted.
5. The owner records an approved monthly cost cap, forecast, billing owner, overage stop action, support/escalation contact, incident owner, and post-termination deletion procedure.
6. An authorised-event acceptance run proves the contracted behaviour under normal operation, reconnects, gaps, duplicates, out-of-order events, corrections, rate/concurrency limits, geographic denial, source outage, service outage, and the permitted live-to-replay transition.

### Required launch contract

A future true-live product may promise only: **“Live timing from the named authorised source for the displayed covered session, subject to the displayed delay and availability state.”** It must not claim official timing, real-time, complete coverage, a lower delay, or higher availability than the signed source and service commitments establish.

- **Source, time, and coverage:** Every live surface shows the approved source name and attribution, source authority status, session type and coverage, event timestamp, receive timestamp, displayed delay, territory/restriction notice, and the contract-approved limitations link. The delay is the measured difference between the displayed event timestamp and the viewer's current time; a missing or untrustworthy timestamp makes the state unavailable, not zero-delay. Exact attribution and trademark wording come from the written agreement, not inferred copy.
- **Latency and availability:** Before launch, the signed supplier and service agreements must state a numeric end-to-end latency target, measurement method, correction window, uptime/availability target, support response, and exclusions. The live-service owner measures and retains evidence against those definitions. No numerical latency or availability promise exists before this evidence; “typically” observed latency is insufficient.
- **Corrections:** Source corrections retain source identity, original event time, received time, correction time, and revision/order identity. The UI identifies corrected data and the affected scope. If correction ordering or provenance cannot be established, stop showing the affected live state and mark it unavailable. Do not silently rewrite a recorded live claim.
- **Outages and degradation:** On source failure, expired authorisation, missed continuity, unverified correction, geographic denial, quota/rate-limit breach, or service failure, show **“Live data unavailable”** with the source and retrieval state where permitted, then offer retry and a separate Historical Replay route. Do not show the last frame as current, infer missing events, substitute another provider, use static packs or `simulated-replay` frames, or switch to a replay without clearly entering that historical experience.
- **Replay handoff:** Live data becomes Historical Replay only under express written retention, cache, archive, correction, deletion, and public-replay rights. The handoff waits for the contracted finalisation/correction condition, preserves source and release provenance, and labels the result historical. No automatic conversion, indefinite archive, or reuse of live frames in static packs is allowed without that grant.

### Service and operating boundary

A true-live product requires a separately owned live service, never an extension of the static-pack path, metadata/search Worker, or current FastAPI replay helper. Its contractual boundary is: authorised source ingress; a durable source-of-record for ordered, attributable events and corrections; bounded delivery to authorised clients; and separate historical publication only after the replay-rights gate. Browsers never fetch raw upstream telemetry or hold upstream credentials. The live-service owner owns credential rotation/revocation, input validation, rate and connection controls, deduplication, ordering, gap/reconnect handling, correction processing, geographic enforcement, monitoring, incident response, supplier escalation, cost review, and safe shutdown. The product owner owns user wording, source attribution, rights scope, and launch approval.

Connection controls, retention, data minimisation, access logging, encryption, vendor/subprocessor review, incident notification, deletion, and user notice must meet the written supplier terms and applicable privacy/security obligations before launch. No personal identifier, browser telemetry, raw query string, or account data may be collected for live operations unless separately approved with a documented purpose, retention limit, access control, and privacy notice. The approved cost cap is a hard stop: projected or actual cost beyond it disables new live delivery pending owner approval; it does not degrade to an unlicensed or simulated source.

### Launch acceptance

- [ ] Written rights, authority, territorial, field, attribution, credential, retention/replay, correction, SLA, support, and price terms are retained and approved by legal, product, and the named owners.
- [ ] An authorised production-like session demonstrates the contracted session coverage, source attribution, event/receive time disclosure, measured latency, connection limits, ordering/deduplication, reconnect/gap state, correction display, and geographic controls.
- [ ] Source and service outages, quota denial, credential revocation, and incomplete/corrected data show `Live data unavailable`; no stale, simulated, static, alternate-source, or silent replay fallback occurs.
- [ ] Monitoring and incident exercises show the live-service owner can detect, triage, communicate, escalate, disable delivery, and preserve the required audit evidence without exposing credentials or unnecessary personal data.
- [ ] A live-to-historical replay test proves the written finalisation, provenance, correction, retention, archive, and deletion rules; absent that proof, data is not published as replay.
- [ ] Cost, privacy, security, accessibility, source disclosure, and release acceptance are approved before public enablement. No availability or latency promise appears unless its measurement and contractual target are evidenced.
