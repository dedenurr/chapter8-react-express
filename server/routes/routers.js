require('../database/connection');
const express = require('express');
const routers = express.Router();
const Player = require('../model/Player');
const multer = require('multer');
const controller = require('../controller/controller');

routers.get('/', controller.Home); // index

//API Player
routers.get('/api/players', controller.findAllPlayer); // get data list players
routers.get('/api/player/:id', controller.findSinglePlayer); // get single list player
routers.post('/api/player', multer().none(), controller.createPlayer); // create players
routers.put('/api/player/:id', multer().none(), controller.updatePlayer); // update player
routers.delete('/api/player/:id', controller.deletePlayer); // delete player

module.exports = routers;
