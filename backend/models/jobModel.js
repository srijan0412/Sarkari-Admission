const mongoose = require('mongoose')

const Job = new mongoose.Schema({
    jobName:{
        type:String
    },
    applyLink:{
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
    }
})
module.exports = mongoose.model('JobData', Job);