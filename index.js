const express = require('express');
const gridkyRoutes = require('./routes/gridkyRoutes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/gridky', gridkyRoutes);

module.exports = app;
