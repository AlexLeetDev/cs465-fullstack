/**
 * Enhancement (Databases):
 * Updated this page to get Meals from the API (MongoDB)
 * instead of the old meals.json file.
 *
 * Author: Alex Leet
 */

const axios = require('axios');

module.exports.meals = async function (req, res) {
  try {
    const response = await axios.get('http://localhost:3000/api/meals');
    const meals = response.data;

    res.render('meals', {
      title: 'Foods - Travlr Getaways Website Template',
      pageHeader: { title: 'Meals' },
      meals,
      footerText: '© 2023 by Travlr Getaways. All Rights Reserved',
      activePage: 'meals'
    });

  } catch (err) {
    console.error('Error fetching meals:', err);
    res.status(500).send('Error retrieving meals from the API.');
  }
};