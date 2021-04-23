const testValid = require('../functions/testValid')
const { inspect } = require('util')
const { Format, ANY } = require('../../dist/Sandhands-commonjs.js')

const testData = [
  12,
  13,
  Infinity,
  -Infinity,
  null,
  undefined,
  {},
  Object,
  Function,
  () => {},
  [],
  Array,
  String,
  '',
  0,
  Symbol(),
  Symbol
]

const expected = testData.map(data => ({
  input: data,
  format: ANY,
  testOptions: {
    spreadArray: false
  },
  valid: true,
  description: 'allows ' + inspect(data)
}))

describe('ANY Utility', () => {
  testValid(expected)
})
