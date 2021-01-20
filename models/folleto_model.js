const { Mongoose } = require("mongoose")

const mongoose = require("mongoose");
const { model } = require("../db/mongodb-conect");

const folletosSchema = new mongoose.Schema({
    name:String,
    image:String,
    autor:String,

})
const folletosModel = mongoose.model("folletos",folletosSchema);
exports.folletosModel = folletosModel;