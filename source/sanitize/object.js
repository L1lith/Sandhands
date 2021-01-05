import firstError from '../functions/firstError'
import resolveInputs from '../functions/resolveInputs'

function sanitizeObject(sanitizeAny, input, format, options) {
  if (format === Object) {
    format = {}
  }
  if (typeof input != 'object' || input === null || Array.isArray(input)) return 'Expected Object'

  const errors = {}
  const { strict, standard, allOptional, optionalProps = [] } = options
  if (!options.hasOwnProperty('strict') && options.hasOwnProperty('standard')) strict = false

  if (strict === true || options.hasOwnProperty('standard')) {
    Object.keys(input).forEach(inputKey => {
      if (!format.hasOwnProperty(inputKey)) {
        if (options.hasOwnProperty('standard')) {
          const valid = sanitizeAny(input[inputKey], standard)
          if (valid !== null) errors[inputKey] = valid
        } else {
          errors[inputKey] = `Invalid Property "${inputKey}"`
        }
      }
    })
  }

  Object.entries(format).forEach(([childKey, childFormat]) => {
    if (!errors[childKey]) {
      const inlineOptions = resolveInputs(childFormat)
      childFormat = inlineOptions.format
      const childOptions = inlineOptions.options
      if (Object.prototype.hasOwnProperty.call(input, childKey)) {
        const childError = sanitizeAny(input[childKey], childFormat, childOptions)
        if (childError !== null) errors[childKey] = childError
      } else if (
        allOptional !== true &&
        strict === true &&
        typeof childKey == 'string' &&
        !optionalProps.includes(childKey)
      ) {
        errors[childKey] = `Property ${childKey} Required`
      }
    }
  })

  if (Object.keys(errors).length < 1) return null
  return errors
}

export default sanitizeObject
