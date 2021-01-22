var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = require('../../app');
var conn = require('../components/mariaDB');
var first = require("../function/first");

var moment = require('moment');

//quoka
router.get('/', function (req, res, next) {
    res.render('sign_up',{ title :"회원가입",  overLap: ' ', UID:' '});
  });



  //사용자목록
  router.get('/users', function (req, res) {
    let UserName = req.query.UserName;
    conn.connection.query('SELECT * FROM QUser where UserName like' +'"'+UserName + '"' , function (err, rows, fields) {
        console.log(rows.length);
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
router.get('/idcheck', function (req, res) {
    let UID = req.query.UID;
    console.log(UID);
    if(UID != ' ' || null ){
        conn.connection.query('SELECT * FROM QUser where UID = '+ '"'+UID+'"', function (err, rows, fields) {
            console.log(rows.length);
            if (rows.length == 0) { 
                res.render('sign_up', { title :"회원가입",  overLap: 'ID 사용가능', UID: UID });
            } else {
                console.log('중복id발견');
                res.render('sign_up', { title :"회원가입",  overLap: 'ID 중복', UID:' ' });
              }
        });
    }else{
        console.log('null값 입력');
        res.render('sign_up', { title :"회원가입",  overLap: ' ', UID:'ID를 입력하십시오.' });
    }

});
//회원가입 insert 쿼리
router.get('/signup', function (req, res) {
    let UID = req.query.UID;
    let PassWord = req.query.PassWord;
    let UserName = req.query.UserName;
    let Address = req.query.Address;
    let TelNo = req.query.TelNo;
    let Email = req.query.Email;
    let Gender = req.query.Gender;
    let CmCode = req.query.CmCode;
    let UseYn = 'Y';
    var date = moment().format('YYYY-MM-DD HH:mm:ss');

    if((UID != ' ' || null) || (PassWord != '' || null) ){
    conn.connection.query('SELECT * FROM QUser where UID = ' + '"' + UID + '"', function (err, rows, fields) {
        console.log(rows.length);
        if (rows.length == 0) { 
            var sql = 'INSERT INTO QUser VALUES (?,?,?,?,?,?,?,?,?,?)';
            var params =[UID,PassWord,UserName,Address,TelNo,Email, Gender, CmCode, UseYn ,date];
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
          } else {
            console.log('중복id발견');
            res.render('sign_up', { title :"회원가입",  overLap: 'ID 중복', UID:' ' });
          }
      });
    }else{
        console.log('null값 입력');
        res.render('sign_up', { title :"회원가입",  overLap: ' ', UID:'ID 및 PW를 입력하십시오.' });
    }
  });

  router.get('/home', function (req, res) {
    res.render('index',{title:"User"});
});
module.exports = router;