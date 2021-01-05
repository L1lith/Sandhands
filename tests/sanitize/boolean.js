const testValid = require('../functions/testValid')

const expected = [
  {
    input: true,
    format: Boolean,
    valid: true,
    description: 'true as a boolean'
  },
  {
    input: false,
    format: Boolean,
    valid: true,
    description: 'false as a boolean'
  },
  {
    input: null,
    format: Boolean,
    valid: false,
    description: 'null as a boolean'
  },
  {
    input: undefined,
    format: Boolean,
    valid: false,
    description: 'undefined as a boolean'
  },
  {
    input: [-1, 0, 1],
    format: Boolean,
    valid: false,
    description: 'numbers as booleans'
  },
  {
    input: ['', 'tomato'],
    format: Boolean,
    valid: false,
    description: 'strings as booleans'
  },
  {
    input: {},
    format: Boolean,
    valid: false,
    description: 'objects as booleans'
  },
  {
    input: [],
    format: Boolean,
    valid: false,
    description: 'arrays as booleans',
    options: {
      spreadArray: false
    }
  },
  {
    input: true,
    format: {
      _: Boolean,
      equalTo: false
    },
    valid: false,
    description: 'a non-equal boolean to the equalTo flag'
  },
  {
    input: false,
    format: {
      _: Boolean,
      equalTo: false
    },
    valid: true,
    description: 'an equal boolean to the equalTo flag'
  }
]

describe('Boolean Matching', () => {
  testValid(expected)
})
