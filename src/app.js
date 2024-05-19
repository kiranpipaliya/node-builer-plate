const express = require('express');
const cors = require('cors');
const signinRouter = require('./routes/signin');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', signinRouter);

module.exports = app;
