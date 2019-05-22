import firstError from '../functions/firstError'
import resolveInlineOptions from '../functions/resolveInlineOptions'

function sanitizeObject(sanitizeAny, input, format, options) {
  if (typeof input != 'object' || input === null || Array.isArray(input)) return 'Expected Object'

  const errors = {}

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
        const childError = sanitizeAny(input[childKey], childFormat, childOptions)
        if (childError !== null) errors[childKey] = childError
      } else if (childOptions.optional !== true && options.strict === true) {
        errors[childKey] = 'Property Required'
      }
    }
  })

  if (Object.keys(errors).length < 1) return null
  return errors
}

export default sanitizeObject
