const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    name:String,
    location:String,
    likes:Number,
    description:String,
    PostImage:String,
    date:Date,
})

const DataModel = mongoose.model("posts",DataSchema);

module.exports = DataModel;