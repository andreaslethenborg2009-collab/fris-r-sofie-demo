import sharp from "sharp";
import { readdirSync, renameSync } from "node:fs";
import { join } from "node:path";

const dir = "src/assets/images";
const maxWidth = 1600;

for (const file of readdirSync(dir)) {
	if (!file.endsWith(".jpg")) continue;
	const path = join(dir, file);
	const meta = await sharp(path).metadata();
	if (meta.width <= maxWidth) {
		console.log(`skip ${file} (already ${meta.width}px)`);
		continue;
	}
	const buffer = await sharp(path)
		.resize({ width: maxWidth })
		.jpeg({ quality: 82 })
		.toBuffer();
	const tmpPath = path + ".tmp";
	await sharp(buffer).toFile(tmpPath);
	renameSync(tmpPath, path);
	console.log(`resized ${file}: ${meta.width}px -> ${maxWidth}px`);
}
