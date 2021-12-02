require('../database/connection');
const express = require('express');
const routers = express.Router();
const Player = require('../model/Player');
const multer = require('multer');
const controller = require('../controller/controller');

// index
routers.get('/', (req, res) => {
  res.send('chapter 8 with react and express js');
});

// get data list players
routers.get('/players', controller.findAllPlayer);

// get single list player
routers.get('/player/:id', controller.findSinglePlayer);

// create players
routers.post('/player', multer().none(), controller.createPlayer);

// update player
routers.put('/player/:id', multer().none(), controller.updatePlayer);

// delete player
routers.delete('/player/:id', controller.deletePlayer);

module.exports = routers;
