const express = require('express');
const app = express(); 
const  customers = require('./routes/customer-routes');
const users = require('./routes/user-routes');

app.use(express.json());

app.use('/user', users);

app.use('/customer', customers); 

module.exports = app;