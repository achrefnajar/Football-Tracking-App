const mongoose = require("mongoose");

const stadiumShema = mongoose.Schema({
    name:String,
    country:String,
    capacity:String,
})

const stadium = mongoose.model("Stadium",stadiumShema);
module.exports=stadium;