const express = require('express');
const app = express();
const port = 3000;

// swagger ui api documentation
const swaggerJSON = require('./fix-api-player-Swagger20.json');
const swaggerUI = require('swagger-ui-express');
app.use('/api-docs-player', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

// mengirim dan menerima data dari klien
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// menghubungkan client (pemberi request) dan server (pemberi response)
const cors = require('cors');
app.use(cors());

// Log aktivitas
const morgan = require('morgan');
app.use(morgan('tiny'));

// manajemen file agar rapih
const routers = require('./server/routes/routers');
app.use(routers);

// jalankan server
app.listen(port, () => console.log(`Respon success and running in http://localhost:${port}`));
