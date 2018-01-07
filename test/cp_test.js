var expect = require('chai').expect;
var User = require('../models/User');

describe('A CP functionality', () =>{
  it('takes a new password and updates it in DB', ()=>{
    User.changePassword('jankarmd@gmail.com','zxcv',(data) =>{
        expect(data.affectedRows).to.equal(1);

    });
  })

})
