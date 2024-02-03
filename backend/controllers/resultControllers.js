const mongoose = require('mongoose')
const Result = require('../models/resultModel')

exports.AddResult = async(req,res)=>{
    try{
        const {examName,examResultLink}=req.body;
        //courses-array
        const result=await Result.create({
            examName,
            examResultLink
            })
        
        res.status(200).json({msg:"Result added successfully",result});
    }catch(err){
        res.status(500).json({msg:err})
    }
}

