/**
 * index.js
 * 
 * Defines the main routes for the Travlr website.
 * Connects each URL path to its corresponding controller function.
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const express = require('express');     // Load Express so we can use its routing tools
const router = express.Router();        // Create a new router object

// Load individual page controllers
const ctrlMain = require('../controllers/main');
const ctrlTravel = require('../controllers/travel');
const ctrlRooms = require('../controllers/rooms');
const ctrlMeals = require('../controllers/meals');
const ctrlAbout = require('../controllers/about');
const ctrlContact = require('../controllers/contact');
const ctrlNews = require('../controllers/news');

// Define routes and associate them with controller functions
router.get('/', ctrlMain.index);
router.get('/travel', ctrlTravel.travel);
router.get('/rooms', ctrlRooms.rooms);
router.get('/meals', ctrlMeals.meals);
router.get('/about', ctrlAbout.about);
router.get('/contact', ctrlContact.contact);
router.get('/news', ctrlNews.news);

// Make these routes available to the rest of the app
module.exports = router;
