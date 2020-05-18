const testValid = require('../functions/testValid')

const expected = [
    {
        input: 0,
        format: Number,
        valid: true,
        description: '0 as a number'
    },
    {
        input: 1,
        format: Number,
        valid: true,
        description: '1 as a number'
    },
    {
        input: -1,
        format: Number,
        valid: true,
        description: '-1 as a number'
    },
    {
        input: ['', 'violin'],
        format: Number,
        valid: false,
        description: 'strings as numbers'
    },
    {
        input: {},
        format: Number,
        valid: false,
        description: 'objects as numbers'
    },
    {
        input: [],
        format: Number,
        valid: false,
        description: 'arrays as numbers',
        options: {
            spreadArray: false
        }
    },
    {
        input: null,
        format: Number,
        valid: false,
        description: 'null as a number'
    },
    {
        input: Infinity,
        format: Number,
        valid: false,
        description: 'infinity by default'
    },
    {
        input: Infinity,
        format: {
            _: Number,
            finite: false
        },
        valid: true,
        description: 'infinity if we flag finite as false'
    },
    {
        input: NaN,
        format: Number,
        valid: false,
        description: 'NaN by default'
    },
    {
        input: NaN,
        format: {
            _: Number,
            allowNaN: true
        },
        valid: true,
        description: 'NaN if we flag allowNaN as true'
    },
    {
        input: undefined,
        format: Number,
        valid: false,
        description: 'undefined as a number'
    },
    {
        input: [true, false],
        format: Number,
        valid: false,
        description: 'booleans as numbers'
    },
    {
        input: 18,
        format: {
            _: Number,
            min: 10
        },
        valid: true,
        description: 'a number that exceeds the min value flag'
    },
    {
        input: 7,
        format: {
            _: Number,
            min: 10
        },
        valid: false,
        description: 'a number the is smaller than the min value flag'
    },
    {
        input: 25,
        format: {
            _: Number,
            max: 30
        },
        valid: true,
        description: 'a number that is smaller than the value flag'
    },
    {
        input: 64,
        format: {
            _: Number,
            max: 30
        },
        valid: false,
        description: 'a number the is bigger than the max value flag'
    },
    {
        input: 423,
        format: {
          _: Number,
          integer: true
        },
        valid: true,
        description: 'a integer as an integer'
    },
    {
        input: 51.2,
        format: {
          _: Number,
          integer: true
        },
        valid: false,
        description: 'a non-integer as an integer'
    },
    {
      input: 24,
      format: {
        _: Number,
        equalTo: 40
      },
      valid: false,
      description: 'a non-equal number to the equalTo flag'
    },
    {
      input: 43,
      format: {
        _: Number,
        equalTo: 43
      },
      valid: true,
      description: 'an equal number to the equalTo flag'
    }
]

describe('Number Matching', () => {
    testValid(expected)
})
