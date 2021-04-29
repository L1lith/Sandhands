const { assert } = require('chai')
const sandhandsLibrary = require('../dist/Sandhands')

const expectedExports = [
  'allowedOptions',
  'details',
  'sanitize',
  'valid',
  'setDefault',
  'customFormat',
  'sandhandsExpress',
  'Format',
  'F',
  'ANY',
  'And',
  'Not',
  'Or',
  'getFormatErrors',
  'reduceFormat',
  'resolveFormat',
  'reconstructFormat'
]

describe('library exports', () => {
  it('exports all the expected properties and nothing more', () => {
    assert.deepEqual(Object.keys(sandhandsLibrary).sort(), expectedExports.sort())
  })
})
