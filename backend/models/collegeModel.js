const mongoose = require('mongoose')

const College = new mongoose.Schema({
    collegeName:{
        type:String,
        required:true
    },
    affiliatedUniversity:{
        type:String,
        required:true
    },
    course:Array,
    location:{
        type:String,
        required:true
    },
    ranking:{
        type:String
    },
    collegeType:{
        type:String,
        enum:['Private','Government'],
        required:true
    },
    collegeApplylink:String,
    collegeImg:{
        type:String
    }
})
module.exports = mongoose.model('CollegeData', College);