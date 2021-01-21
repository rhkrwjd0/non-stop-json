var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    post: 3306,
    user: 'ekwqnqbogpjzx6tm',
    password: 'vvkpxgqn64rfwsgy',
    database: 'i08ik507tp6zc9lp',
    typeCast: function (field, next) {
        if (field.type == "VAR_STRING") {
            return field.string();
        }
        return next();
    },
});


exports.connection = connection;
