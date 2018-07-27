const valid = require('../../source/exports/valid')
const testValid = require('../functions/testValid')

const expectedMatches = [
  [true, Boolean, true, 'matches true as a boolean'],
  [false, Boolean, true, 'matches false as a boolean'],
  [[-1, 0, 1], Boolean, false, 'doesn\'t match numbers as booleans']
]

describe('Boolean Matching', ()=>{
  testValid(expectedMatches)
})
