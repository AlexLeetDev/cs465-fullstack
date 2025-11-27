/**
 * news.js
 * API controller for News collection.
 */

const News = require('../models/news');

const newsGet = async (req, res) => {
  try {
    const news = await News.findOne({}).exec();
    return res.status(200).json(news);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  newsGet
};
