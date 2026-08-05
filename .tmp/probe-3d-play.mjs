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
await page.waitForTimeout(2000);

// Click the explicit Play button.
await page.locator('button[aria-label="Play"]').first().click();
await page.waitForTimeout(3000);
console.log("play state:", await page.locator('button[aria-label="Pause"]').count() ? "playing" : "paused");

const el = page.locator(".replay3d canvas");
const shotA = await el.screenshot();
await page.waitForTimeout(3000);
const shotB = await el.screenshot({ path: "../.tmp/replay3d-playing.png" });
console.log("frames differ while playing:", !shotA.equals(shotB));

// Chase cam while playing
await page.locator(".replay3d__camera-button", { hasText: "Chase" }).click();
await page.waitForTimeout(2500);
const chaseA = await el.screenshot({ path: "../.tmp/replay3d-chase-playing.png" });
await page.waitForTimeout(2000);
const chaseB = await el.screenshot();
console.log("chase frames differ:", !chaseA.equals(chaseB), "chase png bytes:", chaseA.length);

console.log("errors:", errors.length ? errors.slice(0, 10) : "none");
await browser.close();
