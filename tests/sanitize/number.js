const testValid = require('../functions/testValid')

const expected = [
  [0, Number, true, '0 as a number'],
  [1, Number, true, '1 as a number'],
  [-1, Number, true, '-1 as a number'],
  [['', 'violin'], Number, false, 'strings as numbers'],
  [{}, Number, false, 'objects as numbers'],
  [[], Number, false, 'arrays as numbers', {spreadArray: false}],
  [null, Number, false, 'null as a number'],
  [Infinity, Number, false, 'infinity by default'],
  [Infinity, {_: Number, finite: false}, true, 'infinity if we flag finite as false'],
  [NaN, Number, false, 'NaN by default'],
  [NaN, {_: Number, allowNaN: true}, true, 'NaN if we flag allowNaN as true'],
  [undefined, Number, false, 'undefined as a number'],
  [[true, false], Number, false, 'booleans as numbers'],
  [18, {_: Number, min: 10}, true, 'a number that exceeds the min value flag'],
  [7, {_: Number, min: 10}, false, 'a number the is smaller than the min value flag'],
  [25, {_: Number, max: 30}, true, 'a number that is smaller than the value flag'],
  [64, {_: Number, max: 30}, false, 'a number the is bigger than the max value flag'],
]

describe('Number Matching', ()=>{
  testValid(expected)
})
