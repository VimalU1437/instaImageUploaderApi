const express = require("express");
const app  = express();
const DataModel = require("./model/data");
const cors = require("cors")

app.use(cors({
    origin:"*"
}))
app.use(express.json());


app.get("/posts",async(req,res)=>{
  try{
    const posts = await DataModel.find().sort({_id: -1});
    res.json(posts);
  } 
  catch(e){
    res.status(500).json({
        status: "error",
        message: e.message
    });
  } 
})

app.post("/posts",async(req,res)=>{
 try{
    let date = new Date();
    const data = {
        name:req.body.name, 
        location:req.body.location,
        likes:req.body.likes,
        description:req.body.description,
        PostImage:req.body.PostImage,
        date:`${date.getFullYear()} : ${date.getMonth()} : ${date.getDate()}`,
        
    }
    const insert = await DataModel.create(data);

    res.status(201).json({
        status : "success",
        result:insert,
    })

 }
 catch(e){
    res.status(500).json({
        status:"failed",
        message:e.message
    })
 }
})








module.exports = app;