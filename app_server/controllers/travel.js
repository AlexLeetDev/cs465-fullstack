/**
 * travel.js
 * 
 * Controller for the Travel page.
 * Loads travel packages from trips.json and sends them to the view.
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const fs = require('fs');
let trips = [];

try {
  trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
} catch (err) {
  console.error('Failed to load trips.json', err);
}

module.exports.travel = function(req, res) {
  res.render('travel', {
    title: 'Dive Sites - Bhaccasyoniztas Beach Resort Website Template',
    pageHeader: {
      title: 'Travel',
    },
    trips,
    footerText: '© 2023 by BHACCASYONIZTAS BEACH RESORT. All Rights Reserved',
    activePage: 'travel'
  });
};