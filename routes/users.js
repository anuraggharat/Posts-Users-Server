const express=require('express')
const router = express.router
const User=require('../models/usersModel')

router.get('/',async(req,res)=>{
    const users=await User.find()
    res.json(users)
})


router.get*'/:userId',async(req,res)=>{
    try{
        const user=await User.findById(req.params.userId)
        res.json(user)
    }
    catch(error){
        res.json({message:error})
    }    
}

router.post('/newUser',async(req,res)=>{
    try{
        const newUser=new User({
            name:req.body.name,
            dob:req.body.dob,
            city:req.body.city,
            occupation:req.body.occupation
        })
        newUser.save()
        .then(data=>{
            res.json(data)
        })
        .catch(error=>console.log(error))
    }
    catch(error){
        res.json({message:error})
    }
})
