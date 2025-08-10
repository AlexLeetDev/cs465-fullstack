/**
 * index.js
 * 
 * Routes for the Trips API
 * Maps URL paths to controller functions in trips.js
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const express = require('express'); // Express app
const router = express.Router();    // Router logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes TripList
    .post(tripsController.tripsAddTrip); // POST Method adds a Trip

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
