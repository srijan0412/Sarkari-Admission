const mongoose = require('mongoose')

const College = new mongoose.Schema({
    collegeName:{
        type:String
    },
    university:{
        type:String
    },
    course:[{
        type:mongoose.Types.ObjectId
    }],
    location:{
        type:String
    },
    feesRange:{
        type:mongoose.Schema.Types.Mixed
    },
    ranking:{
        type:String
    },
    collegeType:{
        type:String,
        enum:['Private','Goverment']
    },
    Syllabus:{
        type:String
    }
})
module.exports = mongoose.model('CollegeData', College);