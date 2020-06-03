const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    occupation:{
        type:String
    }
})

module.exports=mongoose.model('User',UserSchema)