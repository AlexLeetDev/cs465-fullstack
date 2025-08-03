/**
 * trips.js
 * 
 * Controller for the Trips API endpoints.
 * Handles requests to retrieve all trips or a specific trip by its code.
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

/**
 * GET: /api/trips
 * Get a list of all trips from the database
 */
const tripsList = async (req, res) => {
  try {
    // Find all trips in the database
    const trips = await Model.find({}).exec();

    // If there are no trips, send a 404 response
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }

    // Send the list of trips with a success response
    return res.status(200).json(trips);

  } catch (err) {
    // If something goes wrong, send an error message
    return res.status(500).json({ message: err.message });
  }
};

/**
 * GET: /api/trips/:tripCode
 * Get one trip using its trip code (like trip1, trip2, etc.)
 */
const tripsFindCode = async (req, res) => {
  try {
    // Look for a trip that matches the code from the URL
    const trip = await Model.findOne({ code: req.params.tripCode }).exec();

    // If no trip is found, send a 404 message
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    // Send the found trip back with a success message
    return res.status(200).json(trip);

  } catch (err) {
    // If something goes wrong, send an error message
    return res.status(500).json({ message: err.message });
  }
};

// Make these functions available to other files
module.exports = {
  tripsList,
  tripsFindCode
};