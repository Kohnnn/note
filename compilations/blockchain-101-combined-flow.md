# Blockchain 101 Combined Flow

**Source Compilation:** [custom-request](https://github.com/anders94/blockchain-demo)
**Website URL:** [https://andersbrownworth.com/blockchain/](https://andersbrownworth.com/blockchain/)
**Repository URL:** [https://github.com/anders94/blockchain-demo](https://github.com/anders94/blockchain-demo)
**Author/Domain:** Anders Brownworth demos (combined replication spec)

## Verification Snapshot
- Crawl status: `200`
- Final resolved URL: `https://andersbrownworth.com/blockchain/`
- Page title seen by crawler: `Blockchain Demo`
- Static DOM media/control tags: `canvas=0, svg=0, input=0, button=1, video=0, audio=0`
- Script assets detected: `/blockchain/javascripts/lib/jquery.min.js`, `/blockchain/javascripts/lib/bootstrap.min.js`, `/blockchain/javascripts/lib/spin.min.js`, `/blockchain/javascripts/lib/ladda.min.js`, `/blockchain/javascripts/lib/ie10-viewport-bug-workaround.js`, `/blockchain/javascripts/lib/sha256.js`, `/blockchain/javascripts/blockchain.js`
- Evidence confidence: `High`
- Related URLs in this flow:
  - `https://andersbrownworth.com/blockchain/public-private-keys/`
  - `https://andersbrownworth.com/zero-knowledge-proof-demo`
  - `https://github.com/anders94/blockchain-demo`
  - `https://github.com/anders94/public-private-key-demo`
  - `https://github.com/anders94/zero-knowledge-proof-demo`

## What the Site is About
- This page combines three separate Anders Brownworth demos into one teaching flow: block hashing -> key signing -> zero-knowledge proof intuition.
- The goal is to replicate a single end-to-end interactive experience where users first understand immutable blocks, then transaction authenticity, then privacy-preserving proof concepts.

## Full Interactive Inventory (Comprehensive)
### Visualization/Illustration Modules (Expanded)
| Module | Type | What this module does | Controls | Real-time response |
| --- | --- | --- | --- | --- |
| Hash-a-Block editor | interactive simulation/diagram module | Users edit block payload fields and instantly see the SHA-256 digest change, proving avalanche behavior. | text inputs, nonce input, mine button | digest panel updates per keystroke; mined-valid visual state appears only when difficulty condition is met |
| Proof-of-Work nonce search | interactive simulation/diagram module | Demonstrates computational work by incrementing nonce until hash prefix matches required zero count. | difficulty selector, mine/start-stop control | hash attempts stream rapidly; success state locks nonce and marks block as mined |
| Linked-chain tamper cascade | interactive simulation/diagram module | Shows that changing any earlier block invalidates all downstream hashes in the chain. | edit block fields in any index, re-mine per block | downstream blocks flip to invalid until each dependent block is re-mined |
| Distributed ledger view | interactive simulation/diagram module | Compares multiple node copies of a chain to explain consensus and canonical history. | toggle node edits, mine on selected node | node validity differs until the longest/valid chain propagates |
| Wallet keypair generation | interactive simulation/diagram module | Generates public/private key pairs so users can see identity and signing material separation. | generate key button, copy/load key actions | new keypair appears; public key changes deterministically with generated private key |
| Transaction signing and verification | interactive simulation/diagram module | Signs transaction payloads and verifies signatures against public keys to prove authenticity. | transaction fields, sign button, verify button | valid/invalid badge switches immediately based on payload, signature, and key consistency |
| Mempool to block pipeline | algorithm walkthrough module | Moves signed transactions into mined blocks, linking cryptographic signatures to blockchain inclusion. | add transaction, sign, queue, mine block | transaction state progresses from draft -> signed -> pending -> confirmed in block |
| Zero-knowledge cave graph challenge | interactive simulation/diagram module | Uses map-style challenge rounds (prover/verifier) to show proving knowledge without revealing the secret itself. | round start, prover path choice, verifier challenge selection | success probability trends upward across repeated rounds without exposing hidden route details |
| Unified narrative flow controller | interactive simulation/diagram module | Provides chapter progression across hash, keys, signatures, and ZKP sections in one cohesive experience. | chapter navigation, next/previous step, replay | UI context, active diagrams, and formulas switch to the selected chapter while preserving key state where needed |

### Interaction Surface Summary
- Primary controls: text inputs, buttons, mine/replay actions, chapter navigation.
- State model: deterministic cryptographic transforms + finite-state workflow for transaction lifecycle.
- Best replication pattern: modular scenes sharing a common store for keys, transactions, blocks, and proof rounds.

### Evidence Snippets
- "Blockchain Demo Toggle navigation Blockchain Demo Hash Block Blockchain Distributed Tokens Coinbase Blockchain Demo Blockchain Demo - Part 2 - Public / Private Keys & Signing by Anders Brownworth BTC: 1K3NvcuZzVTueHW1qhkG2Cm3viRkh2EXJp ETH: 0x84a90e21d9d02e30ddcea56d618aa75ba90331ff"

## Interactivity Level
- Overall rating: **Very High**.
- Rating is based on control density, simulation complexity, and amount of user-driven state change in the learning flow.

## Tech Stack (Evidence-Backed)
- Original demos use server-rendered Express/Pug layouts with client-side JavaScript interaction logic.
- Observed runtime libs include `sha256.js` and `elliptic.js` for hashing and ECDSA-style key/signature operations.
- UI layer uses jQuery + Bootstrap era controls; mining feedback uses spinner/button state utilities (`spin.min.js`, `ladda.min.js`).
- Combined replication should use a modern reactive frontend, but preserve deterministic crypto/math behavior from original demos.

## Source Code Orientation
- Part 1 repo: `https://github.com/anders94/blockchain-demo`.
- Part 2 repo: `https://github.com/anders94/public-private-key-demo`.
- Part 3 repo: `https://github.com/anders94/zero-knowledge-proof-demo`.
- Live references: `https://andersbrownworth.com/blockchain/`, `https://andersbrownworth.com/blockchain/public-private-keys/`, `https://andersbrownworth.com/zero-knowledge-proof-demo`.
- Key implementation areas to study: nonce/hash logic, signature generation/validation, and ZKP round-state transitions.

## Replication Blueprint (Implementation-Ready)
- Implement three chapter engines: blockchain core, signature workflow, and ZKP game loop.
- Use a single typed store (`keys`, `transactions`, `blocks`, `proofRounds`) to keep cross-chapter continuity.
- Add preset scenarios (tampered block, invalid signature, successful multi-round ZKP) for deterministic testing.
- Render each chapter as isolated component modules with a shared event bus for step transitions.
- Expose intermediate values (hash bytes, signature fields, verifier challenge) so learning stays transparent.

## Replication Risks and Validation Checklist
- Validate each module row against the original behavior with fixed presets and screenshot/video diffs.
- Verify every control affects the expected variables and not unrelated scene state.
- Keep explanation text synchronized with current algorithm state so the narrative never drifts from what is on screen.
- Track performance under fast input changes (dragging/scrubbing) and keep transitions deterministic.
