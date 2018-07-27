const testValid = require('../functions/testValid')

const expected = [
  [[], [], true, 'empty arrays with empty arrays', {spreadArray: false}],
  [[12], [], false, 'non-empty arrays with empty arrays', {spreadArray: false}],
  [[51, 2434, 263, 236], [Number], true, 'any length of matching array to an array with a length of one', {spreadArray: false}],
  [[234234, 63452, 52523, 'Hamburgers'], [Number], false, 'any length of non-matching array to an array with a length of one', {spreadArray: false}],
  [[424, 234324], [Number, Number], true, 'a valid array with equal length to an array longer than 1', {spreadArray: false}],
  [[5151, 23, 781], [Number, Number], false, 'an array with greater length than an array longer than 1', {spreadArray: false}],
  [['timmy', 13, 403], {_: [Number, String], firstAsStandard: true}, true, 'a longer valid array with an array using firstAsStandard and having specific index formats', {spreadArray: false}],
  [[['sandwich', 523, 234, 'mayo'], [12, 342234, 243]], {_: [Number, String], firstAsStandard: true}, false, 'a longer array containing an invalid property with an array using firstAsStandard and having specific index formats'],
  [[true, false], [], false, 'booleans as arrays'],
  [null, [], false, 'null as an array'],
  [undefined, [], false, 'undefined as an array'],
  [[-1, 0, 1], [], false, 'numbers as arrays'],
  [['', 'tomato'], [], false, 'strings as arrays'],
  [{}, [], false, 'objects as arrays']
]

describe('Array Matching', ()=>{
  testValid(expected)
})
