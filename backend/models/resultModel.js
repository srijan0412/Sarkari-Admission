const mongoose = require('mongoose')

const Result = new mongoose.Schema({
    examName:{
        type:String
    },
    examResultLink:{
        type:String
    },
    resultImage:{
        type:String
    }
})
module.exports = mongoose.model('ResultData', Result);