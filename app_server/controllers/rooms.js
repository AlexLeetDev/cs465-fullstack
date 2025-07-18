/**
 * rooms.js
 * 
 * Controller for the Rooms page.
 * Loads rooms data from rooms.json and sends it to the view.
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const fs = require('fs');
let rooms = [];

try {
  rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));
} catch (err) {
  console.error('Failed to load rooms.json', err);
}

module.exports.rooms = function(req, res) {
  res.render('rooms', {
    title: 'Rooms - Travlr Getaways Website Template',
    pageHeader: {
      title: 'Rooms'
    },
    rooms,
    footerText: '© 2023 by Travlr Getaways. All Rights Reserved',
    activePage: 'rooms'
  });
};