const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend
  credentials: true
}));
app.use(express.json());

// Serve static images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const uploadRoute = require('./routes/upload'); // Contains upload, getSnaps, vote
app.use('/api', uploadRoute);

// MongoDB connection and server start
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');

    app.listen(5000, () => {
      console.log('🚀 Server running at http://localhost:5000');
    });
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
}

startServer();
