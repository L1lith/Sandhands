const testValid = require('../functions/testValid')

const basicAndFormat = {
  _: String,
  banned: 'xyz',
  _and: {
    _: String,
    banned: 'abc'
  }
}
const basicOrFormat = {
  _: String,
  allowed: 'xyz',
  _or: {
    _: String,
    allowed: 'abc'
  }
}

const expected = [
  // Begin AND Section
    {
        input: 'ghost',
        format: basicAndFormat,
        valid: true,
        description: 'with basic AND functionality'
    },
    {
        input: 'detox',
        format: basicAndFormat,
        valid: false,
        description: 'invalid input with basic AND functionality on the primary format'
    },
    {
        input: 'detox',
        format: basicAndFormat,
        valid: false,
        description: 'invalid input with basic AND functionality on the secondary format'
    },
    // End AND Section
    // Begin OR Section
      {
          input: 'zzyzx',
          format: basicOrFormat,
          valid: true,
          description: 'with basic OR functionality passing the first format'
      },
      {
          input: 'bacc',
          format: basicOrFormat,
          valid: true,
          description: 'with basic OR functionality passing the secondary format'
      },
      {
          input: 'tone',
          format: basicOrFormat,
          valid: false,
          description: 'invalid input with basic OR functionality'
      }
      // End OR Section
]

describe('Format Boolean Logic', () => {
    testValid(expected)
})
