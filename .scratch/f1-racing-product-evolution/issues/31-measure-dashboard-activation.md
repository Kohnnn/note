# 31 — Measure Dashboard activation

Type: task
Status: open
Blocked by: 18, 29

**What to build:** The product owner can determine whether visitors reach the Unified Dashboard, begin the approved subsystem journey, open Replay evidence, continue to Learn or Modelview, and complete the approved learning action using only the aggregate and allowlisted measurement authorized by the privacy decision.

- [ ] Host-level aggregate measurement reports approved route demand, referrers, 404s, bandwidth, and device categories without adding client code where the selected host supports it.
- [ ] Any approved product event fires only at its defined high-signal transition, at most once per applicable page journey, and uses a finite allowlist of event names and enumerated properties.
- [ ] Query strings, Replay timestamps, selected drivers, local progress, free text, cookies, fingerprints, persistent device IDs, and other forbidden fields are never transmitted.
- [ ] Dashboard activation and cross-surface learning funnels have documented numerator, denominator, exclusions, baseline period, owner, retention, and success threshold.
- [ ] The production privacy notice and opt-out or consent behavior match the approved contract before event collection begins.
- [ ] Browser-network assertions and provider/host verification prove expected events arrive and forbidden payload fields do not.
