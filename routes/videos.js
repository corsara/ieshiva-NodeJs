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

router.get("/:catName", (req,res)=>{
    let catName = req.params.catName;
    videosModel.find({$or:[{name:catName},{cat:catName}]})
    .then(data=>{
        res.json(data)
    })
})

// router.get("/search", (req,res)=>{
//     let queryS = new RegExp(req.query.q);
//     videosModel.find({$or:[{name:queryS},{cat:queryS}]}) 
//     .then(data=>{
//         res.json(data)
//     })
// })
// router.get('/search', (req, res) => {
//     //req.params, req.query , req.body
//     let searchQ =  new RegExp(req.query.q);
//     videosModel.find({cat:searchQ})
//     .then(data => {
//       res.json(data);
  
//     })
//   });
  
    
    module.exports = router;