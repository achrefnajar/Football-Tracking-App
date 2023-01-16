// import mongoose module 
const mongoose = require("mongoose");
// create un shema
const teamShema = mongoose.Schema({
    name: String,
    country: String,
    owner: String,
    stadium: String,
});

const team = mongoose.model("Team",teamShema);
module.exports=team;