var mysql = require('mysql');
var  connection = require('./db');
class User {
  static authenticate(userName,password,cb){

    connection.query("SELECT * from users where userName ='"+userName+"' and password ='"+password+"'", function(err, rows, fields) {
       if (!err){
         var valid = false;
         rows.length == 0 ? valid = false : valid = true;
         cb(rows);
       }
       else
         console.log('Error while performing Query.');
     });
    //connection.end();
  }

  static changePassword(userName,password,cb){
    connection.query("update users SET password='"+password+"' where userName = '"+userName+"'", function(err, rows, fields) {
       console.log(rows);
     });
  }


  static getStaff(deptName,cb){
    connection.query("select staffName, userName from users where dept = '"+deptName+"'", function(err, rows, fields) {
       console.log(rows);
       cb(rows);
     });
  }

}
//
//
// User.authenticate('deepalijoshi@gmail.com','om@123',(data) =>{
//         console.log(data);
// });
module.exports = User;
