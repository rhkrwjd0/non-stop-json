var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var first = require("./function/first");


<<<<<<< HEAD
//quoka
=======


>>>>>>> 2bd7e04 ([QUAC-31] API 목록 리스트업된 JSON으로 가짜API 서버배포)
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Quoca!' });
  });

  
module.exports = router;
