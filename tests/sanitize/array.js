const testValid = require('../functions/testValid')

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
    }
]

describe('Array Matching', () => {
    testValid(expected)
})
