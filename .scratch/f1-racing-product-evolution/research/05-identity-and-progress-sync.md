# Identity and progress synchronization

**Scope:** account identity and synchronization for the static `f1-racing` website. This is a recommendation, not an implementation plan.  
**Research date:** 2026-08-11. Sources are first-party documentation unless marked otherwise.

## Decision

**Do not add accounts now.** Keep browser-local Learn completion and stateless Replay share URLs. The current product has six manually marked Learn modules, and the Replay URL already restores its useful portable state. An account would add sign-in friction, personal-data handling, abuse controls, recovery, deletion, and backend operations without a demonstrated account-only outcome.

Reconsider only after the product commits to a capability that cannot be provided by local storage and a URL:

1. cross-device continuation is an explicit, tested user need;
2. users can retain enough work that loss or device changes are materially costly; and
3. at least one account-bound feature is shipping with it, such as saved replay collections, annotations, or personalized multi-session learning plans.

When all three are true, use **Supabase Auth plus one owner-scoped Postgres progress record**, beginning with email OTP or magic link and optionally Google OAuth. Do not use anonymous cloud users in the first release.

## Current product and constraints

- The web app is a Next.js static export (`output: "export"`), so server-rendered session handling is not available from the application host. A managed browser SDK can still call a separate hosted API directly. [next.config.mjs](../../../f1-racing/apps/web/next.config.mjs#L6-L17)
- `f1-racing.learn.progress.v1` is a `localStorage` JSON map from Learn slug to boolean. Reads and writes are guarded against unavailable storage, malformed JSON, and quota errors. A `storage` listener synchronizes separate tabs on the same origin. [learn-module-progress.tsx](../../../f1-racing/apps/web/src/components/story/learn-module-progress.tsx#L5-L50)
- Learn currently contains six modules: `car`, `aero`, `tyres`, `braking`, `setup`, and `strategy`; the index tells users their progress is kept in this browser. [learn-index.tsx](../../../f1-racing/apps/web/src/app/learn/learn-index.tsx#L6-L63)
- Replay sharing needs no account: validated URL state restores replay seconds, Workspace analysis, and up to four selected drivers. [roadmap.md](../../../f1-racing/docs/roadmap.md#L52-L68)
- No authentication, database, or backend client package is installed. [package.json](../../../f1-racing/apps/web/package.json#L11-L30)

`localStorage` is origin-scoped, persists after closing and reopening the browser, and is removed with browser data; private browsing treats it as session storage. That fits a small, non-sensitive preference/progress surface but cannot recover progress across devices or after storage clearing. [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) (accessed 2026-08-11).

## Account value must precede provider choice

An account is justified only when it gives users one of these durable benefits:

| User value | Local-only and share URL | Account required? |
| --- | --- | --- |
| Mark six reads complete in this browser | Yes | No |
| Resume an exact Replay someone shared | Yes | No |
| Transfer Learn progress after switching device or clearing storage | No | Yes |
| Recover saved work after losing a device | No | Yes |
| Keep private saved replay collections or annotations | No | Yes |
| Collaborate on a named, editable workspace | No | Yes |

Do not treat sign-in, analytics identity, or an email list as user value for this decision. Keep Replay URLs portable and readable without authentication even if accounts later exist; a saved account item can point to an existing validated replay URL rather than replace it.

## Options compared

| Option | Fit for static export | Identity and authorization | Offline/conflicts | Operations, cost, and lock-in | Verdict |
| --- | --- | --- | --- | --- | --- |
| **1. Local-only + Replay URLs** | Native browser storage and URL state; no backend or new package | None; no personal data or remote private records | Same-origin tab updates work; no cross-device sync. Last browser state is the only state. | Lowest cost and maintenance; browser-storage semantics are the dependency | **Choose now.** |
| **2. Supabase Auth + Postgres RLS** | Browser client talks directly to Supabase from the static site using a publishable key; no app server required for ordinary owner CRUD | Passwordless email is enabled by default; Supabase also supports social OAuth. Postgres RLS can enforce `auth.uid() = user_id` on every row. [Passwordless](https://supabase.com/docs/guides/auth/auth-email-passwordless), [Social Login](https://supabase.com/docs/guides/auth/social-login), [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security) (accessed 2026-08-11) | Implement client-side optimistic writes and an explicit `updated_at` last-write-wins rule for one small record. No offline queue is included by default. | Free plan currently includes 50,000 MAU and 500 MB; inactive free projects pause after one week. Pro starts at $25/month and includes daily backups. Data is portable PostgreSQL, but Auth and API integration remain provider-specific. [Pricing](https://supabase.com/pricing) (accessed 2026-08-11) | **Choose later, if threshold is met.** Smallest secure managed shape and relational export path. |
| **3. Firebase Auth + Firestore** | Browser SDK works from a static export | Firebase supports email-link, federated, and anonymous auth; Firestore Security Rules can enforce owner-only document access. [Email link](https://firebase.google.com/docs/auth/web/email-link-auth), [Firestore rules](https://firebase.google.com/docs/firestore/security/get-started) (accessed 2026-08-11) | Firestore supports offline persistence and sync; its conflict behavior must be accepted and tested rather than hidden. [Offline data](https://firebase.google.com/docs/firestore/manage-data/enable-offline) (accessed 2026-08-11) | Strong client sync tooling, but document data, rules, billing, and export workflows are more Firebase-specific. Firestore supports managed export/import to Cloud Storage. [Export/import](https://firebase.google.com/docs/firestore/manage-data/export-import) (accessed 2026-08-11) | Viable only if offline-first, real-time sync becomes a product requirement. Otherwise unnecessary complexity. |

### Rejected pattern: Cloudflare Access + Worker/D1

Cloudflare Access is an authentication layer for a protected application: Access applications deny by default and require an Allow policy. It is appropriate for internal or restricted applications, not as the smallest public consumer-account system. It would also require a Worker API and bespoke identity/account lifecycle around D1. [Cloudflare Access self-hosted applications](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/) (accessed 2026-08-11). D1's scale-to-zero query pricing is attractive, but does not remove that custom auth and authorization work. [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/) (accessed 2026-08-11).

## Minimum later-state design

Use one canonical record per permanent user. Do not start by syncing every transient Replay interaction.

```text
progress
  user_id       UUID primary key references auth.users(id) on delete cascade
  schema_version smallint not null default 1
  completed     JSONB not null
  updated_at    timestamptz not null
```

`completed` contains only known Learn slugs, their current state, and the timestamp of that state, for example:

```json
{
  "car": { "read": true, "changedAt": "2026-08-11T10:15:00.000Z" },
  "aero": { "read": false, "changedAt": "2026-08-11T10:22:00.000Z" }
}
```

Why timestamps instead of booleans: state timestamps preserve a newer “mark unread” change during conflict resolution and support future progress display without inventing a second history table. Validation remains strict: allowlisted current module slugs, boolean states, ISO timestamps, a bounded payload, and `schema_version = 1`. Never put authorization claims in mutable user metadata; use `auth.uid()` at the database boundary.

For Supabase, enable RLS, grant only authenticated CRUD, and make every `SELECT`, `INSERT`, `UPDATE`, and `DELETE` policy require the authenticated owner. Supabase explicitly requires RLS for browser access to exposed tables and warns never to expose a service-role key in the browser. [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security) (accessed 2026-08-11).

### Client behaviour

1. Continue writing the local record immediately so the Learn interaction remains fast and works while offline.
2. After an authenticated session is available, fetch the one remote record.
3. Merge each module by latest completion timestamp; an explicit “mark unread” deletes that module entry and is a newer event.
4. Write the merged result remotely with `updated_at`; on a stale-write response, refetch, merge, and retry once.
5. Treat the remote record as canonical after the first successful sync; retain the local copy as an offline cache only.
6. Keep Replay URLs shareable and stateless. Add account-backed saved Replays only when users need private names, collections, or annotations.

This is deliberately limited to one user-owned record. Upgrade to per-module event rows only when audit history, collaboration, or multi-device conflict semantics require it.

## Identity, recovery, and migration

### First account release

- Make sign-in optional until the user asks to preserve progress. The prompt should state the exact benefit: “Save progress across devices.”
- Offer email OTP or magic link first. Supabase documents a default one-request-per-60-seconds limit and one-hour expiry for its email links/codes. [Passwordless](https://supabase.com/docs/guides/auth/auth-email-passwordless) (accessed 2026-08-11).
- Add Google OAuth only if audience evidence shows email friction. Supabase supports Google and other social providers, but each provider adds redirect, consent, and support configuration. [Social Login](https://supabase.com/docs/guides/auth/social-login) (accessed 2026-08-11).
- Recovery is email-identity recovery, not a custom password reset system. Keep the account profile minimal: no display name, avatar, or demographic fields for progress-only use.

### Do not start with anonymous remote accounts

Anonymous accounts appear low-friction, but they create remote identities that cannot be recovered after sign-out, clearing browser data, or device change until linked to a durable identity. Supabase also warns that anonymous users use the authenticated role, require distinct RLS handling, need bot protection, and are not automatically cleaned up. [Anonymous Sign-Ins](https://supabase.com/docs/guides/auth/auth-anonymous) (accessed 2026-08-11).

If anonymous cloud saves later become necessary, define the migration before release:

1. export the current browser-local progress into the anonymous record;
2. after the user verifies a permanent identity, merge by per-module timestamp;
3. if the identity already owns a permanent record, preserve the newest event per module;
4. delete the anonymous record only after the merged durable write succeeds;
5. enable Turnstile/CAPTCHA and retention cleanup first.

Supabase supports linking email or OAuth identities to an anonymous user, but linking to an existing account requires an explicit conflict policy. [Anonymous Sign-Ins](https://supabase.com/docs/guides/auth/auth-anonymous) (accessed 2026-08-11).

## Privacy, export, deletion, and region

Progress data plus an email address is personal data. Before collecting it, publish a privacy notice identifying purpose, retention, processor, account deletion path, and selected data region. Choose a specific region near the primary user base and legal requirement; Supabase notes that region selection controls primary data location but is not itself regulatory compliance. [Supabase regions](https://supabase.com/docs/guides/platform/regions) (accessed 2026-08-11).

Minimum user controls for an account release:

- **Export:** Download the canonical progress JSON from the browser. This is immediate and provider-independent. Keep an operator Postgres export procedure as a disaster-recovery and migration tool. Supabase documents CSV export of `auth.users`; product progress remains ordinary Postgres data. [User Management](https://supabase.com/docs/guides/auth/managing-user-data) (accessed 2026-08-11).
- **Deletion:** Provide a visible account deletion action. It must delete the progress row and authenticated user, invalidate refresh capability, clear browser cache, and state that issued stateless access tokens can remain valid until expiry. Supabase documents that user deletion cascades sessions and invalidates refresh tokens, while already-issued JWTs remain valid until expiration. [User Management](https://supabase.com/docs/guides/auth/managing-user-data) (accessed 2026-08-11).
- **Retention:** Retain only the active progress record; delete on user request. Do not retain raw replay activity or email-event logs for product analytics unless separately justified.
- **Region:** Record the chosen provider project region in the privacy notice and deployment runbook. Re-evaluate before adding sensitive content or regulated audiences.

## Abuse and operational baseline

Accounts make the static site an externally writable system. Before enabling sign-in or writes:

- allow only configured redirect URLs for passwordless email and OAuth;
- apply provider email rate limits and expose a generic confirmation response to avoid account enumeration;
- enable Turnstile or hCaptcha on sign-in/sign-up flows where abuse warrants it. Supabase supports both for authentication protection. [CAPTCHA](https://supabase.com/docs/guides/auth/auth-captcha) (accessed 2026-08-11);
- keep RLS enabled and test owner/non-owner/unauthenticated CRUD against a real project;
- store only publishable client configuration in the static bundle; never include service-role keys or admin credentials;
- monitor auth failures, write errors, database usage, and backup/restore status;
- document an incident owner and a manual user-deletion/export path before launch.

For this small record, no application server or custom token service is justified. Add a server-side endpoint only when requirements need privileged actions, regulated deletion workflow, moderation, shared resources, or trusted rate limiting beyond provider controls.

## Ship threshold and acceptance checks

Ship accounts only when a product owner can affirm every item:

- [ ] A written user story requires cross-device continuity, recovery, private saved work, or collaboration; local storage and Replay URLs cannot satisfy it.
- [ ] The benefit is explained before sign-in and sign-in remains optional for public reading and Replay links.
- [ ] The canonical progress schema, merge rule, allowed slugs, payload bound, and “mark unread” behavior are specified.
- [ ] Auth uses passwordless email; any social provider has a tested redirect configuration and support owner.
- [ ] Owner-only RLS policies are deployed and tested for unauthenticated, owner, and other-user reads/writes/deletes.
- [ ] The static build contains no privileged key and works from the production subpath.
- [ ] Offline edits, a two-device conflict, storage-clearing before sync, sign-out, expired sessions, and failed writes have explicit UI outcomes.
- [ ] Account export and deletion work end-to-end; deletion includes progress, auth identity, cached local data, and documented token-expiry behavior.
- [ ] CAPTCHA/rate controls, monitoring, backup, selected region, privacy notice, and operational ownership are configured.
- [ ] The expected value exceeds ongoing cost: user friction, provider dependency, support for email delivery and recovery, privacy obligations, and a managed database.

## Recommendation

Keep `f1-racing.learn.progress.v1` local and preserve Replay URLs as the portable product surface. The current data is six optional completion marks, while the site remains a static export and has no account-only feature.

If the threshold is met, adopt Supabase email OTP/magic link plus one RLS-protected progress record. Keep the first release optional, minimal, owner-scoped, exportable, deletable, and replay-URL compatible; defer anonymous cloud accounts, social providers, real-time sync, and account-backed Replay storage until separately justified.

## Sources

All accessed 2026-08-11.

1. [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
2. [Supabase: Passwordless email logins](https://supabase.com/docs/guides/auth/auth-email-passwordless)
3. [Supabase: Social Login](https://supabase.com/docs/guides/auth/social-login)
4. [Supabase: Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
5. [Supabase: Anonymous Sign-Ins](https://supabase.com/docs/guides/auth/auth-anonymous)
6. [Supabase: User Management](https://supabase.com/docs/guides/auth/managing-user-data)
7. [Supabase: Enable CAPTCHA Protection](https://supabase.com/docs/guides/auth/auth-captcha)
8. [Supabase: Available regions](https://supabase.com/docs/guides/platform/regions)
9. [Supabase: Pricing](https://supabase.com/pricing)
10. [Firebase: Authenticate with email link](https://firebase.google.com/docs/auth/web/email-link-auth)
11. [Firebase: Cloud Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
12. [Firebase: Access data offline](https://firebase.google.com/docs/firestore/manage-data/enable-offline)
13. [Firebase: Export and import Firestore data](https://firebase.google.com/docs/firestore/manage-data/export-import)
14. [Cloudflare: Publish a self-hosted application with Access](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/)
15. [Cloudflare: D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/)
