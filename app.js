/**
 * app.js
 * Main file that starts the Travlr website
 * Sets up the server, page templates, routes, and public files
 *
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

require('dotenv').config(); // Load .env first

const express  = require('express');
const path     = require('path');
const hbs      = require('hbs');
const morgan   = require('morgan');
const passport = require('passport');

// Configure Passport strategies (must come before initialize)
require('./app_api/config/passport');

// Connect to MongoDB
require('./app_api/models/db');

const app = express();

/* ---------- View engine (server-rendered pages) ---------- */
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layouts/main' });

// Partials + helpers
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));
hbs.registerHelper('eq', (a, b) => a === b);

/* ---------- Static files ---------- */
app.use(express.static(path.join(__dirname, 'public')));

/* ---------- Core middleware ---------- */
app.use(passport.initialize());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- CORS for Angular dev server (http://localhost:4200) ---------- */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

/* ---------- Routers ---------- */
// Server-rendered pages (Handlebars)
const pageRouter = require('./app_server/routes/index');
app.use('/', pageRouter);

// JSON API routes (Angular client)
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);

/* ---------- Auth error handler ---------- */
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ message: `${err.name}: ${err.message}` });
  }
  next(err);
});

/* ---------- Start server ---------- */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});