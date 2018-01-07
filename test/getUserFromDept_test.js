var expect = require('chai').expect;
var User = require('../models/User');

describe('A functionality which returns List of Users', () =>{
  it('it gives you list of users as per dept name', ()=>{
    User.getStaff('CSE',(data) =>{
        expect(data.length).to.be.above(0);
    });
  })

})
