const testValid = require('../functions/testValid')

const equalObject = {
  height: 12,
  width: 25
}

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
      _: {
        flavor: {
          _: String
        }
      },
      allOptional: true
    },
    valid: true,
    description: 'an empty object with an object with an optional property'
  },
  {
    input: {
      flavor: 'spicy'
    },
    format: {
      _: {
        flavor: {
          _: String
        }
      },
      allOptional: true
    },
    valid: true,
    description: 'an object with a valid optional property'
  },
  {
    input: {
      flavor: Infinity
    },
    format: {
      _: {
        flavor: {
          _: String
        }
      },
      allOptional: true
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
    description: 'object with standard option'
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
    description: 'invalid object against an object with standard option'
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
    description: 'object with standard option and properties'
  },
  {
    input: {
      a: '12',
      soup: 'yummy',
      age: 55,
      age2: 14
    },
    format: {
      _: {
        age: Number
      },
      standard: String
    },
    valid: false,
    description: 'invalid object against an object with standard option and properties'
  },
  {
    input: {
      height: 12,
      width: 95
    },
    format: {
      _: Object,
      equalTo: equalObject
    },
    valid: false,
    description: 'a non-equal object to the equalTo flag'
  },
  {
    input: {
      height: 12,
      width: 25
    },
    format: {
      _: Object,
      equalTo: equalObject,
      strict: false
    },
    valid: true,
    description: 'a deeply equal object to the equalTo flag'
  },
  {
    input: equalObject,
    format: {
      _: Object,
      equalTo: equalObject,
      strict: false
    },
    valid: true,
    description: 'the same object as the equalTo flag'
  },
  {
    input: {},
    format: {
      _: {
        name: String
      },
      optionalProps: ['name']
    },
    valid: true,
    description: 'empty object against a format with an optionalProps flagged property'
  },
  {
    input: {
      name: 'John'
    },
    format: {
      _: {
        name: String
      },
      optionalProps: ['name']
    },
    valid: true,
    description: 'detailed object against a format with an optionalProps flagged property'
  },
  {
    format: {
      _: {
        name: String
      },
      optionalProps: ['name']
    },
    input: {
      name: 21
    },
    valid: false,
    description: 'invalid object against a format with an optionalProps flagged property'
  },
  {
    format: {
      _: {
        name: String
      },
      optionalProps: ['name']
    },
    input: {
      name: 'jim',
      age: 12
    },
    valid: false,
    description: 'semi-invalid object against a format with an optionalProps flagged property'
  },
  {
    input: {},
    format: {
      _: {
        name: String
      },
      allOptional: true
    },
    valid: true,
    description: 'empty object against a format with an an allOptional flag'
  },
  {
    input: {
      name: 'John'
    },
    format: {
      _: {
        name: String
      },
      allOptional: true
    },
    valid: true,
    description: 'detailed object against a format with an allOptional flag'
  },
  {
    format: {
      _: {
        name: String
      },
      allOptional: true
    },
    input: {
      name: 21
    },
    valid: false,
    description: 'invalid object against a format with an allOptional flag'
  },
  {
    format: {
      _: {
        name: String
      },
      allOptional: true
    },
    input: {
      name: 'jim',
      age: 12
    },
    valid: false,
    description: 'semi-invalid object against a format with an allOptional flag'
  },
  {
    format: {
      _: {
        balance: Number
      },
      strict: false,
      bannedProps: ['age']
    },
    input: [
      {
        balance: 32
      },
      {
        balance: 32,
        disaster: true
      }
    ],
    valid: true,
    description: 'A valid object against a format with a banned property'
  },
  {
    format: {
      _: {
        balance: Number
      },
      strict: false,
      bannedProps: ['age']
    },
    input: {
      balance: 32,
      age: 64
    },
    valid: false,
    description: 'An invalid object against a format with a banned property'
  },
  {
    format: Object,
    input: {
      control: false,
      randomInput: 42
    },
    valid: true,
    description: 'The object constructor is non-strict by default'
  }
]

describe('Object Matching', () => {
  testValid(expected)
})
