const Player = require('../model/Player');

const findAllPlayer = async (req, res) => {
  try {
    const players = await Player.find();
    if (players.length > 0) {
      res.send({
        status: 'success get all list players',
        message: 'data list players',
        data: players,
      });
    } else {
      res.send({
        status: 'failure get all list players',
        message: 'List players not found',
      });
    }
  } catch (error) {
    res.send({
      status: 'error',
      message: error.message,
    });
  }
};

const findSinglePlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (player) {
      res.send({
        status: 'success single player',
        message: 'single player found',
        data: player,
      });
    } else {
      res.send({
        status: 'failure single player',
        message: 'single player not found',
      });
    }
  } catch (error) {
    res.send({
      status: 'error',
      message: error.message,
    });
  }
};

const createPlayer = async (req, res) => {
  const { username, email, password, experience, lvl } = req.body;
  try {
    const player = await Player.create({
      username: username,
      email: email,
      password: password,
      experience: experience,
      lvl: lvl,
    });
    if (player) {
      res.send({
        status: 'success create player',
        message: 'add player success',
        data: player,
      });
    } else {
      res.send({
        status: 'failure create player',
        message: ' add player failed',
      });
    }
  } catch (error) {
    res.send({
      status: 'error',
      message: error.message,
    });
  }
};

const updatePlayer = async (req, res) => {
  const { username, email, password, experience, lvl } = req.body;
  try {
    const result = await Player.updateOne(
      { _id: req.params.id },
      {
        username: username,
        email: email,
        password: password,
        experience: experience,
        lvl: lvl,
      },
      { runValidators: true }
    );
    if (result) {
      res.send({
        status: 'success update',
        message: 'update player success',
        data: result,
      });
    } else {
      res.send({
        status: 'failure update',
        message: 'failure player success',
        data: result,
      });
    }
  } catch (error) {
    res.send({
      status: 'error',
      message: error.message,
    });
  }
};

const deletePlayer = async (req, res) => {
  try {
    const result = await Player.deleteOne({ _id: req.params.id });
    if (result.deletedCount == 1) {
      res.send({
        status: 'success delete',
        message: 'delete player success',
        data: result,
      });
    } else {
      res.send({
        status: 'failure delete',
        message: 'delete player failure',
        data: result,
      });
    }
  } catch (error) {
    res.send({
      status: 'error',
      message: error.message,
    });
  }
};

module.exports = { findAllPlayer, findSinglePlayer, createPlayer, updatePlayer, deletePlayer };
