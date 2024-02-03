const mongoose = require('mongoose')
const User = require('../models/userModel')
const userVerification=require('../models/userOTPverificationmodel')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

require("dotenv").config();
const secret = process.env.JWT_SECRET;
const mail=process.env.AUTH_MAIL
const mailpass=process.env.AUTH_PASS

let transporter=nodemailer.createTransport({
  service: "gmail",
    auth: {
      user: mail,
      pass: mailpass
    }
})
exports.UserRegister = async (req, res, next) => {
    const { userName, userEmail, password } = req.body;
    
  
    if (!userName || !userEmail || !password )
    {res.status(400).json('please select all fields')}
  
    let user = await User.findOne({ userEmail });
  
    if (user) {res.status(409).json('User already exists')}
  
    const hashedPassword=await bcrypt.hash(password,10);
    user = await User.create({
    userName,
    userEmail,
    password:hashedPassword,
    
    });
    const token = jwt.sign({ userEmail }, secret);
    user.token=token;
    user.save().then((result)=>{
        sendOTPverification(result,res)
    })
    res.status(200).json({message:"Successfully Registered",Status:"Not verified"})
  };
  const sendOTPverification=async ({_id,userEmail},res)=>{
    try{
      console.log(userEmail)
      const otp =`${Math.floor(1000+Math.random()*9000)}`
      var mailOptions = {
        from: mail,
        to:userEmail,
        subject: 'Verify your email',
        html: `<p>Enter <b>${otp}</b> on site to get your email verified .</p>`
      };
      const hashedOTP=await bcrypt.hash(otp,10);
      const newOTPverification=await new userVerification({
        userID:_id,
        otp:hashedOTP
      })
      await newOTPverification.save();
      await transporter.sendMail(mailOptions);
      res.status(200).json({message:"Verification email sent"})
    }
    catch(error){
      console.log(error)
      // res.status(500).json(error)
    }
  }

exports.VerifyOTP = async(req,res)=>{
  try{
    let {userID,otp}=req.body;
    if(!userID||!otp){
      res.status(400).json("Empty otp details are not allowed.")
    }
    const userToBeVerified=await userVerification.find({userID})
    if(userToBeVerified.length<=0){
      res.status(400).json("Account record doesn't exist")
    }
    else{
    const hashedotp=userToBeVerified[0].otp;
    const validotp = bcrypt.compare(otp, hashedotp)
    if(!validotp){
      throw new Error("Invalid otp")
    }
    else{
      await User.updateOne({_id:userID},{verified:true})
      await userVerification.deleteMany({userID})
      res.status(200).json({message:"Successfully verified",status:"Verified"})
    }
  }
    
  }catch(error){
    res.status(500).json({error})
  }
}

exports.UserLogin=async (req,res)=>{
    try{
      let {userEmail,password}=req.body;
      const user=await User.findOne({userEmail});
      if(!user){
        throw new Error({ UserExists: false, passCheck: false })
      }
      const passCheck = bcrypt.compareSync(password, user.password,{ expiresIn: '1h' })
      if(passCheck){
        const token = jwt.sign({ userId: user._id }, secret)
        await User.findOneAndUpdate({ email: user.email }, { token })
        res.status(200).json({ UserExists: true, passCheck: true,  user })

      }
      else{
        throw new Error({UserExists:true,passCheck:false})
      }
    }catch(err){
      res.status(500).json({message:err})
    }
}
exports.UserLogout = async (req,res)=>{
  try{
    res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
  }catch(err){
    res.status(500).json({success: true,message: "Logged Out Successfully",})
  }
}

exports.ForgotPassword = async (req, res) => {
  try {
    const { userEmail } = req.body;
    if (!userEmail) {
      res.status(400).json({ msg: 'Please provide the email' })
    }

    let user = await User.findOne({ userEmail });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
      var mailOptions = {
        from: process.env.AUTH_MAIL,
        to: user.userEmail,
        subject: 'Verify your email for password change',
        html: `${'http://localhost:7000'}/user/reset-password/${token}`
      };
      await transporter.sendMail(mailOptions);
      res.status(200).json({ msg: "Password reset link has been sent to your mail. " });
    }
    else {
      res.status(409).json({ msg: 'User does not exists' })
    }
  }
  catch (error) {
    res.status(500).json({ error })
  }
}

exports.ResetPassword = async (req, res) => {
  try {
    const {  token, password } = req.body
    jwt.verify(token, process.env.JWT_SECRET , (err, decoded) => {
      if (err) {
        console.log(err)
        return res.json({ msg: "Error with token : " + err })
      } else {
        console.log(decoded)
        bcrypt.hash(password, 10)
          .then(hash => {
            
            User.findByIdAndUpdate({ _id: decoded._id }, { password: hash })
              .then(u =>
                res.status(200).json({ msg: "Password has be successfully reset." })
              )
              .catch(err =>
                res.json({ err })
              )
          })
      }
    })
  }
  catch (error) {
    res.status(500).json({ error })
  }
}
