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
    conn.connection.query('SELECT * FROM STORE', function (err, rows, fields) {
        first.select();
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

//스토어 insert
var sql = 'INSERT INTO STORE VALUES (?,?,?,?,?,?,?)';
//insert 값 화면으로부터 받아옴
//var params =[STOREID,AREA,ADDR,COLOR,CEO,USEYN,COLOR_CD];
var params =['GN002','창원','창원시 남악대로 314,102호','레트로','김문수','Y','04'];
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
router.get('/goods', function (req, res, next) {
    conn.connection.query('SELECT * FROM goods', function (err, rows, fields) {
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
var sql = 'INSERT INTO goods VALUES (?,?,?,?)';
var params =[6,'우유','1000','호주'];

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

