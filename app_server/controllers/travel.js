/**
 * travel.js
 * 
 * Controller for the Travel page.
 * Loads travel packages from trips.json and sends them to the view.
 * 
 * Author: Alex Leet
 * Course: CS 465 - Full Stack Development I
 */

const fetch = require('node-fetch');

const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

const travel = async (req, res) => {
  try {
    const response = await fetch(tripsEndpoint, options);
    const trips = await response.json();

    res.render('travel', {
      title: 'Dive Sites - Bhaccasyoniztas Beach Resort Website Template',
      pageHeader: {
        title: 'Travel',
      },
      trips,
      footerText: '© 2023 by BHACCASYONIZTAS BEACH RESORT. All Rights Reserved',
      activePage: 'travel'
    });
  } catch (err) {
    console.error('Error fetching trips:', err);
    res.status(500).send('Error retrieving trips from the API.');
  }
};

module.exports = {
  travel
};