//import Express
const express=require('express')
const mongoose = require('mongoose')
const bodyparser=require('body-parser')
require('dotenv/config')
const postsRouter=require('./routes/posts')
const cors =require('cors')


//initialize express
const app=express()


//middleware
//app.use('/allposts',()=>console.log("This is a middleware"))

app.use(bodyparser.json())


//Routes
//this is a get request route

// app.use('/',(req,res)=>{
//     res.send("Home Page")
// })

app.use('/posts',postsRouter)
app.use(cors())
app.get('/allposts',(req,res)=>{
    res.send("All posts appear here")
})

app.get('/about',(req,res)=>{
    res.send("About page")
})


mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true  },()=>{
    console.log('Connected to DB')
})

app.listen(3000)