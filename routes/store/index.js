var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = require('../../app');
var conn = require('../components/db');
var first = require("../function/first");


/* GET home page. */
router.get('/', function (req, res, next) {
    //스토어 통합 기능
    res.render('store', { title: 'store!!' });
});

//스토어 select
router.get('/store_all', function (req, res, next) {
    conn.connection.query('SELECT * FROM QSTORE', function (err, rows, fields) {
        first.select();
        if (!err) {
            console.log("--------------------------------");
            console.log(rows);

            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);       
            res.send(rows);
        } else {
            console.log("---------------------------ww-----");
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

//스토어 insert
var sql = 'INSERT INTO QSTORE VALUES (?,?,?,?,?,?,?,?,?,?)';
//insert 값 화면으로부터 받아옴
//var params =[STOREID,AREA,ADDR,COLOR,CEO,USEYN,COLOR_CD];
var params =['8905434567811','창원시 남악대로 314,102호','카페 느림','053-175-3456','89054','3456781','35.1468191001','126.85464790001','Y','2021-01-19 09:27:23'];
router.get('/addst', function (req, res, next) {
    conn.connection.query(sql,params, function (err, rows, fields) {
        if (!err) {
            console.log("success !!");
            console.log(rows);
            res.send(rows);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });  
  });

//상품 select
router.get('/Menu', function (req, res, next) {
    conn.connection.query('SELECT * FROM QMenu', function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);
            res.send(rows);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        } 
    }); 
  });
//상품 insert
var sql = 'INSERT INTO QMenu VALUES (?,?,?,?,?,?,?,?)';
var params =['D0006','카페라떼','D', null,'4000',null, 'Y','2021-01-19 13:19:30' ];

router.get('/addpdc', function (req, res, next) {
    conn.connection.query(sql,params, function (err, rows, fields) {
        if (!err) {
            console.log("success !!");
            console.log(rows);
            res.send(rows);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }     
    });    
  });

    // 디비실행함수
    // 디비연결해서 해야할일
    // 디비 가져와서 할읽
    // 리턴
 
module.exports = router;

