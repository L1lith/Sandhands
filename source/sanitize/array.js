const firstError = require('../functions/firstError')

function sanitizeArray(sanitizeAny, input, format, options) {
  if (!Array.isArray(input)) return 'Expected Array'
  let {firstAsStandard, strict} = options
  if (firstAsStandard === undefined && format.length === 1) firstAsStandard = true // Default to true only if there's only one entry in the array.
  if (format.length !== 1 && !options.hasOwnProperty('strict')) strict = true // Default to true only if we're not using firstAsStandard
  let standard = null
  if (firstAsStandard === true) {
    if (format.length < 1) throw new Error('Missing First Array Value for First As Standard')
    standard = format.splice(0,1)[0]
  }

  if (!options.hasOwnProperty('minLength') && format.length > 0) options.minLength = 1
  if (options.hasOwnProperty('minLength') && input.length < options.minLength) return 'Array Too Short'
  if (options.hasOwnProperty('maxLength') && input.length > options.maxLength) return 'Array Too Long'
  if (options.hasOwnProperty('length') && input.length !== options.length) return 'Incorrect Array Length'

  const errors = []

  Array.prototype.forEach.call(input, (inputValue, index) => {
    if (format.hasOwnProperty(index)) {
      const inputError = sanitizeAny(inputValue, format[index])
      if (inputError !== null) errors[index] = inputError
    } else if (firstAsStandard === true) {
      const inputError = sanitizeAny(inputValue, standard)
      if (inputError !== null) errors[index] = inputError
    } else if (strict === true) {
      errors[index] = "Invalid Property"
    }
  })
  if (strict === true) {
    format.forEach((value, index) => {
      if (!Object.prototype.hasOwnProperty.call(input, index)) {
        errors[index] = 'Property Missing'
      }
    })
  }
  if (errors.length < 1) return null
  return errors
}

module.exports = sanitizeArray
