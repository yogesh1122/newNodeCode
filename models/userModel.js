const mongoose = require('mongoose');

const userModel = mongoose.model('userData', new mongoose.Schema(
    {
    
        firstnam:{ type:String },
        lastname:{ type:String },
        email:{ type:String },
        password:{ type:String },
        phone: { type:String },
        gender:{ type:String },
        city:{ type:String },
        country:{ type:String }
    }
))

module.exports ={userModel}