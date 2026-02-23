/**
 * Uploads images, videos, and audio from ./media to the upload API
 * and writes data/outtakes-urls.json with { name, publicURL, type }.
 * Types: image (stills), video, audio.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MEDIA_DIR = path.join(__dirname, "..", "media");
const OUT_PATH = path.join(__dirname, "..", "data", "outtakes-urls.json");
const UPLOAD_URL = "https://uplaodpixio-production.up.railway.app/api/upload";

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp"]);
const VIDEO_EXT = new Set([".mp4", ".mov", ".webm", ".MOV"]);
const AUDIO_EXT = new Set([".mp3", ".m4a", ".wav", ".ogg", ".webm"]);

/** Skip files larger than this (bytes) to avoid timeouts - ~100MB */
const MAX_FILE_BYTES = 100 * 1024 * 1024;

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

function saveResults(results) {
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(results, null, 2), "utf8");
}

async function uploadFile(filePath) {
  const name = path.basename(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const type = IMAGE_EXT.has(ext) ? "image" : VIDEO_EXT.has(ext) ? "video" : AUDIO_EXT.has(ext) ? "audio" : null;
  if (!type) return null;

  const buffer = fs.readFileSync(filePath);
  const blob = new Blob([buffer]);
  const form = new FormData();
  form.append("file", blob, name);

  const res = await fetch(UPLOAD_URL, {
    method: "POST",
    headers: { accept: "application/json" },
    body: form,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${text}`);
  }

  const data = await res.json();
  return { name, publicURL: data.publicURL, type };
}

function loadExisting() {
  if (!fs.existsSync(OUT_PATH)) return [];
  try {
    return JSON.parse(fs.readFileSync(OUT_PATH, "utf8"));
  } catch {
    return [];
  }
}

async function main() {
  if (!fs.existsSync(MEDIA_DIR)) {
    console.error("media folder not found");
    process.exit(1);
  }

  const existing = loadExisting();
  const existingNames = new Set(existing.map((r) => r.name));

  const allFiles = fs.readdirSync(MEDIA_DIR).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return IMAGE_EXT.has(ext) || VIDEO_EXT.has(ext) || AUDIO_EXT.has(ext);
  });

  const files = [];
  let skipped = 0;
  for (const f of allFiles) {
    if (existingNames.has(f)) continue;
    const filePath = path.join(MEDIA_DIR, f);
    const stat = fs.statSync(filePath);
    if (stat.size > MAX_FILE_BYTES) {
      skipped++;
      console.log(`Skip (too large ${(stat.size / 1024 / 1024).toFixed(1)}MB): ${f}`);
    } else {
      files.push(f);
    }
  }

  console.log(`Found ${files.length} new files to upload (${existing.length} already in JSON), ${skipped} skipped (size). Uploading...`);

  const results = [...existing];
  let failed = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(MEDIA_DIR, file);
    try {
      const item = await uploadFile(filePath);
      if (item) {
        results.push(item);
        saveResults(results);
        console.log(`[${i + 1}/${files.length}] ${item.type}: ${file}`);
      }
    } catch (err) {
      failed++;
      console.error(`[${i + 1}/${files.length}] FAIL ${file}:`, err.message);
    }
    await delay(400);
  }

  console.log(`\nDone. ${results.length} total in JSON (${files.length} new uploaded), ${failed} failed, ${skipped} skipped (size). Saved to data/outtakes-urls.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
