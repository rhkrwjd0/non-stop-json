var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'logerdb.cafe24.com',
    post: 3306,
    user: 'logerdb',
    password: 'Love20@!',
    database: 'logerdb',
    typeCast: function (field, next) {
        if (field.type == "VAR_STRING") {
            return field.string();
        }
        return next();
    },
});


exports.connection = connection;
