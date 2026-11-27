// One-off generator for PNG icons + OG image. Run: node scripts/make-icons.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";

const mark = readFileSync("public/favicon.svg", "utf8")
  .replace(/<style>.*?<\/style>/, "")
  .replace(/<path /g, '<path fill="#ffffff" ');
const inner = mark.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");

const icon = (size) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#1d3cff"/>
  <g transform="translate(106 118) scale(0.5)">${inner}</g></svg>`);

await sharp(icon(180)).png().toFile("public/apple-touch-icon.png");
await sharp(icon(192)).png().toFile("public/icon-192.png");
await sharp(icon(512)).png().toFile("public/icon-512.png");
await sharp(icon(32)).resize(32, 32).toFile("public/favicon-32.png");

const og = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#1d3cff"/>
  <rect y="560" width="1200" height="70" fill="#0a1033"/>
  <g transform="translate(80 90) scale(0.3)">${inner}</g>
  <text x="80" y="370" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="700" fill="#fff">TREOIL</text>
  <text x="80" y="450" font-family="Helvetica, Arial, sans-serif" font-size="44" fill="#dbe2ff">Оливи та мастила для бізнесу</text>
  <text x="80" y="510" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#dbe2ff">Texaco · Unil · Prista · Orlen — доставка по Україні</text>
  <text x="80" y="605" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#c9d3e0">treoil.vn.ua · 063 734 11 69</text>
</svg>`);
await sharp(og).png().toFile("public/og.png");
console.log("icons done");
