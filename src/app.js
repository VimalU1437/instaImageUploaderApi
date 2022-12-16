const express = require("express");
const app  = express();

const cors = require("cors")
const formidable = require("express-formidable");

require("dotenv").config();
const cloudinary = require("cloudinary").v2;

if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
    console.warn('!! cloudinary config is undefined !!');
    console.warn('export CLOUDINARY_URL or set dotenv file');
  } else {
    console.log('cloudinary config:');
    console.log(cloudinary.config());
  }
  console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --');

//middle 
app.use(cors({
    origin:"*"
}))

app.use(formidable());
// app.use(express.json());

// app.use(express.urlencoded({extended:false}));

const datarouter = require("./routes/data");

app.use("/posts",datarouter);

app.use((req,res,next)=>{
  res.sendStatus(404);
})








module.exports = app;