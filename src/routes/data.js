const router = require("express").Router();
const DataModel = require("../model/data");
const cloudinary = require("cloudinary").v2;




router.get("/",async(req,res)=>{
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
  
router.post("/", async (req, res) => {
  try {
    const fileurl = await cloudinary.uploader.upload(req.files.image.path,{folder:"Asset for instaClone"});
    // console.log(fileurl.url);
    let date = new Date();
    const data = {
      name: req.fields.author,
      location: req.fields.location,
      likes: 0,
      description: req.fields.description,
      PostImage: fileurl.url,
      date: `${date.getFullYear()} / ${date.getMonth()} / ${date.getDate()}`,
    };
    console.log(data);
    const insert = await DataModel.create(data);

    res.status(201).json({
      status: "success",
      result: insert,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = router;