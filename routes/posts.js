const express=require('express')
const Post = require('../models/postsModel')
const router=express.Router()

router.get('/',async(req,res)=>{
    const data=await Post.find()
    res.json(data)
})


router.get('/:postId',async(req,res)=>{
    try{
        const post =await Post.findById(req.params.postId)
        res.json(post)
    }
    catch(error){
        res.json({message:error})
    }
   
})



router.post('/newPost',(req,res)=>{
    const post = new Post({
        title:req.body.title,
        subTitle:req.body.subTitle,
        description:req.body.description,
        category:req.body.category
    })
    post.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>console.log(error))

})


module.exports=router