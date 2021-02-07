const testValid = require('../functions/testValid')
const { Format } = require('../../dist/Sandhands-commonjs.js')

const expected = [
  {
    input: 'this library feels like a time sink sometimes',
    format: Format(String),
    valid: true,
    description: 'basic Format wrapping the String constructor'
  },
  {
    input: 42.069,
    format: Format(String),
    valid: false,
    description: 'invalid input with basic Format wrapping the String constructor'
  },
  {
    input: null,
    format: Format(String).nullable(),
    valid: true,
    description: 'null against a nullable basic Format wrapping the String constructor'
  },
  {
    input: 'Wings And Pizza',
    format: Format(String).nullable(),
    valid: true,
    description: 'a nullable basic Format wrapping the String constructor'
  }
]

// const expectedBooleanLogic = [
//   {
//     input: 'hello',
//     format: Format(String).banned('xyz').And(Format(String).banned('abc')),
//     valid: true,
//     description: 'basic AND functionality using the Format constructor'
//   },
//   {
//     input: 'tony@gmail.com',
//     format: Format(String).email().Or(Format(String).banned('abc')),
//     valid: true,
//     description: 'basic OR functionality using the Format constructor'
//   },
//   {
//     input: 'what up its tom, tom.com',
//     format: Format(String).banned('xyz').Not(Format(String).email()),
//     valid: true,
//     description: 'basic NOT functionality using the Format constructor'
//   },
//   {
//     input: 'tom@gmail.com',
//     format: Format(String).banned('xyz').Not(Format(String).email()),
//     valid: false,
//     description: 'invalid input with basic NOT functionality using the Format constructor'
//   }
// ]

describe('Format Basic Logic', () => {
  testValid(expected)
})
// This feature has been temporarily disabled.
// describe('Format Boolean Logic', () => {
//   testValid(expectedBooleanLogic)
// })
