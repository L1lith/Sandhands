const testValid = require('../functions/testValid')

const expectedMatches = [
  [undefined, undefined, true, 'matches undefined as undefined'],
  [null, undefined, false, 'doesn\'t match null as undefined'],
  [[true, false], undefined, false, 'doesn\'t match booleans as undefined'],
  [[141, 0, -2523, 1, -1], undefined, false, 'doesn\'t match numbers as undefined'],
  [['', 'Princess Bride'], undefined, false, 'doesn\'t match strings as undefined'],
  [{}, undefined, false, 'doesn\'t match objects as undefined'],
  [[], undefined, false, 'doesn\'t match arrays as undefined', {spreadArray: false}]
]

describe('Undefined Matching', ()=>{
  testValid(expectedMatches)
})
