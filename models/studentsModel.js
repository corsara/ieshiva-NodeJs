const mongoose = require("mongoose");
const joi = require("joi");

const studentSchema = new mongoose.Schema({
    //cat:String,
    fname:String,
    lname:String,
    email:String,
    tel: String,
    role:{
        type:String , default: "regular"
    },
    date_time:{
        type: Date, default: Date.now
    }
})

const studentsModel = mongoose.model("student",studentSchema);

exports.studentsModel = studentsModel;

const validStudent = (_data)=>{
let schema = joi.object({
   _id:joi.any(),
    fname: joi.string().min(2).max(20).required(),
    lname:joi.string().min(2).max(20).required(),
    email:joi.string().min(2).max(100).required(),
    tel:joi.string().min(2).max(20).required(),
    role:joi.string().min(2).max(100),
})
return schema.validate(_data)
}
exports.validStudent = validStudent;