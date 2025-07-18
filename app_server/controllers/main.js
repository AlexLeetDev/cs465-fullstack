/**
 * main.js
 * 
 * Controller for the homepage.
 * Loads the homepage (index.hbs) with title.
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

module.exports.index = function(req, res) {
  res.render('index', {
    title: 'Travlr Getaways Website Template',
    footerText: '© 2023 by Travlr Getaways. All Rights Reserved',
    activePage: 'home'
  });
};

