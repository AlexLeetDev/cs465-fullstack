/**
 * main.js
 * 
 * Shows the homepage of the Travlr website
 * Sends content to the index.hbs page when someone visits "/"
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const index = (req, res) => {
  res.render('index', { title: "Travlr Getaways"});
}

module.exports = {
  index
}
