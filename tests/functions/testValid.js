const chai = require('chai')
const { assert } = chai
const isValid = require('../../dist/Sandhands-commonjs.js').valid

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
                        assert.equal(isValid(testInput, format), valid)
                    })
                } else {
                    assert.equal(isValid(input, format), valid)
                }
            }
        )
    })
}

module.exports = testValid
