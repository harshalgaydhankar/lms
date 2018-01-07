var expect = require('chai').expect;
var Leaves = require('../models/Leaves');

describe('A Leave Application functionality', () =>{
  it('takes leaves input and insert it in DB', ()=>{
    var leaveObj = {
      userName : 'deepalijoshi@gmail.com',
      dept : 'CSE',
      leaveType : 'SL',
      fromDate : '1/1/2018',
      toDate : '31/1/2018',
      adjustedUser : 'dinesh4students@gmail.com',
      reason : 'OOO'
    }
    Leaves.applyLeave(leaveObj,(data) =>{
        expect(data.affectedRows).to.equal(1);

    });
  })

})
