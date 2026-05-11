/**
 * Coloque fotos novas como .jpg em src/assets (mesmo nome base que o .webp final),
 * rode npm run optimize:images, aponte os imports para o .webp e apague o .jpg se não for versionar o master.
 *
 * Redimensiona só se o maior lado passar de MAX_LONG_EDGE; mantém proporção (sem crop).
 * Para recuperar qualidade depois de WebPs pequenos, é preciso os arquivos originais de novo.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsDir = path.join(root, "src", "assets");

/** Maior lado permitido (px); fotos menores não são ampliadas. */
const MAX_LONG_EDGE = 3840;
const WEBP_QUALITY = 88;

async function* walkJpegs(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walkJpegs(full);
    else if (/\.jpe?g$/i.test(e.name)) yield full;
  }
}

async function toWebp(jpegPath) {
  const rel = path.relative(assetsDir, jpegPath).split(path.sep).join("/");
  const outPath = jpegPath.replace(/\.jpe?g$/i, ".webp");

  await sharp(jpegPath)
    .rotate()
    .resize({
      width: MAX_LONG_EDGE,
      height: MAX_LONG_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(outPath);

  const inStat = await fs.stat(jpegPath);
  const outStat = await fs.stat(outPath);
  const kbIn = (inStat.size / 1024).toFixed(1);
  const kbOut = (outStat.size / 1024).toFixed(1);
  console.log(`${rel}: ${kbIn} KB → ${path.basename(outPath)} ${kbOut} KB`);
}

async function main() {
  let count = 0;
  for await (const file of walkJpegs(assetsDir)) {
    await toWebp(file);
    count++;
  }
  if (count === 0) {
    console.log("Nenhum .jpg encontrado em src/assets. Nada a fazer.");
  } else {
    console.log(`Done. ${count} WebP file(s) written under src/assets.`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
