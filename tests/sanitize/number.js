const valid = require('../../source/exports/valid')
const chai = require('chai')
const {assert} = chai

const expectedMatches = [
  [0, Number, true, 'matches 0 as a number'],
  [1, Number, true, 'matches 1 as a number'],
  [-1, Number, true, 'matches -1 as a number'],
  ['tommy', Number, false, 'doesn\'t match strings as numbers'],
  [{}, Number, false, 'doesn\'t match objects as numbers'],
  [[], Number, false, 'doesn\'t match arrays as numbers'],
  [null, Number, false, 'doesn\'t match null as a number'],
  [undefined, Number, false, 'doesn\'t match undefined as a number'],
  [true, Number, false, 'doesn\'t match true as a number']
]

describe('Number Matching', ()=>{
  expectedMatches.forEach(([input, format, expectedResult, description])=>{
    it(description, ()=> assert.equal(valid(input, format), expectedResult))
  })
})
