const mongoose = require("mongoose");
const joi = require("joi");

const loginSchema = new mongoose.Schema({
    
    email:String,
    pass: String,
    date_time:{
        type: Date, default: Date.now
    }
})

const loginModel = mongoose.model("login",loginSchema);

exports.loginModel = loginModel;

const validLogin = (_data)=>{
let schema = joi.object({
   _id:joi.any(),
    email:joi.string().min(2).max(100).required(),
    pass:joi.string().min(4).max(10).required()
})
return schema.validate(_data)
}
exports.validLogin = validLogin;