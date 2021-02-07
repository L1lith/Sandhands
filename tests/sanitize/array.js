const testValid = require('../functions/testValid')

const equalArray = [1, 2, 7]

const expected = [
  {
    input: [],
    format: [],
    testOptions: {
      spreadArray: false
    },
    valid: true,
    description: 'empty array as empty array'
  },
  {
    input: [1, 2],
    format: [],
    testOptions: {
      spreadArray: false
    },
    valid: true,
    description: 'non-empty array as empty array'
  },
  {
    input: [],
    format: [String],
    testOptions: {
      spreadArray: false
    },
    valid: false,
    description: 'empty array with a first as standard format array'
  },
  {
    input: ['hi', 'there'],
    format: [String],
    testOptions: {
      spreadArray: false
    },
    valid: true,
    description: 'valid array with first as standard'
  },
  {
    input: ['aab', 5, '123312'],
    format: [String],
    testOptions: {
      spreadArray: false
    },
    valid: false,
    description: 'invalid array with first as standard'
  },
  {
    input: [],
    format: {
      _: [],
      standard: Number
    },
    testOptions: {
      spreadArray: false
    },
    valid: false,
    description: 'empty array with manual standard'
  },
  {
    input: ['big', 'old', 'shoe'],
    format: {
      _: [],
      standard: String
    },
    testOptions: {
      spreadArray: false
    },
    valid: true,
    description: 'valid array with manual standard'
  },
  {
    input: ['unicorn', 58323],
    format: {
      _: [],
      standard: String
    },
    testOptions: {
      spreadArray: false
    },
    valid: false,
    description: 'invalid array with manual standard'
  },
  {
    input: [],
    format: Array,
    valid: true,
    description: 'Array constructor for blank arrays'
  },
  {
    input: [3, 5, 0],
    format: {
      _: Array,
      equalTo: equalArray
    },
    valid: false,
    description: 'a non-equal array to the equalTo flag'
  },
  {
    input: [1, 2, 7],
    format: {
      _: Array,
      equalTo: equalArray,
      strict: false
    },
    testOptions: {
      spreadArray: false
    },
    valid: true,
    description: 'a deeply equal array to the equalTo flag'
  },
  {
    input: equalArray,
    testOptions: {
      spreadArray: false
    },
    format: {
      _: Array,
      equalTo: equalArray,
      strict: false
    },
    valid: true,
    description: 'the same array as the equalTo flag'
  },
  {
    input: null,
    testOptions: {
      spreadArray: false
    },
    format: {
      _: Array,
      nullable: true
    },
    valid: true,
    description: 'null against a nullable array'
  },
  {
    input: equalArray,
    testOptions: {
      spreadArray: false
    },
    format: {
      _: Array,
      nullable: true
    },
    valid: true,
    description: 'an array against a nullable array'
  }
]

describe('Array Matching', () => {
  testValid(expected)
})
