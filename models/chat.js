const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChatSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now, required: true },
});

// Export model
module.exports = mongoose.model('Chat', ChatSchema);
