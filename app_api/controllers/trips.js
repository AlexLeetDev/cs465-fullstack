/**
 * trips.js
 * 
 * Controller for the Trips API endpoints.
 * Handles requests to retrieve, create, and update trips.
 * 
 * Author: Alex Leet
 */

const Trip = require('../models/travlr');

/**
 * GET: /api/trips
 * Get a list of all trips from the database
 */
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();

    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }

    return res.status(200).json(trips);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


/**
 * GET: /api/trips/:tripCode
 * Get one trip by its code
 */
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(trip);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


/**
 * POST: /api/trips
 * Add a new trip to the database
 */
const tripsAddTrip = async (req, res) => {
  try {
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

    const savedTrip = await newTrip.save();
    return res.status(201).json(savedTrip);

  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};


/**
 * PUT: /api/trips/:tripCode
 * Update an existing trip by tripCode
 */
const tripsUpdateTrip = async (req, res) => {
  try {
    const updatedTrip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true } // return updated document
    ).exec();

    if (!updatedTrip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(updatedTrip);

  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};


// Export controller functions
module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};
