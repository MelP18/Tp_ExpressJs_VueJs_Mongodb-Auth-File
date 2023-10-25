const mongoose = require('mongoose')

const userData = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique: true
    },
    surname:{
        type: String,
        require:true
    },
    firstname:{
        type: String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require: true
    },
    password:{
        type:String,
        unique:true,
        require:true
    }
})

module.exports = mongoose.model('user', userData)