import fs from "fs";
import path from "path";

const PAGES = [
  "https://www.hairbyhanna.com/",
  "https://www.hairbyhanna.com/portfolio",
  "https://www.hairbyhanna.com/about",
];

const OUT_DIR = path.join(process.cwd(), "public", "images", "imported");
fs.mkdirSync(OUT_DIR, { recursive: true });

function uniq(arr) {
  return [...new Set(arr)];
}

function pickFileName(url, i) {
  const clean = url.split("?")[0];
  const extGuess = clean.includes(".png") ? ".png" : ".jpg";
  return `hairbyhanna-${String(i).padStart(2, "0")}${extGuess}`;
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  return res.text();
}

async function download(url, filePath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed download ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(filePath, buf);
}

(async () => {
  const htmls = await Promise.all(PAGES.map(fetchText));

  // Grab wixstatic image URLs from HTML
  const urls = uniq(
    htmls
      .flatMap((html) =>
        [...html.matchAll(/https:\/\/static\.wixstatic\.com\/media\/[^"' )]+/g)].map(
          (m) => m[0]
        )
      )
      // Skip tiny icons/social assets; keep larger fills
      .filter((u) => !u.includes("facebook") && !u.includes("instagram") && !u.includes("youtube"))
  );

  console.log(`Found ${urls.length} wixstatic media URLs`);

  const manifest = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const name = pickFileName(url, i + 1);
    const outPath = path.join(OUT_DIR, name);
    if (!fs.existsSync(outPath)) {
      console.log("Downloading:", url);
      await download(url, outPath);
    }
    manifest.push({
      src: `/images/imported/${name}`,
      original: url,
      alt: "Hair By Hanna salon work in West Newton MA"
    });
  }

  fs.writeFileSync(
    path.join(process.cwd(), "public", "images", "gallery.json"),
    JSON.stringify(manifest, null, 2)
  );

  console.log("Done. Wrote:", "public/images/gallery.json");
})();