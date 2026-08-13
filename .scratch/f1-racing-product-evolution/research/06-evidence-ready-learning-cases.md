# Evidence-ready engineering learning cases

Status: resolved research. Scope is the local indexed static packs only; no network, credentials, generated-data changes, tickets, or map changes.

## Decision rule

A case qualifies only when the public pack contains an exact route plus at least two independently useful anchors among recorded lap data, sampled telemetry, GPS-positioned replay frames, stint boundaries, race control, weather, or a clearly-labelled derivation. “Engineering” means a learner can inspect the measurement and then connect it to one of the existing Learn concepts and, where available, a Modelview hotspot. It does **not** mean the pack proves an unobserved car setup, aerodynamic load, tyre temperature, driver intent, or causal strategy result.

The static route is `/replay/{season}/{grandPrix}/{session}`. The route server loads `summary.json`, `manifest.json`, replay metadata, and its first chunk, then progressively loads optional compare, stint, driver, lap, strategy, replay-lap, and race-control packs: `f1-racing/apps/web/src/app/replay/[season]/[grandPrix]/[session]/page.tsx:43-75`; `f1-racing/apps/web/src/components/replay/replay-route-client.tsx:473-527`. The data contracts distinguish recorded frame fields from derived compare and strategy data: `f1-racing/apps/web/src/lib/data.ts:486-603`; `f1-racing/apps/web/src/lib/data.ts:64-177`.

### Dataset coverage that supports the shortlist

- `seasons.json` indexes 82 current session manifests and is generated locally at `2026-05-03T17:00:00.000Z`: `f1-racing/apps/web/public/data/manifests/seasons.json:1-6`.
- The replay export retains OpenF1 source identity, `frameChunkIndex`, replay laps, race control, frame telemetry, position-source labels, tyre state, and weather: `f1-racing/apps/web/src/lib/data.ts:486-611`.
- Replay itself identifies GPS versus projected timing positions rather than hiding the distinction: `f1-racing/apps/web/src/components/replay/ReplayView.tsx:525-538`.
- Compare annotations are derived from sampled telemetry: first brake application at `brake >= 10`, minimum speed, and throttle pickup at `throttle >= 60` with brake `<= 5`: `f1-racing/pipeline/export/src/build-openf1-session-pack.mjs:328-395`. They are useful navigation and comparison aids, not independently adjudicated driving analysis.
- Stint pace is an unadjusted first-to-last lap slope; it includes ambient race effects unless the editorial work excludes them: `f1-racing/pipeline/export/src/build-openf1-session-pack.mjs:447-497`. Replay UI already warns that pit-cycle reads are local observations, not measured pit loss or causal undercut claims: `f1-racing/apps/web/src/components/replay/replay-insights.tsx:411-413`.
- The shipped strategy pack is explicitly derived. Its pit-loss and SC/VSC values are formulae based on maximum tyre age, and its windows count exported stint windows; do not present either as measured operational timing or team decision support: `f1-racing/pipeline/export/src/build-openf1-session-pack.mjs:398-444`; `f1-racing/apps/web/src/components/replay/replay-insights.tsx:305-307,487-489`.

## Ranked first-release set

Release the first three together: each is short, has a stable static route, a named learner task, precise anchors, a distinct Learn module, and avoids the same unobserved-cause trap. Cases 4–10 are defensible backlog, ordered by editorial value over added effort.

| Rank | Brief | Why it is release-ready |
| --- | --- | --- |
| 1 | **Monza qualifying: braking zone versus exit** | Exact two-lap telemetry, sector split, brake/throttle/gear samples, DRS state, and a brakes hotspot make one compact learn-by-comparison case. |
| 2 | **Mexico race: whole-lap advantage without a single magic corner** | Same-lap pair with material, all-sector deltas and recorded DRS/speed telemetry teaches evidence discipline before causal aero claims. |
| 3 | **Zandvoort race: safety-car interruption changes the question** | Exact flag/SC/restart chronology plus tyre-boundary evidence makes the provenance and uncertainty lesson concrete. |
| 4 | Imola race: VSC versus full safety car | Cleanly contrasts the two recorded control states without calling the strategy estimate a measured saving. |
| 5 | Mexico race: a long tyre run is a pace-shape observation | 34- and 37-lap recorded windows provide a strong Tyres lesson if race-control laps are excluded. |
| 6 | Las Vegas qualifying: wet-track compound context | Weather summary, wet/intermediate stints, and a lap comparison support a limited conditions-and-observations lesson. |
| 7 | Monza qualifying: DRS is recorded, rear-wing load is not | Strong “what telemetry can and cannot tell you” Aero/Modelview case. |
| 8 | Imola race: incident-state timeline versus lap-time interpretation | Race-control timeline teaches why raw lap comparison must be segmented around neutralisations. |
| 9 | Zandvoort race: restart and tyre-sequence timeline | Builds from the same high-quality pack, but only after the SC foundation case avoids redundant first-release content. |
| 10 | Mexico race: hard evidence for a setup question is absent | A deliberately bounded Setup case can teach an engineering test plan, not infer setup. Publish only if the editorial format accepts an explicit “cannot conclude” outcome. |

## The ten accepted briefs

### 1. Monza qualifying — braking zone versus exit

- **Learner question:** On the selected fastest laps, where does VER gain or lose time to NOR, and what do brake onset, minimum speed, throttle pickup, gear, and DRS actually establish?
- **Exact session and route:** 2025 Italian Grand Prix, Qualifying, VER lap 17 versus NOR lap 20; `/replay/2025/italian-grand-prix/qualifying?tab=compare&drivers=VER,NOR#analysis`.
- **Recorded or derived evidence:** Recorded lap pair and sector deltas: VER leads S1 by 116 ms, NOR S2 by 45 ms, VER S3 by 6 ms: `f1-racing/apps/web/public/data/packs/seasons/2025/italian-grand-prix/qualifying/compare/ver-nor.json:3-29`. VER’s trace reaches 348 km/h with DRS code 12 before 100% braking at lap ratio 0.105: `f1-racing/apps/web/public/data/packs/seasons/2025/italian-grand-prix/qualifying/compare/ver-nor.json:59-181`. The comparison annotation is derived from the sampled trace, not a named-corner measurement: `f1-racing/pipeline/export/src/build-openf1-session-pack.mjs:328-395`.
- **Anchor:** VER lap 17 / NOR lap 20; S1 `0.000–0.3333`, primary braking probe near VER ratio `0.1053`; Replay compare tab.
- **Learn / Modelview:** **Braking** (`f1-racing/apps/web/src/app/learn/modules.ts:47-59`); **Brake ducts + brake energy** Modelview focus, which explicitly directs brake percentage, minimum speed, gear, and throttle pickup: `f1-racing/apps/web/src/components/model-viewer/focus-points.ts:87-110`.
- **Provenance / coverage:** OpenF1-derived samples; comparison telemetry is downsampled to a nominal 3.7 Hz: `f1-racing/pipeline/export/src/build-openf1-session-pack.mjs:283-325`. Use the displayed source and position-coverage chips, not an assumption of continuous ground truth: `f1-racing/apps/web/src/components/replay/ReplayView.tsx:1615-1616`.
- **Uncertainty and forbidden overclaims:** Do not call the first `brake >= 10` sample the literal brake point; do not infer brake balance, disc temperature, MGU-K deployment, line, or driver confidence. Do not repeat the generated “likely” event copy as fact.
- **Missing inputs:** Pedal calibration and sample-rate validation; track-position/corner mapping for the exact braking zone; brake temperatures, pressure, balance, energy recovery, steering, and video.
- **Editorial effort:** **S** — one annotated compare panel, an evidence/claim split, and three prompts.

### 2. Mexico race — whole-lap advantage without a single magic corner

- **Learner question:** How should a learner read a lap that is faster in every timing sector without inventing a single-cause engineering explanation?
- **Exact session and route:** 2025 Mexico City Grand Prix, Race, NOR versus LEC, both lap 45; `/replay/2025/mexico-city-grand-prix/race?tab=compare&drivers=NOR,LEC#analysis`.
- **Recorded or derived evidence:** NOR leads S1 by 337 ms, S2 by 133 ms, and S3 by 354 ms: `f1-racing/apps/web/public/data/packs/seasons/2025/mexico-city-grand-prix/race/compare/nor-lec.json:3-29`. NOR’s recorded trace shows DRS states, speed, throttle, brake, and gear, including 344 km/h at ratio `0.1106` before a 100% brake sample at `0.1512`: `f1-racing/apps/web/public/data/packs/seasons/2025/mexico-city-grand-prix/race/compare/nor-lec.json:157-217`.
- **Anchor:** Lap 45; three explicit sector windows (`0–0.3496`, `0.3496–0.7416`, `0.7416–1.0`); compare tab.
- **Learn / Modelview:** **Aero** (`f1-racing/apps/web/src/app/learn/modules.ts:17-29`), then **Rear wing + wake** focus, whose watch list asks learners to combine DRS, top speed, throttle, and interval movement: `f1-racing/apps/web/src/components/model-viewer/focus-points.ts:62-85`.
- **Provenance / coverage:** Lap and car-data samples were exported from OpenF1; each compare trace is an approximate 3.7 Hz sample: `f1-racing/pipeline/export/src/build-openf1-session-pack.mjs:283-325`.
- **Uncertainty and forbidden overclaims:** Say “NOR recorded the lower time in each sector,” not “NOR had lower drag,” “more downforce,” “better setup,” or “a superior rear wing.” DRS code is a recorded state, not a force or drag measurement. Do not equate sector windows with named corners.
- **Missing inputs:** Wing level, drag/downforce, GPS-to-corner verification, steering, ride height, wind at car location, traffic state, and video.
- **Editorial effort:** **S** — reusable “observed / compatible hypotheses / missing data” template.

### 3. Zandvoort race — safety-car interruption changes the question

- **Learner question:** What evidence changes when a race is neutralised, and why should a learner stop comparing raw pace across the interruption?
- **Exact session and route:** 2025 Dutch Grand Prix, Race; `/replay/2025/dutch-grand-prix/race?tab=racecontrol#analysis`.
- **Recorded or derived evidence:** Double-yellow and yellow messages occur on lap 23, then “SAFETY CAR DEPLOYED” at T+1,720,936 ms: `f1-racing/apps/web/public/data/packs/seasons/2025/dutch-grand-prix/race/replay.race-control.json:111-145`. The pack records recovery vehicle on track on lap 24, SC-in-this-lap on lap 26, track clear, and DRS enabled on lap 28: `f1-racing/apps/web/public/data/packs/seasons/2025/dutch-grand-prix/race/replay.race-control.json:165-216`. The race’s stint data covers PIA/NOR’s first 23 laps before the interruption; verify exact tyre boundaries from `stints.json` rather than narrating a stop cause.
- **Anchor:** Lap 23 / T+1,720.936 s deploy; lap 26 / T+2,027.936 s SC-in; lap 28 / T+2,189.936 s DRS enabled.
- **Learn / Modelview:** **Strategy** (`f1-racing/apps/web/src/app/learn/modules.ts:77-89`) and **Tyres** (`f1-racing/apps/web/src/app/learn/modules.ts:32-44`); **Tyres + contact patch** focus is relevant only as a viewing prompt for lap progression and exits: `f1-racing/apps/web/src/components/model-viewer/focus-points.ts:112-135`.
- **Provenance / coverage:** Race control is a recorded OpenF1 timeline produced by timestamp subtraction and filtered to session-relative non-negative times: `f1-racing/pipeline/export/src/build-openf1-replay-pack.mjs:254-267`. Replay frame SC state is derived from that timeline: `f1-racing/pipeline/export/src/build-openf1-replay-pack.mjs:385-423`.
- **Uncertainty and forbidden overclaims:** Do not say the SC “made a pit stop cheap,” that any driver “took advantage,” or that a pit occurred because of the SC without correlating recorded boundary and replay anchor. The displayed SC/VSC pit-loss number is an estimate, not a measured stop loss: `f1-racing/apps/web/src/components/replay/replay-insights.tsx:487-489`.
- **Missing inputs:** Pit-lane entry/exit time, actual stationary time, team radio, tyre condition, queueing, official strategy record, and a validated causal counterfactual.
- **Editorial effort:** **M** — timeline callouts plus a hard stop at the uncertainty boundary.

### 4. Imola race — VSC versus full safety car

- **Learner question:** How do VSC and SC states differ in a replay evidence trail, and which comparisons remain valid during each?
- **Exact session and route:** 2025 Emilia-Romagna Grand Prix, Race; `/replay/2025/emilia-romagna-grand-prix/race?tab=racecontrol#analysis`.
- **Recorded or derived evidence:** Yellow sector 8 and VSC deployment are recorded on lap 29, followed by VSC ending and track clear on lap 31: `f1-racing/apps/web/public/data/packs/seasons/2025/emilia-romagna-grand-prix/race/replay.race-control.json:39-117`. A later sector-8 yellow and full SC deployment occur on lap 46, with SC-in-this-lap on lap 53 and track clear: `f1-racing/apps/web/public/data/packs/seasons/2025/emilia-romagna-grand-prix/race/replay.race-control.json:192-288`.
- **Anchor:** VSC T+2,340.939 s/lap 29 to T+2,549.939 s/lap 31; SC T+3,773.939 s/lap 46 to T+4,688.939 s/lap 53.
- **Learn / Modelview:** **Strategy**; no Modelview focus is needed.
- **Provenance / coverage:** Recorded race-control messages; UI category and story-step logic selects non-DRS, non-other messages as observed milestones: `f1-racing/apps/web/src/components/replay/ReplayView.tsx:1164-1177`.
- **Uncertainty and forbidden overclaims:** Do not infer a delta target, tyre warm-up, restart quality, or pit-loss advantage from state labels alone. Do not compare raw lap times through either neutralisation to establish degradation or setup performance.
- **Missing inputs:** Official deltas, pit crossing timestamps, restart rules/context, tyre temperatures, and verified laps segmented by green/VSC/SC status.
- **Editorial effort:** **M** — one dual-band timeline; no new data needed.

### 5. Mexico race — long-run tyre pace shape

- **Learner question:** What can a long recorded stint say about pace evolution, and what can it not say about degradation?
- **Exact session and route:** 2025 Mexico City Grand Prix, Race, NOR; `/replay/2025/mexico-city-grand-prix/race?tab=stints&drivers=NOR#analysis`.
- **Recorded or derived evidence:** NOR’s `stints.json` has a SOFT run on laps 1–34 (average 82.739 s, +0.031 s/lap) and MEDIUM on laps 35–71 (average 82.857 s, +0.044 s/lap); query the local pack with the validation command below. The same session has an exact lap-45 NOR/LEC comparison: `f1-racing/apps/web/public/data/packs/seasons/2025/mexico-city-grand-prix/race/compare/nor-lec.json:3-29`.
- **Anchor:** NOR stint boundaries laps 1, 35, and 71; lap 45 compare as a single in-stint measurement.
- **Learn / Modelview:** **Tyres**; **Tyres + contact patch** focus (`f1-racing/apps/web/src/components/model-viewer/focus-points.ts:112-135`).
- **Provenance / coverage:** Compounds, tyre ages, lap boundaries, and lap-time arrays are recorded inputs; average and trend are derived as the mean and endpoint slope: `f1-racing/pipeline/export/src/build-openf1-session-pack.mjs:447-497`.
- **Uncertainty and forbidden overclaims:** Call the slope “recorded-lap pace trend,” not rubber degradation. Exclude/mark SC, VSC, traffic, in/out laps, weather evolution, and fuel-burn confounders before publishing a degradation narrative. Do not assert a compound-to-compound performance delta from the two aggregate averages.
- **Missing inputs:** Tyre temperature/pressure/wear, fuel mass, traffic/clean-air classification, green-flag-only segmentation, and pit transition/out-lap labels.
- **Editorial effort:** **M** — requires an editorial exclusion overlay, not upstream data.

### 6. Las Vegas qualifying — wet-track compound context

- **Learner question:** What is the evidence for saying this was a wet qualifying context, and why does that still not validate a tyre-performance hierarchy?
- **Exact session and route:** 2025 Las Vegas Grand Prix, Qualifying; `/replay/2025/las-vegas-grand-prix/qualifying?tab=stints#analysis`.
- **Recorded or derived evidence:** Summary records 12 °C air, 13 °C track, and 100% rain risk: `f1-racing/apps/web/public/data/packs/seasons/2025/las-vegas-grand-prix/qualifying/summary.json:1-35`. The qualifying compare pack is NOR versus VER and retains each selected-lap trace; verify actual WET/INTERMEDIATE stint windows directly from the pack before layout.
- **Anchor:** Session weather summary; selected-lap compare; stint boundaries by driver.
- **Learn / Modelview:** **Tyres** and **Strategy**; no Modelview focus required.
- **Provenance / coverage:** Weather summary is derived as mean air/track temperature and maximum rainfall signal: `f1-racing/pipeline/export/src/build-openf1-session-pack.mjs:52-67`. The replay weather timeline records Boolean rainfall and wind per sampled state: `f1-racing/apps/web/src/lib/data.ts:510-517`.
- **Uncertainty and forbidden overclaims:** “Rain risk 100%” is this exporter’s maximum sampled rainfall representation, not a forecast probability or a track-wetness measurement. Do not say an intermediate was faster *because* it was intermediate without controlling run timing, traffic, red/yellow flags, and track evolution.
- **Missing inputs:** Surface-water depth, tyre temperatures, run plan, official session segment status, traffic, and continuous weather station data.
- **Editorial effort:** **M** — compelling visual story, but needs careful labels.

### 7. Monza qualifying — recorded DRS, unmeasured rear-wing force

- **Learner question:** What can DRS state and speed tell us about a rear-wing trade-off, and where must the learner stop?
- **Exact session and route:** Same as brief 1; `/replay/2025/italian-grand-prix/qualifying?tab=compare&drivers=VER,NOR#analysis`.
- **Recorded or derived evidence:** VER has DRS code 12 while accelerating from 323 to 348 km/h in the early recorded trace: `f1-racing/apps/web/public/data/packs/seasons/2025/italian-grand-prix/qualifying/compare/ver-nor.json:59-145`; S1 is 116 ms faster: `f1-racing/apps/web/public/data/packs/seasons/2025/italian-grand-prix/qualifying/compare/ver-nor.json:11-17`.
- **Anchor:** VER lap 17, ratios `0.0017–0.0956`, before braking begins at `0.1053`.
- **Learn / Modelview:** **Aero**; **Rear wing + wake** focus, whose own text frames DRS as a drag-versus-stability story: `f1-racing/apps/web/src/components/model-viewer/focus-points.ts:62-85`.
- **Provenance / coverage:** DRS is retained as a telemetry field: `f1-racing/apps/web/src/lib/data.ts:93-122`; Modelview’s airflow copy is static reference text, while its solver disclaimer still does not turn replay data into validated CFD: `f1-racing/apps/web/src/components/model-viewer/car-model-browser.tsx:756-764`.
- **Uncertainty and forbidden overclaims:** Do not translate DRS code into flap angle, drag reduction, downforce loss, wing specification, or a measured top-speed advantage. Do not use Modelview’s static airflow description as evidence for this session.
- **Missing inputs:** DRS-state decoding contract, wing geometry/angle, aerodynamic coefficients, wind-relative speed, ride height, and force balance.
- **Editorial effort:** **S** — a valuable explicit anti-overclaim sidebar.

### 8. Imola race — incident state before lap-time interpretation

- **Learner question:** How should an analyst segment evidence around a local yellow, VSC, and SC before comparing pace or tyre trends?
- **Exact session and route:** 2025 Emilia-Romagna Grand Prix, Race; `/replay/2025/emilia-romagna-grand-prix/race?tab=racecontrol#analysis`.
- **Recorded or derived evidence:** The race-control timeline supplies exact state boundaries for VSC (lap 29) and SC (lap 46) as in brief 4: `f1-racing/apps/web/public/data/packs/seasons/2025/emilia-romagna-grand-prix/race/replay.race-control.json:39-117,192-288`. The replay’s state builder maps those messages to `VSC`, `SC`, `YELLOW`, and `GREEN`: `f1-racing/pipeline/export/src/build-openf1-replay-pack.mjs:340-423`.
- **Anchor:** Before VSC, VSC, post-VSC; before SC, SC, post-SC — no cross-band aggregate.
- **Learn / Modelview:** **Tyres** then **Strategy**; no Modelview focus required.
- **Provenance / coverage:** Recorded messages plus deterministic replay-state derivation.
- **Uncertainty and forbidden overclaims:** Do not calculate a single uninterrupted degradation line across neutralisation bands; do not call sector 8 the crash location or assign blame beyond the literal race-control message.
- **Missing inputs:** Green-only lap-quality flag, traffic state, pit/outlap tags, race engineer data, and a vetted editorial segmentation rule.
- **Editorial effort:** **S** — reusable method card after brief 4 assets exist.

### 9. Zandvoort race — restart and tyre-sequence timeline

- **Learner question:** Which parts of a “restart on a new tyre” story are recorded, derived, and unknown?
- **Exact session and route:** 2025 Dutch Grand Prix, Race; `/replay/2025/dutch-grand-prix/race?tab=stints&drivers=PIA,NOR#analysis`.
- **Recorded or derived evidence:** SC begins lap 23 and DRS resumes lap 28: `f1-racing/apps/web/public/data/packs/seasons/2025/dutch-grand-prix/race/replay.race-control.json:138-216`. The stints pack records compound, start/end laps, tyre age, lap-time list, and derived pace trend; its UI makes these visible: `f1-racing/apps/web/src/components/replay/replay-insights.tsx:64-112`.
- **Anchor:** SC deploy lap 23, recorded stint boundary/boundaries, DRS enabled lap 28.
- **Learn / Modelview:** **Strategy** and **Tyres**; **Tyres + contact patch** focus only as an observational bridge.
- **Provenance / coverage:** Recorded race control and stint inputs; derived average/trend. The replay pit-cycle view supplies seekable before/after anchors when complete, but describes its values as replay-local: `f1-racing/apps/web/src/components/replay/replay-insights.tsx:429-489`.
- **Uncertainty and forbidden overclaims:** Do not call the result an undercut/overcut win, measure pit loss from the strategy pack, or say a tyre “switched on” without temperature/traction evidence. Do not treat frame position as continuous GPS unless the route reports GPS coverage.
- **Missing inputs:** Full pit-cycle outcome for selected drivers, actual stop timing, tyre temperatures, traffic, team intent, and green-lap pace window.
- **Editorial effort:** **M** — compose after brief 3; do not duplicate its basic SC explanation.

### 10. Mexico race — setup question with an evidence ceiling

- **Learner question:** Can the NOR-versus-LEC lap-45 comparison prove a wing-angle, brake-bias, ride-height, or suspension setup difference?
- **Exact session and route:** 2025 Mexico City Grand Prix, Race, NOR vs LEC lap 45; `/replay/2025/mexico-city-grand-prix/race?tab=compare&drivers=NOR,LEC#analysis`.
- **Recorded or derived evidence:** All three sector deltas and sampled controls are present: `f1-racing/apps/web/public/data/packs/seasons/2025/mexico-city-grand-prix/race/compare/nor-lec.json:3-29,51-260`. The existing Setup module states that setup is a track-dependent compromise involving wing angle, ride height, stiffness, and brake bias: `f1-racing/apps/web/src/app/learn/modules.ts:62-74`.
- **Anchor:** Both lap 45; compare windows S1/S2/S3; no Modelview focus is relevant enough to claim a setup measurement. The Setup Learn page has a top-view Ferrari model embed, not validated configuration data: `f1-racing/apps/web/src/app/learn/[slug]/page.tsx:29-35,73-90`.
- **Learn / Modelview:** **Setup**; Modelview is optional orientation only.
- **Provenance / coverage:** Recorded lap/control samples, derived sector aggregation, static conceptual Learn content.
- **Uncertainty and forbidden overclaims:** **The correct conclusion is no.** Do not attribute the 824 ms aggregate sector advantage to any setup parameter or even a car-versus-driver effect. Publish this only as a “form a testable hypothesis and list missing measurements” brief.
- **Missing inputs:** Setup sheets, cornering/aero maps, ride heights, damper traces, brake bias, tyre temperatures, steering, wind, fuel, traffic, and controlled same-driver/same-car experiments.
- **Editorial effort:** **S** if the product accepts a negative result; otherwise hold it.

## Rejected cases

| Candidate | Rejection | What would graduate it |
| --- | --- | --- |
| Car-component performance case | The **Car** module has useful subsystem orientation (`f1-racing/apps/web/src/app/learn/modules.ts:3-15`), but there is no component-level session telemetry, model-to-sensor binding, or validated system-performance pack. | Instrumented component data, car specification/provenance, or a deliberately non-performance orientation lesson. |
| Modelview wind-tunnel-to-race proof | Modelview says its focus airflow text is static reference text and its wind tunnel is a separate 2D solver: `f1-racing/apps/web/src/components/model-viewer/car-model-browser.tsx:756-764`. It cannot validate a session aero claim. | Session-specific geometry, boundary conditions, mesh/solver validation, and force-coefficient provenance. |
| Monaco “best pit window” | The shipped strategy output is a formula and popularity grouping, not a recorded recommendation: `f1-racing/pipeline/export/src/build-openf1-session-pack.mjs:398-444`; Monaco visibly includes lap-1 windows: `f1-racing/apps/web/public/data/packs/seasons/2025/monaco-grand-prix/race/strategy.json:1-31`. | Recorded stops, pit-cycle outcomes, traffic/SC state, and a documented strategy model. |
| Replay track-map overtaking proof | Frame coordinates can be GPS or synthetic fallback: `f1-racing/apps/web/src/lib/data.ts:503-507`; the UI exposes that coverage distinction: `f1-racing/apps/web/src/components/replay/ReplayView.tsx:525-538`. | Continuous GPS coverage, official timing/order transitions, validated pass-event detection, and video/corner mapping. |
| Named-corner handling diagnosis from the speed profile | The corner-speed panel bins GPS-projected samples and explicitly offers an honest alternative when named-corner attribution is absent: `f1-racing/apps/web/src/components/replay/replay-insights.tsx:162-267`. | Verified circuit corner coordinates aligned to telemetry and sufficient sampling. |

## Runnable local validation

Run from `C:\Users\Admin\Desktop\PersonalWebsite\interactive-note\f1-racing`. These commands only read and assert static generated data.

```powershell
node --input-type=module -e 'import fs from "node:fs"; import assert from "node:assert/strict"; const d="apps/web/public/data/packs/seasons/2025/italian-grand-prix/qualifying"; const c=JSON.parse(fs.readFileSync(`${d}/compare/ver-nor.json`,"utf8")); assert.deepEqual(c.drivers,["VER","NOR"]); assert.deepEqual(c.laps,[17,20]); assert.deepEqual(c.deltaSections.map(x=>x.deltaMs),[116,45,6]); assert.equal(c.telemetry.left.points.some(x=>x.speed===348&&x.drs===12),true); console.log("Monza compare evidence OK");'

node --input-type=module -e 'import fs from "node:fs"; import assert from "node:assert/strict"; const d="apps/web/public/data/packs/seasons/2025/dutch-grand-prix/race"; const rc=JSON.parse(fs.readFileSync(`${d}/replay.race-control.json`,"utf8")); const pick=m=>rc.find(x=>x.message===m); assert.deepEqual([pick("SAFETY CAR DEPLOYED")?.lapNumber,pick("SAFETY CAR DEPLOYED")?.t],[23,1720936]); assert.deepEqual([pick("SAFETY CAR IN THIS LAP")?.lapNumber],[26]); assert.equal(rc.some(x=>x.message==="DRS ENABLED"&&x.lapNumber===28),true); console.log("Zandvoort SC chronology OK");'

node --input-type=module -e 'import fs from "node:fs"; import assert from "node:assert/strict"; const d="apps/web/public/data/packs/seasons/2025/emilia-romagna-grand-prix/race"; const rc=JSON.parse(fs.readFileSync(`${d}/replay.race-control.json`,"utf8")); const e=m=>rc.find(x=>x.message===m); assert.deepEqual([e("VIRTUAL SAFETY CAR DEPLOYED")?.lapNumber,e("VIRTUAL SAFETY CAR ENDING")?.lapNumber],[29,31]); assert.deepEqual([e("SAFETY CAR DEPLOYED")?.lapNumber,e("SAFETY CAR IN THIS LAP")?.lapNumber],[46,53]); console.log("Imola neutralisation chronology OK");'

node --input-type=module -e 'import fs from "node:fs"; import assert from "node:assert/strict"; const d="apps/web/public/data/packs/seasons/2025/mexico-city-grand-prix/race"; const s=JSON.parse(fs.readFileSync(`${d}/stints.json`,"utf8")); const n=s.drivers.find(x=>x.driverCode==="NOR").stints; assert.deepEqual(n.slice(-2).map(x=>[x.compound,x.lapStart,x.lapEnd,x.trendPerLap]),[["SOFT",1,34,0.031],["MEDIUM",35,71,0.044]]); console.log("Mexico NOR long-run evidence OK");'

node --input-type=module -e 'import fs from "node:fs"; import assert from "node:assert/strict"; const d="apps/web/public/data/packs/seasons/2025/las-vegas-grand-prix/qualifying"; const s=JSON.parse(fs.readFileSync(`${d}/summary.json`,"utf8")); assert.deepEqual(s.weatherSummary,{airTempC:12,trackTempC:13,rainRiskPct:100}); console.log("Las Vegas wet-context evidence OK");'
```

The checks deliberately do not validate a causal conclusion. They validate that each proposed brief still has the exact recorded/derived anchor its copy must cite.

## Implementation floor

No new upstream data is needed for ranks 1–9. The minimum first release is three editorial briefs using existing Replay deep links, existing Learn routes, Modelview deep links with `?focus=brakes`, `?focus=rear-wing`, or `?focus=tyres`, and the source/derived/unknown labels above. Do not add a new content model until three hand-authored briefs prove the interface.
