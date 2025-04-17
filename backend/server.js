const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());


app.use('/api', router);



app.get("/", (req, res) => {
    res.send("EPIC SNAP SHOWDOWN");
});


// Define a simple /ping route
app.get("/ping", (req, res) => {
    res.json({ message: "Pong! Server is running." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});