const valid = require('../../source/exports/valid')
const testValid = require('../functions/testValid')

const expectedMatches = [
  [0, Number, true, 'matches 0 as a number'],
  [1, Number, true, 'matches 1 as a number'],
  [-1, Number, true, 'matches -1 as a number'],
  [['', 'violin'], Number, false, 'doesn\'t match strings as numbers'],
  [{}, Number, false, 'doesn\'t match objects as numbers'],
  [[], Number, false, 'doesn\'t match arrays as numbers', {spreadArray: false}],
  [null, Number, false, 'doesn\'t match null as a number'],
  [undefined, Number, false, 'doesn\'t match undefined as a number'],
  [[true, false], Number, false, 'doesn\'t match booleans as numbers']
]

describe('String Matching', ()=>{
  testValid(expectedMatches)
})
