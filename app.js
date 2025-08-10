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
const morgan = require('morgan');     // Logs HTTP requests in the console

const app = express();                // Starts the website app

// Connect to the database
require('./app_api/models/db');

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

app.use(morgan('dev'));

// Manually enable CORS for Angular Frontend on port 4200
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load web page routes (for views)
const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);  // Use these for normal page visits

// Load API routes (for JSON data)
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);  // Use these for API requests

// Start the app and open it on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});