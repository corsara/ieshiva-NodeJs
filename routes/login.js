const express = require('express');
const { route } = require('.');
const {loginModel} = require('../models/loginModel');
const {validLogin} = require('../models/loginModel');
const router = express.Router();
const bcrypt = require ('bcrypt');
const _ = require("lodash"); 

router.get('/',(req,res)=>{
    loginModel.find({},{pass:0})
    .then(data=>{
        res.json(data)
    })
})


router.post('/add',async(req,res)=>{
    let validData = validLogin(req.body);
    if(validData.error){
        return res.status(400).json(validData.error.details)
    }
    let salt = await bcrypt.genSalt(10);
    req.body.pass = await bcrypt.hash(req.body.pass,salt);
    try{
        let data = await loginModel.insertMany([req.body])
        return res.json(data[0])
    }
    catch(err){
        res.status(400).json({message:"este usuario ya existe"})
    }    
    
})    

    module.exports = router;
    
