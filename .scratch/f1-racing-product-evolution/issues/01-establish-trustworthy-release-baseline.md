# Establish the trustworthy release baseline

Type: task
Status: resolved
Blocked by:

## Question

What exact source, generated-pack, static-artifact, and canonical-production state is the release train starting from? Run the documented local gates, inventory public artifact size and duplication, probe the canonical public routes without changing production, reconcile stale QA and deployment URLs, and record every reproducible blocker or warning with its owning file and check.

## Answer

[Baseline artifact](../research/01-trustworthy-release-baseline.md)

All documented local quality, backend, build, and static-smoke gates pass at clean `f1-racing` commit `de8a4eb`; the canonical `https://f1-demo.netlify.app` manifests and sampled assets match the rebuilt artifact byte-for-byte. The baseline remains conditional until Modelview's external Google Draco decoder is localized or explicitly accepted and stale deployment URLs are marked historical. The static artifact is 1.89 GB; full and chunked replay representations account for 83.33% of it, and production exposes no immutable commit or release identity.
