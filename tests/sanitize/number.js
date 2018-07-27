const testValid = require('../functions/testValid')

const expectedMatches = [
  [0, Number, true, 'matches 0 as a number'],
  [1, Number, true, 'matches 1 as a number'],
  [-1, Number, true, 'matches -1 as a number'],
  [['', 'violin'], Number, false, 'doesn\'t match strings as numbers'],
  [{}, Number, false, 'doesn\'t match objects as numbers'],
  [[], Number, false, 'doesn\'t match arrays as numbers', {spreadArray: false}],
  [null, Number, false, 'doesn\'t match null as a number'],
  [Infinity, Number, false, 'doesn\'t match infinity by default'],
  [Infinity, {_: Number, finite: false}, true, 'matches infinity if we flag finite as false'],
  [NaN, Number, false, 'doesn\'t match NaN by default'],
  [NaN, {_: Number, allowNaN: true}, true, 'matches NaN if we flag allowNaN as true'],
  [undefined, Number, false, 'doesn\'t match undefined as a number'],
  [[true, false], Number, false, 'doesn\'t match booleans as numbers'],
  [18, {_: Number, min: 10}, true, 'matches a number that exceeds the min value flag'],
  [7, {_: Number, min: 10}, false, 'doesn\'t match a number the is smaller than the min value flag'],
  [25, {_: Number, max: 30}, true, 'matches a number that is smaller than the value flag'],
  [64, {_: Number, max: 30}, false, 'doesn\'t match a number the is bigger than the max value flag'],
]

describe('Number Matching', ()=>{
  testValid(expectedMatches)
})
