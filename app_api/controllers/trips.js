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
const tripsFindByCode = async (req, res) => {
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

// POST: /trips - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
  });

  // Save to the database
  const q = await newTrip.save();

    if(!q) 
    { // Database returned no data
      return res
        .status(400)
        .json(err);
    } else { // Return new trip
        return res
          .status(201)
          .json(q);
    }

    // Uncomment the following line to show results of operation
    // on the console
    // console.log(q);
}

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {

  // Uncomment for debugging
  // console.log(req.params);
  // console.log(req.body);

  const q = await Model
    .findOneAndUpdate (
      { 'code' : req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      }
    )
    .exec();

    if(!q)
    { // Database returned no data
      return res
        .status(400)
        .json(err);
    } else { // Return resulting updated trip
      return res
        .status(201)
        .json(q);
    }

    // Uncomment the following line to show results of the operation
    // on the console
    // console.log(q);
}

// Make these functions available to other files
module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};