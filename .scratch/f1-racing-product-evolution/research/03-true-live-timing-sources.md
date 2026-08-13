# Research: true live timing sources and obligations

**Scope:** Research only for `f1-racing`. This report distinguishes documented capability from permission. “Not established” means the cited primary material does not establish the item; it is not a conclusion that the item does not exist.

**Access date for all web sources:** 2026-08-11.

## Decision

**Do not put true live timing in the release train now.** No reviewed source supplies both (1) an expressly authorized live-data product suitable for this public product and (2) documented operational and contractual terms sufficient to ship it. OpenF1 is the nearest technically documented option, but its published scope is personal, educational, research, and non-commercial fan engagement; other use cases require direct licensing discussion. FastF1 is a post-session/replay tool, not a real-time processing feed. The reviewed Formula 1 and FIA primary sources establish official consumer, governance, and contact surfaces, not a publicly documented developer feed or redistribution grant.

## Repository baseline: simulated replay, not genuine live timing

The existing backend labels its `GET /api/live/status` source `"simulated-replay"` in `f1-racing/backend/main.py:227-245`. Its `WS /ws/live/...` handler reads `replay.json` from the local pack (`f1-racing/backend/main.py:411-429`), announces `"Starting simulated live feed"` and the same source label (`f1-racing/backend/main.py:443-461`), then emits those stored frames at a caller-controlled speed factor (`f1-racing/backend/main.py:479-508`). It ends after the stored frames drain (`f1-racing/backend/main.py:510-518`).

This aligns with the backend contract: historical replay assets are served from static CDN assets, while the optional socket supplies “WebSocket replay chunks”; the “live” socket is expressly described as replay frames streamed as a simulated live feed (`f1-racing/backend/README.md:18-24`, `f1-racing/backend/README.md:53-58`, `f1-racing/backend/README.md:71-75`). It is not an upstream-connected timing source, does not establish upstream latency, and has no live-rights implication.

## Plausible authorized routes

| Route | What the primary source actually establishes | Release posture |
| --- | --- | --- |
| Formula 1 official consumer offering / direct commercial inquiry | FastF1’s official documentation says its live-timing recorder requires an active **F1TV Access/Pro/Premium** subscription and signs into the user’s F1TV account. It does **not** say that a subscription grants API use, automated extraction, onward display, storage, or redistribution. Formula 1’s public commercial/contact route and its applicable product terms were **not established** from accessible primary material in this research. | Do not treat an F1TV subscription as a product-data licence. Obtain written terms and approval from Formula 1/FOM before technical work. |
| FIA official route | FIA’s official documents surface publishes FIA Formula One World Championship decision documents and links to the FIA terms-and-conditions download and official contact page. It does **not** document a Formula 1 live-timing API, commercial feed, or data-rights programme. | FIA publication is useful for official classifications/decisions after the fact, not evidence of a live-data grant. Ask the FIA only for its own official documents and jurisdiction; clarify whether FOM/Formula 1 owns the requested rights. |
| OpenF1 paid live access | OpenF1 documents an unofficial, community-operated API. Its site advertises paid personal-use access to live REST, MQTT, and WebSocket data; its docs say historical data from 2023 needs no authentication and real-time data needs a paid subscription. | Technically plausible for a non-production evaluation only. Public release requires a written licence/approval covering this product’s commercial status, display, caching, redistribution, branding, and data provenance. |
| FastF1 live-timing recorder | FastF1 documents a client that **saves** live SignalR data during a session and expressly says real-time processing is not possible. The supported handoff is loading the saved data after the session. It requires an active F1TV subscription. | Candidate only for a user-controlled, post-session recording workflow after rights review. It is not a live product feed. |
| Official commercial data provider | No reviewed official primary source identified a commercial provider with publicly explicit Formula 1 live-data rights and a public product specification suitable for this app. Sportradar’s official sales site advertises generic sports data and a contact form, but the reviewed page does not establish Formula 1 rights. | Not established. Contact a provider only after it supplies written proof that its rights cover the intended territories, audience, timing fields, onward display, retention, and replay. |

## Route records and obligations

### 1. Formula 1 / FOM official offering and licensing route

**Primary material reviewed**

- FastF1 official live-timing documentation: [Live Timing Client](https://docs.fastf1.dev/api_reference/livetiming.html).
- FIA official decision-document index: [Decision documents](https://www.fia.com/documents).
- FIA official terms-and-conditions download, linked by the FIA site: [Terms and conditions](https://www.fia.com/file/83930/download).
- FIA official contact route, linked by the FIA site: [Contact Us](https://www.fia.com/node/1248).

| Item | Established documentation |
| --- | --- |
| Live availability | Formula 1/FOM developer live-timing API: **not established**. F1TV consumer subscription availability is referenced by FastF1, but its country catalogue, products, and availability are **not established** here. |
| Licence / redistribution | **Not established.** An F1TV subscription requirement in FastF1 docs is not a redistribution grant. |
| Attribution | **Not established.** |
| Authentication | FastF1 states that its recorder signs into an F1TV account and requires an active F1TV Access/Pro/Premium subscription. Formula 1’s own API/authentication contract: **not established**. |
| Latency | **Not established.** |
| Geography | **Not established.** |
| Reliability / SLA | **Not established.** |
| Pricing | F1TV price: **not established**. No Formula 1 live-data feed price was established. |
| Retention | **Not established.** |
| Replay handoff | FastF1 documents post-session loading from its saved local recording; Formula 1/FOM authorisation to retain, serve, or replay the resulting data: **not established**. |

**Obligation:** do not infer data rights from the consumer subscription. A Formula 1/FOM written agreement must identify the contracting entity, the covered data products and fields, display/redistribution rights, territories, platforms, user classes, branding/attribution, caching/retention, permitted replay, latency target, support/SLA, audit/termination terms, and pricing.

### 2. FIA official publications and contact

The FIA document index is an official source for published decision documents, including classifications, but it does not present a machine-readable live feed. The page provides links to FIA terms and contact, cited above.

| Item | Established documentation |
| --- | --- |
| Live availability | **Not established.** |
| Licence / redistribution | FIA site terms exist; rights to Formula 1 timing data are **not established** from the reviewed material. |
| Attribution | **Not established.** |
| Authentication | **Not established.** |
| Latency | Individual documents display publication times; a live timing latency commitment is **not established**. |
| Geography | **Not established.** |
| Reliability / SLA | **Not established.** |
| Pricing | **Not established.** |
| Retention | **Not established.** |
| Replay handoff | Official documents can support a post-event official-results reconciliation process; rights to transform/republish them in this product are **not established**. |

### 3. OpenF1 API

**Primary material reviewed**

- [OpenF1 home, access, FAQ, and licence notice](https://openf1.org/).
- [OpenF1 API documentation](https://openf1.org/docs).
- [OpenF1 contact route](https://openf1.org/contact).
- [OpenF1 source repository](https://github.com/br-g/openf1).

OpenF1 explicitly calls itself unofficial and unaffiliated with Formula 1, FIA, and Formula One Management. Its site says the platform aggregates public-source data and does not substitute for official or licensed commercial feeds.

| Item | Established documentation |
| --- | --- |
| Live availability | Paid sponsor access includes live data during sessions through REST, MQTT, and WebSocket. The site defines “live” as 30 minutes before a session until 30 minutes after it ends. |
| Licence / redistribution | The site publishes **CC BY-NC-SA 4.0** and says intended use is educational, personal learning, research, and non-commercial fan engagement. It directs other use cases to its contact route for appropriate licensing. This app’s permitted use is therefore **not established** without written agreement. |
| Attribution | CC BY-NC-SA 4.0 requires attribution and ShareAlike for licensed material. OpenF1-specific attribution wording, placement, trademark treatment, and whether the raw data are licensed under the same terms are **not established** beyond the site’s published licence notice. |
| Authentication | Historical data from 2023 onward requires no authentication. The site says real-time data requires paid subscription; the precise credential/token exchange and production secret-handling contract are **not established** in the reviewed API docs. |
| Latency | The FAQ says real-time data typically updates about three seconds after live events. This is a typical observation, not an SLA. Endpoint-specific end-to-end latency is **not established**. |
| Geography | **Not established.** |
| Reliability / SLA | **Not established.** No uptime, support response, incident process, capacity commitment, or data-correction policy was documented in the reviewed material. |
| Pricing | The published sponsor tier is €9.90/month for historical + live personal use; it lists six requests/second, 60 requests/minute, and up to 10 concurrent MQTT/WebSocket connections. Contract price for this product’s use is **not established**. |
| Retention | Historical data is available from 2023 onward. How long live records are retained, whether corrections occur, and whether an app may cache/redistribute them are **not established**. |
| Replay handoff | REST supports historical querying and the site distinguishes live from historical windows. A permitted live-to-public-replay handoff, required delay, archive terms, and replay redistribution are **not established**. |

**Technical fit:** OpenF1 documents approximately 3.7 Hz car and location samples, approximately four-second race intervals, session/race-control/lap data, and location coordinates described as approximate. This can support a timing-oriented display, but the documented location caveat means it must not be represented as precision GPS or an official timing feed.

**Obligation:** submit the product description to OpenF1 through its official contact route and obtain a written response that explicitly covers the deployed site, business model, public audience, data fields, real-time display, storage, share/copy/derivative rights, attribution, geographic scope, usage limits, availability/support, price, and termination. Separately verify that OpenF1 has rights sufficient for the requested use; its own disclaimer makes that chain of rights material.

### 4. FastF1

**Primary material reviewed**

- [FastF1 introduction and notice](https://docs.fastf1.dev/).
- [FastF1 data reference](https://docs.fastf1.dev/data_reference/index.html).
- [FastF1 live-timing client](https://docs.fastf1.dev/api_reference/livetiming.html).
- [FastF1 MIT software licence](https://github.com/theOehrly/Fast-F1/blob/main/LICENSE).

FastF1 identifies itself as unofficial and not associated with Formula 1 companies. Its MIT licence applies to the FastF1 software; it does not grant rights in any upstream timing, telemetry, F1TV, Formula 1, FIA, team, or broadcast data.

| Item | Established documentation |
| --- | --- |
| Live availability | The recorder receives and saves a live SignalR stream during a session, but FastF1 explicitly says real-time processing is not possible. |
| Licence / redistribution | FastF1 code is MIT-licensed. Rights to upstream data, recordings, processing, storage, display, or redistribution are **not established** and must not be inferred from the code licence. |
| Attribution | MIT copyright/licence notice is required when distributing substantial software portions. Attribution for underlying data, F1TV, Formula 1, FIA, or broadcast material is **not established**. |
| Authentication | Active F1TV Access/Pro/Premium subscription and F1TV account sign-in are required for the recorder. Hosted environments such as Colab and WebAssembly are unsupported due to sign-in constraints. |
| Latency | **Not established** for the live stream. For the standard post-session workflow, FastF1 says timing/session/telemetry/position data are usually available 30–120 minutes after session end. |
| Geography | **Not established.** |
| Reliability / SLA | **Not established.** The data reference reports past server issues and presents recording as redundancy; the live-client docs note apparent server-side disconnection after about two hours. No SLA is documented. |
| Pricing | FastF1 price: **not established**. F1TV pricing and subscription geography: **not established**. |
| Retention | FastF1 allows local saved files to be loaded after a session. Authorised retention of the upstream data and recordings is **not established**. |
| Replay handoff | Explicitly documented: record local file during the session, then load it into FastF1 after the session. FastF1 warns not to mix recorded and post-session API data because synchronization may be wrong, and advises recording early enough to capture a full session. Public replay use remains **not established**. |

**Upstream-source caveat:** FastF1 is a client/library, not a licensed data vendor. It cannot furnish the upstream rights, SLA, territory permissions, or production support required for this product. Treat the F1TV authentication requirement as a technical prerequisite only, not authorisation for a shared server, hosted automation, or public replay product.

### 5. Commercial-provider route with explicitly documented Formula 1 rights

No qualifying route was established from the reviewed official primary sources.

- The reviewed [Sportradar official sales page](https://sportradar.com/apac/) advertises generic sports data and a sales contact path, but does not establish Formula 1 live-data rights, timing-field coverage, or public redistribution rights.
- No reviewed Formula 1 or FIA primary source identifies a commercial provider, product, pricing, territory, SLA, or licence grant that covers this app.

This is an inventory result, not a claim that no licensed provider exists. A provider qualifies only after its own written offer or contract explicitly names Formula 1 data rights and the intended app use.

## Proof gates before admission to the release train

All gates must pass before replacing the existing simulated feed or presenting any feed as true live:

1. **Rights owner and written grant:** identify the data-rights owner and receive a signed or written commercial agreement. It must expressly allow this public web product’s collection, processing, display, caching, replay, and redistribution of every intended field.
2. **Source authority:** where an intermediary is used, obtain its written authority chain from Formula 1/FOM or the relevant rights owner; OpenF1 community access or FastF1/F1TV login alone fails this gate.
3. **Contractual operating envelope:** record permitted territories, platforms, users, session windows, data fields, branding/trademark rules, attribution text and placement, prohibited uses, audit obligations, termination, and post-termination deletion/retention duties.
4. **Authentication model:** obtain production credentials through the authorised route, with no end-user consumer-account sharing or server-side reuse of personal subscriptions. Document rotation, limits, and incident revocation.
5. **Commercial commitment:** capture price, billing unit, overage/rate-limit terms, renewal, support channel, and a named owner. “Not established” price or commercial terms fails this gate.
6. **Service suitability:** contractually establish geographic availability, data coverage, field definitions, documented latency target, uptime/SLA, support/escalation, correction policy, and outage behaviour. A marketing claim or “typical” latency is insufficient.
7. **Live-to-replay authorisation:** obtain explicit retention and replay rights, including permitted delay, archive duration, cache/backup copies, corrections, deletion, and user access after the live window.
8. **Product truthfulness:** define source labels, event-time vs receive-time display, delay disclosure, official/unofficial wording, fallback state, and replay provenance. The existing `simulated-replay` label must remain until a qualifying source passes all gates.
9. **Technical acceptance:** run an authorised-event test proving authentication, rate/concurrency handling, reconnect/gap handling, idempotency/deduplication, clock ordering, data correction, replay handoff, observability, and a user-safe fallback that never calls stale or simulated data “live.”
10. **Legal/product sign-off:** retain written legal and product approval against the signed terms before production enablement.

## Sources

All sources below were accessed 2026-08-11.

1. OpenF1. [Home, access/support, FAQ, and licence notice](https://openf1.org/).
2. OpenF1. [API documentation](https://openf1.org/docs).
3. OpenF1. [Contact](https://openf1.org/contact).
4. FastF1. [Introduction](https://docs.fastf1.dev/).
5. FastF1. [Data Reference](https://docs.fastf1.dev/data_reference/index.html).
6. FastF1. [Live Timing Client](https://docs.fastf1.dev/api_reference/livetiming.html).
7. FastF1. [MIT License](https://github.com/theOehrly/Fast-F1/blob/main/LICENSE).
8. FIA. [Decision documents](https://www.fia.com/documents).
9. FIA. [Terms and conditions](https://www.fia.com/file/83930/download).
10. FIA. [Contact Us](https://www.fia.com/node/1248).
11. Sportradar. [Official sales page](https://sportradar.com/apac/).
