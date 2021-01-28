const express = require('express');
const { route } = require('.');
const {videosModel} = require('../models/videosModel');
const {validVideos } = require('../models/videosModel');
const router = express.Router()

// router.get('/',(req, res) => {
//   res.json({message:"images"});
// });

router.get('/',(req,res)=>{
    videosModel.find({})
    .then(data=>{
        res.json(data)
    })
})

router.post('/add',(req,res)=>{

    let validData =validVideos(req.body);
    if(validVideos.error){
        return res.status(400).json(validData.error.details)
    }
        videosModel.insertMany([req.body])
        .then(data=>{
           res.status(201).json(data[0])})
        .catch(err =>{
            res.status(400).json(err)
        })    
        
    })
    
    module.exports = router;