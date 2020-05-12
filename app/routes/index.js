// app/routes/index.js
//
var express = require('express');
var path    = require('path');
var router  = express.Router();


var Account = require('../models/account.js');

router.get('/api/account',function(req,res,next){
  
  // use mongoose to get all accounts in the database
  Account.find(function(err,products){
    if(err)
      return next(err);
    
    res.json(products);   // return all accounts in json format
  });
});


router.post('/api/account',function(req,res,next){
  
  // create an account, information comes from AJAX request from Angular
  Account.create({
    holder: req.body.holder,
    type  : req.body.type
  },function(err, account){
    if(err) 
      return next(err);
    
    // now return all accounts after you have added a new one in json format
    Account.find(function(err,account){
      if(err)
        return next(err);
      
      res.json(account);
    });
  });
});

router.delete('/api/account/:account_id',function(req,res,next){
  Account.remove({
    _id:  req.params.account_id
  },function(err, account){
    if(err)
      return next(err);

    // get and return all accounts after you have delete one
    Account.find(function(err, account){
      if(err)
        return next(err);

      res.json(account);
    });
  });
});

router.get('*',function(req,res){
  res.sendFile('index.html',{root:path.join(__dirname,'../../public')});
});


module.exports = router;



