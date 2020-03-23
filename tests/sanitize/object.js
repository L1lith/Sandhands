const testValid = require('../functions/testValid')

const expected = [
    {
        input: {},
        format: {},
        valid: true,
        description: 'an empty object with an empty object'
    },
    {
        input: {
            a: 12
        },
        format: {},
        valid: false,
        description: 'an object with properties with an empty object'
    },
    {
        input: {},
        format: {
            age: Number
        },
        valid: false,
        description: 'an object with missing properties'
    },
    {
        input: {
            color: 'green'
        },
        format: {
            color: String
        },
        valid: true,
        description: 'an object with matching properties'
    },
    {
        input: {
            sauce: true
        },
        format: {
            _: {},
            strict: false
        },
        valid: true,
        description: 'an object with properties with a non-strict empty object'
    },
    {
        input: {},
        format: {
            flavor: {
                _: String,
                optional: true
            }
        },
        valid: true,
        description: 'an empty object with an object with an optional property'
    },
    {
        input: {
            flavor: 'spicy'
        },
        format: {
            flavor: {
                _: String,
                optional: true
            }
        },
        valid: true,
        description: 'an object with a valid optoinal property'
    },
    {
        input: {
            flavor: Infinity
        },
        format: {
            flavor: {
                _: String,
                optional: true
            }
        },
        valid: false,
        description: 'an object with an invalid optional property'
    },
    {
        input: [true, false],
        format: {},
        valid: false,
        description: 'booleans as objects'
    },
    {
        input: null,
        format: {},
        valid: false,
        description: 'null as an object'
    },
    {
        input: undefined,
        format: {},
        valid: false,
        description: 'undefined as an object'
    },
    {
        input: [-1, 0, 1],
        format: {},
        valid: false,
        description: 'numbers as objects'
    },
    {
        input: ['', 'tomato'],
        format: {},
        valid: false,
        description: 'strings as objects'
    },
    {
        input: [],
        format: {},
        valid: false,
        description: 'arrays as objects',
        options: {
            spreadArray: false
        }
    },
    {
        input: {},
        format: {},
        valid: true,
        description: 'Object constructor for blank object'
    },
    {
      input: {
        a: '12',
        soup: 'yummy'
      },
      format: {
        _: Object,
        standard: String
      },
      valid: true,
      description: "object with standard option"
    },
    {
      input: {
        a: '12',
        soup: 'yummy',
        age: 55
      },
      format: {
        _: Object,
        standard: String
      },
      valid: false,
      description: "invalid object against an object with standard option"
    },
    {
      input: {
        a: '12',
        soup: 'yummy',
        age: 55
      },
      format: {
        _: {
          age: Number
        },
        standard: String
      },
      valid: true,
      description: "object with standard option and properties"
    }
]

describe('Object Matching', () => {
    testValid(expected)
})
