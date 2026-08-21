# 31 — Measure Dashboard activation

Type: task
Status: claimed
Blocked by: 18, 29

**What to build:** The product owner can determine whether visitors reach the Unified Dashboard, begin the approved subsystem journey, open Replay evidence, continue to Learn or Modelview, and complete the approved learning action using only the aggregate and allowlisted measurement authorized by the privacy decision.

- [ ] Host-level aggregate measurement reports approved route demand, referrers, 404s, bandwidth, and device categories without adding client code where the selected host supports it.
- [ ] Any approved product event fires only at its defined high-signal transition, at most once per applicable page journey, and uses a finite allowlist of event names and enumerated properties.
- [ ] Query strings, Replay timestamps, selected drivers, local progress, free text, cookies, fingerprints, persistent device IDs, and other forbidden fields are never transmitted.
- [ ] Dashboard activation and cross-surface learning funnels have documented numerator, denominator, exclusions, baseline period, owner, retention, and success threshold.
- [ ] The production privacy notice and opt-out or consent behavior match the approved contract before event collection begins.
- [ ] Browser-network assertions and provider/host verification prove expected events arrive and forbidden payload fields do not.

## Comments

### 2026-08-21 — local privacy and measurement slice

`f1-racing` commit `33bc9c978a574a1aa03a1da3d7261b623cb43113` adds no client analytics, events, beacons, cookies, IDs, query/fragment uploads, progress uploads, or authentication. `docs/product-measurement.md` limits the pilot to already-available Netlify aggregate route, referrer, 404, bandwidth, and host-defined device reports; explicitly marks Dashboard activation, Replay starts, completion, cross-surface funnels, return use, and performance RUM as not measured; and records the conditional 30-day review rule. `/privacy` discloses the same limits and blocks product decisions until a current operator privacy contact is published. Static smoke scans HTML/JS for analytics clients, while Dashboard browser acceptance records zero external or client-measurement requests across all three journeys.

Ticket 31 remains claimed. Netlify Web Analytics enablement, access to an actual host report, the start and completion of a real 30-day baseline, monthly owner review, production operator privacy contact, and host-level proof of route/referrer/404/bandwidth/device reporting cannot be established from the repository. No expected client event exists under the approved decision, so none was fabricated or enabled.
