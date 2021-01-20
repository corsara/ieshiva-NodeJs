const express = require('express');
const router = express.Router();
const { folletosModel} = require('../models/folleto_model');

folletosModel.find({},(err,data)=>{
    if(err){return console.log(err)}
    console.log(data);
})
/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
