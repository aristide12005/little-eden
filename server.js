
import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Configure Multer for storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const assetsPath = path.join(__dirname, 'src', 'assets');
    // Create directory if it doesn't exist (though it should)
    if (!fs.existsSync(assetsPath)) {
      fs.mkdirSync(assetsPath, { recursive: true });
    }
    cb(null, assetsPath);
  },
  filename: function (req, file, cb) {
    // Keep original filename or prepend timestamp to avoid collisions
    // For simplicity, we'll keep the original name but replace spaces
    const cleanName = file.originalname.replace(/\s+/g, '-');
    cb(null, cleanName);
  }
});

const upload = multer({ storage: storage });

// API Endpoints

// GET /api/files - List all files in src/assets
app.get('/api/files', (req, res) => {
  const assetsPath = path.join(__dirname, 'src', 'assets');
  
  fs.readdir(assetsPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ error: 'Failed to list files' });
    }
    
    // Filter for image files only (basic extension check)
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext);
    });
    
    res.json(imageFiles);
  });
});

// POST /api/upload - Upload a new file
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.json({ 
    message: 'File uploaded successfully', 
    filename: req.file.filename 
  });
});

// DELETE /api/files/:name - Delete a file
app.delete('/api/files/:name', (req, res) => {
  const fileName = req.params.name;
  
  // Basic validation to prevent directory traversal
  if (fileName.includes('..') || fileName.includes('/') || fileName.includes('\\')) {
    return res.status(400).json({ error: 'Invalid filename' });
  }
  
  const filePath = path.join(__dirname, 'src', 'assets', fileName);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }
  
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      return res.status(500).json({ error: 'Failed to delete file' });
    }
    
    res.json({ message: 'File deleted successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Asset server running on http://localhost:${PORT}`);
});
