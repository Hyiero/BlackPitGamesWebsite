var express = require('express');
var router = express.Router();
var post = require('../models/post');

//Route middleware that will happen on every request
router.use(function(req,res,next){
    //Log each request to the console
    console.log(req.method, req.url);
    //Continue doing what we were doing and go to the route
    next();
})

router.get('/api/getPosts',function(req,res){
    res.send("I'm the home page");
})

module.exports = router;