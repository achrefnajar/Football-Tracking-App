// import mongoose module 
const mongoose = require("mongoose");
// create un shema
const matchShema = mongoose.Schema({
    scoreone: Number,
    scoretwo: Number,
    teamone: String,
    teamtwo: String,
});

const match = mongoose.model("Match",matchShema);
module.exports=match;