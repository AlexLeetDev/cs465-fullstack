/**
 * authentication.js
 * --------------------
 * Controller for user registration and login.
 * - register: creates a new user and returns a JWT.
 * - login: verifies credentials with Passport and returns a JWT.
 * 
 * Exports:
 *   module.exports = { register, login }
 */

const mongoose = require('mongoose');       
const User = require('../models/user');
const passport = require('passport');

/**
 * register(req, res)
 * --------------------
 * Creates a new user and returns a signed JWT.
 * Expects: name, email, password (in req.body)
 */
const register = async (req, res) => {
    // Validate message to ensure that all parameters are present
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({"message": "All fields required"});
    }

    const user = new User(
        {
            name: req.body.name,        // Set User name
            email: req.body.email,      // Set e-mail address
            password: ''                // Start with empty password
        });
    user.setPassword(req.body.password) // Set user password
    const q = await user.save();

    if(!q)
    {
        // Database returned no data
        return res
            .status(400)
            .json(err);
    } else {
        // Return new user token
        const token = user.generateJWT();
        return res
            .status(200)
            .json(token);
    }  
};

const login = (req, res) => {
    // Validate message to ensure that email and password are present
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({"message": "All fields required"});
    }

    // Delegate authentication to passport module
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            // Error in authentication process
            return res
                .status(404)
                .json(err);
        }

        if (user) { // Auth succeeded - generate JWT and return to caller
            const token = user.generateJWT();
            res
                .status(200)
                .json({token});
        } else { // Auth failed return error
            res
                .status(401)
                .json(info);
        }
    }) (req, res);
};

module.exports = {
    register,
    login
};
    