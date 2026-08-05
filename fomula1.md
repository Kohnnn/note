# Formula 1 Interactive Explanation Plan

## Purpose

This document tracks the planning and build direction for a new original route inside `interactive-explanation/`.

Working route:

- slug: `formula-1-racing`
- title: `Formula 1 Racing`
- product surface: `C:\Users\Admin\Desktop\PersonalWebsite\interactive-note\interactive-explanation`

This route must be strictly about modern Formula 1 as an engineering system.

It should use the same shared story shell framework already used by the longform engineering routes, especially:

- `interactive-explanation/mechanical-watch/`
- `interactive-explanation/airfoil/`
- `interactive-explanation/internal-combustion-engine/`

This is not a replica. It is a new original article built on the existing local shell.

---

## Core Thesis

An F1 car is a lap-time machine built from tradeoffs between:

- airflow
- tyre grip
- braking stability
- hybrid power delivery
- suspension platform control
- track layout demands

The route should keep returning to one outcome:

**How does this subsystem help or hurt lap time?**

---

## Non-Negotiables

- Must use `engineering-sandbox`
- Must feel like a longform interactive engineering article
- Must be strictly Formula 1 focused
- Must not drift into team gossip, driver biography, or race-history filler
- Must have generated chapter rail navigation
- Must work on desktop and mobile
- Must preserve the shared annotation / chapter / hero behavior already used by the site
- Must be original writing and original teaching structure

---

## Framework Requirements

Recommended route shell:

- `data-story-shell="engineering-sandbox"`
- `data-story-family="engineering-longform"`
- `data-story-nav="generated"`
- `data-story-route="formula-1-racing"`

Recommended route structure:

- `interactive-explanation/formula-1-racing/index.html`
- `interactive-explanation/formula-1-racing/css/f1.css`
- `interactive-explanation/formula-1-racing/js/f1.js`
- `interactive-explanation/formula-1-racing/images/`
- `interactive-explanation/formula-1-racing/data/`
- `interactive-explanation/docs/formula-1-racing/index.html`
- `interactive-explanation/docs/formula-1-racing/parity.json`

Recommended metadata setup:

- original route with neutral reference handling
- docs entry in `pages.json`
- shared footer hook still present, but no external upstream dependency

---

## Structural Lessons From Existing Routes

## Lessons to borrow from `airfoil`

Use these patterns:

- explain invisible flow with arrows, markers, streamlines, and pressure maps
- start with visible motion before definitions
- move from intuition -> measurement -> engineering consequence
- teach relative airflow before downforce details

How it applies to Formula 1:

- show airflow around the car and under the floor
- show wake and dirty air behind the car
- show pressure zones on wing and floor surfaces
- make ride height and yaw visibly affect the flow

## Lessons to borrow from `internal-combustion-engine`

Use these patterns:

- explain one part at a time
- show how parts assemble into one working machine
- use section-by-section motion scenes instead of static diagrams only
- keep component colors consistent through the article

How it applies to Formula 1:

- build from front wing -> floor -> diffuser -> rear wing
- build from tyre -> contact patch -> load -> grip loss
- build from ICE -> turbo -> battery -> deployment
- build from individual subsystems back into one lap-time model

## Lessons to borrow from `mechanical-watch`

Use these patterns:

- longform wrapper and generated story rail
- hero onboarding panel with clear first action
- companion-route style thinking later if needed
- explain the machine as a constrained system, not a list of parts

How it applies to Formula 1:

- show the whole car first
- make the first interaction a full-car inspection scene
- frame each later chapter as a constraint on performance

---

## Route Positioning

Recommended framing:

**How a modern Formula 1 car converts airflow, grip, power, braking, and track shape into lap time.**

Recommended era focus:

- modern ground-effect era
- roughly 2022-present

Reason:

- strongest airflow story
- strongest floor / diffuser story
- modern hybrid power unit remains relevant
- tyre and setup tradeoffs are easier to tie into current car behavior

---

## Reader Outcome

By the end of the route, the reader should understand:

- what each major F1 car subsystem does
- why airflow dominates modern F1 performance
- how tyre grip constrains every other subsystem
- why setup changes help one part of the lap while hurting another
- why different tracks demand different compromises
- why lap time emerges from system balance rather than one magic part

---

## Recommended Hero Direction

## Hero title

Recommended title direction:

`See an F1 car as a lap-time machine, not a blur of fast parts.`

## Hero summary

The hero should establish:

- inspect the whole car first
- then follow airflow, grip, energy, and track fit
- the goal is not to memorize components but to understand how the car makes time

## Hero chips

Recommended chips:

- `Inspect aero hotspots`
- `Follow grip and energy`
- `Build a faster lap`

## Hero actions

Recommended CTAs:

- `Inspect the car`
- `Jump to airflow`
- `Jump to setup`

## First interaction

The first interaction should be a full-car hotspot overview where the user can click:

- front wing
- nose
- front suspension
- floor
- sidepods
- diffuser
- rear wing
- tyres
- brakes
- power unit
- gearbox
- halo

This should be the anchor scene for the entire article.

---

## Recommended Chapter List

Use `<h1 id="...">` headings so the shared framework can build the rail.

### 1. `overview`
Title: `Overview`

Purpose:

- introduce the whole car as one system

Main interaction:

- full-car hotspot scene

Takeaway:

- an F1 car is a set of coupled engineering systems, not isolated performance parts

### 2. `airflow`
Title: `Airflow`

Purpose:

- establish airflow as the invisible medium shaping performance

Main interaction:

- animated streamlines around a simplified F1 car

Controls:

- speed
- yaw
- ride height
- front wing angle
- rear wing level

Must explain:

- relative airflow
- attached flow
- separated flow
- stagnation regions
- wake
- drag vs downforce

Takeaway:

- the car is constantly negotiating with the air, and small geometry changes ripple through the whole car

### 3. `front-wing`
Title: `Front Wing`

Purpose:

- explain how the front wing starts the aerodynamic story and shapes downstream flow

Main interaction:

- flap-angle comparison scene

Must explain:

- front downforce
- balance shift
- how front wing changes affect the floor and the rest of the car
- sensitivity to dirty air

Takeaway:

- the front wing is both a grip device and an airflow manager

### 4. `floor-and-diffuser`
Title: `Floor and Diffuser`

Purpose:

- make ground effect the center of the modern F1 explanation

Main interaction:

- side cutaway underfloor scene

Controls:

- ride height
- pitch
- speed
- diffuser expansion
- floor seal quality

Must explain:

- Venturi acceleration
- pressure drop under the floor
- diffuser recovery
- stall risk
- porpoising / oscillation pressure sensitivity

Takeaway:

- most modern F1 performance depends on how well the underfloor keeps working under dynamic conditions

### 5. `rear-wing-and-drs`
Title: `Rear Wing and DRS`

Purpose:

- explain the direct straight-line vs cornering tradeoff

Main interaction:

- DRS toggle with drag / load comparison

Must explain:

- rear downforce
- induced drag
- DRS opening effect
- balance movement when rear load drops

Takeaway:

- top speed is usually purchased by giving away support elsewhere

### 6. `chassis-and-suspension`
Title: `Chassis and Suspension`

Purpose:

- explain ride control, load transfer, and aero platform stability

Main interaction:

- side-view ride-platform scene over braking, turning, and kerbs

Controls:

- spring stiffness
- anti-roll balance
- ride height
- kerb size
- speed

Must explain:

- heave
- roll
- pitch
- platform stability
- mechanical grip vs aero stability compromise

Takeaway:

- suspension exists to manage both tyre contact and aerodynamic attitude

### 7. `power-unit`
Title: `Power Unit`

Purpose:

- explain the modern F1 hybrid system as an energy-flow machine

Main interaction:

- animated power-flow diagram

Must show:

- ICE
- turbo
- battery store
- MGU-K style recovery/deployment role
- cooling path
- gearbox output path

Must explain:

- harvesting under braking
- electrical deployment on exit and straight
- packaging and thermal limits
- why the system is not just about peak horsepower

Takeaway:

- the modern F1 power unit is an energy management system, not only a combustion engine

### 8. `tyres`
Title: `Tyres`

Purpose:

- explain tyres as the place where all performance ideas have to become actual grip

Main interaction:

- tyre state simulator

Controls:

- compound
- temperature
- vertical load
- slip angle
- stint length
- track temperature

Must explain:

- operating window
- contact patch
- grip peak and falloff
- wear
- overheating
- wet vs dry tire logic

Takeaway:

- the tyre is the final limiter that turns theory into usable performance or failure

### 9. `braking`
Title: `Braking`

Purpose:

- explain weight transfer, brake bias, and stability on entry

Main interaction:

- longitudinal load-transfer scene with brake bias slider

Controls:

- brake bias
- initial speed
- tyre condition
- regen contribution

Must explain:

- front loading
- rear instability
- lockups
- trail braking
- braking distance and entry compromise

Takeaway:

- braking is where driver input, tyre state, aero load, and setup all collide

### 10. `track-layout`
Title: `Track Layout`

Purpose:

- show why different tracks reward different compromises

Main interaction:

- track archetype switcher

Recommended layouts:

- Monza
- Monaco
- Silverstone
- Spa
- Hungary
- Suzuka

Must explain:

- long straight bias
- low-speed traction bias
- high-speed aero bias
- heavy braking circuits
- kerb sensitivity
- overtaking windows

Takeaway:

- there is no universally best setup because the circuit changes what the car needs to be good at

### 11. `setup-tradeoffs`
Title: `Setup Tradeoffs`

Purpose:

- make compromise the explicit lesson of the route

Main interaction:

- setup board tied to sector outcomes

Controls:

- front wing
- rear wing
- ride height
- suspension stiffness
- brake bias
- tyre compound

Outputs:

- straight-line speed
- slow-corner score
- high-speed corner score
- tyre wear tendency
- braking stability
- estimated lap time

Takeaway:

- every useful F1 setup choice helps some part of the lap by hurting another part less

### 12. `building-a-lap`
Title: `Building a Lap`

Purpose:

- end with synthesis instead of another isolated subsystem

Main interaction:

- simplified lap builder or sector-based lap simulator

Should combine:

- aero level
- tyre choice
- braking bias
- energy deployment style
- track sectors

Takeaway:

- lap time emerges from alignment across systems, not from one standout component

### 13. `further-reading`
Title: `Further Reading`

Purpose:

- provide technical references and follow-up material

### 14. `final-words`
Title: `Final Words`

Purpose:

- close by reframing F1 as a system-of-systems engineering problem

---

## Recommended Rail Labels

These are good short labels for the shared story rail:

- Overview
- Airflow
- Front wing
- Floor
- Rear wing
- Chassis
- Power unit
- Tyres
- Braking
- Track
- Setup
- Lap
- References
- Final words

---

## Interaction Inventory

## Priority 1: first build

- full-car hotspot overview
- airflow streamlines scene
- floor / diffuser cutaway
- rear wing / DRS comparison
- power-unit energy-flow diagram
- tyre grip / temperature scene
- track archetype switcher
- setup board

## Priority 2: second build wave

- dirty-air wake scene behind another car
- braking trace comparison
- simplified sector-by-sector lap model
- wet vs dry tire comparison scene

## Priority 3: stretch goals

- qualifying vs race setup comparison
- telemetry overlay
- pit stop tyre strategy side module
- full lap energy deployment trace

---

## Visual Language

Recommended color system:

- airflow = cyan / blue
- floor / diffuser = teal
- front wing = amber
- rear wing / DRS = orange-red
- power unit = red
- battery / electric path = lime green
- tyres = charcoal base with compound colors when needed
- brakes = hot orange
- track / sectors = muted greys with highlighted sector overlays

Recommended diagram types:

- car hotspot map
- top-down flow field
- side cutaway underfloor view
- force arrows
- energy arrows
- tyre contact patch view
- simplified track maps

---

## Content Strategy

## Voice

Use:

- precise engineering language
- short scene setup paragraphs
- direct explanation of tradeoffs
- original wording only

Avoid:

- fan-hype language
- team politics
- driver profile digressions
- rule-history tangents that do not help performance understanding

## Teaching pattern per chapter

For each chapter:

1. show the phenomenon
2. let the reader manipulate it
3. name the mechanism
4. connect the mechanism to lap time

---

## Technical Build Plan

## Route shell phase

- create `interactive-explanation/formula-1-racing/index.html`
- add shared shell CSS and JS
- add hero
- add chapter headings with ids
- verify generated rail works

## Core interaction phase

- build car hotspot hero scene
- build airflow scene
- build floor / diffuser scene
- build rear wing / DRS scene
- build power-unit scene
- build tyre scene

## Synthesis phase

- build braking scene
- build track-layout scene
- build setup board
- build final lap builder

## Documentation phase

- add `pages.json` entry
- add docs page
- add parity file
- add route summary

## Validation phase

- run `node interactive-explanation/tools/check-public-surface.mjs`
- run `node interactive-explanation/tools/smoke-bundle.mjs`
- verify desktop layout
- verify mobile layout
- verify chapter rail

---

## Risks

## Risk: too broad
If the article tries to explain all of Formula 1, it will become shallow.

Mitigation:

- stay focused on the car as a performance system

## Risk: too widget-like
If the article is only a set of unrelated interactive toys, it will not feel longform.

Mitigation:

- each scene must hand off into the next one conceptually

## Risk: too simulation-heavy
Perfect realism will slow development and make explanations harder to read.

Mitigation:

- use simplified but visually legible models

## Risk: tyres and track feel disconnected from aero

Mitigation:

- repeatedly reconnect every chapter to setup and lap time

---

## Scope Lock For Version 1

Version 1 should focus only on:

- the car
- airflow
- components
- power unit
- tyres
- braking
- track layout
- setup compromise
- lap-time synthesis

Version 1 should not expand into:

- championship rules
- driver history
- team politics
- race weekend format
- deep historical evolution of regulations

---

## Progress Tracker

## Planning

- [ ] Confirm final route title
- [ ] Confirm slug `formula-1-racing`
- [ ] Confirm modern ground-effect era focus
- [ ] Confirm first-wave chapter list

## Shell

- [ ] Create route folder
- [ ] Create `index.html`
- [ ] Add shared shell assets
- [ ] Add hero copy
- [ ] Add chapter ids
- [ ] Verify generated rail

## Core scenes

- [ ] Full-car hotspot overview
- [ ] Airflow streamlines scene
- [ ] Front wing balance scene
- [ ] Floor and diffuser cutaway
- [ ] Rear wing / DRS scene
- [ ] Chassis and suspension scene
- [ ] Power-unit flow scene
- [ ] Tyre simulator
- [ ] Braking and weight-transfer scene
- [ ] Track archetype switcher
- [ ] Setup board
- [ ] Final lap builder

## Metadata and docs

- [ ] Add `pages.json` entry
- [ ] Add docs page
- [ ] Add parity JSON
- [ ] Add route summary and metadata

## Validation

- [ ] Run public surface audit
- [ ] Run smoke bundle
- [ ] Test desktop layout
- [ ] Test mobile layout
- [ ] Check story rail labels

---

## Open Decisions

1. Should version 1 stay strictly in the modern era?
   - Recommended: yes

2. Should the track chapter use real circuits by name or generic archetypes?
   - Recommended: real circuits by name

3. Should the final scene be a setup board first or a full lap simulator first?
   - Recommended: setup board first, lap simulator second

4. Should tyre compound naming follow official F1 naming closely?
   - Recommended: yes, only where it improves clarity

5. Should the route use the `engineering-longform` family directly?
   - Recommended: yes, because the shell behavior already fits the longform format well

---

## Final Direction

Build this as a real interactive engineering article about Formula 1 performance.

The strongest version is:

- original
- airflow-first
- component-aware
- tyre-constrained
- track-sensitive
- tied together by one measurable outcome: lap time
