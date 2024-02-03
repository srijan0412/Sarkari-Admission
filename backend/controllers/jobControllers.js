const mongoose = require('mongoose')
const Job = require('../models/jobModel')

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
