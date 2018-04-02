var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: false }));
/* GET users listing. */
router.get('/User/login', function(req, res, next) {
  var user_name=req.query.username;  
  var password=req.query.password; 
  console.log("User name = "+user_name+", password is "+password);  
  res.end("yes");
});

router.post('/User/login', function(req, res,next) {
  var user_name=req.body.username;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  console.log(JSON.string(req.body));
  res.end("yes");
});
module.exports = router;
