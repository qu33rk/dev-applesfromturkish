#!/usr/bin/env node
/**
 * One-shot image optimization script.
 * Overwrites files in public/ with downscaled + recompressed versions.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const PUBLIC = path.resolve("public");

// [filename, maxWidth, quality]
const targets = [
  ["hero-apples.webp", 1600, 72],
  ["Ispartaorchard.webp", 1920, 68],
  ["red-mountain.webp", 1600, 72],
  ["hero-orchard.webp", 1600, 72],
  ["apple-types-hero.webp", 1920, 70],
  ["Container-main.webp", 1600, 72],
  ["fuji-mountain.webp", 1200, 72],
  ["gala-mountain.webp", 1200, 72],
  ["golden-mountain.webp", 1200, 72],
  ["granny-smith-mountain.webp", 1200, 72],
  ["woodneboxpackagin.webp", 800, 72],
  ["woodenbox2.webp", 800, 72],
  ["13kgpackaging-main.webp", 800, 72],
  ["18kgpackagingna-applestypes.webp", 800, 72],
  ["18kgpackagingna-main.webp", 800, 72],
  ["packagingprocess.webp", 900, 72],
  ["sortingprocess.webp", 900, 72],
  ["cold_storageprocess.webp", 900, 72],
  ["zbieranie _collecting-process.webp", 900, 72],
  ["warehousephoto.webp", 800, 72],
  ["truck-applestypes.webp", 800, 72],
  ["transportpodappletypes.webp", 800, 72],
  ["pallete.webp", 800, 72],
  ["fuji.webp", 800, 75],
  ["gala.webp", 800, 75],
  ["golden.webp", 800, 75],
  ["granny-smith.webp", 800, 75],
  ["red.webp", 800, 75],
  ["apples-from-turkey-logo.webp", 400, 90],
  ["packaging-1.webp", 800, 75],
  ["packaging-2.webp", 800, 75],
  ["packaging-3.webp", 800, 75],
  ["packaging-4.webp", 800, 75],
  ["packaging-5.webp", 800, 75],
  ["packaging-6.webp", 800, 75],
];

let totalBefore = 0;
let totalAfter = 0;

for (const [name, maxW, q] of targets) {
  const file = path.join(PUBLIC, name);
  if (!fs.existsSync(file)) {
    console.warn("SKIP (missing):", name);
    continue;
  }
  const before = fs.statSync(file).size;
  const tmp = file + ".tmp";
  const input = fs.readFileSync(file);
  const meta = await sharp(input).metadata();
  const pipeline = sharp(input);
  if (meta.width && meta.width > maxW) {
    pipeline.resize({ width: maxW, withoutEnlargement: true });
  }
  await pipeline.webp({ quality: q, effort: 6 }).toFile(tmp);
  fs.renameSync(tmp, file);
  const after = fs.statSync(file).size;
  totalBefore += before;
  totalAfter += after;
  console.log(
    name.padEnd(42),
    (before / 1024).toFixed(0).padStart(5) + "KB",
    "->",
    (after / 1024).toFixed(0).padStart(5) + "KB",
    "(" + Math.round((1 - after / before) * 100) + "% off)"
  );
}

console.log(
  "\nTotal:",
  (totalBefore / 1024).toFixed(0) + "KB",
  "->",
  (totalAfter / 1024).toFixed(0) + "KB",
  "saved",
  ((totalBefore - totalAfter) / 1024).toFixed(0) + "KB"
);
