
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'src', 'assets', 'image and videos');
const targetDir = path.join(__dirname, 'src', 'assets', 'gallery');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Read directory
fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    let imgCount = 1;
    let vidCount = 1;

    files.forEach((file, index) => {
        const ext = path.extname(file).toLowerCase();
        const oldPath = path.join(sourceDir, file);

        let newName = '';
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
            newName = `img-${imgCount}${ext}`;
            imgCount++;
        } else if (['.mp4', '.mov'].includes(ext)) {
            newName = `vid-${vidCount}${ext}`;
            vidCount++;
        } else {
            console.log(`Skipping unknown file type: ${file}`);
            return;
        }

        const newPath = path.join(targetDir, newName);

        fs.rename(oldPath, newPath, (err) => {
            if (err) console.error(`Error moving ${file}:`, err);
            else console.log(`Moved ${file} -> ${newName}`);
        });
    });
});
