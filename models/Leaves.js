var mysql = require('mysql');
var  connection = require('./db');


class Leaves {

  static applyLeave(leaveObj,cb){
    var query = "insert into leaves (userName,dept,leaveType,fromDate,toDate,adjustedUser,isUserApproved,isHODApproved,isAdminApproved,reason) values('"+
    leaveObj.userName+"','"+leaveObj.dept+"','"+leaveObj.leaveType+"','"+
    leaveObj.fromDate+"','"+leaveObj.toDate+"','"+leaveObj.adjustedUser+"',"+
    0+","+0+","+0+",'"+leaveObj.reason+"')";
    connection.query(query, function(err, rows, fields) {
       console.log(rows);
       cb(rows)
    });
  }

  static getLeavesStatus(userName,cb){
    connection.query("SELECT * from leaves where userName ='"+userName+"'", function(err, rows, fields) {
       if (!err){
         console.log(rows);
         cb(rows);
       }
       else
         console.log('Error while performing Query.');
     });
  }

}

module.exports = Leaves;
