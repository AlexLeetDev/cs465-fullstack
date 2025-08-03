/**
 * File: travlr.js
 * Author: Alex Leet
 * Course: CS-465 Full Stack Development I
 * Module Four: NoSQL Databases, Models, and Schemas
 * 
 * This file defines the structure of a trip in our database.
 * It tells the system what information to store for each trip:
 * 
 * - trip code
 * - trip name
 * - length of trip
 * - start date
 * - resort name
 * - price per person
 * - image name
 * - description
 * 
 * This helps keep the trip data organized and consistent.
 */

const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true,index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;