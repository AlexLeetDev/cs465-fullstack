/**
 * Enhancement (Databases):
 * Added new API routes for Meals, Rooms, and News so these
 * pages now get their data from MongoDB.
 *
 * Author: Alex Leet
 */

const express = require('express');     // Express app
const router = express.Router();        // Router logic
const jwt = require('jsonwebtoken');

// Controllers
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// NEW: Add these controllers for Enhancement Step 4
const mealsController = require('../controllers/meals');
const roomsController = require('../controllers/rooms');
const newsController = require('../controllers/news');

router
    .route("/register")
    .post(authController.register);

router
    .route("/login")
    .post(authController.login);

router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(authenticateJWT, tripsController.tripsAddTrip);

router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);

// -----------------------------------------
// NEW API ROUTES FOR Enhancement Step 4
// -----------------------------------------

// Meals
router
    .route("/meals")
    .get(mealsController.mealsList);

// Rooms
router
    .route("/rooms")
    .get(roomsController.roomsList);

// News
router
    .route("/news")
    .get(newsController.newsGet);

// JWT Middleware (unchanged)
function authenticateJWT(req, res, next) {

    const authHeader = req.headers['authorization'];

    if(authHeader == null)
    {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if(headers.length < 1)
    {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];

    if(token == null)
    {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if(err)
        {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified;
    });
    next();
}

module.exports = router;