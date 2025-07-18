/**
 * travel.js
 * 
 * Shows the travel page of the Travlr website
 * Sends content to the travel.hbs page when someone visits "/travel"
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

module.exports.travel = function(req, res) {
  res.render('travel', {
    title: 'Dive Sites - Bhaccasyoniztas Beach Resort Website Template'
  });
};