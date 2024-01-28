const mongoose = require('mongoose')
const College=require('../models/collegeModel')
const Job = require('../models/jobModel')
const Result = require('../models/resultModel')
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

exports.AddJob = async(req,res)=>{
    try{
        const {jobName,jobType,jobDescription,eligibility,lastDate,jobApplylink}=req.body;
        //courses-array
        const job=await Job.create({
            jobName,
            jobType,
            lastDate,
            jobDescription,
            eligibility,
            jobApplylink
        })
        
        res.status(200).json({msg:"Job added successfully",job});
    }catch(err){
        res.status(500).json({msg:err})
    }
}

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

