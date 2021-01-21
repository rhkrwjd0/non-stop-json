var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var first = require("./function/first");
var menu = require("../Quaca_MenuData.json");
const { json } = require('express');

//quoka
router.get('/', function (req, res, next) {

    const store = req.query.store;
    console.log(store);
    var a = {menu}.menu.Menu;
   if(store == 1){
        aa = a.Store_10;
   } 
    res.json(aa);

});

module.exports = router;
