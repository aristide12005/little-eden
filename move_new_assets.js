
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'src', 'assets', 'new ones');
const assetsDir = path.join(__dirname, 'src', 'assets');
const galleryDir = path.join(__dirname, 'src', 'assets', 'gallery');

// Ensure target directory exists
if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
}

if (fs.existsSync(sourceDir)) {
    const files = fs.readdirSync(sourceDir);

    // Find next image index for gallery
    let imgCount = 1;
    const existing = fs.readdirSync(galleryDir);
    existing.forEach(f => {
        if (f.startsWith('img-')) {
            const num = parseInt(f.replace('img-', '').replace(path.extname(f), ''));
            if (!isNaN(num) && num >= imgCount) imgCount = num + 1;
        }
    });

    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        const oldPath = path.join(sourceDir, file);

        if (file === 'background image.png') {
            // Move background image to root assets
            const newPath = path.join(assetsDir, 'hero-bg.png');
            try {
                fs.renameSync(oldPath, newPath);
                console.log(`Moved ${file} -> hero-bg.png`);
            } catch (e) {
                console.error(`Error moving ${file}:`, e);
            }
        } else if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
            // Move other images to gallery
            const newName = `img-${imgCount++}${ext}`;
            const newPath = path.join(galleryDir, newName);

            try {
                fs.renameSync(oldPath, newPath);
                console.log(`Moved ${file} -> ${newName}`);
            } catch (e) {
                console.error(`Error moving ${file}:`, e);
            }
        }
    });
} else {
    console.log("Source directory not found.");
}
