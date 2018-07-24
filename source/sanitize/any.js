const sanitizeArray = require('./array')
const sanitizeObject = require('./object')
const resolveInlineOptions = require('../functions/resolveInlineOptions')
const defaultOptions = require('../defaultOptions')

const primitives = new Map([
  [String, require('./string')],
  [Number, require('./number')],
  [Boolean, require('./boolean')],
  [null, require('./null')],
  [undefined, require('./undefined')]
])

function sanitizeAny(input, format, options={}) {

  const inlineOptions = resolveInlineOptions(format, options)
  format = inlineOptions.format
  options = inlineOptions.options

  if (options.hasOwnProperty('equalTo') && input !== options.equalTo) return 'Input Not Equal'

  if (primitives.has(format)) {
    if (defaultOptions.primitives.has(format)) options = Object.assign({}, defaultOptions.primitives.get(format), options)
    const primitiveError = primitives.get(format)(input, options)
    if (primitiveError !== null) return primitiveError
  } else if (Array.isArray(format)) {
    options = Object.assign({}, defaultOptions.array, options)
    const arrayErrors = sanitizeArray(input, format, options)
    if (flattenErrorsObject(arrayErrors).length > 0) return arrayErrors
  } else if (typeof format == 'object') {
    options = Object.assign({}, defaultOptions.object, options)
    const objectErrors = sanitizeObject(input, format, options)
    if (objectErrors !== null) return objectErrors
  } else {
    throw new Error('Invalid Format')
  }

  if (options.hasOwnProperty('validate')) {
    if (Array.isArray(options.validate)) {
      if (options.validate.some(func => func(input) !== true)) return 'Input Failed Validation Function'
    } else {
      if (options.validate(input) !== true) return 'Input Failed Validation Function'
    }
  }

  return null
}

module.exports = sanitizeAny
