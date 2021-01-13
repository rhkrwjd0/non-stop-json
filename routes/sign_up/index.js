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
    conn.connection.query('SELECT * FROM CUSTOMER', function (err, rows, fields) {
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
var sql = 'INSERT INTO CUSTOMER VALUES (?,?,?,?,?,?)';
//insert 값 화면으로부터 받아옴
//var params =[id,image,this.name,birthday,gender,job];
var params =[12,null,'장도연','871205','야자','바리스타'];

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