var mysql = require('mysql');

var connection = mysql.createConnection({
   host     : '127.0.0.1',
   user     : 'root',
   port : 3306,
   password : '',
   database : 'leavemanagementsystem'
 });

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
