const express = require('express');
const app = express.Router();
const {UserRegister,VerifyOTP,UserLogin,UserLogout,ForgotPassword,ResetPassword} = require('../controllers/userAuthentication')
app.post('/register',UserRegister);
app.post('/verifyotp',VerifyOTP);
app.post('/login',UserLogin);
app.post('/logout',UserLogout);
app.post('/logout',UserLogout);
app.post('/logout',UserLogout);
module.exports=app;
