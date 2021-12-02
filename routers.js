require('./connection');
const express = require('express');
const routers = express.Router();
const Player = require('./Player');
const multer = require('multer');

// index
routers.get('/', (req, res) => {
  res.send('chapter 8 with react and express js');
});

// get data list players
routers.get('/players', async (req, res) => {
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
});

// get single list player
routers.get('/player/:id', async (req, res) => {
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
});

// create players
routers.post('/player', multer().none(), async (req, res) => {
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
});

// update player
routers.put('/player/:id', multer().none(), async (req, res) => {
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
});

routers.delete('/player/:id', async (req, res) => {
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
});
module.exports = routers;
