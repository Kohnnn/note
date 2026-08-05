import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });

// --- Replay 3D pixel content check ---
await page.goto("http://127.0.0.1:4280/replay/2025/australian-grand-prix/qualifying/", { waitUntil: "domcontentloaded" });
await page.waitForSelector(".replay-track-canvas", { timeout: 30000 });
await page.locator("button", { hasText: /^3D$/ }).first().click();
await page.waitForSelector(".replay3d canvas", { timeout: 30000 });
await page.keyboard.press("Space");
await page.waitForTimeout(4000);

const stats3d = await page.evaluate(() => {
  const canvas = document.querySelector(".replay3d canvas");
  if (!canvas) return null;
  // WebGL canvas: copy into a 2D canvas to sample pixels.
  const w = 320, h = 180;
  const sample = document.createElement("canvas");
  sample.width = w; sample.height = h;
  const ctx = sample.getContext("2d");
  ctx.drawImage(canvas, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h).data;
  let nonBackground = 0, bright = 0;
  const colorBuckets = new Set();
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // background is ~#0a0d13
    if (Math.abs(r - 10) + Math.abs(g - 13) + Math.abs(b - 19) > 30) nonBackground += 1;
    if (r + g + b > 380) bright += 1;
    colorBuckets.add(`${r >> 5}-${g >> 5}-${b >> 5}`);
  }
  const total = w * h;
  return {
    nonBackgroundPct: Math.round((nonBackground / total) * 100),
    brightPct: Math.round((bright / total) * 1000) / 10,
    distinctColorBuckets: colorBuckets.size,
  };
});
console.log("3D scene pixels:", JSON.stringify(stats3d));

// Verify cars are moving: sample twice and compare a focused label / canvas hash.
const hashA = await page.evaluate(() => {
  const canvas = document.querySelector(".replay3d canvas");
  const sample = document.createElement("canvas");
  sample.width = 64; sample.height = 36;
  const ctx = sample.getContext("2d");
  ctx.drawImage(canvas, 0, 0, 64, 36);
  return JSON.stringify(Array.from(ctx.getImageData(0, 0, 64, 36).data.slice(0, 400)));
});
await page.waitForTimeout(2000);
const hashB = await page.evaluate(() => {
  const canvas = document.querySelector(".replay3d canvas");
  const sample = document.createElement("canvas");
  sample.width = 64; sample.height = 36;
  const ctx = sample.getContext("2d");
  ctx.drawImage(canvas, 0, 0, 64, 36);
  return JSON.stringify(Array.from(ctx.getImageData(0, 0, 64, 36).data.slice(0, 400)));
});
console.log("3D frame changed over 2s (animating):", hashA !== hashB);

// --- Wind tunnel pixel content check (SVG art mode, mclaren default) ---
await page.goto("http://127.0.0.1:4280/cars/current-spec/", { waitUntil: "domcontentloaded" });
await page.waitForSelector(".wind-tunnel", { timeout: 20000 });
await page.waitForTimeout(2500);
const statsWind = await page.evaluate(() => {
  const canvas = document.querySelector(".wind-tunnel__canvas");
  if (!canvas) return null;
  const ctx = canvas.getContext("2d");
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let nonEmpty = 0, accent = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
    if (a > 20) nonEmpty += 1;
    // mclaren papaya-ish accent
    if (r > 160 && g > 60 && g < 160 && b < 80) accent += 1;
  }
  const total = canvas.width * canvas.height;
  return { nonEmptyPct: Math.round((nonEmpty / total) * 100), accentPixels: accent, mode: document.querySelector(".wind-tunnel__mode-button--active")?.textContent };
});
console.log("wind tunnel pixels:", JSON.stringify(statsWind));

console.log("errors:", errors.length ? errors.slice(0, 10) : "none");
await browser.close();
