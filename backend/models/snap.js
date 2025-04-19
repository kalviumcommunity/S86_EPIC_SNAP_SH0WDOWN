const mongoose = require('mongoose');

const snapSchema = new mongoose.Schema({
  caption: String,
  imageUrl: String,
  votes: { type: Number, default: 0 },
  user: {
    username: String,
    avatarUrl: String
  }
});

module.exports = mongoose.model('Snap', snapSchema);
