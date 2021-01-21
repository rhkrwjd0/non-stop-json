var express = require('express');
var router = express.Router();
var moment = require('moment');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var mongoose = require('mongoose');
//var date = moment().format('YYYY-MM-DD HH:mm:ss');

// Connection URL
var url = 'mongodb://localhost:27017/test';

router.get('/', function (req, res, next) {
    res.render('mongo',{UserName:' ',MenuName:' ' ,Count:' ', Price:' ', date: ' ', UserId:' '});
});

router.get('/order', function (req, res) {
    let UserName = req.query.UserName;
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        //assert.equal(null, err);
        console.log("Connected successfully to server");
        db = client.db('notice');
        
        db.collection('notice').findOne({UserName: UserName},function(err,doc){
            if(err) return res.status(500).json({error: err});
            if(!doc) return res.status(404).json({error: 'UserName not found'});
            res.json(doc); 
            console.log("데이터 조회 !");
            client.close();
            });
        // dba.find({UserName: UserName},function(err,doc){
        //     if(err) return res.status(500).json({error: err});
        //     if(!doc) return res.status(404).json({error: 'UserName not found'});
        //     res.json(doc); 
        //     console.log("데이터 조회 !");
        //     });
    });
});


router.get('/search', function (req, res) {
    console.log('~~~~~~~~~~~~~~~~~~~');
    let UserName = req.query.UserName;
    console.log(UserName);
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        console.log("Connected successfully to server");   
        var db = client.db('notice');
        db.collection('notice').findOne({UserName: UserName},function(err,doc){

        if(err) return res.status(500).json({error: err});
        if(!doc) return res.status(404).json({error: 'UserName not found'});
        res.render('mongo',{UserName:doc.UserName, MenuName:doc.MenuName, Count:doc.count, Price:doc.Price, date:doc.date, UserId:doc._id });
        console.log("데이터 조회 !");
    });
});
});
// if(err) throw err;
// res.render('mongo',{UserName:doc.UserName, MenuName:doc.MenuName, Count:doc.count, Price:doc.Price, date:doc.date, UserId:doc._id });
// console.log("데이터 조회 !");
router.get('/insert', function (req, res) {
    let UserName = req.query.UserName;
    let MenuName = req.query.MenuName;
    let Count = req.query.Count;
    let Price = req.query.Price;
    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(UserName,MenuName,Count, Price,date );
    
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        console.log("Connected successfully to server");
        var db = client.db('notice');
        db.collection('notice')
        .insertOne({
            "UserName" : UserName,
            "MenuName" : MenuName,
            "count" : Count,
            "Price" : Price,
            "date" : date
        });
        console.log("데이터 추가 !");
    });
});

router.get('/update', function (req, res) {
    var UserId = req.query.UserId;
    let UserName = req.query.UserName;
    let MenuName = req.query.MenuName;
    let Count = req.query.Count;
    let Price = req.query.Price;
    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(UserId,UserName,MenuName,Count, Price,date );
    
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        console.log("Connected successfully to server");
        if (err) throw err;
        var db = client.db('notice');
        var id = mongoose.Types.ObjectId(UserId);
        var myquery = {_id : id};
        var newvalues = { $set: {UserId:UserId, MenuName:MenuName, count:Count, Price:Price, date:date} };
        db.collection('notice').updateOne(myquery, newvalues, function(err,res){
            if (err) throw err;
            console.log("1 document updated");
            client.close();
        });
    }); 
});

router.get('/delete', function (req, res) {
    var UserId = req.query.UserId;

    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        console.log("Connected successfully to server");
        if (err) throw err;
        var db = client.db('notice');
        var id = mongoose.Types.ObjectId(UserId);
        var myquery = {_id : id};
        db.collection('notice').deleteOne(myquery, function(err,res){
            if (err) throw err;
            console.log("1 document delete");
            client.close();
        });
    }); 
});
router.get('/home', function (req, res) {
    res.render('index',{title:"User"});
});
module.exports = router;
