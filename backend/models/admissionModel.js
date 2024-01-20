const mongoose = require('mongoose')

const Admission = new mongoose.Schema(
    {
        courseName:{
            type:String
        },
        qualification:{
            type:String
        },
        courseLevel:{
            type:String
        },
        courseDuration:{
            type:Number
        },
        examinationType:{
            type:String
        },
        Specializations:{
            type:Array
        },
        topColleges:{
            type:String
        },
        averageFees:{
            type:Number
        },
        description:{
            type:String
        },
        entranceExams:[{
            type:mongoose.Types.ObjectId
        }],
        avgSalaryScope:{
            type:Number
        }
    }
)
module.exports = mongoose.model('AdmissionData', Admission);