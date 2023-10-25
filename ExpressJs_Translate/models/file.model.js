const mongoose = require('mongoose')

const file = new mongoose.Schema({
    file:{
        type: Buffer,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('file', file)