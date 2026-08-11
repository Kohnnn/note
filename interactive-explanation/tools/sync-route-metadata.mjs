import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const defaultRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const VALID_INTENTS = new Set(["explainer", "simulation", "practice", "create", "guided-path"]);
const VALID_LEARNING_DIFFICULTIES = new Set(["beginner", "intermediate", "advanced"]);
const VALID_SHELL_VARIANTS = new Set(["essay", "lab", "practice"]);
const VALID_NAVIGATION_MODES = new Set(["generated", "native", "none"]);
const VALID_THEME_OWNERSHIP = new Set(["shell-only", "runtime-hook", "fixed-runtime"]);
const VALID_NATIVE_CONTROL_KINDS = new Set(["link", "state"]);
const VALID_INTERACTION_PROBES = new Set(["read-only"]);
const ALLOWED_ROUTE_KEYS = new Set([
  "slug",
  "title",
  "summary",
  "referenceUrl",
  "topicTags",
  "addedDate",
  "intent",
  "docsUrl",
  "learning",
  "referenceMode",
  "familyKey",
  "shell",
  "suggestedNextSlug",
  "experience",
]);
const ALLOWED_LEARNING_KEYS = new Set(["difficulty", "durationMinutes", "order", "prerequisites"]);
const ALLOWED_SHELL_KEYS = new Set(["family", "variant", "navigation", "chapters", "nativeControl"]);
const ALLOWED_CHAPTER_KEYS = new Set(["selector", "title", "id", "closest"]);
const ALLOWED_NATIVE_CONTROL_KEYS = new Set([
  "selector",
  "minimum",
  "kind",
  "fragmentOnly",
  "childSelector",
  "peerSelectors",
]);
const ALLOWED_EXPERIENCE_KEYS = new Set([
  "themeOwnership",
  "primarySurface",
  "runtimeSurface",
  "interactionProbe",
  "networkPolicy",
  "themeRoot",
]);
const ALLOWED_NETWORK_POLICY_KEYS = new Set(["mode", "actions"]);
const ALLOWED_NETWORK_ACTION_KEYS = new Set(["selector", "hosts"]);
const CHAPTER_ROUTE_SLUGS = new Set([
  "rigid-body-collisions",
  "linear-regression",
  "logistic-regression",
  "precision-recall",
  "roc-auc",
]);
const MUSICMAP_DEFERRED_ACTIONS = [
  {
    selector: "#youtube-playlist-link",
    hosts: ["youtube.com", "youtube-nocookie.com", "ytimg.com", "googlevideo.com"],
  },
  {
    selector: "#spotify-playlist-link",
    hosts: ["open.spotify.com", "embed-cdn.spotifycdn.com"],
  },
];

const cliArgs = process.argv.slice(2);

function getFlagValueIndices() {
  const indices = new Set();
  const flagsWithValues = new Set(["--scaffold"]);

  cliArgs.forEach((arg, index) => {
    if (!flagsWithValues.has(arg)) {
      return;
    }

    const next = cliArgs[index + 1];
    if (next && !next.startsWith("--")) {
      indices.add(index + 1);
    }
  });

  return indices;
}

const flagValueIndices = getFlagValueIndices();
const explicitRoot = cliArgs.find((arg, index) => !arg.startsWith("--") && !flagValueIndices.has(index));
const rootDir = path.resolve(explicitRoot || defaultRoot);
const manifestPath = path.join(rootDir, "routes.manifest.json");
const pagesPath = path.join(rootDir, "pages.json");

function hasFlag(flag) {
  return cliArgs.includes(flag);
}

function getArgValue(flag) {
  const direct = cliArgs.find((arg) => arg.startsWith(`${flag}=`));
  if (direct) {
    return direct.slice(flag.length + 1);
  }

  const index = cliArgs.indexOf(flag);
  if (index === -1) {
    return null;
  }

  return cliArgs[index + 1] && !cliArgs[index + 1].startsWith("--")
    ? cliArgs[index + 1]
    : null;
}

function readManifest() {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  validateManifest(manifest);
  return manifest;
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function assertManifest(condition, message) {
  if (!condition) {
    throw new Error(`Manifest validation failed: ${message}`);
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function assertNonEmptyString(value, message) {
  assertManifest(
    typeof value === "string" && value.length > 0 && value === value.trim(),
    message,
  );
}

function assertAllowedKeys(value, allowedKeys, label) {
  const unknownKeys = Object.keys(value).filter((key) => !allowedKeys.has(key));
  assertManifest(
    unknownKeys.length === 0,
    `${label} has unknown key${unknownKeys.length === 1 ? "" : "s"} ${unknownKeys.map((key) => `"${key}"`).join(", ")}`,
  );
}

function isValidHostname(hostname) {
  return hostname.length <= 253 && hostname.split(".").every((label) => {
    return label.length > 0
      && label.length <= 63
      && /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(label);
  });
}

function parseReferenceUrl(slug, referenceUrl) {
  let parsed;
  try {
    parsed = new URL(referenceUrl);
  } catch {
    assertManifest(false, `route "${slug}" must include an absolute referenceUrl or use referenceMode "neutral"`);
  }
  assertManifest(
    (parsed.protocol === "http:" || parsed.protocol === "https:")
      && !parsed.username
      && !parsed.password
      && isValidHostname(parsed.hostname),
    `route "${slug}" must include an absolute referenceUrl or use referenceMode "neutral"`,
  );
}

function normalizePolicyHost(slug, index, host) {
  assertNonEmptyString(host, `route "${slug}" deferred action ${index} has invalid host`);
  const normalized = host.toLowerCase().replace(/\.$/, "");
  assertManifest(
    isValidHostname(normalized),
    `route "${slug}" deferred action ${index} has invalid host "${host}"`,
  );
  return normalized;
}

function validateChapters(slug, chapters) {
  assertManifest(Array.isArray(chapters) && chapters.length > 0, `route "${slug}" chapters must be a non-empty array`);
  const selectors = new Set();
  const ids = new Set();
  chapters.forEach((chapter, index) => {
    assertManifest(chapter && typeof chapter === "object" && !Array.isArray(chapter), `route "${slug}" chapter ${index} must be an object`);
    assertAllowedKeys(chapter, ALLOWED_CHAPTER_KEYS, `route "${slug}" chapter ${index}`);
    assertNonEmptyString(chapter.selector, `route "${slug}" chapter ${index} selector must be a non-empty trimmed string`);
    assertNonEmptyString(chapter.title, `route "${slug}" chapter ${index} title must be a non-empty string`);
    assertManifest(!selectors.has(chapter.selector), `route "${slug}" has duplicate chapter selector "${chapter.selector}"`);
    selectors.add(chapter.selector);
    if (chapter.id !== undefined) {
      assertNonEmptyString(chapter.id, `route "${slug}" chapter ${index} id must be a non-empty string`);
      assertManifest(!ids.has(chapter.id), `route "${slug}" has duplicate chapter id "${chapter.id}"`);
      ids.add(chapter.id);
    }
    if (chapter.closest !== undefined) {
      assertNonEmptyString(chapter.closest, `route "${slug}" chapter ${index} closest must be a non-empty string`);
    }
  });
}

function validateNativeControl(slug, nativeControl) {
  assertManifest(nativeControl && typeof nativeControl === "object" && !Array.isArray(nativeControl), `route "${slug}" nativeControl must be an object`);
  assertAllowedKeys(nativeControl, ALLOWED_NATIVE_CONTROL_KEYS, `route "${slug}" nativeControl`);
  assertNonEmptyString(nativeControl.selector, `route "${slug}" nativeControl selector must be a non-empty trimmed string`);
  assertManifest(Number.isInteger(nativeControl.minimum) && nativeControl.minimum > 0, `route "${slug}" nativeControl minimum must be a positive integer`);
  assertManifest(VALID_NATIVE_CONTROL_KINDS.has(nativeControl.kind), `route "${slug}" nativeControl uses invalid kind "${nativeControl.kind}"`);
  assertManifest(
    nativeControl.fragmentOnly === undefined || typeof nativeControl.fragmentOnly === "boolean",
    `route "${slug}" nativeControl fragmentOnly must be a boolean`,
  );
  if (nativeControl.kind === "link") {
    assertManifest(nativeControl.childSelector === undefined, `route "${slug}" link nativeControl cannot declare childSelector`);
    assertManifest(nativeControl.peerSelectors === undefined, `route "${slug}" link nativeControl cannot declare peerSelectors`);
  } else {
    assertManifest(nativeControl.fragmentOnly === undefined, `route "${slug}" state nativeControl cannot declare fragmentOnly`);
  }
  if (nativeControl.childSelector !== undefined) {
    assertNonEmptyString(nativeControl.childSelector, `route "${slug}" nativeControl childSelector must be a non-empty trimmed string`);
  }
  if (nativeControl.peerSelectors !== undefined) {
    assertManifest(Array.isArray(nativeControl.peerSelectors) && nativeControl.peerSelectors.length > 0, `route "${slug}" nativeControl peerSelectors must be a non-empty array`);
    const selectors = new Set([nativeControl.selector]);
    nativeControl.peerSelectors.forEach((selector) => {
      assertNonEmptyString(selector, `route "${slug}" nativeControl peerSelector must be a non-empty trimmed string`);
      assertManifest(!selectors.has(selector), `route "${slug}" nativeControl has duplicate peer selector "${selector}"`);
      selectors.add(selector);
    });
  }
}

function validateNetworkPolicy(slug, networkPolicy) {
  assertManifest(networkPolicy && typeof networkPolicy === "object" && !Array.isArray(networkPolicy), `route "${slug}" networkPolicy must be an object`);
  assertAllowedKeys(networkPolicy, ALLOWED_NETWORK_POLICY_KEYS, `route "${slug}" networkPolicy`);
  assertManifest(
    networkPolicy.mode === "local-only" || networkPolicy.mode === "deferred-remote",
    `route "${slug}" networkPolicy uses invalid mode "${networkPolicy.mode}"`,
  );

  if (networkPolicy.mode === "local-only") {
    assertManifest(networkPolicy.actions === undefined, `route "${slug}" local-only networkPolicy cannot declare actions`);
    return;
  }

  assertManifest(Array.isArray(networkPolicy.actions) && networkPolicy.actions.length > 0, `route "${slug}" deferred-remote networkPolicy requires actions`);
  const selectors = new Set();
  networkPolicy.actions.forEach((action, index) => {
    assertManifest(action && typeof action === "object" && !Array.isArray(action), `route "${slug}" deferred action ${index} must be an object`);
    assertAllowedKeys(action, ALLOWED_NETWORK_ACTION_KEYS, `route "${slug}" deferred action ${index}`);
    assertNonEmptyString(action.selector, `route "${slug}" deferred action ${index} selector must be a non-empty trimmed string`);
    assertManifest(!selectors.has(action.selector), `route "${slug}" has duplicate deferred action selector "${action.selector}"`);
    selectors.add(action.selector);
    assertManifest(Array.isArray(action.hosts) && action.hosts.length > 0, `route "${slug}" deferred action ${index} requires hosts`);
    const hosts = new Set();
    action.hosts.forEach((host) => {
      const normalized = normalizePolicyHost(slug, index, host);
      assertManifest(!hosts.has(normalized), `route "${slug}" deferred action ${index} has duplicate host "${host}"`);
      hosts.add(normalized);
    });
  });

  if (slug === "musicmap") {
    assertManifest(
      JSON.stringify(networkPolicy.actions) === JSON.stringify(MUSICMAP_DEFERRED_ACTIONS),
      "route \"musicmap\" must declare the approved deferred embed actions",
    );
  } else {
    assertManifest(false, `route "${slug}" cannot declare deferred-remote network access`);
  }
}

function validateManifest(manifest) {
  assertManifest(Array.isArray(manifest), "routes.manifest.json must contain an array");

  const slugs = new Set();
  const referenceUrls = new Set();

  manifest.forEach((route, index) => {
    assertManifest(route && typeof route === "object" && !Array.isArray(route), `entry ${index} must be an object`);
    assertAllowedKeys(route, ALLOWED_ROUTE_KEYS, `entry ${index}`);

    const { slug, title, summary, intent, referenceUrl, referenceMode, docsUrl, learning, shell, experience, suggestedNextSlug } = route;
    assertNonEmptyString(slug, `entry ${index} is missing slug`);
    assertManifest(!slugs.has(slug), `duplicate slug "${slug}"`);
    slugs.add(slug);

    assertNonEmptyString(title, `route "${slug}" is missing title`);
    assertNonEmptyString(summary, `route "${slug}" is missing summary`);
    assertNonEmptyString(intent, `route "${slug}" is missing intent`);
    assertManifest(VALID_INTENTS.has(intent), `route "${slug}" uses invalid intent "${intent}"`);
    assertManifest(
      referenceMode === undefined || referenceMode === "neutral",
      `route "${slug}" uses unsupported referenceMode "${referenceMode}"`,
    );

    if (referenceMode === "neutral") {
      assertManifest(referenceUrl === undefined, `route "${slug}" cannot combine referenceMode "neutral" with referenceUrl`);
    } else {
      assertNonEmptyString(referenceUrl, `route "${slug}" must include an absolute referenceUrl or use referenceMode "neutral"`);
      parseReferenceUrl(slug, referenceUrl);
      assertManifest(!referenceUrls.has(referenceUrl), `duplicate referenceUrl "${referenceUrl}"`);
      referenceUrls.add(referenceUrl);
    }

    assertManifest(docsUrl === `./docs/${slug}/`, `route "${slug}" must use docsUrl "./docs/${slug}/"`);
    assertManifest(shell && typeof shell === "object" && !Array.isArray(shell), `route "${slug}" shell must be an object`);
    assertAllowedKeys(shell, ALLOWED_SHELL_KEYS, `route "${slug}" shell`);
    assertNonEmptyString(shell.family, `route "${slug}" shell family must be a non-empty trimmed string`);
    assertManifest(VALID_SHELL_VARIANTS.has(shell.variant), `route "${slug}" shell uses invalid variant "${shell.variant}"`);
    assertManifest(VALID_NAVIGATION_MODES.has(shell.navigation), `route "${slug}" shell uses invalid navigation "${shell.navigation}"`);

    if (shell.chapters !== undefined) {
      assertManifest(shell.navigation === "generated", `route "${slug}" chapters require generated navigation`);
      validateChapters(slug, shell.chapters);
    }
    if (shell.navigation === "generated") {
      assertManifest(
        shell.chapters !== undefined || !CHAPTER_ROUTE_SLUGS.has(slug),
        `route "${slug}" generated navigation requires chapters`,
      );
    }
    if (CHAPTER_ROUTE_SLUGS.has(slug)) {
      assertManifest(shell.navigation === "generated" && shell.chapters !== undefined, `route "${slug}" requires manifest-owned chapters`);
    }
    if (shell.navigation === "native") {
      validateNativeControl(slug, shell.nativeControl);
    } else {
      assertManifest(shell.nativeControl === undefined, `route "${slug}" nativeControl requires native navigation`);
    }

    assertNonEmptyString(suggestedNextSlug, `route "${slug}" suggestedNextSlug must be a non-empty slug`);
    assertManifest(experience && typeof experience === "object" && !Array.isArray(experience), `route "${slug}" experience must be an object`);
    assertAllowedKeys(experience, ALLOWED_EXPERIENCE_KEYS, `route "${slug}" experience`);
    assertManifest(VALID_THEME_OWNERSHIP.has(experience.themeOwnership), `route "${slug}" uses invalid themeOwnership "${experience.themeOwnership}"`);
    assertNonEmptyString(experience.primarySurface, `route "${slug}" primarySurface must be a non-empty trimmed string`);
    assertNonEmptyString(experience.runtimeSurface, `route "${slug}" runtimeSurface must be a non-empty trimmed string`);
    assertManifest(
      VALID_INTERACTION_PROBES.has(experience.interactionProbe),
      `route "${slug}" uses invalid interactionProbe "${experience.interactionProbe}"`,
    );
    if (experience.themeOwnership === "runtime-hook") {
      assertNonEmptyString(experience.themeRoot, `route "${slug}" runtime-hook themeOwnership requires themeRoot`);
    } else {
      assertManifest(experience.themeRoot === undefined, `route "${slug}" themeRoot requires runtime-hook themeOwnership`);
    }
    validateNetworkPolicy(slug, experience.networkPolicy);

    if (learning !== undefined) {
      assertManifest(learning && typeof learning === "object" && !Array.isArray(learning), `route "${slug}" learning metadata must be an object`);
      assertAllowedKeys(learning, ALLOWED_LEARNING_KEYS, `route "${slug}" learning metadata`);
      assertManifest(learning.difficulty === undefined || VALID_LEARNING_DIFFICULTIES.has(learning.difficulty), `route "${slug}" uses invalid learning difficulty "${learning.difficulty}"`);
      assertManifest(learning.durationMinutes === undefined || Number.isInteger(learning.durationMinutes) && learning.durationMinutes > 0, `route "${slug}" learning durationMinutes must be a positive integer`);
      assertManifest(learning.order === undefined || Number.isInteger(learning.order) && learning.order > 0, `route "${slug}" learning order must be a positive integer`);
      assertManifest(learning.prerequisites === undefined || Array.isArray(learning.prerequisites), `route "${slug}" learning prerequisites must be an array`);
    }
  });

  manifest.forEach(({ slug, learning, suggestedNextSlug }) => {
    assertManifest(suggestedNextSlug !== slug, `route "${slug}" cannot suggest itself`);
    assertManifest(slugs.has(suggestedNextSlug), `route "${slug}" has unknown suggested next route "${suggestedNextSlug}"`);
    if (!learning?.prerequisites) {
      return;
    }

    const prerequisites = new Set();
    learning.prerequisites.forEach((prerequisite) => {
      assertNonEmptyString(prerequisite, `route "${slug}" learning prerequisite must be a non-empty slug`);
      assertManifest(prerequisite !== slug, `route "${slug}" cannot require itself`);
      assertManifest(!prerequisites.has(prerequisite), `route "${slug}" has duplicate prerequisite "${prerequisite}"`);
      assertManifest(slugs.has(prerequisite), `route "${slug}" has unknown prerequisite "${prerequisite}"`);
      prerequisites.add(prerequisite);
    });
  });
}

function docsTemplate(route) {
  const escapedTitle = escapeHtml(route.title);
  const escapedSlug = escapeHtml(route.slug);
  const description = `Provenance, parity notes, and implementation references for the local ${escapedSlug} route.`;
  const docsUrl = `https://kohnnn.github.io/interactive-explanation/docs/${escapedSlug}/`;
  const escapedReferenceUrl = route.referenceUrl ? escapeAttribute(route.referenceUrl) : "";
  const actionLinks = route.referenceMode === "neutral"
    ? `        <a class="action-link" href="../../${escapedSlug}/">Open replica</a>\n`
    : `        <a class="action-link" href="../../${escapedSlug}/">Open replica</a>\n        <a class="action-link secondary" href="${escapedReferenceUrl}" target="_blank" rel="noreferrer">Open original</a>\n`;
  const snapshotLabel = route.referenceMode === "neutral"
    ? "local curated route verified in docs"
    : "fill in when the route is verified";
  const sourceFamilyLabel = route.referenceMode === "neutral"
    ? "curated multi-source route"
    : "fill in source family";

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapedTitle} Replica Docs</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="noindex,follow">
  <meta property="og:title" content="${escapedTitle} Replica Docs">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${docsUrl}">
  <link rel="canonical" href="${docsUrl}">
  <link rel="icon" type="image/png" href="../../favicon.png">
  <script src="../../shared/theme-init.js"></script>
  <link rel="stylesheet" href="../../shared/site.css">
</head>
<body data-page-type="docs" data-parity-url="./parity.json">
  <main class="site-page docs-page">
    <a class="back-link" href="../../">Back to Atlas</a>

    <header class="hero hero-compact">
      <p class="eyebrow">Replica documentation</p>
      <h1>${escapedTitle}</h1>
      <p class="lead">
        Local route <code>/interactive-explanation/${escapedSlug}/</code> is tracked through the
        standard docs, parity, and public-footer contract used by the rest of the replica site.
      </p>
      <div class="action-row">
${actionLinks.trimEnd()}
      </div>
      <p class="meta-line">
        Upstream snapshot: <code>${snapshotLabel}</code><br>
        Source family: <code>${sourceFamilyLabel}</code>
      </p>
    </header>

    <section class="note-grid">
      <article class="note-section">
        <h2>Source snapshot</h2>
        <p>Document the published page or source family, what was vendored, and the scope of the local route.</p>
      </article>

      <article class="note-section">
        <h2>Asset handoff</h2>
        <p>List the local shell, runtime, and route-local assets that define the shipped replica.</p>
      </article>

      <article class="note-section">
        <h2>Known deviations</h2>
        <p>Record any deliberate local shell changes, provenance cleanup, or neutralized upstream surfaces.</p>
      </article>

      <article class="note-section">
        <h2>Validation guidance</h2>
        <p>List the route-specific smoke expectations and the shared commands required after edits.</p>
      </article>
    </section>

    <section class="note-section">
      <div class="section-heading">
        <h2>Parity checklist</h2>
        <span data-module-count class="meta-pill">Loading...</span>
      </div>
      <div class="parity-list" data-parity-list>
        <div class="empty-state">Loading parity contract...</div>
      </div>
    </section>
  </main>

  <script src="../../shared/site.js"></script>
</body>
</html>
`;
}

function parityTemplate(route) {
  return [
    {
      moduleId: "route-shell",
      originalBehavior: `Document the original shell behavior for ${route.title}.`,
      localStatus: `Document the local route status for ${route.title}.`,
      sourceFiles: [`../../${route.slug}/index.html`],
      notes: [
        "Replace this stub with route-specific notes before shipping.",
      ],
      evidence: [
        "Replace this stub with route-specific evidence before shipping.",
      ],
    },
  ];
}

function scaffoldRoute(route) {
  const docsDir = path.join(rootDir, "docs", route.slug);
  const docsIndexPath = path.join(docsDir, "index.html");
  const parityPath = path.join(docsDir, "parity.json");

  fs.mkdirSync(docsDir, { recursive: true });

  if (!fs.existsSync(docsIndexPath)) {
    fs.writeFileSync(docsIndexPath, docsTemplate(route), "utf8");
  }

  if (!fs.existsSync(parityPath)) {
    writeJson(parityPath, parityTemplate(route));
  }
}

const manifest = readManifest();
writeJson(pagesPath, manifest);

const scaffoldSlug = getArgValue("--scaffold");
if (scaffoldSlug) {
  const route = manifest.find((entry) => entry.slug === scaffoldSlug);
  if (!route) {
    throw new Error(`Could not find route metadata for ${scaffoldSlug}`);
  }
  scaffoldRoute(route);
}

if (hasFlag("--scaffold-all")) {
  manifest.forEach(scaffoldRoute);
}

console.log(`Synced ${manifest.length} routes from routes.manifest.json to pages.json`);
