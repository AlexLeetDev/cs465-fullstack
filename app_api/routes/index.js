/**
 * index.js
 * 
 * Routes for the Trips API
 * Maps URL paths to controller functions in trips.js
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// GET all trips
router.get('/trips', tripsController.tripsList);

// GET one trip by tripCode
router.get('/trips/:tripCode', tripsController.tripsFindCode);

module.exports = router;
