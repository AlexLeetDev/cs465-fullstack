/**
 * user.js
 * --------------------
 * Mongoose model for users with authentication support.
 * 
 * Fields: email, name, hash, salt
 * Methods: setPassword(), validPassword(), generateJWT()
 */

const mongoose = require('mongoose');
const crypto = require('crypto'); 
const jwt = require('jsonwebtoken');

// Define the user schema with required fields
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true    // Each email must be unique
    },
    name: {
        type: String,
        required: true
    },
    hash: String,       // Stores the encrypted password
    salt: String        // Stores the random value used for encryption
});

// Set a user's password by generating a salt and hash
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// Check if a given password matches the stored hash
userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash; // Return true if hatches match
};

// Generate a JWT for the user
userSchema.methods.generateJWT = function() {
    return jwt.sign(
        { // Payload for our JSON Web Token
            _id: this._id,      // User ID
            email: this.email,  // User email
            name: this.name     // User name
        },
        process.env.JWT_SECRET, // SECRET stored in .env file
        { expiresIn: '1h' } // Token expires an hour from creation
    );
};

const User = mongoose.model('users', userSchema);
module.exports = User;