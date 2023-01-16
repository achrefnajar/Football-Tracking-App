// import mongoose module 
const mongoose = require("mongoose");
// create un shema :
const uniqueValidator = require('mongoose-unique-validator');
const userShema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{ type:String, unique: true},
    pwd:String,
    role:String,
    avatar:String,
    
});
userShema.plugin(uniqueValidator);
const user = mongoose.model("User",userShema);
module.exports=user;