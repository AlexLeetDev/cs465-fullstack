/**
 * File: rooms.js
 * Author: Alex Leet
 *
 * Enhancement (Databases):
 *   Updated to load rooms from the MongoDB API instead of
 *   using the old rooms.json file.
 */

const axios = require('axios');

module.exports.rooms = async function (req, res) {
  try {
    const response = await axios.get('http://localhost:3000/api/rooms');
    const rooms = response.data;

    res.render('rooms', {
      title: 'Rooms - Travlr Getaways Website Template',
      pageHeader: { title: 'Rooms' },
      rooms,
      footerText: '© 2023 by Travlr Getaways. All Rights Reserved',
      activePage: 'rooms'
    });

  } catch (err) {
    console.error('Error fetching rooms:', err);
    res.status(500).send('Error retrieving rooms from the API.');
  }
};