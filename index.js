const express = require('express');
const app = express();
const port = 3000;
const routers = require('./routers');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(routers);

app.listen(port, () => console.log(`Respon success and running in http://localhost:${port}`));
