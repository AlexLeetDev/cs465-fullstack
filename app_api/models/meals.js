/**
 * Enhancement (Databases):
 * New schema for Meals so this data is stored in MongoDB.
 *
 * Author: Alex Leet
 */

const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  highlight: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Meal', mealSchema);
