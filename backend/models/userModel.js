const mongoose = require('mongoose')

const User = new mongoose.Schema({
  token: {
    type: String,
    default: ""
  },
  userName: {
    type: String,
    required: [true, "Please enter your name"],
  },
  userEmail: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    // minLength: [6, "Password must be at least 6 characters"],
    // select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  subscription: {
    type: String,
    enum: ["active","not_active"],
    default:"not_active"
  },
  verified:{
    type:Boolean,
    default:false
  }
})
module.exports = mongoose.model('UserData', User);