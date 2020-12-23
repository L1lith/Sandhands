const testValid = require('../functions/testValid')

const expected = [
  {
    input: ['a', 12, 14],
    format: {
      _: [String],
      standard: Number,
      strict: false
    },
    testOptions: {
      spreadArray: false
    },
    valid: true,
    description: 'complex array involving numbers and strings'
  },
  {
    input: ['a', 12, 14, 'b'],
    format: {
      _: [String],
      standard: Number,
      strict: false
    },
    testOptions: {
      spreadArray: false
    },
    valid: false,
    description: 'invalid complex array involving numbers and strings'
  },
  {
    input: [{ person: { age: 12, name: 'timmy' } }],
    format: {
      _: {
        person: {
          _: {
            name: String,
            age: Number
          },
          allOptional: true
        }
      },
      _or: null
    },
    testOptions: {
      spreadArray: true
    },
    valid: true,
    description: 'complex object involving boolean operators'
  },
  {
    input: [{ person: { age: '12', name: 'timmy' } }, 12, { age: 12, name: 'timmy' }],
    format: {
      _: {
        person: {
          _: {
            name: String,
            age: Number
          },
          allOptional: true
        }
      },
      _or: null
    },
    testOptions: {
      spreadArray: true
    },
    valid: false,
    description: 'invalid input with a complex object involving boolean operators'
  }
]

describe('Complex Matching', () => {
  testValid(expected)
})
