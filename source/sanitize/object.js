const firstError = require('../functions/firstError')
const resolveInlineOptions = require('../functions/resolveInlineOptions')

function sanitizeObject(sanitizeAny, input, format, options) {
  if (typeof input != 'object' || input === null || Array.isArray(input)) return 'Expected Object'

  const errors = {_: null}

  if (options.strict === true) {
    Object.keys(input).forEach(inputKey => {
      if (!format.hasOwnProperty(inputKey)) errors[inputKey] = 'Invalid Property'
    })
  }
  
  Object.entries(format).forEach(([childKey, childFormat]) => {
    if (!errors[childKey]) {
      const inlineOptions = resolveInlineOptions(childFormat)
      childFormat = inlineOptions.format
      const childOptions = inlineOptions.options
      if (Object.prototype.hasOwnProperty.call(input, childKey)) {
        delete childOptions.optional
        errors[childKey] = sanitizeAny(input[childKey], childFormat, childOptions)
      } else if (childOptions.optional !== true && options.strict === true) {
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