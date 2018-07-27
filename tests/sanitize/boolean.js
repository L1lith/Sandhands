const testValid = require('../functions/testValid')

const expected = [
  [true, Boolean, true, 'true as a boolean'],
  [false, Boolean, true, 'false as a boolean'],
  [null, Boolean, false, 'null as a boolean'],
  [undefined, Boolean, false, 'undefined as a boolean'],
  [[-1, 0, 1], Boolean, false, 'numbers as booleans'],
  [['', 'tomato'], Boolean, false, 'strings as booleans'],
  [{}, Boolean, false, 'objects as booleans'],
  [[], Boolean, false, 'arrays as booleans', {spreadArray: false}]
]

describe('Boolean Matching', ()=>{
  testValid(expected)
})
