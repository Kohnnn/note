import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..", "..");
const pagesSource = fs.readFileSync(path.join(root, "pages.json"), "utf8");
const manifestSource = fs.readFileSync(path.join(root, "routes.manifest.json"), "utf8");
const pages = JSON.parse(pagesSource);
const manifest = JSON.parse(manifestSource);

const expectedContractBySlug = new Map([
  ["trust", ["ncase", "essay", "native", "fixed-runtime", "polygons"]],
  ["polygons", ["ncase", "essay", "none", "fixed-runtime", "ballot"]],
  ["ballot", ["ncase", "essay", "none", "fixed-runtime", "crowds"]],
  ["crowds", ["ncase", "essay", "native", "fixed-runtime", "loopy"]],
  ["loopy", ["ncase", "essay", "none", "fixed-runtime", "simulating"]],
  ["neurons", ["ncase", "essay", "native", "fixed-runtime", "anxiety"]],
  ["remember", ["ncase", "essay", "generated", "fixed-runtime", "primary-interactive-hub"]],
  ["anxiety", ["ncase", "essay", "none", "fixed-runtime", "remember"]],
  ["wbwwb", ["ncase", "essay", "none", "fixed-runtime", "crowds"]],
  ["coming-out-simulator-2014", ["ncase", "essay", "none", "fixed-runtime", "anxiety"]],
  ["covid-19", ["ncase", "essay", "generated", "fixed-runtime", "crowds"]],
  ["simulating", ["ncase", "essay", "native", "fixed-runtime", "sim"]],
  ["sim", ["ncase", "essay", "none", "fixed-runtime", "primary-interactive-hub"]],
  ["decision-tree", ["mlu-pilot", "essay", "generated", "shell-only", "random-forest"]],
  ["random-forest", ["mlu-pilot", "essay", "generated", "shell-only", "linear-regression"]],
  ["conditional-probability", ["ev-essay", "essay", "generated", "shell-only", "logistic-regression"]],
  ["markov-chains", ["ev-essay", "essay", "generated", "shell-only", "eigenvectors-and-eigenvalues"]],
  ["principal-component-analysis", ["ev-essay", "essay", "generated", "shell-only", "eigenvectors-and-eigenvalues"]],
  ["exponentiation", ["ev-essay", "essay", "generated", "shell-only", "conditional-probability"]],
  ["pi", ["ev-essay", "essay", "generated", "shell-only", "sine-and-cosine"]],
  ["sine-and-cosine", ["ev-essay", "essay", "generated", "shell-only", "eigenvectors-and-eigenvalues"]],
  ["eigenvectors-and-eigenvalues", ["ev-essay", "essay", "generated", "shell-only", "tesseract"]],
  ["image-kernels", ["ev-essay", "essay", "generated", "shell-only", "alpha-compositing"]],
  ["ordinary-least-squares-regression", ["ev-essay", "essay", "generated", "shell-only", "linear-regression"]],
  ["blockchain", ["anders-lab", "lab", "native", "shell-only", "public-private-keys"]],
  ["public-private-keys", ["anders-lab", "lab", "native", "shell-only", "zero-knowledge-proof-demo"]],
  ["zero-knowledge-proof-demo", ["anders-lab", "lab", "none", "shell-only", "blockchain-101-combined-flow"]],
  ["alpha-compositing", ["engineering-longform", "essay", "generated", "shell-only", "color-spaces"]],
  ["color-spaces", ["engineering-longform", "essay", "generated", "shell-only", "lights-and-shadows"]],
  ["sound", ["engineering-longform", "essay", "generated", "shell-only", "ableton-learning-synths-get-started"]],
  ["cameras-and-lenses", ["engineering-longform", "essay", "generated", "shell-only", "lights-and-shadows"]],
  ["lights-and-shadows", ["engineering-longform", "essay", "generated", "shell-only", "primary-interactive-hub"]],
  ["tesseract", ["engineering-longform", "essay", "generated", "shell-only", "curves-and-surfaces"]],
  ["gears", ["engineering-longform", "essay", "generated", "shell-only", "bicycle"]],
  ["gps", ["engineering-longform", "essay", "generated", "shell-only", "stargazing-dashboard"]],
  ["earth-and-sun", ["engineering-longform", "essay", "generated", "shell-only", "stargazing-dashboard"]],
  ["bicycle", ["engineering-longform", "essay", "generated", "shell-only", "airfoil"]],
  ["airfoil", ["engineering-longform", "essay", "generated", "shell-only", "formula-1-racing"]],
  ["curves-and-surfaces", ["engineering-longform", "essay", "generated", "shell-only", "image-kernels"]],
  ["internal-combustion-engine", ["engineering-longform", "essay", "generated", "shell-only", "gears"]],
  ["mechanical-watch", ["engineering-longform", "essay", "generated", "shell-only", "interactive-mechanical-watch"]],
  ["naval-architecture", ["engineering-longform", "essay", "generated", "shell-only", "airfoil"]],
  ["formula-1-racing", ["runtime", "essay", "generated", "shell-only", "stargazing-dashboard"]],
  ["interactive-mechanical-watch", ["runtime", "essay", "generated", "shell-only", "watch-mesh-explorer"]],
  ["reading-qr-codes-without-a-computer", ["runtime", "essay", "none", "fixed-runtime", "blockchain"]],
  ["teoria-interval-ear-training", ["teoria-practice", "practice", "none", "fixed-runtime", "ableton-learning-music-play-with-beats"]],
  ["teoria-note-ear-training", ["teoria-practice", "practice", "none", "fixed-runtime", "teoria-key-and-note-ear-training"]],
  ["teoria-key-and-note-ear-training", ["teoria-practice", "practice", "none", "fixed-runtime", "teoria-random-key-and-note-ear-training"]],
  ["teoria-random-key-and-note-ear-training", ["teoria-practice", "practice", "none", "fixed-runtime", "teoria-scale-construction"]],
  ["teoria-scale-construction", ["teoria-practice", "practice", "none", "fixed-runtime", "teoria-interval-identification-and-inversion"]],
  ["teoria-interval-identification-and-inversion", ["teoria-practice", "practice", "none", "fixed-runtime", "ableton-learning-music-play-with-beats"]],
  ["ableton-learning-music-playground", ["ableton-practice", "practice", "none", "fixed-runtime", "ableton-learning-synths-get-started"]],
  ["ableton-learning-music-play-with-beats", ["ableton-practice", "practice", "none", "fixed-runtime", "ableton-learning-music-playground"]],
  ["ableton-learning-music-play-with-notes-and-scales", ["ableton-practice", "practice", "none", "fixed-runtime", "ableton-learning-music-play-with-chords"]],
  ["ableton-learning-music-play-with-chords", ["ableton-practice", "practice", "none", "fixed-runtime", "ableton-learning-music-play-with-basslines"]],
  ["ableton-learning-music-play-with-basslines", ["ableton-practice", "practice", "none", "fixed-runtime", "ableton-learning-music-play-with-melodies"]],
  ["ableton-learning-music-play-with-melodies", ["ableton-practice", "practice", "none", "fixed-runtime", "ableton-learning-music-play-with-song-structures"]],
  ["ableton-learning-music-play-with-song-structures", ["ableton-practice", "practice", "none", "fixed-runtime", "chrome-music-lab-song-maker"]],
  ["ableton-learning-synths-get-started", ["ableton-synths", "lab", "native", "runtime-hook", "musicmap"]],
  ["ableton-learning-synths-how-synths-make-sound", ["ableton-synths", "lab", "native", "runtime-hook", "ableton-learning-synths-filter-resonance"]],
  ["ableton-learning-synths-filter-resonance", ["ableton-synths", "lab", "native", "runtime-hook", "ableton-learning-synths-modulating-amplitude-with-envelopes"]],
  ["ableton-learning-synths-modulating-amplitude-with-envelopes", ["ableton-synths", "lab", "native", "runtime-hook", "ableton-learning-synths-matching-envelopes"]],
  ["ableton-learning-synths-matching-envelopes", ["ableton-synths", "lab", "native", "runtime-hook", "ableton-learning-synths-recipes"]],
  ["ableton-learning-synths-recipes", ["ableton-synths", "lab", "native", "runtime-hook", "musicmap"]],
  ["chrome-music-lab-song-maker", ["runtime", "essay", "none", "fixed-runtime", "music-interactive-hub"]],
  ["musicmap", ["runtime", "essay", "none", "fixed-runtime", "music-interactive-hub"]],
  ["music-interactive-hub", ["local-hub", "essay", "generated", "shell-only", "teoria-interval-ear-training"]],
  ["linear-regression", ["mlu-pilot", "essay", "generated", "shell-only", "logistic-regression"]],
  ["logistic-regression", ["mlu-pilot", "essay", "generated", "shell-only", "train-test-validation"]],
  ["precision-recall", ["mlu-pilot", "essay", "generated", "shell-only", "roc-auc"]],
  ["roc-auc", ["mlu-pilot", "essay", "generated", "shell-only", "bias-variance"]],
  ["bias-variance", ["mlu-pilot", "essay", "generated", "shell-only", "double-descent"]],
  ["train-test-validation", ["mlu-pilot", "essay", "native", "shell-only", "precision-recall"]],
  ["double-descent", ["mlu-pilot", "essay", "generated", "shell-only", "double-descent2"]],
  ["double-descent2", ["mlu-pilot", "essay", "generated", "shell-only", "decision-tree"]],
  ["memory-allocation", ["samwho-essay", "essay", "generated", "runtime-hook", "load-balancing"]],
  ["load-balancing", ["samwho-essay", "essay", "generated", "runtime-hook", "primary-interactive-hub"]],
  ["hysteresis-slack", ["systems-essay", "essay", "generated", "shell-only", "rigid-body-collisions"]],
  ["rigid-body-collisions", ["systems-essay", "essay", "generated", "shell-only", "bicycle"]],
  ["blockchain-101-combined-flow", ["anders-lab", "lab", "none", "shell-only", "primary-interactive-hub"]],
  ["primary-interactive-hub", ["local-hub", "essay", "generated", "shell-only", "trust"]],
  ["stargazing-dashboard", ["runtime", "lab", "none", "fixed-runtime", "primary-interactive-hub"]],
  ["watch-mesh-explorer", ["runtime", "lab", "native", "fixed-runtime", "primary-interactive-hub"]],
]);

const expectedChaptersBySlug = new Map([
  ["music-interactive-hub", [{ selector: "#recommended-path", title: "Recommended path" }, { selector: "#ear-training-cluster", title: "Ear training and notation" }, { selector: "#sequencing-cluster", title: "Sequencing and composition" }, { selector: "#synthesis-cluster", title: "Synthesis and sound design" }, { selector: "#history-cluster", title: "History and genre context" }]],
  ["decision-tree", [{ selector: "#intro", title: "Build the tree" }, { selector: "#splits", title: "Choose the split" }, { selector: "#informationgain", title: "Measure the gain" }, { selector: "#anotherlook", title: "Read the trained tree" }, { selector: "#pertubations", title: "Stress-test the tree" }, { selector: "#limitations", title: "Why forests help" }, { selector: "#final", title: "References" }]],
  ["random-forest", [{ selector: "#introduction", title: "Vote before you trust" }, { selector: "#ensemble", title: "Why ensembles work" }, { selector: "#random-forest", title: "Build the forest" }, { selector: "#barcode", title: "Read disagreement" }, { selector: "#cantor-section", title: "Compare predictions" }, { selector: "#conclusion", title: "Takeaways" }, { selector: "#resources", title: "References" }]],
  ["linear-regression", [{ selector: "#intro", title: "Meet linear regression" }, { selector: "#scrolly", title: "Fit the line" }, { selector: "#mse-container", title: "Read model fit", closest: "section", id: "model-evaluation" }, { selector: "#gd-container", title: "Watch gradient descent", closest: "div", id: "gradient-descent" }, { selector: "#tab-container", title: "Interpret the coefficients", closest: "div", id: "interpretation" }, { selector: "#resources", title: "References" }]],
  ["logistic-regression", [{ selector: "#intro", title: "Meet logistic regression" }, { selector: "#tempSlider", title: "Move the boundary", closest: "section", id: "boundary-scene" }, { selector: "#ll-container", title: "Evaluate the model", closest: "section", id: "model-evaluation" }, { selector: "#gd-container", title: "Estimate coefficients", closest: "section", id: "estimating-coefficients" }, { selector: "#tab-container", title: "Interpret the model", closest: "div", id: "interpreting-the-model" }, { selector: "#resources", title: "References" }]],
  ["precision-recall", [{ selector: "#intro", title: "Meet precision and recall" }, { selector: "#heatmap-container", title: "Read the confusion matrix", closest: "div", id: "confusion-matrix" }, { selector: "#f1-container", title: "Balance the metrics", closest: "div", id: "f1-balance" }, { selector: "#error-chart", title: "Move the threshold", closest: "div", id: "threshold-tradeoff" }, { selector: "#resources", title: "References" }]],
  ["roc-auc", [{ selector: "#intro", title: "Meet ROC and AUC" }, { selector: "#roc-scatter-chart", title: "Move the threshold", closest: "section", id: "first-threshold" }, { selector: "#roc-section", title: "Read the ROC curve" }, { selector: "#auc-chart", title: "Interpret AUC", closest: "section", id: "auc-section" }, { selector: "#conclusion", title: "Considerations" }, { selector: "#resources", title: "References" }]],
  ["bias-variance", [{ selector: "#intro", title: "Meet the tradeoff" }, { selector: "#scrolly", title: "From underfit to overfit" }, { selector: "#loess-section", title: "Tune LOESS smoothing" }, { selector: "#knn-section", title: "Tune K-nearest neighbors" }, { selector: "#double-descent-section", title: "See the double-descent echo" }, { selector: "#double-descent-section + hr + section", title: "Wrap up the lesson" }, { selector: "#outro", title: "References" }]],
  ["double-descent", [{ selector: "#intro", title: "Meet double descent" }, { selector: "#scrolly", title: "Watch the second descent" }, { selector: "#section2", title: "Set up the experiment" }, { selector: "#scrolly-side", title: "Move across the threshold" }, { selector: "#gap", title: "Mind the interpolation gap" }, { selector: "#conclusion", title: "References" }]],
  ["double-descent2", [{ selector: "#intro", title: "Set up the mathematics" }, { selector: "#piecewise-model", title: "Define the model" }, { selector: "#below-threshold", title: "Below the interpolation threshold" }, { selector: "#at-threshold", title: "At the interpolation threshold" }, { selector: "#to-infinity", title: "In the spline limit" }, { selector: "#references", title: "Resources" }]],
  ["rigid-body-collisions", [{ selector: "#before-we-start", title: "Set the frame" }, { selector: "#what-are-we-trying-to-do", title: "Define the motion problem" }, { selector: "#what-is-a-collision", title: "Formalize collision" }, { selector: "#conclusion", title: "Wrap the intuition" }]],
  ["primary-interactive-hub", [{ selector: "#systems-cluster", title: "Systems and society" }, { selector: "#stories-cluster", title: "Stories and games" }, { selector: "#playgrounds-cluster", title: "Editable playgrounds" }]],
]);

const expectedNativeControlBySlug = new Map([
  ["trust", { selector: "#select .dot", minimum: 10, kind: "state" }],
  ["crowds", { selector: "#navigation > div[chapter]", minimum: 9, kind: "state" }],
  ["neurons", { selector: "iframe[title=\"Neurotic Neurons interactive\"]", minimum: 1, kind: "state", childSelector: "#control_play, #control_volume, #control_captions" }],
  ["simulating", { selector: ".links a[href=\"../sim/\"], .links a[href=\"./original/\"]", minimum: 2, kind: "link", fragmentOnly: false }],
  ["blockchain", { selector: "nav a", minimum: 6, kind: "link", fragmentOnly: false }],
  ["public-private-keys", { selector: "nav a", minimum: 4, kind: "link", fragmentOnly: false }],
  ["ableton-learning-synths-get-started", { selector: "main[data-ableton-synth-lesson] a[data-archive-localized=\"true\"]", minimum: 2, kind: "link", fragmentOnly: false }],
  ["ableton-learning-synths-how-synths-make-sound", { selector: "main[data-ableton-synth-lesson] a[data-archive-localized=\"true\"]", minimum: 2, kind: "link", fragmentOnly: false }],
  ["ableton-learning-synths-filter-resonance", { selector: "main[data-ableton-synth-lesson] a[data-archive-localized=\"true\"]", minimum: 2, kind: "link", fragmentOnly: false }],
  ["ableton-learning-synths-modulating-amplitude-with-envelopes", { selector: "main[data-ableton-synth-lesson] a[data-archive-localized=\"true\"]", minimum: 2, kind: "link", fragmentOnly: false }],
  ["ableton-learning-synths-matching-envelopes", { selector: "main[data-ableton-synth-lesson] a[data-archive-localized=\"true\"]", minimum: 2, kind: "link", fragmentOnly: false }],
  ["ableton-learning-synths-recipes", { selector: "main[data-ableton-synth-lesson] a[data-archive-localized=\"true\"]", minimum: 2, kind: "link", fragmentOnly: false }],
  ["train-test-validation", { selector: "#toc a[href^=\"#\"]", minimum: 6, kind: "link", fragmentOnly: true }],
  ["watch-mesh-explorer", { selector: "[data-lesson-list] button", minimum: 10, kind: "state", peerSelectors: ["[data-prev-lesson]", "[data-next-lesson]"] }],
]);

const requirements = [
  {
    name: "shared public-footer script",
    test: (html) => /shared\/public-footer\.js/.test(html),
    hint: 'include <script src="../shared/public-footer.js"></script>',
  },
  {
    name: "charset declaration",
    test: (html) => /charset=/i.test(html),
    hint: 'add <meta charset="utf-8"> as the first element in <head>',
  },
  {
    name: "responsive viewport meta",
    test: (html) => /name=["']viewport["']/i.test(html),
    hint: 'add <meta name="viewport" content="width=device-width, initial-scale=1">',
  },
  {
    name: "html lang attribute",
    test: (html) => /<html[^>]*\slang=/i.test(html),
    hint: 'set a language on the root element, e.g. <html lang="en">',
  },
  {
    name: "document title",
    test: (html) => /<title>[^<]*\S[^<]*<\/title>/i.test(html),
    hint: "add a non-empty <title>",
  },
  {
    name: "single meaningful main landmark",
    test: (html) => {
      const openings = html.match(/<main(?:\s[^>]*)?>/gi) || [];
      const closings = html.match(/<\/main>/gi) || [];
      const content = html.match(/<main(?:\s[^>]*)?>([\s\S]*?)<\/main>/i)?.[1] || "";
      return openings.length === 1 && closings.length === 1 && content.trim().length > 0;
    },
    hint: "wrap the primary route content in exactly one non-empty <main>",
  },
];

function assertNonEmptyStringArray(value, label) {
  assert.ok(Array.isArray(value) && value.length > 0, `${label} must be a non-empty array`);
  for (const entry of value) {
    assert.equal(typeof entry, "string", `${label} entries must be strings`);
    assert.ok(entry.trim(), `${label} entries must be non-empty`);
  }
}

test("pages metadata exactly matches the generated route manifest", () => {
  assert.equal(pagesSource, manifestSource);
  assert.deepEqual(pages, manifest);
});

test("all route experience assignments match the approved contract", () => {
  const actualContractBySlug = new Map(manifest.map((route) => [
    route.slug,
    [
      route.shell.family,
      route.shell.variant,
      route.shell.navigation,
      route.experience.themeOwnership,
      route.suggestedNextSlug,
    ],
  ]));
  const actualChaptersBySlug = new Map(
    manifest.filter((route) => route.shell.chapters).map((route) => [route.slug, route.shell.chapters]),
  );
  const actualNativeControlBySlug = new Map(
    manifest.filter((route) => route.shell.nativeControl).map((route) => [route.slug, route.shell.nativeControl]),
  );

  assert.equal(manifest.length, 83);
  assert.deepEqual(actualContractBySlug, expectedContractBySlug);
  assert.deepEqual(actualChaptersBySlug, expectedChaptersBySlug);
  assert.deepEqual(actualNativeControlBySlug, expectedNativeControlBySlug);
});

test("numbered Progress remains exclusive to the Music and Blockchain Guided Paths", () => {
  const expectedProgressBySlug = new Map([
    ["music-interactive-hub", 5],
    ["blockchain-101-combined-flow", 3],
  ]);

  for (const slug of ["music-interactive-hub", "blockchain-101-combined-flow", "primary-interactive-hub"]) {
    const source = fs.readFileSync(path.join(root, slug, "index.html"), "utf8");
    const progressSlug = source.match(/\bdata-learning-progress-slug=["']([^"']+)["']/)?.[1];
    const stepCount = Number(source.match(/\bdata-learning-step-count=["'](\d+)["']/)?.[1] || 0);
    const numberedSteps = (source.match(/\bdata-learning-step=["']\d+["']/g) || []).length;
    const controlCount = (source.match(/\bdata-learning-(?:start|resume)(?:\s|=|>)/g) || []).length;
    const expectedStepCount = expectedProgressBySlug.get(slug) || 0;

    assert.equal(progressSlug, expectedStepCount ? slug : undefined, `${slug} Progress slug`);
    assert.equal(stepCount, expectedStepCount, `${slug} Progress step count`);
    assert.equal(numberedSteps, expectedStepCount, `${slug} numbered Progress steps`);
    assert.equal(controlCount, expectedStepCount ? 2 : 0, `${slug} Start/Resume controls`);
  }
});

test("all route HTML files carry canonical Engineering Sandbox seams", () => {
  for (const route of manifest) {
    const routePath = path.join(root, route.slug, "index.html");
    const source = fs.readFileSync(routePath, "utf8");
    const head = source.match(/<head\b[^>]*>([\s\S]*?)(?:<\/head\s*>|<body\b)/i)?.[1];
    const body = source.match(/<body\b([^>]*)>/i)?.[1];
    assert.ok(head, `${route.slug} must have a head seam`);
    assert.ok(body !== undefined, `${route.slug} must have a body seam`);
    const expectedAttributes = {
      "data-story-shell": "engineering-sandbox",
      "data-story-route": route.slug,
      "data-story-family": route.shell.family,
      "data-story-variant": route.shell.variant,
      "data-story-nav": route.shell.navigation,
    };
    for (const [name, value] of Object.entries(expectedAttributes)) {
      assert.equal((body.match(new RegExp(`\\b${name}\\s*=`, "gi")) || []).length, 1, `${route.slug} must declare ${name} once`);
      assert.match(body, new RegExp(`\\b${name}\\s*=\\s*["']${value}["']`, "i"), `${route.slug} must declare ${name}=${value}`);
    }
    assert.equal((head.match(/<meta\b[^>]*\bname\s*=\s*["']color-scheme["'][^>]*>/gi) || []).length, 1, `${route.slug} must have one color-scheme meta`);
    assert.match(head, /<meta\b(?=[^>]*\bname\s*=\s*["']color-scheme["'])(?=[^>]*\bcontent\s*=\s*["']light dark["'])[^>]*>/i, `${route.slug} must declare light and dark color schemes`);
    const baseHref = head.match(/<base\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/i)?.[1];
    const documentUrl = new URL(`https://route.local/${route.slug}/index.html`);
    const base = baseHref ? new URL(baseHref, documentUrl) : documentUrl;
    const resolve = (href) => new URL(href, base).pathname;
    const theme = head.match(/<script\b[^>]*\bsrc\s*=\s*["']([^"']*shared\/theme-init\.js)["'][^>]*><\/script>/i);
    const sandboxCss = head.match(/<link\b[^>]*\bhref\s*=\s*["']([^"']*shared\/engineering-sandbox\.css)["'][^>]*>/i);
    const sandboxScript = source.match(/<script\b(?=[^>]*\bdefer\b)(?=[^>]*\bsrc\s*=\s*["']([^"']*shared\/engineering-sandbox\.js)["'])[^>]*><\/script>/i);
    assert.ok(theme, `${route.slug} must synchronously load theme init`);
    assert.ok(sandboxCss, `${route.slug} must load Engineering Sandbox CSS`);
    assert.ok(sandboxScript, `${route.slug} must defer Engineering Sandbox runtime`);
    assert.equal((source.match(/shared\/theme-init\.js/g) || []).length, 1, `${route.slug} must load theme init once`);
    assert.equal((source.match(/shared\/engineering-sandbox\.css/g) || []).length, 1, `${route.slug} must load sandbox CSS once`);
    assert.equal((source.match(/shared\/engineering-sandbox\.js/g) || []).length, 1, `${route.slug} must load sandbox runtime once`);
    assert.equal(resolve(theme[1]), "/shared/theme-init.js", `${route.slug} theme init must resolve through base`);
    assert.equal(resolve(sandboxCss[1]), "/shared/engineering-sandbox.css", `${route.slug} sandbox CSS must resolve through base`);
    assert.equal(resolve(sandboxScript[1]), "/shared/engineering-sandbox.js", `${route.slug} sandbox runtime must resolve through base`);
    const stylePositions = [...head.matchAll(/<(?:style\b|link\b[^>]*\brel\s*=\s*["'][^"']*\bstylesheet\b[^"']*["'])/gi)]
      .map((match) => match.index)
      .filter((position) => position !== sandboxCss.index);
    assert.ok(stylePositions.every((position) => theme.index < position), `${route.slug} must load theme init before route styles`);
    assert.ok(stylePositions.every((position) => sandboxCss.index > position), `${route.slug} must load sandbox CSS after route styles`);
    const modules = JSON.parse(fs.readFileSync(path.join(root, "docs", route.slug, "parity.json"), "utf8"));
    const module = modules.find((entry) => entry.moduleId === "universal-route-html-seams");
    assert.ok(module, `${route.slug} parity must include universal Route seam evidence`);
    assert.ok(module.notes.includes("Ticket 12 synchronizes the manifest-owned Engineering Sandbox body contract and shared head seams without moving existing Route runtimes or scripts."), `${route.slug} parity notes Ticket 12`);
    assert.ok(module.evidence.includes("Route HTML declares canonical data-story metadata plus one color-scheme meta, synchronous theme init before Route styles, Sandbox CSS after Route styles, and one deferred Sandbox runtime whose existing position is preserved."), `${route.slug} parity evidence Ticket 12`);
  }
});

test("anxiety exposes its pre-start control and fits its fixed game stage at narrow widths", () => {
  const route = manifest.find((entry) => entry.slug === "anxiety");
  const css = fs.readFileSync(path.join(root, "anxiety", "styles", "game.css"), "utf8");

  assert.equal(route.experience.primarySurface, "#loading");
  assert.match(css, /@media screen and \(max-width: 359px\)[\s\S]*#game_container[\s\S]*transform: scale\(calc\(100vw \/ 360px\)\);[\s\S]*transform-origin: left center;/);
});

test("sim emoji fallback resolves to its shipped font asset", () => {
  const scriptPath = path.join(root, "sim", "scripts", "libraries", "emojiFallback.js");
  const source = fs.readFileSync(scriptPath, "utf8");
  const assetUrl = source.match(/src: url\("([^"]+OpenSansEmoji\.otf)"\)/)?.[1];
  assert.ok(assetUrl, "sim emoji fallback must declare its local font URL");
  assert.ok(
    fs.existsSync(path.resolve(path.join(root, "sim"), assetUrl)),
    `sim emoji fallback asset does not resolve: ${assetUrl}`,
  );
});

for (const route of manifest) {
  const routeHtml = path.join(root, route.slug, "index.html");
  const docsDir = path.join(root, "docs", route.slug);
  const docsHtml = path.join(docsDir, "index.html");
  const parityPath = path.join(docsDir, "parity.json");

  test(`route "${route.slug}" has an index.html`, () => {
    assert.ok(fs.existsSync(routeHtml), `missing ${route.slug}/index.html`);
  });

  test(`route "${route.slug}" satisfies the UI/UX baseline`, () => {
    const html = fs.readFileSync(routeHtml, "utf8");
    for (const requirement of requirements) {
      assert.ok(
        requirement.test(html),
        `${route.slug}/index.html is missing the ${requirement.name}: ${requirement.hint}`,
      );
    }
  });

  test(`route "${route.slug}" has authoritative docs and parity metadata`, () => {
    assert.equal(route.docsUrl, `./docs/${route.slug}/`);
    assert.ok(fs.existsSync(docsHtml), `missing docs/${route.slug}/index.html`);
    assert.ok(fs.existsSync(parityPath), `missing docs/${route.slug}/parity.json`);

    const modules = JSON.parse(fs.readFileSync(parityPath, "utf8"));
    assert.ok(Array.isArray(modules) && modules.length > 0, `${route.slug} parity.json must be a non-empty array`);
    for (const [index, module] of modules.entries()) {
      assert.ok(module && typeof module === "object" && !Array.isArray(module), `${route.slug} module ${index} must be an object`);
      for (const field of ["moduleId", "originalBehavior", "localStatus"]) {
        assert.equal(typeof module[field], "string", `${route.slug} module ${index} ${field} must be a string`);
        assert.ok(module[field].trim(), `${route.slug} module ${index} ${field} must be non-empty`);
      }
      for (const field of ["sourceFiles", "notes", "evidence"]) {
        assertNonEmptyStringArray(module[field], `${route.slug} module ${index} ${field}`);
      }
    }
  });
}
