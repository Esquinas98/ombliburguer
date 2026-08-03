import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const src = path.resolve('./public/images/ombliburger.webp');
const outDir = path.resolve('./public/icons');

const sizes = [16, 32, 180, 192, 512];

async function ensureOut() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
}

async function generate() {
  if (!fs.existsSync(src)) {
    console.error('Source image not found:', src);
    process.exit(1);
  }

  await ensureOut();

  try {
    await Promise.all(
      sizes.map(async (s) => {
        const name = s === 180 ? 'apple-touch-icon' : `icon-${s}`;
        const out = path.join(outDir, `${name}.png`);
        await sharp(src).resize(s, s, { fit: 'cover' }).png({ quality: 90 }).toFile(out);
        console.log('Written', out);
      })
    );

    // Also write favicon-16 and favicon-32 named variants
    await sharp(src).resize(16, 16, { fit: 'cover' }).png({ quality: 90 }).toFile(path.join(outDir, 'favicon-16.png'));
    await sharp(src).resize(32, 32, { fit: 'cover' }).png({ quality: 90 }).toFile(path.join(outDir, 'favicon-32.png'));
    console.log('Written favicon pngs');

    console.log('All icons generated in', outDir);
  } catch (err) {
    console.error('Error generating icons:', err);
    process.exit(1);
  }
}

generate();
