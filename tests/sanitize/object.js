const testValid = require('../functions/testValid')

const expected = [
  [{}, {}, true, 'an empty object with an empty object'],
  [{a: 12}, {}, false, 'an object with properties with an empty object'],
  [true, {}, false, 'true as an object'],
  [false, {}, false, 'false as an object'],
  [null, {}, false, 'null as an object'],
  [undefined, {}, false, 'undefined as an object'],
  [[-1, 0, 1], {}, false, 'numbers as objects'],
  [['', 'tomato'], {}, false, 'strings as objects'],
  [[], {}, false, 'arrays as objects', {spreadArray: false}]
]

describe('Object Matching', ()=>{
  testValid(expected)
})
