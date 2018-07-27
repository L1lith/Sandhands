const testValid = require('../functions/testValid')

const expected = [
  // INPUT, FORMAT, EXPECTED VALID, DESCRIPTION, TESTOPTIONS
  [{}, {}, true, 'an empty object with an empty object'],
  [{a: 12}, {}, false, 'an object with properties with an empty object'],
  [{}, {age: Number}, false, 'an object with missing properties'],
  [{color: 'green'}, {color: String}, true, 'an object with matching properties'],
  [{sauce: true}, {_:{}, strict: false}, true, 'an object with properties with a non-strict empty object'],
  [{}, {flavor: {_: String, optional: true}}, true, 'an empty object with an object with an optional property'],
  [{flavor: 'spicy'}, {flavor: {_: String, optional: true}}, true, 'an object with a valid optoinal property'],
  [{flavor: Infinity}, {flavor: {_: String, optional: true}}, false, 'an object with an invalid optional property'],
  [[true, false], {}, false, 'booleans as objects'],
  [null, {}, false, 'null as an object'],
  [undefined, {}, false, 'undefined as an object'],
  [[-1, 0, 1], {}, false, 'numbers as objects'],
  [['', 'tomato'], {}, false, 'strings as objects'],
  [[], {}, false, 'arrays as objects', {spreadArray: false}]
]

describe('Object Matching', ()=>{
  testValid(expected)
})
