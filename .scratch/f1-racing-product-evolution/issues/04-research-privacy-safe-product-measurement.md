# Research privacy-safe product measurement

Type: research
Status: resolved
Blocked by:

## Question

Which smallest privacy-compatible measurement approach can establish acquisition, first-session activation, cross-surface movement, lesson completion, evidence sharing, performance, errors, and return use for a static Next.js export? Compare first-party and hosted options using official documentation, including consent, cookies or device identifiers, retention, data export, regional handling, static-site integration, operational burden, and cost.

## Answer

[Research artifact](../research/04-privacy-safe-product-measurement.md)

Start with server-side Netlify Web Analytics for aggregate route demand, referrers, 404s, and bandwidth without product code. If traffic justifies activation measurement and the privacy policy permits a third party, add Plausible with only three allowlisted, identifier-free events: first replay play, Learn mark-as-read, and successful Modelview load. Never upload browser-local progress, query strings, free text, persistent IDs, or universal click/scroll data. Cloudflare Web Analytics becomes the host-level performance option only if hosting moves to Cloudflare.
