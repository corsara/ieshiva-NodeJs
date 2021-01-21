const mongoose = require("mongoose");
const joi = require("joi");
const imagesSchema = new mongoose.Schema({
    cat:String,
    name:String,
    image:String,
    date_time:{
        type: Date, default: Date.now
    }
})

const imagesModel = mongoose.model("images",imagesSchema);

exports.imagesModel = imagesModel;

const validImage = (_data)=>{
let schema = joi.object({
   _id:joi.any(),
    cat: joi.string().min(2).max(20).required(),
    name:joi.string().min(2).max(20).required(),
    image:joi.string().min(2).max(100).required(),
})
return schema.validate(_data)
}
exports.validImage = validImage;