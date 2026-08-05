# Musicmap.info - Shipping Gate Audit

**Website:** [https://musicmap.info/](https://musicmap.info/)

## Status

**Shipped on 2026-03-21 under a scoped exception.**

Musicmap does not satisfy the default strict local-media rule, but it is now considered shippable under a narrower family-specific exception:

- the public shell and first-party static assets are vendored locally,
- playback is deferred until explicit user action,
- only YouTube and Spotify embeds are allowed,
- the exception is scoped to the Musicmap family only.

## Why It Is Blocked

### 1. Playback is tied to remote platforms

The live page injects the **YouTube Iframe API** directly into the shell:

```html
tag.src = "https://www.youtube.com/iframe_api";
```

The public shell also exposes a Spotify surface:

- `https://open.spotify.com/user/_musicmap`

This is not incidental chrome. Musicmap’s own explanatory copy says:

- each genre panel includes a **playlist**
- each genre features at least **nine example songs**

That means playback and discovery are core route behavior, not optional extras.

### 2. No first-party archived media pack is exposed by the source shell

The current live shell exposes:

- `main.bundle.js`
- `main.css`
- the giant SVG or DOM map
- search and genre-panel data in the app bundle

But the audited shell does **not** expose a route-local bank of first-party audio or video files that could simply be vendored the way Teoria, Ableton, and Song Maker were.

### 3. Current archive rule forbids shipping partial playback

The current music-family rule is:

- no remote iframes
- no remote playlist embeds
- no remote playable media
- no speculative partial replica when the core experience cannot be localized

Musicmap fails that rule today because its playlist behavior is currently rooted in remote YouTube and Spotify surfaces.

## What Was Confirmed In The Fresh Audit

The 2026-03-21 live source still includes:

- remote YouTube iframe bootstrapping
- remote Google Analytics
- remote Facebook SDK
- Spotify profile links
- playlist-focused genre-panel copy

Musicmap’s own public copy also states that each genre panel contains a playlist of example songs and that genre panels are a core part of the Carta workflow.

## Shipping Decision

### `musicmap/`

Ship the route only with the scoped exception active:

1. local shell, bundle, styles, images, fonts, and search payload must stay vendored in the route tree,
2. no eager remote playback surface may load on first render,
3. only user-click-triggered YouTube and Spotify embeds are allowed,
4. all non-essential shell promo, analytics, and social surfaces must remain removed from the public body.

### `music-interactive-hub/`

The hub becomes valid after Musicmap ships under the scoped exception, because the fourth live music family gate is then satisfied.

## Practical Next Step

The next cycle should be a family decision, not a forced Musicmap import. If the strict local-archive rule remains unchanged, the clean options are:

- choose a different fourth music family that can be fully localized, or
- explicitly relax the playback rule before revisiting Musicmap.
