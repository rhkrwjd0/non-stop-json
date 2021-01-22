var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '172.30.1.36',
    post: 3306,
    user: 'root',
    password: 'Love20@!',
    database: 'Quoca',
    typeCast: function (field, next) {
        if (field.type == "VAR_STRING") {
            return field.string();
        }
        return next();
    },
});


exports.connection = connection;
