const express = require("express");
const router = express.Router();
const path = require("path");
const userdata = require("../Data/userdata");
const feeddata = require("../Data/feeddata");

router.post("/validate", (req, res) => {
    console.log(userdata);
    for(var i=0;i<userdata.length;i++)
    {
      
      if((userdata[i].username==req.body.username)&&(userdata[i].password==req.body.password))
      {
        res.sendFile(path.resolve("./public/Gym.html"));
       
      }
      else
      res.sendFile(path.resolve("./public/login.html"));
    }
  });

  router.post("/add",(req,res) =>{

    const udata={
      username:req.body.username,
      password:req.body.password,
    };
   userdata.push(udata);
    res.sendFile(path.resolve("./public/login.html"));
  });

  router.post("/cont",(req,res) =>{

    const fdata={
      id: feeddata.length + 1,
      name:req.body.name,
      email:req.body.email,
      message:req.body.message,
    };
    feeddata.push(fdata);
    console.log(feeddata);
    res.sendFile(path.resolve("./public/contact-us.html"));
  });

  router.get("/feeddata", (req, res) => {
    res.render("feedbacks", {
      feeddata1: feeddata,
    });
  });

  router.get("/logout",(req,res) =>{
    res.sendFile(path.resolve("./public/login.html"));
});

router.get("/pakages",(req,res) =>{
  res.sendFile(path.resolve("./public//pakages.html"));
});

router.get("/home",(req,res) =>{
  res.sendFile(path.resolve("./public/Gym.html"));
});

router.get("/Exercise",(req,res) =>{
  res.sendFile(path.resolve("./public/exersize.html"));
});

router.get("/About",(req,res) =>{
  res.sendFile(path.resolve("./public/about.html"));
});

router.get("/Contact",(req,res) =>{
  res.sendFile(path.resolve("./public/contact-us.html"));
});

//sub pages routes

router.get("/chest-page",(req,res) =>{
  res.sendFile(path.resolve("./public/info-pages/chest-page.html"));
});
router.get("/Back-page",(req,res) =>{
  res.sendFile(path.resolve("./public/info-pages/Back-page.html"));
});
router.get("/Shoulder-page",(req,res) =>{
  res.sendFile(path.resolve("./public/info-pages/Shoulder-page.html"));
});
router.get("/Biceps",(req,res) =>{
  res.sendFile(path.resolve("./public/info-pages/Biceps.html"));
});
router.get("/Tricep",(req,res) =>{
  res.sendFile(path.resolve("./public/info-pages/Tricep.html"));
});
router.get("/legs-page",(req,res) =>{
  res.sendFile(path.resolve("./public/info-pages/legs-page.html"));
});
  module.exports = router;