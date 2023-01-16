// import mongoose module 
const mongoose = require("mongoose");
// create un shema :

const testShema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    
    
});

const test = mongoose.model("Test", testShema);
module.exports=test;