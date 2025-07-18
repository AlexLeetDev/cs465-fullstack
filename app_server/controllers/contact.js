/**
 * contact.js
 * 
 * Controller for the Contact page.
 * Renders the contact.hbs template.
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

module.exports.contact = function (req, res) {
  res.render('contact', {
    title: 'Contact - Travlr Getaways Website Template',
    footerText: '© 2023 by Travlr Getaways. All Rights Reserved',
    activePage: 'contact'
  });
};