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
    let email = req.query.email;
    let payuid = req.query.payuid;
    console.log(payuid);

    res.send(JUserPayDetail.UserPayDetail[payuid]);

    
    
  //  let payUid = JUserPay['drivejoe@naver.com'][payUid];
   // console.log(payUid);
    //if(email == )
    
    //console.log(detail);
    //res.render("index",{title:'Quoca',detail:})
   // res.send(JUserPayDetail.UserPayDetail[email]);
});



router.get('/user', function (req, res, next) {
    console.log("user");
    const email = req.query.email
    if (email == 'drivejoe@naver.com') {
        res.json(JUser.User.User_01)
    } else if (email == 'stillkwak@naver.com') {
        res.json(JUser.User.User_02)
    } else if (email == 'wedding@naver.com') {
        res.json(JUser.User.User_03)
    } else if (email == 'imsorry@naver.com') {
        res.json(JUser.User.User_04)
    } else if (email == 'whatsorry@naver.com') {
        res.json(JUser.User.User_05)
    } else {
        res.json({msg: '이메일 확인!!!'})
    }
   
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