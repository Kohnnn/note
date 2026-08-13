# Research immutable static pack publication

Type: research
Status: resolved
Blocked by:

## Question

Against current official hosting documentation and the repository's measured artifact shape, which release units can publish the static app and large replay/model assets atomically, cache packs immutably, update one small current-release pointer, and roll back without rebuilding? Compare the current Netlify artifact, split static hosting plus object storage, and Cloudflare Pages/R2 only where primary-source limits, costs, and semantics are available.

## Answer

[Research artifact](../research/02-immutable-static-pack-publication.md)

Keep the current atomic Netlify artifact only as a zero-code bridge. The durable target is a small Cloudflare Pages shell with one build-stamped asset release ID plus a complete, immutable `releases/<release-id>/` namespace in R2. Upload and hash-verify the namespace before deploying the referencing shell; roll back by promoting the prior Pages deployment while retaining its R2 prefix. This removes roughly 1.69 GiB from shell deploys and handles GLBs that exceed Pages' 25 MiB per-file limit without proxying packs through a Worker.
