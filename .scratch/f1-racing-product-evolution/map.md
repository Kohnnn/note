# F1 Racing Product Evolution

Label: wayfinder:map
Status: active

## Destination

Ship a verified multi-release evolution of `f1-racing` that makes engineering learners the primary audience and race-curious fans the secondary audience. A Unified Dashboard becomes the flagship entry into deeper Replay, Learn, and Modelview experiences, while Race Desk keeps its historical-simulation meaning.

The shipped product uses one coherent broadcast-and-editorial visual system, a hardened static-first release core, and only those metadata/search, true-live, account, and progress services whose user value, data rights, privacy, reliability, and operating cost have been explicitly justified.

This map is complete when every release in the train has shipped to the canonical production site and passed its product, content, accessibility, performance, data-integrity, resilience, privacy, and rollback gates.

## Notes

- This effort carries execution inside the map after product, content, visual, platform, and release decisions resolve.
- Preserve the current static-first rule: browsers consume compact route-specific packs, not raw upstream telemetry.
- Race Desk remains the accelerated historical replay simulation. Never label simulated replay as true live timing.
- Preserve explicit provenance and uncertainty. The wind visualizer remains educational and estimate-based, not validated CFD.
- Deepen the existing six Learn modules before adding topics.
- Prefer one reusable Dashboard and cross-surface journey over another independent product surface.
- Prefer progressive disclosure and the accessible 2D track; 3D supports evidence where it materially improves understanding.
- Reuse existing routes and components where possible. A whole-product visual overhaul does not authorize a framework or architecture rewrite.
- Local `npm run check:featured` and `npm run quality:source` passed on 2026-08-11; this does not establish full artifact or production parity.
- Ticket 25 local Node.js 22 quality, build, static smoke, release-data, release-gate, and targeted Chromium probes passed on 2026-08-13, including observable 2D keyboard transforms and legacy redirect coverage; no finalized candidate or remote release evidence exists, so the baseline remains unshipped.
- Tickets 26–30 passed local acceptance on 2026-08-21 and are committed through `f1-racing` source `e684a4d22a9930c52f28e7ea8a2b6f4c04ad92c0`: deterministic generated Monza/Mexico/Zandvoort briefs, canonical Dashboard rendering, exact Replay/Learn/Modelview handoffs, visible evidence ceilings, browser-local Resume, and 390 px/1440 px browser journeys all pass. The source remains undeployed.
- Ticket 31 remains claimed: zero-client measurement and privacy checks pass locally through `e684a4d22a9930c52f28e7ea8a2b6f4c04ad92c0`, but Netlify analytics availability, host reports, the 30-day baseline, owner review, operator contact, and production verification remain external blockers.
- A second `npm run release:artifact` audit on 2026-08-22 for `e684a4d22a9930c52f28e7ea8a2b6f4c04ad92c0` retained `candidate-cbmlx0` and confirmed the canonical brief mirror and Miami/Austin identity defects are resolved. It stopped before build or Netlify access because all 81 indexed sessions still lack normalized results, weather, and approved provenance entries; 753 ambiguous stint-boundary findings and dependent latest-index metadata errors remain. No release ID, promotion, baseline-window start, retained rollback target, or rollback drill is claimed.
- Consult `frontend-skill`, `diagnosing-bugs`, `playwright`, `web-perf`, `security-best-practices`, `domain-modeling`, `git-workflow-and-versioning`, and `code-review` when their work enters the frontier.

## Decisions so far

- [Establish the trustworthy release baseline](issues/01-establish-trustworthy-release-baseline.md) — local release gates and sampled production parity pass, but external Draco, stale QA URLs, missing release identity, and the 1.89 GB duplicated artifact remain baseline risks.
- [Research immutable static pack publication](issues/02-research-immutable-static-pack-publication.md) — use Netlify only as the zero-change bridge; target a build-stamped Pages shell that references one fully verified immutable R2 release prefix.
- [Research true live timing sources and obligations](issues/03-research-true-live-timing-sources.md) — no reviewed source proves sufficient live-data rights and operating terms, so true live stays out until every contractual and technical proof gate passes.
- [Research privacy-safe product measurement](issues/04-research-privacy-safe-product-measurement.md) — begin with no-code Netlify aggregates; add only three identifier-free Plausible events if traffic and policy justify activation measurement.
- [Research identity and progress synchronization](issues/05-research-identity-and-progress-sync.md) — keep progress local and Replay URLs portable; accounts wait for proven cross-device and saved-work value, then use one optional owner-scoped record.
- [Inventory evidence-ready engineering learning cases](issues/06-inventory-evidence-ready-learning-cases.md) — ten cases are defensible from current packs; pilot Monza braking, Mexico whole-lap evidence, and Zandvoort safety-car interruption first.
- [Choose the Dashboard activation promise and editorial authority](issues/07-choose-dashboard-activation-and-editorial-authority.md) — teach one subsystem through exact race evidence; publish only deterministic template-generated briefs labeled Recorded, Derived, or Unknown, beginning with the Monza, Mexico, and Zandvoort pilots.
- [Choose canonical routes and navigation](issues/08-choose-canonical-routes-and-navigation.md) — make `/` the sole Dashboard, keep Replay as the evidence workspace, demote Compare/Stints beneath Replay, and preserve `/sessions` and `/live` only as compatibility redirects.
- [Prototype the Unified Dashboard information architecture](issues/09-prototype-unified-dashboard-information-architecture.md) — lead with one evidence question and Replay action, then disclose evidence classes, optional explanations, two follow-up briefs, local continuation, and secondary product routes in that order.
- [Define the roles and disclosure of core experiences](issues/10-define-core-experience-roles-and-disclosure.md) — Dashboard frames one labeled question; Replay owns evidence; Learn/Modelview explain; 2D leads; 3D and wind are optional illustrative aids; Race Desk is historical simulation; Compare/Stints remain Replay-owned.
- [Prototype the broadcast and editorial visual system](issues/11-prototype-broadcast-editorial-visual-system.md) — use the Dashboard’s restrained dark broadcast shell, editorial hierarchy, explicit evidence semantics, fine rules, and progressive disclosure as the incremental whole-product reference.
- [Define the learning depth and evidence contract](issues/12-define-learning-depth-and-evidence-contract.md) — require a question, concept, bounded inspect step, evidence ceiling, and one local deterministic check; deepen Braking, Aero, then Strategy/Tyres before the remaining modules.
- [Choose the release artifact and data publication contract](issues/13-choose-release-artifact-and-publication-contract.md) — bridge with one verified Netlify artifact; migrate to a Pages shell build-stamped to one hash-verified immutable R2 release prefix, with Pages promotion and rollback only after asset rights review.
- [Define latest, freshness, provenance, and rollback semantics](issues/14-define-latest-freshness-and-provenance.md) — feature only a fully verified completed race promoted within 168 hours, expose exact provenance and release identity, and fail closed to historical, stale, or unavailable states.
- [Choose the staged service boundary](issues/15-choose-staged-service-boundary.md) — keep the pilot static and browser-local with direct immutable assets; add metadata, accounts, measurement, or true-live services only after their explicit evidence and ownership gates pass.
- [Choose the true live product and operating contract](issues/16-choose-true-live-product-contract.md) — defer true live until written rights, source terms, owners, cost limits, and production acceptance exist; Historical Race Desk remains the only timing simulation.
- [Choose the progress value exchange](issues/17-choose-progress-value-exchange.md) — keep one validated 90-day browser-local learning trail plus explicit Read/Completed module states; accounts wait for demonstrated cross-device value.
- [Define product measurement and privacy](issues/18-define-product-measurement-and-privacy.md) — use existing Netlify aggregate reports only for a 30-day pilot; no custom events or client telemetry until a separate procurement, notice, consent, lifecycle, and allowlist decision approves them.
- [Lock accessibility, performance, resilience, and release gates](issues/19-lock-quality-and-release-gates.md) — block promotion on executable source, artifact, data, browser, security, parity, rollback, and truthfulness gates; warnings require named, expiring release evidence.
- [Sequence the release train and graduate implementation tickets](issues/20-sequence-release-train.md) — ship a hardened immutable baseline before the three-brief Dashboard pilot, with tickets 21–32 as atomic, dependency-ordered, independently verified slices.
- [Make Modelview self-contained and accessible](issues/21-make-modelview-self-contained-and-accessible.md) — local Draco delivery, correct keyboard and pressed-state controls, reduced-motion behavior, recovery fallbacks, and strict production-artifact browser acceptance now pass.
- [Make Replay keyboard-complete and recoverable](issues/22-make-replay-keyboard-complete-and-recoverable.md) — pointer-equivalent keyboard driver selection, explicit optional degradation, independent concurrent chunk recovery, cached-context preservation, and stable focus now pass deterministic source and production-artifact browser acceptance.
- [Produce and audit one releasable pack tree](issues/23-produce-and-audit-releasable-pack-tree.md) — marker-owned isolated candidates now fail closed across provenance, freshness, pack, replay, mirror, model, and artifact identity checks; production inputs remain blocked until their missing evidence is regenerated truthfully.
- [Retire duplicate full-replay delivery](issues/24-retire-duplicate-full-replay-delivery.md) — Replay and Historical Race Desk now consume strict metadata and ordered bounded chunks only; full-payload delivery paths are removed while playback, recovery, release-audit, and browser gates pass.

## Not yet specified

- Concrete search index, true-live ingestion, account synchronization, or client-event analytics schemas remain unspecified because their product and proof triggers did not pass.
- Post-pilot expansion beyond the three approved briefs remains unspecified until the release and 30-day aggregate review establish a concrete need.

## Out of scope

- New Learn topics before the existing Car, Aero, Tyres, Braking, Setup, and Strategy modules meet the agreed quality bar.
- Calling the existing replay-backed socket or `/race-desk` true live timing.
- Presenting illustrative wind outputs as quantitative or validated CFD.
- Fetching raw OpenF1 telemetry in the browser or proxying large replay packs through a metadata Worker.
- A wholesale rewrite, new UI framework, or service decomposition without evidence that existing seams cannot hold.
- Personalized recommendations before a useful, privacy-safe progress model exists.
- Production credential changes or deployment actions during planning and prototyping.
