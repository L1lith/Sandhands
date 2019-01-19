const sanitizeArray = require('./array')
const sanitizeObject = require('./object')
const resolveInlineOptions = require('../functions/resolveInlineOptions')
const interpretCustomFormats = require('../functions/interpretCustomFormats')
const defaultOptions = require('../defaultOptions')
const FormatShorthand = require('../exports/Format').Format

const primitives = new Map([
  [String, require('./string')],
  [Number, require('./number')],
  [Boolean, require('./boolean')],
  [null, require('./null')],
  [undefined, require('./undefined')]
])

function sanitizeAny(input, format, options={}) {
  if (format instanceof FormatShorthand) format = format.format

  const inlineOptions = resolveInlineOptions(format, options)
  format = inlineOptions.format
  options = inlineOptions.options

  if (options.hasOwnProperty('equalTo') && input !== options.equalTo) return 'Input Not Equal'
  if (primitives.has(format)) {
    if (defaultOptions.has(format)) options = Object.assign({}, defaultOptions.get(format), options)
    const primitiveError = primitives.get(format)(input, options)
    if (primitiveError !== null) return primitiveError
  } else if (Array.isArray(format)) {
    options = Object.assign({}, defaultOptions.get(Array), options)
    const arrayErrors = sanitizeArray(sanitizeAny, input, format, options)
    if (arrayErrors !== null) return arrayErrors
  } else if (typeof format == 'object') {
    options = Object.assign({}, defaultOptions.get(Object), options)
    const objectErrors = sanitizeObject(sanitizeAny, input, format, options)
    if (objectErrors !== null) return objectErrors
  } else {
    throw new Error('Invalid Format')
  }

  if (options.hasOwnProperty('validate')) {
    if (Array.isArray(options.validate)) {
      for (let i = 0; i < options.validate.length; i++) {
        const output = options.validate[i](input)
        if (typeof output == 'string') {
          if (output.length < 1) throw new Error('Custom Error Message Must be longer than 0 characters.')
          return output
        } else if (typeof output == 'boolean') {
          if (output === false) return 'Failed Validation Function'
        } else {
          throw new Error('Validation Function Returned Unexpected output')
        }
      }
    } else {
      const output = options.validate(input)
      if (typeof output == 'string') {
        if (output.length < 1) throw new Error('Custom Error Message Must be longer than 0 characters.')
        return output
      } else if (typeof output == 'boolean') {
        if (output === false) return 'Failed Validation Function'
      } else {
        throw new Error('Validation Function Returned Unexpected output')
      }
    }
  }

  return null
}

function sanitizeAnyWithCustomFormats(input, format, options) {
  arguments[1] = interpretCustomFormats(arguments[1])
  return sanitizeAny(...arguments)
}

module.exports = sanitizeAnyWithCustomFormats
