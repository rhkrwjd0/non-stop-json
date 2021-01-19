var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = require('../../app');
var conn = require('../components/db');
var first = require("../function/first");


//quoka
router.get('/', function (req, res, next) {
    console.log('########################################');
    res.render('index', { title: 'Quoca!' });
  });



  //사용자목록
  router.get('/users', function (req, res, next) {
    conn.connection.query('SELECT * FROM QUser', function (err, rows, fields) {
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
    // res.json({ title: 'Quoca!' });
});


//insert 쿼리
var sql = 'INSERT INTO QUser VALUES (?,?,?,?,?,?,?,?,?,?)';
//insert 값 화면으로부터 받아옴
//var params =[id,image,this.name,birthday,gender,job];
var params =['dhfl8733','1234','임정민','전남 나주 혁신로 34,201호','010-3456-2345','dhfl8733@Naver.com','M','C','Y','2021-01-19 10:05:30'];

router.get('/signup', function (req, res, next) {
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

module.exports = router;