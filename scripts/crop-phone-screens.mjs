// Crops each phone screenshot to match the marketing site's phone-mockup
// aspect ratio (9:19), focused on the marketing-relevant content. Run after
// adding or replacing a screenshot in `public/app-screens/`.
//
// Per-image strategy:
//   anchor: "top"     — crop a 9:19 window starting at y=0
//   anchor: "center"  — crop a 9:19 window centered vertically
//   anchor: "bottom"  — crop a 9:19 window ending at y=height
//   anchor: <number>  — pixel y-offset for the top of the crop window
//   anchor: { yPct }  — percentage from top where the crop window starts
//
// Outputs alongside the source as `<name>-cropped.png` so we keep the
// originals for future re-cropping. The page references the -cropped versions.

import sharp from "../node_modules/sharp/lib/index.js";
import { readFile } from "node:fs/promises";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, "..", "public", "app-screens");

const TARGET_AR = 9 / 19; // phone screen aspect ratio (width / height)

const PLAN = [
  // Hero — show the dashboard top: header, welcome, today, schedule, next event
  { src: "hero-dashboard.png", anchor: "top" },
];

async function cropOne({ src, anchor }) {
  const inPath = join(PUBLIC_DIR, src);
  const outPath = join(PUBLIC_DIR, src.replace(/\.png$/, "-cropped.png"));

  const buf = await readFile(inPath);
  const meta = await sharp(buf).metadata();
  const { width: w, height: h } = meta;

  // Window we want to extract: full source width, height = w / TARGET_AR
  const targetH = Math.round(w / TARGET_AR);
  if (targetH > h) {
    // Source isn't tall enough for our target ratio — just write through.
    console.log(`  ${src}: source already ≤ 9:19 (${w}×${h}), passthrough`);
    await sharp(buf).toFile(outPath);
    return;
  }

  let top;
  if (anchor === "top") top = 0;
  else if (anchor === "bottom") top = h - targetH;
  else if (anchor === "center") top = Math.round((h - targetH) / 2);
  else if (typeof anchor === "number") top = anchor;
  else if (typeof anchor === "object" && typeof anchor.yPct === "number") {
    top = Math.round(anchor.yPct * (h - targetH));
  } else {
    throw new Error(`Unknown anchor: ${JSON.stringify(anchor)}`);
  }
  top = Math.max(0, Math.min(h - targetH, top));

  await sharp(buf)
    .extract({ left: 0, top, width: w, height: targetH })
    .toFile(outPath);

  console.log(
    `  ${src}: ${w}×${h} → ${w}×${targetH} (top=${top}, ar=${(w / targetH).toFixed(3)})`
  );
}

console.log(`Cropping phone screenshots in ${PUBLIC_DIR}…`);
for (const item of PLAN) {
  await cropOne(item);
}
console.log("Done.");
