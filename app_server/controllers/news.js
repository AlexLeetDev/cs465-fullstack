/**
 * Enhancement (Databases):
 * Updated this page to load News from the API (MongoDB)
 * instead of a JSON file.
 *
 * Author: Alex Leet
 */

const axios = require('axios');

module.exports.news = async function (req, res) {
  try {
    const response = await axios.get('http://localhost:3000/api/news');
    const news = response.data;

    res.render('news', {
      title: 'News - Travlr Getaways Website Template',
      pageHeader: { title: 'News' },
      news,
      footerText: '© 2023 by Travlr Getaways. All Rights Reserved',
      activePage: 'news'
    });

  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).send('Error retrieving news from the API.');
  }
};