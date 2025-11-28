/**
 * Enhancement (Databases):
 * Added this controller so Rooms data loads from MongoDB
 * instead of a JSON file.
 *
 * Author: Alex Leet
 */

const Room = require('../models/rooms');

const roomsList = async (req, res) => {
  try {
    const rooms = await Room.find({}).exec();
    return res.status(200).json(rooms);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  roomsList
};
