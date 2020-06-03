//import Express
const express=require('express')
const mongoose = require('mongoose')
const bodyparser=require('body-parser')
require('dotenv/config')
const postsRouter=require('./routes/posts')
const cors =require('cors')


const app=express()
app.use(bodyparser.json())
app.use(cors())

app.use('/posts',postsRouter)



mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true  },()=>{
    console.log('Connected to DB')
})

app.listen(3000)