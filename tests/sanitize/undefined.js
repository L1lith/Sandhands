const testValid = require('../functions/testValid')

const expected = [
  [undefined, undefined, true, 'undefined as undefined'],
  [null, undefined, false, 'null as undefined'],
  [[true, false], undefined, false, 'booleans as undefined'],
  [[141, 0, -2523, 1, -1], undefined, false, 'numbers as undefined'],
  [['', 'Princess Bride'], undefined, false, 'strings as undefined'],
  [{}, undefined, false, 'objects as undefined'],
  [[], undefined, false, 'arrays as undefined', {spreadArray: false}]
]

describe('Undefined Matching', ()=>{
  testValid(expected)
})
