const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  rate: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Room', roomSchema);
