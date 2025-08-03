/**
 * File: seed.js
 * Author: Alex Leet
 * Course: CS-465 Full Stack Development I
 * Module Four: NoSQL Databases, Models, and Schemas
 * 
 * Adds sample trip data to the MongoDB database.
 * 
 * - Deletes any existing trips in the database
 * - Loads new trip data from the trips.json file
 * - Closes the database connection when done
 */

// Bring in the db connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from json file
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json','utf-8'));

// Delete any existing records, then insert seed data
const seedDB = async () => {
  try {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log(`${trips.length} trips added.`);
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

// Close the MongoDB connection and exit
seedDB().then(async () => {
  await Mongoose.connection.close();
  process.exit(0);
});