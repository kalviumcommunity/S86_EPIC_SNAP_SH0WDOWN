const express = require('express');
const multer = require('multer');
const path = require('path');
const Snap = require('../models/snap');

const router = express.Router();

// Storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

// Upload image route
router.post('/image', upload.single('image'), async (req, res) => {
  try {
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    const newSnap = new Snap({
      caption: req.body.caption,
      imageUrl,
      user: {
        username: req.body.username,
        avatarUrl: req.body.avatarUrl,
      },
    });

    await newSnap.save();

    res.json({
      message: 'Snap uploaded and saved!',
      snap: newSnap,
    });
  } catch (error) {
    console.error('Error uploading snap:', error);
    res.status(500).send('Error uploading snap');
  }
});

// Get all snaps
router.get('/snaps', async (req, res) => {
  try {
    const snaps = await Snap.find().sort({ _id: -1 });
    res.json(snaps);
  } catch (error) {
    console.error('Error fetching snaps:', error);
    res.status(500).send('Error fetching snaps');
  }
});

// Vote on snap
router.post('/snaps/:id/vote', async (req, res) => {
  try {
    const snap = await Snap.findById(req.params.id);
    if (!snap) return res.status(404).send('Snap not found');

    snap.votes += 1;
    await snap.save();

    res.json({ message: 'Vote added!', votes: snap.votes });
  } catch (error) {
    console.error('Error voting on snap:', error);
    res.status(500).send('Error voting on snap');
  }
});

module.exports = router;
