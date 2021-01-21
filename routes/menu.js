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
    var amenu = req.query.menu;
    var store = req.query.store;
    console.log(amenu ,store);
    if(amenu == "D"){
        if(store == "1"){
            res.send(menu.Menu.Store_1.Drink)
        }else if(store =="2"){
            res.send(menu.Menu.Store_2.Drink)
        }else if(store =="3"){
            res.send(menu.Menu.Store_3.Drink)
        }
    }else if(amenu == "B"){
        if(store == "1"){
            res.send(menu.Menu.Store_1.Bakery)
        }else if(store =="2"){
            res.send(menu.Menu.Store_2.Bakery)
        }else if(store =="3"){
            res.send(menu.Menu.Store_3.Bakery)
        }
    }else if(amenu == "G"){
        if(store == "1"){
            res.send(menu.Menu.Store_1.Goods)
        }else if(store =="2"){
            res.send(menu.Menu.Store_2.Goods)
        }else if(store =="3"){
            res.send(menu.Menu.Store_3.Goods)
        }
    }
});

module.exports = router;
