/**
 * meals.js
 * API controller for Meals collection.
 */

const Meal = require('../models/meals');

const mealsList = async (req, res) => {
  try {
    const meals = await Meal.find({}).exec();
    return res.status(200).json(meals);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  mealsList
};
