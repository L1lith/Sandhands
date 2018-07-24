const firstError = require('../functions/firstError')

function sanitizeArray(sanitizeAny, input, format, options) {
  if (!Array.isArray(input)) return 'Expected Array'
  let {firstAsStandard, strict} = options
  if (firstAsStandard === undefined && format.length === 1) firstAsStandard = true // Default to true only if there's only one entry in the array.
  if (firstAsStandard !== true && strict === undefined) strict = true // Default to true only if we're not using firstAsStandard
  let standard = null
  if (firstAsStandard === true) {
    if (format.length < 1) throw new Error('Missing First Array Value for First As Standard')
    standard = format.splice(0,1)[0]
  }

  const errors = []

  Array.prototype.forEach.call(input, (inputValue, index) => {
    if (format.hasOwnProperty(index)) {
      errors[index] = sanitizeAny(inputValue, format[index])
    } else if (firstAsStandard === true) {
      errors[index] = sanitizeAny(inputValue, standard)
    } else if (strict === true) {
      errors[index] = "Invalid Property"
    } else {
      errors[index] = null
    }
  })
  if (firstError(errors) !== null) return errors
  return null
}

module.exports = sanitizeArray
