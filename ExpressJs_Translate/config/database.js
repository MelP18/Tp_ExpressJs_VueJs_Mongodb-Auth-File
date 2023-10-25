const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/translateDB',{}).then(()=>{
    console.log('Connection Succesfully ...');
}).catch((e)=>{
    console.log('Connection Failed ...');
})

