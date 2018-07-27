const valid = require('../../source/exports/valid')
const testValid = require('../functions/testValid')

const expectedMatches = [
  [null, null, true, 'matches null as null'],
  [undefined, null, false, 'doesn\'t match undefined as null'],
  [[true, false], null, false, 'doesn\'t match booleans as null'],
  [[141, 0, -2523, 1, -1], null, false, 'doesn\'t match numbers as null'],
  [['', 'Jimmy Johns'], null, false, 'doesn\'t match strings as null'],
  [{}, null, false, 'doesn\'t match objects as null'],
  [[], null, false, 'doesn\'t match arrays as null', {spreadArray: false}]
]

describe('Null Matching', ()=>{
  testValid(expectedMatches)
})
