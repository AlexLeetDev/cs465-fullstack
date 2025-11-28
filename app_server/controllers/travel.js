/**
 * Enhancement (Databases):
 * Updated this page to load Trips from the API (MongoDB)
 * instead of trips.json.
 *
 * Author: Alex Leet
 */

const axios = require('axios');

const travel = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/trips');
    const trips = response.data;

    res.render('travel', {
      title: 'Dive Sites - Bhaccasyoniztaz Beach Resort',
      pageHeader: { title: 'Travel' },
      trips,
      footerText: '© 2023 by BHACCASYONIZTAS BEACH RESORT. All Rights Reserved',
      activePage: 'travel'
    });
  } catch (err) {
    console.error('Error loading trips:', err);
    res.status(500).send('Error retrieving trips from the API.');
  }
};

module.exports = {
  travel
};