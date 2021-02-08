const testValid = require('../functions/testValid')

function sum(a, b) {
  return a + b
}

const expected = [
  {
    input: () => {},
    format: Function,
    valid: true,
    description: 'arrow function as a function'
  },
  {
    input: function () {},
    format: Function,
    valid: true,
    description: 'inline function as a function'
  },
  {
    input: sum,
    format: Function,
    valid: true,
    description: 'named function as a function'
  },
  {
    input: true,
    format: Function,
    valid: false,
    description: 'boolean as a function'
  },
  {
    input: null,
    format: Function,
    valid: false,
    description: 'null as a function'
  },
  {
    input: undefined,
    format: Function,
    valid: false,
    description: 'undefined as a function'
  },
  {
    input: [-1, 0, 1],
    format: Function,
    valid: false,
    description: 'numbers as functions'
  },
  {
    input: ['', 'tomato'],
    format: Function,
    valid: false,
    description: 'strings as functions'
  },
  {
    input: {},
    format: Function,
    valid: false,
    description: 'objects as functions'
  },
  {
    input: [],
    format: Function,
    valid: false,
    description: 'arrays as functions',
    options: {
      spreadArray: false
    }
  },
  {
    input: (a, b) => a - b,
    format: {
      _: Function,
      equalTo: sum
    },
    valid: false,
    description: 'a different function from the equalTo flag'
  },
  {
    input: sum,
    format: {
      _: Function,
      equalTo: sum
    },
    valid: true,
    description: 'the same function as the equalTo flag'
  },
  {
    input: (a, b) => a + b,
    format: {
      _: Function,
      equalTo: (a, b) => a + b
    },
    valid: true,
    description: 'a separate but identical function to the equalTo flag'
  },
  {
    input: null,
    format: {
      _: Function,
      nullable: true
    },
    valid: true,
    description: 'null against a nullable function'
  },
  {
    input: () => {},
    format: {
      _: Function,
      nullable: true
    },
    valid: true,
    description: 'a function against a nullable function'
  },
  {
    input: Object.assign(function () {}, {
      color: 'green'
    }),
    format: Object.assign(function () {}, {
      color: String
    }),
    valid: true,
    description: 'a function with matching object properties'
  },
  {
    input: Object.assign(function () {}, {
      color: 12
    }),
    format: Object.assign(function () {}, {
      color: String
    }),
    valid: false,
    description: 'an invalid function with matching object properties'
  }
]

describe('Function Matching', () => {
  testValid(expected)
})
