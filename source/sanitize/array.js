import firstError from '../functions/firstError'

function sanitizeArray(sanitizeAny, input, format, options) {
  if (!Array.isArray(input)) return 'Expected Array'
  let { firstAsStandard, strict, minLength, maxLength, length } = options
  if (format === Array) {
    format = []
    if (!options.hasOwnProperty('strict')) strict = false
  }
  const validators = [...format]
  if (
    !options.hasOwnProperty('firstAsStandard') &&
    !options.hasOwnProperty('standard') &&
    format.length === 1
  )
    firstAsStandard = true // Default to true only if there's only one entry in the array.
  if (options.firstAsStandard === true && options.hasOwnProperty('standard'))
    throw new Error('Cannot both specify standard manually and set firstAsStandard to true.')
  const hasStandard = firstAsStandard === true || options.hasOwnProperty('standard')
  let standard = options.standard || null
  if (firstAsStandard === true) {
    if (format.length < 1) throw new Error('Missing First Array Value for First As Standard')
    standard = validators.splice(0, 1)[0]
  }

  if (!options.hasOwnProperty('minLength') && (validators.length > 0 || hasStandard === true))
    minLength = 1
  if (typeof minLength == 'number' && input.length < minLength) return 'Array Too Short'
  if (options.hasOwnProperty('maxLength') && input.length > maxLength) return 'Array Too Long'
  if (options.hasOwnProperty('length') && input.length !== length) return 'Incorrect Array Length'

  const errors = []

  Array.prototype.forEach.call(input, (inputValue, index) => {
    if (validators.hasOwnProperty(index)) {
      const inputError = sanitizeAny(inputValue, format[index])
      if (inputError !== null) errors[index] = inputError
    } else if (hasStandard) {
      const inputError = sanitizeAny(inputValue, standard)
      if (inputError !== null) errors[index] = inputError
    } else if (strict === true) {
      errors[index] = 'Invalid Index #' + index
    }
  })
  if (strict === true) {
    validators.forEach((value, index) => {
      if (!Object.prototype.hasOwnProperty.call(input, index)) {
        errors[index] = 'Missing Index #' + index
      }
    })
  }
  if (errors.length < 1) return null
  return errors
}

export default sanitizeArray
