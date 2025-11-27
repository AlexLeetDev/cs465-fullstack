/**
 * File: travlr.js
 * Author: Alex Leet
 * 
 * Enhanced Trip Schema:
 * - Improved data types (perPerson → Number)
 * - Added validation rules
 * - Added optional fields (tags, available)
 * - Added timestamps for createdAt/updatedAt
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

