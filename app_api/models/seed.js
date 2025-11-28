/**
 * Enhancement (Databases):
 * Updated the seed script to add Meals, Rooms, and News
 * to MongoDB along with Trips.
 *
 * Author: Alex Leet
 */

const mongoose = require('./db');

// Import all models
const Trip = require('./travlr');
const Meal = require('./meals');
const Room = require('./rooms');
const News = require('./news');

const fs = require('fs');

// Load JSON files
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));
const meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'));
const rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'));
const news = JSON.parse(fs.readFileSync('./data/news.json', 'utf-8'));

// Seed all collections
const seedDB = async () => {
  try {
    // Trips
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log(`${trips.length} trips added.`);

    // Meals
    await Meal.deleteMany({});
    await Meal.insertMany(meals);
    console.log(`${meals.length} meals added.`);

    // Rooms
    await Room.deleteMany({});
    await Room.insertMany(rooms);
    console.log(`${rooms.length} rooms added.`);

    // News (insert single document as array)
    await News.deleteMany({});
    await News.insertMany([news]);
    console.log(`1 news document added.`);

  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

// Run and close
seedDB().then(async () => {
  await mongoose.connection.close();
  console.log('Database seeding complete. Connection closed.');
  process.exit(0);
});