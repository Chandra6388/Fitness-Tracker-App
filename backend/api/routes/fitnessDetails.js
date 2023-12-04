const express = require('express');
const routes = express.Router();
const FitnessDetails = require('../model/fitnessDetails');
const mongoose = require('mongoose')

 
routes.post('/',(req,res,next)=>{
    const fitnessdetails = new FitnessDetails({
        _id: new mongoose.Types.ObjectId,
        workoutname:req.body.workoutname,
        workoutduration:req.body.workoutduration,
        burncalories:req.body.burncalories,
        notes:req.body.notes
    })
    fitnessdetails.save()
    .then((result)=>{
        res.status(200).json({
            msg:result
        })
     })
     .catch((err)=>{
        res.status(500).json({
            error:err
        })
     })
})
routes.get('/',(req,res,next)=>{
    FitnessDetails.find()
    .then((result)=>{
        res.status(200).json({
            fitnessData:result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            error:err
        })
    })
})

routes.get('/:id',(req,res,next)=>{
    // console.log(req.params.id)
    FitnessDetails.findById(req.params.id)
    .then((result)=>{
        console.log(result)
        res.status(200).json({
            studentGetDataById:result
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

routes.delete('/:id',(req,res,next)=>{
    FitnessDetails.deleteOne({_id:req.params.id})
    // Student.deleteOne()

    .then((result)=>{
        res.status(200).json({
            fitnessData:result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            error:err
        })
    })
})

routes.put('/:id',(req,res,next)=>{
    console.log(req.params.id);
    FitnessDetails.findOneAndUpdate({_id:req.params.id},{
        
        $set:{
            workoutname:req.body.workoutname,
            workoutduration:req.body.workoutduration,
            burncalories:req.body.burncalories,
            notes:req.body.notes
        }
    })
    .then((result)=>{
        res.status(200).json({
            fitnessData:result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            error:err
        })
    }) 
})

module.exports = routes;
 
 