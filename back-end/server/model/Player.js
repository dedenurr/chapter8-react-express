const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'field username must be fill in '],
    minlength: 3,
    maxlength: 8,
  },
  email: {
    type: String,
    required: [true, 'field email must be fill in '],
    minlength: 11,
    maxlength: 50,
  },
  password: {
    type: String,
    required: [true, 'Password email must be fill in '],
    minlength: 3,
    maxlength: 8,
  },
  experience: {
    type: Number,
  },
  lvl: {
    type: Number,
  },
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
