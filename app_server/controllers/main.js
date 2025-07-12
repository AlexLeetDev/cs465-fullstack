/**
 * main.js
 * 
 * Shows the homepage of the Travlr website
 * Sends content to the index.hbs page when someone visits "/"
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

// This function runs when someone visits the homepage ("/")
module.exports.index = function(req, res) {
  // Show the index.hbs page and send it the info below
  res.render('index', {
    title: 'Travlr Getaways', // The title that shows in the browser tab
    pageHeader: {
      title: 'Travlr Getaways', // Big heading at the top of the page
      strapline: 'Discover your next adventure!' // Small line under the heading
    },
    content: 'Welcome to Travlr — your personalized travel guide.' // Main text on the page
  });
};
