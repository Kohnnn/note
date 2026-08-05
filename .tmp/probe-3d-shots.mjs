import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });

await page.goto("http://127.0.0.1:4280/replay/2025/australian-grand-prix/qualifying/", { waitUntil: "domcontentloaded" });
await page.waitForSelector(".replay-track-canvas", { timeout: 30000 });
await page.locator("button", { hasText: /^3D$/ }).first().click();
await page.waitForSelector(".replay3d canvas", { timeout: 30000 });
await page.keyboard.press("Space");
await page.waitForTimeout(4000);

const el = page.locator(".replay3d canvas");
const shotA = await el.screenshot({ path: "../.tmp/replay3d-a.png" });
await page.waitForTimeout(2500);
const shotB = await el.screenshot({ path: "../.tmp/replay3d-b.png" });

console.log("shot A bytes:", shotA.length, "shot B bytes:", shotB.length);
console.log("frames differ (animating):", !shotA.equals(shotB));

// Quick variance check: a real scene PNG should be reasonably large; a flat
// background compresses to almost nothing.
console.log("scene has content (png > 30KB):", shotA.length > 30000);

// Chase camera shot for richness comparison
await page.locator(".replay3d__camera-button", { hasText: "Chase" }).click();
await page.waitForTimeout(2500);
const shotChase = await el.screenshot({ path: "../.tmp/replay3d-chase.png" });
console.log("chase shot bytes:", shotChase.length);

console.log("errors:", errors.length ? errors.slice(0, 10) : "none");
await browser.close();
