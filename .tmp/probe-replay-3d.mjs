import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });

await page.goto("http://127.0.0.1:4280/replay/2025/australian-grand-prix/qualifying/", { waitUntil: "domcontentloaded" });
await page.waitForSelector(".replay-track-canvas", { timeout: 30000 });
await page.waitForTimeout(2000);
console.log("2D canvas present:", await page.locator(".replay-track-canvas").count());

await page.locator("button", { hasText: /^3D$/ }).first().click();
await page.waitForSelector(".replay3d canvas", { timeout: 30000 });
await page.waitForTimeout(3000);
console.log("3D canvas present:", await page.locator(".replay3d canvas").count());
console.log("camera buttons:", JSON.stringify(await page.locator(".replay3d__camera-button").allTextContents()));

await page.keyboard.press("Space");
await page.waitForTimeout(2500);

await page.locator(".replay3d__camera-button", { hasText: "Chase" }).click();
await page.waitForTimeout(1500);
await page.screenshot({ path: "../.tmp/replay-3d-chase.png" });
await page.locator(".replay3d__camera-button", { hasText: "TV" }).click();
await page.waitForTimeout(1500);
await page.locator(".replay3d__camera-button", { hasText: "Orbit" }).click();
await page.waitForTimeout(1000);
await page.screenshot({ path: "../.tmp/replay-3d-orbit.png" });

await page.locator("button", { hasText: /^2D$/ }).first().click();
await page.waitForTimeout(1500);
console.log("2D canvas after toggle back:", await page.locator(".replay-track-canvas").count());
console.log("errors:", errors.length ? errors.slice(0, 10) : "none");
await browser.close();
