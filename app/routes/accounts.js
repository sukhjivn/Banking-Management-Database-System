// app/routes/index.js
//
var express = require('express');
var path    = require('path');
var router  = express.Router();



router.get('/',function(req,res){
  res.sendFile('views/index.html',{root:path.join(__dirname,'../public')});
});

router.get('/accounts',function(req,res,next){


module.exports = router;


