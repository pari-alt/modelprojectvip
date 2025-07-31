const mongoose= require('mongoose');
const {type}= require('os');


const datatype= mongoose.Schema({
    fullname :{
        type: String
    },
    email: {
        type: String
    },
    phone:{
        type:String
    },
    dob:{
        type:String
    },
    pass:{
        type:String
    },
    gender:{
        type:String
    }

});
const mydatamodel= mongoose.model("vipsweb", datatype);
module.exports= mydatamodel;