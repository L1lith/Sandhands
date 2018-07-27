const testValid = require('../functions/testValid')

const expected= [
  [null, null, true, 'null as null'],
  [undefined, null, false, 'undefined as null'],
  [[true, false], null, false, 'booleans as null'],
  [[141, 0, -2523, 1, -1], null, false, 'numbers as null'],
  [['', 'Jimmy Johns'], null, false, 'strings as null'],
  [{}, null, false, 'objects as null'],
  [[], null, false, 'arrays as null', {spreadArray: false}]
]

describe('Null Matching', ()=>{
  testValid(expectedMatches)
})
