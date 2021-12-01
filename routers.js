const express = require('express');
const routers = express.Router();

routers.get('/', (req, res) => {
  res.send('chapter 8 with react and express js 2');
});

module.exports = routers;
