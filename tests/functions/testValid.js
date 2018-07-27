const chai = require('chai')
const {assert} = chai
const valid = require('../../source/exports/valid')


function testValid(expectations) {
  expectations.forEach(([input, format, expectedResult, description, options={}])=>{
    const {spreadArray=true} = options
    it(description, ()=> {
      if (spreadArray === true && Array.isArray(input) && input.length > 0) {
        input.forEach(testInput => {
          assert.equal(valid(testInput, format), expectedResult)
        })
      } else {
        assert.equal(valid(input, format), expectedResult)
      }
    })
  })
}

module.exports = testValid
