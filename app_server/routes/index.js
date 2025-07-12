/**
 * index.js
 * 
 * Controls which pages show up when someone visits the website
 * Connects the homepage and travel page to their controller functions
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const express = require('express');     // Load Express so we can use its routing tools
const router = express.Router();        // Create a new router object

// Load the homepage and travel page controllers
const ctrlMain = require('../controllers/main');
const ctrlTravel = require('../controllers/travel');

// When someone visits "/", show the homepage
router.get('/', ctrlMain.index);

// When someone visits "/travel", show the travel page
router.get('/travel', ctrlTravel.travel);

// Make these routes available to the rest of the app
module.exports = router;
