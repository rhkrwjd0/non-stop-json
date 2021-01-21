const { name } = require('ejs');
var express = require('express');
var router = express.Router();
const app = express();
var conn = require('../components/db');

//입력받은 커피 id 값
let a = '2'; 
//입력받은 커피 수량
let b = '5';
// for(var i=0; i<rows.length; i++){
//   console.log(rows[i].name);
// }
router.get('/', function (req, res, next) {
  conn.connection.query('SELECT * FROM goods where goodsNo <=' +a, function (err, rows, fields) {
    if (!err) {
        console.log(rows);
        console.log(fields);
        var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
            'fields : ' + JSON.stringify(fields);
        console.log(rows.length);
        for(var i=0; i<rows.length; i++){
         const iname = []
         iname.push(rows[i].name);
         const icost =[]
        icost.push(rows[i].cost);
         console.log(iname);
         console.log(icost);
        }
  
        //res.render('orders',{ title: '주문목록', menu: iname,cost:icost, number: b,total:(icost)*(b) });
        res.render('orders',{ title: '주문목록', menu: rows[0].name,cost:rows[0].cost, number: b,total:(rows[0].cost)*(b) });
        
    } else {
        console.log('query error : ' + err);
    }
  }); 
  });


module.exports = router;