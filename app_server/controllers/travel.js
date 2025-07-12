/**
 * travel.js
 * 
 * Shows the travel page of the Travlr website
 * Sends content to the travel.hbs page when someone visits "/travel"
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

// This function runs when someone visits the "/travel" page
module.exports.travel = function(req, res) {
  // Show the travel.hbs page and send it the info below
  res.render('travel', {
    title: 'Travlr | Travel Page', // Title shown in the browser tab
    pageHeader: {
      title: 'Our Travel Packages', // Main heading at the top of the page
      strapline: 'Explore destinations around the world' // Small line under the heading
    },
    content: 'Browse a variety of travel options and find your next getaway!' // Main text shown on the page
  });
};
