const express = require('express');
const app = express.Router();
const {AddJob}= require('../controllers/jobControllers')
app.post('/add-job',AddJob);

module.exports=app