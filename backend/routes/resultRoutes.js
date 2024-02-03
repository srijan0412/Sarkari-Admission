const express = require('express');
const app = express.Router();
const {AddResult} = require('../controllers/resultControllers')

app.post('/add-result',AddResult);

module.exports=app