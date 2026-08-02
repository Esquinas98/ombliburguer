import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public', 'images');
const entries = await fs.readdir(dir);

for (const fileName of entries) {
  if (!fileName.toLowerCase().endsWith('.webp')) continue;
  const filePath = path.join(dir, fileName);
  const oldStat = await fs.stat(filePath);
  if (oldStat.size < 200 * 1024) {
    process.stdout.write(`Skipping ${fileName} (too small to optimize)\n`);
    continue;
  }
  const tempPath = path.join(dir, `${fileName}.tmp`);
  const oldKB = (oldStat.size / 1024).toFixed(2);
  process.stdout.write(`Optimizing ${fileName} (${oldKB} KB)... `);

  await sharp(filePath).webp({ quality: 70, effort: 6 }).toFile(tempPath);

  const newStat = await fs.stat(tempPath);
  const newKB = (newStat.size / 1024).toFixed(2);

  if (newStat.size < oldStat.size) {
    try {
      await fs.rm(filePath, { force: true });
      await fs.rename(tempPath, filePath);
    } catch (error) {
      await fs.rm(tempPath, { force: true });
      process.stdout.write(`failed to replace ${fileName}: ${error.message}\n`);
      continue;
    }
    process.stdout.write(`optimized -> ${newKB} KB\n`);
  } else {
    await fs.rm(tempPath);
    process.stdout.write(`no improvement -> ${newKB} KB, kept original\n`);
  }
}
