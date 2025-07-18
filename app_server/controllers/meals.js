/**
 * meals.js
 *
 * Controller for the Meals page.
 * Loads meal data from the meals.json and passes it to the view.
 *
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const fs = require('fs');
let meals = [];

try {
  meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));
} catch (err) {
  console.error('Failed to load meals.json', err);
}

module.exports.meals = function(req, res) {
  res.render('meals', {
    title: 'Foods - Travlr Getaways Website Template',
    pageHeader: {
      title: 'Meals'
    },
    meals,
    footerText: '© 2023 by Travlr Getaways. All Rights Reserved',
    activePage: 'meals'
  });
};