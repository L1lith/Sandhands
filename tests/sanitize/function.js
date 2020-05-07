const testValid = require('../functions/testValid')

function sum(a, b) {
  return a + b
}

const expected = [
    {
        input: ()=>{},
        format: Function,
        valid: true,
        description: 'arrow function as a function'
    },
    {
        input: function(){},
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
    }
]

describe('Function Matching', () => {
    testValid(expected)
})
