/**
 * news.js
 * 
 * Controller for the News page.
 * Loads news data from news.json and passes it to the view.
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const fs = require('fs');
let newsData = {};

try {
  newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
} catch (err) {
  console.error('Failed to load news.json', err);
}

module.exports.news = function(req, res) {
  res.render('news', {
    title: 'News - Travlr Getaways Website Template',
    pageHeader: {
      title: 'News',
    },
    news: newsData,
    footerText: '© 2023 by Travlr Getaways. All Rights Reserved',
    activePage: 'news'
  });
};