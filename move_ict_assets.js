
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
    fs.readdir(sourceDir, (err, files) => {
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }

        let ictCount = 1;

        files.forEach((file) => {
            const ext = path.extname(file).toLowerCase();
            if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

            const oldPath = path.join(sourceDir, file);
            const newName = `ict-${ictCount}${ext}`;
            const newPath = path.join(targetDir, newName);

            fs.rename(oldPath, newPath, (err) => {
                if (err) console.error(`Error moving ${file}:`, err);
                else {
                    console.log(`Moved ${file} -> ${newName}`);
                    ictCount++;
                }
            });
        });

        // Try to remove the empty directory after a short delay
        setTimeout(() => {
            try {
                // fs.rmdirSync(sourceDir); // Optional: don't auto-delete if unsure
                console.log("Files moved.");
            } catch (e) { }
        }, 1000);
    });
} else {
    console.log("Source directory not found.");
}
