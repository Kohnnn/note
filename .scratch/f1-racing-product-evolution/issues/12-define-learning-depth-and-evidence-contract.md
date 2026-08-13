# Define the learning depth and evidence contract

Type: grilling
Status: resolved
Blocked by: 06, 07, 10

## Question

What makes each of the existing six Learn modules complete enough to teach rather than merely mark as read? Lock a reusable lesson anatomy, prerequisite race literacy, terminology support, evidence and citation requirements, uncertainty language, learner check, completion semantics, bidirectional Replay or Modelview links, editorial owner, and the order in which current modules deepen.

## Answer

Keep the six existing modules and the static-first, local-progress model. A Learn module teaches when it lets a learner name the concept, inspect an appropriately bounded example, distinguish observation from explanation, and answer one small evidence-linked check. It does not need a new topic, account, content system, or graded assessment.

### Reusable lesson anatomy

Every module uses this minimum sequence:

1. **Question and prerequisites:** State the engineering question, the expected outcome, and only the terms needed before reading.
2. **Concept:** Explain one mechanism in plain language, then define its terms where first used. General explanation is explicitly separate from any race-session claim.
3. **Inspect:** Link to one exact Replay state when evidence supports the concept; otherwise use Modelview only for component orientation. Show the relevant `Recorded`, `Derived`, or `Unknown` label beside the claim.
4. **Evidence ceiling:** State what the available evidence establishes, what it does not establish, and the missing inputs. Do not convert sampled controls, static model copy, estimates, or illustrations into measured session facts.
5. **Check and next step:** Ask one answerable prompt tied to the preceding concept or evidence; then offer the preserved Replay return and, when useful, a named Modelview focus or the next Learn module.

A module may be conceptual without a session case. In that case its inspect step must say it is a general explanation and omit a session conclusion rather than manufacture one.

### Literacy and terminology

Car is the only entry prerequisite. It introduces the car as interacting systems and defines the baseline vocabulary needed across the trail: power unit, chassis, aero surfaces, suspension, tyres, brakes, grip, downforce, drag, stint, sector, and safety-car or virtual-safety-car state. Other modules introduce their own terms at first use and expose a local plain-language definition in context; terms must not require a separate glossary route.

Do not require telemetry fluency, named corners, 3D navigation, advanced mathematics, or prior racing fandom. When a Replay reading is required, explain the displayed field, its sampling or coverage boundary, and whether it is recorded or derived before asking the learner to use it.

### Evidence, citation, and uncertainty

- General engineering claims cite stable, inspectable source material in a module source section. A citation identifies the source, the claim it supports, and any relevant scope or date.
- Session-specific claims cite the exact Replay URL, pack or timeline anchor, provenance, coverage or sampling qualifier, and claim class. Derived claims name the derivation; `Unknown` names the missing evidence.
- The three pilot lessons use only the approved Monza braking, Mexico whole-lap, and Zandvoort safety-car evidence. Their stated forbidden claims and missing inputs remain binding.
- Modelview is static component context, not session measurement. The wind visualizer remains an estimate-based educational aid, not validated CFD.
- Use bounded language such as “records,” “shows in these samples,” “is compatible with,” and “cannot establish.” Do not use causal, literal, or performance language beyond the cited evidence.

### Learner check and completion

Each module has one accessible, deterministic check with its answer derivable from that module: identify a defined term, separate a `Recorded` observation from a `Derived` interpretation, or select the evidence ceiling. It must not demand guessing an unmeasured setup, intent, or causal outcome.

`Read` remains an explicit browser-local acknowledgement of having viewed a module. `Completed` means the learner explicitly submits the module check successfully; it means the lesson activity was completed, not that the learner has mastered the subject. Never infer either state from scroll depth, time on page, Modelview interaction, Replay playback, or analytics. Keep both states local to the existing allowlisted six-module progress map; no account, upload, hidden history, or new telemetry is authorized.

### Cross-surface handoffs

Replay links into Learn carry the validated Replay URL and the relevant focus. Learn links back to that exact Replay state and, where useful, to the named Modelview focus. Modelview returns to the preserved Replay state and repeats its static-reference disclosure. The learner can always take the 2D Replay path; 3D and Modelview are optional and cannot gate reading, checking, or completion.

### Editorial authority and deepening order

The designated editorial owner approves module copy, citations, checks, and evidence ceilings before publication. Deterministic, versioned templates may assemble allowlisted facts only; generation fails closed without the required anchor, provenance, coverage, citation, claim class, or uncertainty text. Free-form generated interpretation cannot publish.

Keep the existing learner sequence: Car, Aero, Tyres, Braking, Setup, Strategy. Deepen in evidence priority: Braking through Monza first; Aero through Mexico second; Strategy and Tyres through Zandvoort third; then strengthen Car as orientation and Setup as an explicit hypothesis-and-missing-measurements lesson. Do not add topics before all six meet this contract.

### Acceptance checks

- [ ] Each of Car, Aero, Tyres, Braking, Setup, and Strategy has all five anatomy sections, first-use definitions, source citations, one accessible check, and honest local `Read`/`Completed` labels.
- [ ] Every session claim resolves to an exact approved Replay anchor with visible claim class, provenance, coverage, uncertainty, and missing-input boundary; invalid or absent fields fail publishing.
- [ ] The Monza, Mexico, and Zandvoort lessons preserve their approved evidence limits and do not make forbidden causal, setup, tyre, aero, or strategy claims.
- [ ] Replay-to-Learn-to-Replay and Replay-to-Modelview-to-Replay retain the validated Replay context; optional 3D never blocks the equivalent 2D route.
- [ ] Editorial approval and deterministic validation cover each published lesson; browser-local progress works without network or account dependency.
