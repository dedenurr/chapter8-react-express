const express = require('express');
const app = express();
const port = 3000;

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
const routers = require('./routers');
app.use(routers);

// jalankan server
app.listen(port, () => console.log(`Respon success and running in http://localhost:${port}`));
