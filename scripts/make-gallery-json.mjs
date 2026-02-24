import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public", "images", "portfolio");
const out = path.join(dir, "gallery.json");

const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"]);

const files = fs
  .readdirSync(dir)
  .filter((f) => exts.has(path.extname(f)))
  .sort((a, b) => a.localeCompare(b));

const data = files.map((f) => ({
  src: `/images/portfolio/${f}`,
  alt: "Hair By Hanna portfolio photo",
  title: "",
  description: ""
}));

fs.writeFileSync(out, JSON.stringify(data, null, 2), "utf8");
console.log(`Wrote ${files.length} items to ${out}`);