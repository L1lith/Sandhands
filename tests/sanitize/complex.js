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
    description: 'valid complex objects'
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
    description: 'invalid complex objects'
  }
]

describe('Complex Matching', () => {
  testValid(expected)
})
