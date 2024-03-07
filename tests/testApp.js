const express = require('express');
const index = require('../routes/index');
const app = express();
require('dotenv').config();

const { auth, requiresAuth } = require('express-openid-connect');

app.use(express.urlencoded({ extended: false }));
app.use('/', index);
app.use('/user', requiresAuth(), require('../routes/user'));

module.exports = app;
