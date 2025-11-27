const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  mainArticle: {
    title: { type: String, required: true },
    image: { type: String },
    date: { type: String },       
    author: { type: String },
    paragraphs: [String]         
  },
  latestNews: [String],          
  vacationTips: [String]         
}, {
  timestamps: true          
});

module.exports = mongoose.model('News', newsSchema);
