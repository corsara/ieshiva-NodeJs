const mongoose = require("mongoose");
const joi = require("joi");
const videosSchema = new mongoose.Schema({
    cat:String,
    name:String,
    image:String,
    link:String,
    time:String,
    date_time:{
        type: Date, default: Date.now
    }
})

const videosModel = mongoose.model("videos",videosSchema);

exports.videosModel = videosModel;

const validVideos = (_data)=>{
let schema = joi.object({
   _id:joi.any(),
    cat: joi.string().min(2).max(20).required(),
    name:joi.string().min(2).max(20).required(),
    image:joi.string().min(2).max(100).required(),
    link:joi.string().min(2).max(200).required(),
    time:joi.string().min(2).max(100),
})
return schema.validate(_data)
}
exports.validVideos = validVideos;