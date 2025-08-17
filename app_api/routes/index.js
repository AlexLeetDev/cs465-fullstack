/**
 * index.js
 * 
 * API routes for the Travlr application.
 * Connects URL paths to trip and auth controllers.
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const express = require('express');     // Express app
const router = express.Router();        // Router logic
const jwt = require('jsonwebtoken');

// Controllers
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

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

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');

    const authHeader = req.headers['authorization'];
    // console.log('Auth Header: ' + authHeader);

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
    // console.log('Token: ' + token);

    if(token == null)
    {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    // console.log(process.env.JWT_SECRETS);
    // console.log(jwt.decode(token));
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