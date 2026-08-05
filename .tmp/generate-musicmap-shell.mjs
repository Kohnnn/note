import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const repoRoot = "C:/Users/Admin/Desktop/PersonalWebsite/interactive-note";
const sourcePath = path.join(repoRoot, ".tmp", "musicmap-audit", "index.html");
const outputPath = path.join(repoRoot, "interactive-explanation", "musicmap", "index.html");

const rawHtml = fs.readFileSync(sourcePath, "utf8");
const strippedHtml = rawHtml.replace(/<script\b[\s\S]*?<\/script>/gi, "");

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(strippedHtml, { waitUntil: "domcontentloaded" });

const sanitizedHtml = await page.evaluate(() => {
  const removeIds = [
    "privacy-policy-banner",
    "store-announcement-banner",
    "store-button",
    "on-screen-disclaimer",
    "privacy-policy-side-pane",
    "introduction-side-pane",
    "abstract-side-pane",
    "methodology-side-pane",
    "glossary-side-pane",
    "acknowledgements-side-pane",
    "about-side-pane",
  ];
  const removeToggleIds = [
    "introduction-toggle-button",
    "abstract-toggle-button",
    "methodology-toggle-button",
    "glossary-toggle-button",
    "acknowledgements-toggle-button",
    "about-toggle-button",
  ];

  for (const id of removeIds) {
    document.getElementById(id)?.remove();
  }

  for (const id of removeToggleIds) {
    document.getElementById(id)?.closest("li")?.remove();
  }

  document.querySelector(".social-media-buttons")?.remove();

  document.body.dataset.referenceUrl = "https://musicmap.info/";
  document.body.dataset.referenceText = "Musicmap";
  document.body.dataset.footerLabel = "Original page";
  document.body.dataset.canonicalUrl = "./";
  document.body.dataset.musicException = "youtube-spotify-user-click-only";
  document.body.classList.add("musicmap-route");

  document.title = "Musicmap";
  document.documentElement.lang = "en";

  const head = document.head;
  head.innerHTML = `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Musicmap</title>
    <meta name="description" content="Local Musicmap replica with vendored graph, search, modal content, and user-triggered YouTube or Spotify playback surfaces under a scoped exception.">
    <link rel="apple-touch-icon" href="./apple-touch-icon.png">
    <link rel="icon" href="./favicon.ico">
    <link rel="canonical" href="https://localhost/interactive-explanation/musicmap/">
    <meta property="og:title" content="Musicmap">
    <meta property="og:description" content="Local Musicmap replica with vendored graph, search, modal content, and user-triggered YouTube or Spotify playback surfaces under a scoped exception.">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://localhost/interactive-explanation/musicmap/">
    <meta property="og:image" content="https://localhost/interactive-explanation/musicmap/assets/socialcard.png">
    <meta name="theme-color" content="#050608">
    <link rel="stylesheet" href="./main.css">
    <link rel="stylesheet" href="../shared/public-footer.css">
    <style>
      body.musicmap-route { min-height: 100vh; }
      .musicmap-route #reference-footer { position: relative; z-index: 30; }
      .musicmap-route .public-footer { position: relative; z-index: 30; }
    </style>
    <script>window.gtag = window.gtag || function () {}; window.FB = window.FB || { ui: function () {} }; document.cookie = "privacy-policy-2022=accepted; path=/; max-age=31536000"; document.cookie = "privacy-policy-2023=accepted; path=/; max-age=31536000";</script>
    <script defer src="./musicmap-embed-gate.js"></script>
    <script defer src="./main.bundle.js"></script>
  `;

  const footerScript = document.createElement("script");
  footerScript.src = "../shared/public-footer.js";
  document.body.appendChild(footerScript);

  return "<!doctype html>\n" + document.documentElement.outerHTML;
});

fs.writeFileSync(outputPath, sanitizedHtml, "utf8");
await browser.close();
