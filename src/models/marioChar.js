const mongoose = require('mongoose');

//  Your code goes here
const marioSchema=new mongoose.Schema({
    name:"String",
    age:Number
})

const marioModel=mongoose.model("mariochar",marioSchema)

module.exports = marioModel;