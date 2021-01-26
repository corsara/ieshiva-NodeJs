const express = require('express');
const { route } = require('.');
const {studentsModel} = require('../models/studentsModel');
const {validStudent } = require('../models/studentsModel');
const router = express.Router()


router.get('/',(req,res)=>{
    studentsModel.find({})
    .then(data=>{
        res.json(data)
    })
})


router.post('/add',(req,res)=>{
    let validData = validStudent(req.body);
    if(validData.error){
        return res.status(400).json(validData.error.details)
    }
    
    studentsModel.insertMany([req.body])
        .then(data=>{
           res.status(201).json(data[0])})
        .catch(err =>{
            res.status(400).json(err)
        })    
        
    })

    module.exports = router;
    
