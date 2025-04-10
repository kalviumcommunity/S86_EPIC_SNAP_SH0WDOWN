const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
require('dotenv').config(); 

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY; 

// User Registration (Create)
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create and save the user
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
});

// User Login (Read)
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    if (user.password !== password) {
        return res.status(401).json({ accessToken: null, message: 'Invalid password' });
    }

    // Create JWT token
    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '24h' });
    res.status(200).json({ accessToken: token });
});



module.exports = router;
