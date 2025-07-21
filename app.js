/**
 * app.js
 * Main file that starts the Travlr website
 * Sets up the server, page templates, routes, and public files
 *
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const express = require('express');   // Web framework for building the site
const path = require('path');         // Helps work with file and folder paths
const hbs = require('hbs');           // Template engine that shows pages

const app = express();                // Starts the website app

require('./app_server/models/db');    // Connect to the database

// Set the folder where view templates are stored
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Tell the app to use Handlebars (hbs) to build the pages
app.set('view engine', 'hbs');

// Use main.hbs as the default layout
app.set('view options', { layout: 'layouts/main' });

// Tell the app where to find the shared page parts (like headers and footers)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Helper function used to highlight the active page in the navigation menu
hbs.registerHelper('eq', function(a, b) {
  return a === b;
});

// Show files from the "public" folder, like images and CSS
app.use(express.static(path.join(__dirname, 'public')));

// Load the file that handles what happens on each web page
const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);  // Use those routes when people visit the site 

// Start the app and open it on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
