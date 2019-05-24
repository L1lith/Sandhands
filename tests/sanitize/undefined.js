const testValid = require('../functions/testValid')

const expected = [
    {
        input: undefined,
        format: undefined,
        valid: true,
        description: 'undefined as undefined'
    },
    {
        input: null,
        format: undefined,
        valid: false,
        description: 'null as undefined'
    },
    {
        input: [true, false],
        format: undefined,
        valid: false,
        description: 'booleans as undefined'
    },
    {
        input: [141, 0, -2523, 1, -1],
        format: undefined,
        valid: false,
        description: 'numbers as undefined'
    },
    {
        input: ['', 'Princess Bride'],
        format: undefined,
        valid: false,
        description: 'strings as undefined'
    },
    {
        input: {},
        format: undefined,
        valid: false,
        description: 'objects as undefined'
    },
    {
        input: [],
        format: undefined,
        valid: false,
        description: 'arrays as undefined',
        options: {
            spreadArray: false
        }
    }
]

describe('Undefined Matching', () => {
    testValid(expected)
})
