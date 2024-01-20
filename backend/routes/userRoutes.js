const express = require('express');
const app = express.Router();
const {UserRegister,VerifyOTP} = require('../controllers/userAuthentication')

app.post('/register',UserRegister);
app.post('/verifyotp',VerifyOTP);
module.exports=app;
