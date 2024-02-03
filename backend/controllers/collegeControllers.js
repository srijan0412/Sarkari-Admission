const mongoose = require('mongoose')
const College=require('../models/collegeModel')
exports.AddCollege = async(req,res)=>{
    try{
        const {collegeName,affiliatedUniversity,location,ranking,collegeType,courses,collegeApplylink}=req.body;
        //courses-array
        const college=await College.create({
            collegeName,
            affiliatedUniversity,
            location,
            ranking,
            collegeType,
            course:courses,
            collegeApplylink
        })
        
        res.status(200).json({msg:"College added successfully",college});
    }catch(err){
        res.status(500).json({msg:err})
    }
}

exports.CollegeList = async(req,res)=>{
    try{
        const {course} = req.body;
        const colleges = await College.find({"course":{$in:[course]}})
        res.status(200).json(colleges);
    }catch(err){
        res.status(500).json({msg:err})
    }
}



exports.CollegeDetails = async(req,res)=>{
    try{
        
        const collegeName = req.params.collegeName;
        
        const college = await College.find({collegeName});
        
        res.status(200).json(college)
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}
