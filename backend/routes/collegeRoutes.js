const express = require('express');
const app = express.Router();
const {AddCollege,CollegeList,CollegeDetails}=require('../controllers/collegeControllers');

app.post('/add-college',AddCollege);
app.post('/find-college',CollegeList);
app.get('/college_details/:collegeName',CollegeDetails);

module.exports=app;