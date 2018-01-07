var express = require('express');
var router = express.Router();

var User = require('../models/User');
var Leaves = require('../models/Leaves');
/* GET users listing. */



router.get('/auth', function(req, res, next) {
  // console.log(req.query);
  User.authenticate(req.query.userName,req.query.password,(data) =>{

          res.json({'output':data});
  })
});

router.get('/cp', function(req, res, next) {
  // console.log(req.query);
  User.changePassword(req.query.userName,req.query.password,(data) =>{
          res.json({'output':data});
  })
});

router.get('/getStaff', function(req, res, next) {
  // console.log(req.query);
  User.getStaff(req.query.deptName,(data) =>{
          res.json({'output':data});
  })
});

router.get('/applyLeave', function(req, res, next) {
  // console.log(req.query);
  var jsonObj = JSON.parse(req.query.leaveObj);
  Leaves.applyLeave(jsonObj,(data) =>{
      res.json({'output':data});

  });
});

module.exports = router;
