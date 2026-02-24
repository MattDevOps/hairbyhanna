import fs from "fs";
import path from "path";
import crypto from "crypto";

const importedDir = path.join(process.cwd(), "public", "images", "imported");

const galleryFile = path.join(process.cwd(), "public", "images", "gallery.json");
const featuredFile = path.join(process.cwd(), "public", "images", "featured.json");

const allowed = new Set([".jpg", ".jpeg", ".png", ".webp"]);

// Minimum file size (filters out blurry thumbnails/icons)
const MIN_BYTES = 120_000;

// Number of featured images for homepage
const MAX_FEATURED = 18;

// Manually exclude specific bad files here
const DENY = new Set([
  // Example:
  // "hairbyhanna-34.jpg",
  // "hairbyhanna-35.jpg"
]);

function hashFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash("sha1").update(buffer).digest("hex");
}

function looksLikeLogoOrIcon(name) {
  const n = name.toLowerCase();

  return (
    n.includes("logo") ||
    n.includes("icon") ||
    n.includes("facebook") ||
    n.includes("instagram") ||
    n.includes("youtube") ||
    n.includes("tiktok") ||
    n.includes("signature") ||
    n.includes("brand")
  );
}

console.log("Scanning imported images...");

let files = fs
  .readdirSync(importedDir)
  .filter(file => allowed.has(path.extname(file).toLowerCase()))
  .filter(file => !DENY.has(file))
  .filter(file => !looksLikeLogoOrIcon(file))
  .map(file => {

    const fullPath = path.join(importedDir, file);
    const stat = fs.statSync(fullPath);

    return {
      file,
      fullPath,
      bytes: stat.size
    };

  })
  .filter(x => x.bytes >= MIN_BYTES);

console.log("After size/logo filtering:", files.length);


// remove duplicates via hash
const seenHashes = new Set();
const unique = [];

for (const f of files) {

  const hash = hashFile(f.fullPath);

  if (seenHashes.has(hash)) continue;

  seenHashes.add(hash);

  unique.push(f);

}

console.log("After duplicate filtering:", unique.length);


// sort by largest file size (best quality first)
unique.sort((a, b) => b.bytes - a.bytes);


// build gallery manifest
const gallery = unique.map(x => ({
  src: `/images/imported/${x.file}`,
  alt: "Hair By Hanna – salon work in West Newton, MA"
}));


// build featured (homepage) manifest
const featured = gallery.slice(0, MAX_FEATURED);


// write files
fs.writeFileSync(galleryFile, JSON.stringify(gallery, null, 2));
fs.writeFileSync(featuredFile, JSON.stringify(featured, null, 2));


console.log("");
console.log("SUCCESS");
console.log("gallery.json images:", gallery.length);
console.log("featured.json images:", featured.length);
console.log("");
console.log("Done.");