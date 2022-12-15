const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
mongoose.set("strictQuery",true);
mongoose.connect(process.env.DATABASE_URL,(err)=>{
    console.log("connected to db");
    if(err){
        console.log(err);
    }
})

app.listen(process.env.PORT || 3000,()=>console.log("connected to server..."));