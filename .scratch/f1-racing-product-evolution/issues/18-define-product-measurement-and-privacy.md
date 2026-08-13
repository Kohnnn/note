# Define product measurement and privacy

Type: grilling
Status: resolved
Blocked by: 04, 07

## Question

Which release outcomes will be measured and under what privacy contract? Lock activation and return metrics, event vocabulary, anonymous identity or no-identity choice, consent behavior, retention, sensitive fields that are forbidden, performance and error telemetry, access and deletion, data owner, baseline period, release success thresholds, and the rule for removing measurement that does not justify its cost.

## Answer

Approve a zero-code, aggregate-only pilot. The only allowed measurement is the current host's existing Netlify Web Analytics aggregate dashboard, if it is already available under the existing Netlify account: route demand for `/`, `/race-desk`, `/replay/*`, `/learn/*`, and `/cars/*`; aggregate referrers, 404s, bandwidth, and host-provided device categories. Do not buy, enable, or add another service for this pilot. Do not call host-defined unique counts people or returning users. Pageview sequences may describe aggregate route movement only; they do not establish a user journey, activation, learning completion, or return use. Host 404 aggregates are the sole error signal; no RUM, Core Web Vitals, or client error telemetry is approved.

No custom events are approved now. Do not add Plausible, a browser beacon, event calls, cookies, local storage uploads, a data warehouse, or any client measurement code. The prohibited payload includes IP addresses, precise location, query strings, URL fragments, Replay timestamps, session/race IDs, driver selections, telemetry, camera state, referrer URLs beyond the host aggregate report, user-agent values, browser or device IDs, cookies, fingerprints, persistent IDs, local progress, free text, account data, and any derived identifier. No event properties are approved.

The product stores no measurement records and makes no exports. Use Netlify's existing aggregate dashboard only, retaining no product-side copy; its visible history must not exceed Netlify's documented 30-day dashboard window. Access is limited to the product owner and the minimum Netlify site administrators needed for release operations; the product owner owns the monthly aggregate review. Before any report is reviewed for product decisions, the production privacy notice must accurately disclose the host-level aggregate measurement, its host, purpose, and no-client-tracking design. There is no product measurement opt-out or consent prompt because the pilot adds no client tracking; do not claim this settles legal obligations. The notice must give the operator's privacy contact for requests. Because the product stores no visitor identity or event record, it cannot look up or delete an individual's aggregate contribution; handle requests through the host/operator privacy process and do not promise per-visitor deletion.

Establish one 30-day baseline. Reconsider event collection only if that baseline contains at least 100 aggregate Dashboard or Replay pageviews and the owner still needs the unanswered question of whether a replay began or a learning action completed. Reconsideration requires a new privacy decision that explicitly approves the provider, procurement, notice, applicable consent or opt-out behavior, retention, access, deletion, and the three-event allowlist; without all of those, event collection remains prohibited. Remove access to aggregate reports if the monthly review produces no release, content, reliability, or navigation decision for two consecutive baseline periods.

If event collection is not approved, ticket 31 must implement or verify only the host-level aggregate report and label activation, learning completion, cross-surface person-level funnels, performance RUM, and return use as `not measured`. It must not infer those outcomes from pageviews, add fallback instrumentation, or block the Dashboard release on unavailable event metrics.
