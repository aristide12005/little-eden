
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'src', 'assets', 'IN ICT ROOM');
const targetDir = path.join(__dirname, 'src', 'assets', 'gallery');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

if (fs.existsSync(sourceDir)) {
    const files = fs.readdirSync(sourceDir);
    let ictCount = 1;

    // Check existing ict files to avoid overwrite/collision if running again
    const existing = fs.readdirSync(targetDir);
    existing.forEach(f => {
        if (f.startsWith('ict-')) {
            const num = parseInt(f.replace('ict-', '').replace(path.extname(f), ''));
            if (!isNaN(num) && num >= ictCount) ictCount = num + 1;
        }
    });

    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

        const oldPath = path.join(sourceDir, file);
        const newName = `ict-${ictCount++}${ext}`; // Increment synchronously
        const newPath = path.join(targetDir, newName);

        try {
            fs.renameSync(oldPath, newPath); // Move synchronously
            console.log(`Moved ${file} -> ${newName}`);
        } catch (e) {
            console.error(`Error moving ${file}:`, e);
        }
    });
} else {
    console.log("Source directory not found.");
}
