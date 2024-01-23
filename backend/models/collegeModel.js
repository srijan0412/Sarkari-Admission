const mongoose = require('mongoose')

const College = new mongoose.Schema({
    collegeName:{
        type:String
    },
    affiliatedUniversity:{
        type:String
    },
    course:[{
        type:mongoose.Types.ObjectId
    }],
    location:{
        type:String
    },
    ranking:{
        type:String
    },
    collegeType:{
        type:String,
        enum:['Private','Goverment']
    },
    
})
module.exports = mongoose.model('CollegeData', College);