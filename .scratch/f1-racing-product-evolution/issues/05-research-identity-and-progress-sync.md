# Research identity and progress synchronization

Type: research
Status: resolved
Blocked by:

## Question

Which minimal identity and storage patterns could synchronize a useful learning trail across devices without turning this static-first product into an account platform? Using official sources, compare passwordless or federated identity, progress data storage, export/deletion, recovery, abuse controls, regional/privacy implications, offline conflict behavior, static-client integration, operating burden, and migration from existing browser-local progress.

## Answer

[Research artifact](../research/05-identity-and-progress-sync.md)

Do not add accounts now. Keep the six-module completion map browser-local and keep Replay state portable in validated URLs. Reconsider only when tested demand establishes cross-device continuity, materially valuable saved work, and at least one account-only capability. If all three thresholds pass, the smallest later shape is optional Supabase passwordless auth plus one owner-scoped, RLS-protected progress record with timestamped per-module state, local offline cache, explicit merge rules, export, deletion, abuse controls, and no anonymous cloud users initially.
