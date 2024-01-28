const express = require('express');
const app = express.Router();
const {AddCollege,CollegeList,AddJob,AddResult}=require('../controllers/collegeControllers');

app.post('/add-college',AddCollege);
app.post('/find-college',CollegeList);
app.post('/add-job',AddJob);
app.post('/add-result',AddResult);

module.exports=app;