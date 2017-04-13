const should = require('chai').should()
const fizzBuzzer = require('../fizzBuzzer')

describe('fizzBuzzer', function(){
  it('Should print numbers except for any number devided by 3 should print fizz, by 5 buzz, by 15 fizz-buzz', function(){
    const normalCase = [
      {a:1, expected:1},
      {a:3, expected:'fizz'},
      {a:5, expected:'buzz'},
      {a:15, expected:'fizz-buzz'}
    ]
    normalCase.forEach(function(num){
      const answer = fizzBuzzer(num.a)
      answer.should.equal(num.expected)
    })
  })
  it('it should throw an error if the argument is not a number', function(){
    const errors=[
      {a:'foo', expected: 'fizz'},
      {a:true, expected: false}
    ]
    errors.forEach(function(num){
      (function(){
        fizzBuzzer(num.a)
      }).should.throw(Error)
    })
  })
})
