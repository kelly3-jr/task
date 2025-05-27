const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

// Set up storage engine
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

// allowed file types
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.png', '.jpg', '.jpeg'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true); 
    } else {
      cb(new Error('Only .png and .jpg files are allowed')); 
    }
  },
});

// Route for uploading a single image
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ message: 'File uploaded successfully', file: req.file });
});


app.listen(PORT, () => {
  console.log(`Upload server running at http://localhost:${PORT}`);
});
