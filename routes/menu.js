var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var first = require("./function/first");
var Jmenu = require("../json/Menu.json");
var JStoreInfo = require("../json/StoreInfo.json");
var JUser = require("../json/User.json");
var JUserPay = require("../json/UserPay.json");
var JUserPayDetail = require("../json//UserPayDetail.json");
const { json } = require('express');

//quoka
router.get('/', function (req, res, next) {
    console.log("history");
     let email = req.query.email;
     //let semail = email.split('@');
     console.log(email);
     res.send(JUserPay[email]);
});
router.get('/detail', function (req, res, next) {
    console.log("detail");
    let payuid = req.query.payuid;
    console.log(payuid);
    res.send(JUserPayDetail.UserPayDetail[payuid]);
});



router.get('/user', function (req, res, next) {
    const email = req.query.email
    res.json(JUser.User[email]);
});

router.get('/AllMenu', function (req, res, next) {
    console.log("AllMenu");
    res.send(Jmenu);
});
router.get('/StoreInfo', function (req, res, next) {
    console.log("StoreInfo");
    res.send(JStoreInfo);
});


module.exports = router;

















// if(amenu == "D"){
//     if(store == "1"){
//         res.send(menu.Menu.Store_1.Drink)
//     }else if(store =="2"){
//         res.send(menu.Menu.Store_2.Drink)
//     }else if(store =="3"){
//         res.send(menu.Menu.Store_3.Drink)
//     }
// }else if(amenu == "B"){
//     if(store == "1"){
//         res.send(menu.Menu.Store_1.Bakery)
//     }else if(store =="2"){
//         res.send(menu.Menu.Store_2.Bakery)
//     }else if(store =="3"){
//         res.send(menu.Menu.Store_3.Bakery)
//     }
// }else if(amenu == "G"){
//     if(store == "1"){
//         res.send(menu.Menu.Store_1.Goods)
//     }else if(store =="2"){
//         res.send(menu.Menu.Store_2.Goods)
//     }else if(store =="3"){
//         res.send(menu.Menu.Store_3.Goods)
//     }
// }