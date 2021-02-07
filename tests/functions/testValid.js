const chai = require('chai')
const { assert } = chai
const { inspect } = require('util')
const details = require('../../dist/Sandhands-commonjs.js').details

function testValid(tests) {
  tests.forEach(test => {
    const { input, format, description, valid = true, testOptions = {} } = test
    const { spreadArray = true, assumeBeginning = true } = testOptions
    it(
      (assumeBeginning === true ? (valid === true ? 'matches' : "doesn't match") : '') +
        ' ' +
        description,
      () => {
        if (spreadArray === true && Array.isArray(input) && input.length > 0) {
          input.forEach(testInput => {
            if (valid === true) {
              const errors = details(testInput, format)
              if (errors !== null) {
                assert.fail(inspect(errors))
              }
            } else {
              const errors = details(input, format)
              if (errors === null) {
                assert.fail('No error was found with the input')
              }
            }
          })
        } else {
          if (valid === true) {
            const errors = details(input, format)
            if (errors !== null) {
              assert.fail(inspect(errors))
            }
          } else {
            const errors = details(input, format)
            if (errors === null) {
              assert.fail('No error was found with the input')
            }
          }
        }
      }
    )
  })
}

module.exports = testValid
