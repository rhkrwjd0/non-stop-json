var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var first = require("./function/first");
var JUserPay = require("../json/UserPay.json");
var JUserPayDetail = require("../json//UserPayDetail.json");
//quoka


router.get('/', function (req, res, next) {
 // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  var Url = req.protocol + '://' + req.get('host');
  res.render('index', { title: 'Quaca!!!', Url: Url});
  });

  
module.exports = router;


