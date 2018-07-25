const allowedOptions = require('./allowedOptions')
const resolveInlineOptions = require('../functions/resolveInlineOptions')
const isEmptyObject = require('../functions/isEmptyObject')
const validateObjectOptions = require('./object')
const validateArrayOptions = require('./array')
const camelCaseToOutputString = require('../functions/camelCaseToOutputString')

const validPrimitives = [String, Number, Boolean, null, undefined]

const validatePrimitiveOptions = new Map([
  [String, require('./string')],
  [Number, require('./number')]
])

const primitiveNames = new Map([
  [String, 'String'],
  [Number, 'Number'],
  [Boolean, 'Boolean'],
  [null, 'Null'],
  [undefined, 'Undefined']
])

function validateAny(format, options={}) {
  if (typeof options != 'object' || options === null) return 'Options Not Object'
  const inlineOptions = resolveInlineOptions(format, options)
  format = inlineOptions.format
  options = inlineOptions.options
  delete options.optional // Ignore Special Optional Option
  let allowed = []
  let formatName = "Internal Error"
  if (validPrimitives.includes(format)) {
    formatName = primitiveNames.get(format)
    if (allowedOptions.primitives.has(format)) allowed = allowedOptions.primitives.get(format)
    if (validatePrimitiveOptions.has(format)) {
      const optionsError = validatePrimitiveOptions.get(format)(options)
      if (optionsError !== null) return optionsError
    }
  } else if (Array.isArray(format)) {
    formatName = 'Array'
    allowed = allowedOptions.array
  } else if (typeof format == 'object' && format !== null) {
    formatName = 'Object'
    allowed = allowedOptions.object
    const optionsError = validateObjectOptions(options)
    if (optionsError !== null) return optionsError
  } else {
    return 'Invalid Format Type'
  }
  allowed = allowed.concat(allowedOptions.universal)

  const illegalKeys = Object.keys(options).filter(key => !allowed.includes(key))
  const illegalKey = illegalKeys[0]
  if (illegalKeys.length > 0) return `Invalid Option "${illegalKey}" for Format ${formatName}`

  return null
}

module.exports = validateAny
