const firstError = require('../functions/firstError')
const resolveInlineOptions = require('../functions/resolveInlineOptions')
const sanitizeAny = require('./any')

function sanitizeObject(input, format, options) {
  if (Array.isArray(input) || input === null) return 'Expected Object'

  const errors = {_: null}

  if (options.strict === true) {
    Object.keys(input).forEach(inputKey => {
      if (!format.hasOwnProperty(inputKey)) {
        errors[inputKey] = 'Invalid Property'
      } else {
        errors[inputKey] = null
      }
    })
  }
  Object.entries(format).forEach(([childKey, childFormat]) => {
    if (!errors[childKey]) {
      const childOptions = {}
      resolveInlineOptions(childFormat, childOptions)
      if (Object.prototype.hasOwnProperty.call(input, childKey)) {
        errors[childKey] = sanitizeAny(input[childKey], childFormat, childOptions)
      } else if (childOptions.optional !== true) {
        errors[childKey] = 'Property Required'
      } else {
        errors[childKey] = null
      }
    }
  })

  if (firstError(errors) !== null) return errors
  return null
}

module.exports = sanitizeObject
