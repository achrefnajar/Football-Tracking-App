// import mongoose module 
const mongoose = require("mongoose");
// create un shema :
const playerShema = mongoose.Schema({
    name:String,
    number:Number,
    position:String,
    team:String,
    age:Number,
});
const player = mongoose.model("Player",playerShema);
module.exports=player;