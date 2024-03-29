const testValid = require('../functions/testValid')
const { Format } = require('../../dist/Sandhands')

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

const numberOrString = {
  _: Number,
  _or: String
}

const normalInt = { _: Number, min: 0, finite: true, integer: true }

const intOrIntRange = {
  _: normalInt,
  _or: {
    _: [normalInt, normalInt],
    validate: (num1, num2) => (num1 < num2 ? null : 'The first number must be smaller')
  }
}

const expected = [
  // Begin AND Section
  {
    input: 'ghost',
    format: basicAndFormat,
    valid: true,
    description: 'basic AND functionality'
  },
  {
    input: 'abbacus',
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
  // End AND Section
  // Begin OR Section
  {
    input: 'zzyzx',
    format: basicOrFormat,
    valid: true,
    description: 'basic OR functionality passing the first format'
  },
  {
    input: 12,
    format: numberOrString,
    valid: true,
    description: 'basic OR functionality with different types passing the primary format'
  },
  {
    input: 'hello',
    format: numberOrString,
    valid: true,
    description: 'basic OR functionality with different types passing the secondary format'
  },
  {
    input: null,
    format: numberOrString,
    valid: false,
    description: 'invalid input with basic OR functionality with different types'
  },
  {
    input: 'bacc',
    format: basicOrFormat,
    valid: true,
    description: 'basic OR functionality passing the secondary format'
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
    description: 'basic NOT functionality'
  },
  {
    input: 'tomato',
    format: basicNotFormat,
    valid: false,
    description: 'invalid input with basic NOT functionality'
  },
  {
    input: 12,
    format: intOrIntRange,
    valid: true,
    description: 'valid number input with int/int range format'
  },
  {
    input: -1,
    format: intOrIntRange,
    valid: false,
    description: 'invalid number input with int/int range format'
  },
  {
    input: [1, 5],
    format: intOrIntRange,
    valid: true,
    description: 'valid number range input with int/int range format'
  },
  {
    input: [4, 2],
    format: intOrIntRange,
    valid: false,
    description: 'invalid number range input with int/int range format'
  }
  // End NOT Section
]

describe('Boolean Logic', () => {
  testValid(expected)
})
