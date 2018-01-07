var expect = require('chai').expect;
var User = require('../models/User');

describe('A Login functionality', () =>{
  it('takes a invalid username,password and returns false', ()=>{
    User.authenticate('deepalijoshi@gmail.com','om@1234',(data) =>{
        expect(data.length).to.equal(0);
    });
  })
  it('takes a valid username,password and returns true', ()=>{
    User.authenticate('deepalijoshi@gmail.com','om@123',(data) =>{
        expect(data.length).to.equal(1);
    });
  })
})
