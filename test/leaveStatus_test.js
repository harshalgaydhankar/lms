var expect = require('chai').expect;
var Leaves = require('../models/Leaves');

describe('A Leave Application Status functionality', () =>{
  it('gives list of leaves which are pending', ()=>{

    Leaves.getLeavesStatus("deepalijoshi@gmail.com",(data) =>{
        expect(data.length).to.be.above(0);

    });
  })

})
