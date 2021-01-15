var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var first = require("./function/first");



//quoka
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Quoca!' });
  });

module.exports = router;
