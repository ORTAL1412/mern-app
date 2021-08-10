const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstName:{
        type:String,
        require:true
    }
    ,
    lastName:{
        type:String,
        require:true
    }
    ,
    age:{
        type:Number,
        require:true
    }
    ,
    email:{
        type:String,
        require:true
    }
    ,
    date:{
        type:Date,
        default:Date.now
    }

});

const User =  mongoose.model("user" , userSchema)
module.exports = User;