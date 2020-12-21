const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./api');

const volleyball = require('volleyball');

app.use(volleyball);

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
