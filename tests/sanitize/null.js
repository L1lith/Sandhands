const testValid = require('../functions/testValid')

const expected = [
  {
    input: null,
    format: null,
    valid: true,
    description: 'null as null'
  },
  {
    input: undefined,
    format: null,
    valid: false,
    description: 'undefined as null'
  },
  {
    input: [true, false],
    format: null,
    valid: false,
    description: 'booleans as null'
  },
  {
    input: [141, 0, -2523, 1, -1],
    format: null,
    valid: false,
    description: 'numbers as null'
  },
  {
    input: ['', 'Jimmy Johns'],
    format: null,
    valid: false,
    description: 'strings as null'
  },
  {
    input: {},
    format: null,
    valid: false,
    description: 'objects as null'
  },
  {
    input: [],
    format: null,
    valid: false,
    description: 'arrays as null',
    options: {
      spreadArray: false
    }
  },
  {
    input: undefined,
    format: {
      _: null,
      equalTo: null
    },
    valid: false,
    description: 'a value not equal to the equalTo flag'
  },
  {
    input: null,
    format: {
      _: null,
      equalTo: null
    },
    valid: true,
    description: 'a value equal to the equalTo flag'
  },
  {
    input: null,
    format: {
      _: null,
      nullable: true
    },
    valid: true,
    description: 'null against a nullable null'
  }
]

describe('Null Matching', () => {
  testValid(expected)
})
