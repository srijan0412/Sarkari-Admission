const mongoose = require('mongoose')

const Job = new mongoose.Schema({
    jobName:{
        type:String
    },
    jobApplyLink:{
        type:String
    },
    eligibility:{
        type:String
    },
    lastDate:{
        type:Date
    },
    jobDescription:{
        type:String
    },
    companyLogo:{
        type:String
    },
    jobType:{
        type:String,
        enum:["Entrance","Civil Services"]
    }
})
module.exports = mongoose.model('JobData', Job);