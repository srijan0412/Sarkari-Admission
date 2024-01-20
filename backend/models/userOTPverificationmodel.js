const mongoose = require('mongoose')

const userVerification= new mongoose.Schema({
    userID:String,
    otp:String 
})

module.exports = mongoose.model('UserVerificationData', userVerification);