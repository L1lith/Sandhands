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
        description: 'valid array with a first as standard format array'
    },
    {
        input: ['hi', 'there', 1],
        format: [String],
        testOptions: {
          spreadArray: false
        },
        valid: false,
        description: 'invalid array with a first as standard format array'
    }
]

describe('Array Matching', () => {
    testValid(expected)
})
