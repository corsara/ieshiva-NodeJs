var express = require('express');
const { route } = require('.');
const {imagesModel} = require('../models/imageModel');
const {validImage } = require('../models/imageModel');
var router = express.Router()

// router.get('/',(req, res) => {
//   res.json({message:"images"});
// });

router.get('/',(req,res)=>{
    imagesModel.find({})
    .then(data=>{
        res.json(data)
    })
})

// router.post('/add',(req,res)=>{
//     imagesModel.insertMany([{cat:"ieshiva", name:"beitMidrash", image:"https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}])
//     .then(data=>{
//        res.status(201).json(data[0])})
//     .catch(err =>{
//         res.status(400).json(err)
//     })    
    
// })

// router.post('/add',(req,res) => {
//     let validData =validImage(req.body);
//     if(validData.error){
//         return res.status(400).json(validData.error.details)
//     }

//     imagesModel.insertMany([req.body])
//     .then(data=>{
//         res.status(201).json(data[0])})
//      .catch(err =>{
//          res.status(400).json(err)
//      })    
// })


// router.put('/edit',(req,res)=>{
//     let validData =validImage(req.body);
//         if(validData.error){
//             return res.status(400).json(validData.error.details)
//         }
//     imagesModel.updateOne({_id:req.body._id},req.body)
//     .then(data=>{
//         res.status(200).json(data)})
//      .catch(err =>{
//          res.status(400).json(err)
//      })    
    
// })

router.delete('/del',(req,res)=>{
    imagesModel.deleteOne({_id:req.body._id})
    .then(data=>{
        res.json(data)
    })
})


module.exports = router;
