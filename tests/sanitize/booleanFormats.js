const testValid = require('../functions/testValid')
const {Format} = require('../../dist/Sandhands-commonjs.js')

const basicAndFormat = {
  _: String,
  banned: 'xyz',
  _and: {
    _: String,
    banned: 'abc'
  }
}
const basicOrFormat = {
  _: String,
  allowed: 'xyz',
  _or: {
    _: String,
    allowed: 'abc'
  }
}
const basicNotFormat = {
  _: String,
  _not: {
    _: String,
    equalTo: 'tomato'
  }
}

const expected = [
  // Begin AND Section
  {
    input: 'ghost',
    format: basicAndFormat,
    valid: true,
    description: 'valid input with basic AND functionality'
  },
  {
    input: 'detox',
    format: basicAndFormat,
    valid: false,
    description: 'invalid input with basic AND functionality on the primary format'
  },
  {
    input: 'apples',
    format: basicAndFormat,
    valid: false,
    description: 'invalid input with basic AND functionality on the secondary format'
  },
  {
    input: 'hello',
    format: Format(String).banned("xyz").And(Format(String).banned("abc")),
    valid: true,
    description: 'basic AND functionality using the Format constructor'
  },
  {
    input: 'tony@gmail.com',
    format: Format(String).email().Or(Format(String).banned("abc")),
    valid: true,
    description: 'basic OR functionality using the Format constructor'
  },
  {
    input: 'what up its tom, tom.com',
    format: Format(String).banned("xyz").Not(Format(String).email()),
    valid: true,
    description: 'with basic NOT functionality using the Format constructor'
  },
  {
    input: 'tom@gmail.com',
    format: Format(String).banned("xyz").Not(Format(String).email()),
    valid: false,
    description: 'invalid input with basic NOT functionality using the Format constructor'
  },
  // End AND Section
  // Begin OR Section
  {
    input: 'zzyzx',
    format: basicOrFormat,
    valid: true,
    description: 'with basic OR functionality passing the first format'
  },
  {
    input: 'bacc',
    format: basicOrFormat,
    valid: true,
    description: 'with basic OR functionality passing the secondary format'
  },
  {
    input: 'tone',
    format: basicOrFormat,
    valid: false,
    description: 'invalid input with basic OR functionality'
  },
  // End OR Section
  // Begin NOT Section
  {
    input: 'tomatoes',
    format: basicNotFormat,
    valid: true,
    description: 'with basic NOT functionality'
  },
  {
    input: 'tomato',
    format: basicNotFormat,
    valid: false,
    description: 'invalid input with basic NOT functionality'
  }
  // End NOT Section
]

describe('Format Boolean Logic', () => {
  testValid(expected)
})
