const mongoose = require('mongoose')

const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    subTitle:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        maxlength:2000,   
    },
    Date:{
        type:Date,
        default:Date.now
    },
    category:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Posts',PostSchema)