/**
 * about.js
 * 
 * Controller for the About page.
 * Renders the about.hbs template.
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

module.exports.about = function (req, res) {
  res.render('about', {
    title: 'About - Travlr Getaways Web Template',
    footerText: '© 2023 by Travlr Getaways. All Rights Reserved',
    activePage: 'about'
  });
};

