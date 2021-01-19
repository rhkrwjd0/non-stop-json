var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the server
router.get('/', function (req, res) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        //assert.equal(null, err);
        console.log("Connected successfully to server");
        var db = client.db('test');

        db.collection('test').findOne({name: "happyduck"},function(err,doc){
            if(err) throw err;
                res.send(doc); 
            });
    });
});

module.exports = router;
