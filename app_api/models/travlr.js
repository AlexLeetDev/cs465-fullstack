/**
 * Enhancement (Databases):
 * Updated the Trip schema to support improved database fields.
 *
 * Author: Alex Leet
 */

const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code: { 
    type: String, 
    required: true, 
    unique: true, 
    index: true,
    trim: true
  },

  name: { 
    type: String, 
    required: true, 
    index: true,
    trim: true,
    maxlength: 100
  },

  length: { 
    type: String, 
    required: true,
    trim: true
  },

  start: { 
    type: Date, 
    required: true 
  },

  resort: { 
    type: String, 
    required: true,
    trim: true,
    maxlength: 100
  },

  perPerson: { 
    type: Number,      
    required: true,
    min: 0
  },

  image: { 
    type: String, 
    required: true,
    trim: true
  },

  description: { 
    type: String, 
    required: true,
    maxlength: 2000 
  },

  tags: {
    type: [String],
    default: []
  },

  available: {
    type: Boolean,
    default: true
  }

}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);

