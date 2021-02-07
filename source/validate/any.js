import allowedOptions from './allowedOptions'
import resolveInlineOptions from '../functions/resolveInlineOptions'
import isEmptyObject from '../functions/isEmptyObject'
import validateObjectOptions from './object'
import validateArrayOptions from './array'
import camelCaseToOutputString from '../functions/camelCaseToOutputString'
import string from './string'
import number from './number'
import validateFunctionOptions from './function'
import ANY from '../exports/ANY'

const validPrimitives = [String, Number, Boolean, null, undefined]
//prettier-ignore
const validatePrimitiveOptions = new Map([
  [String, string],
  [Number, number]
])

const primitiveNames = new Map([
  [String, 'String'],
  [Number, 'Number'],
  [Boolean, 'Boolean'],
  [null, 'Null'],
  [undefined, 'Undefined'],
  [Function, 'Function']
])

function validateAny(inlineOptions) {
  const { format, options } = inlineOptions
  if (typeof options != 'object' || options === null) return 'Options are not an Object'
  let allowed = []
  let formatName = 'Internal Error'
  if (validPrimitives.includes(format)) {
    formatName = primitiveNames.get(format)
    if (allowedOptions.primitives.has(format)) allowed = allowedOptions.primitives.get(format)
    if (validatePrimitiveOptions.has(format)) {
      const optionsError = validatePrimitiveOptions.get(format)(options)
      if (optionsError !== null) return optionsError
    }
  } else if (Array.isArray(format) || format === Array) {
    formatName = 'Array'
    allowed = allowedOptions.array
  } else if ((typeof format == 'object' && format !== null) || format === Object) {
    formatName = 'Object'
    allowed = allowedOptions.object
    const optionsError = validateObjectOptions(options)
    if (optionsError !== null) return optionsError
  } else if ((typeof format == 'object' && format !== null) || format === Function) {
    formatName = 'Function'
    allowed = allowedOptions.function.concat(allowedOptions.object)
    const optionsError = validateObjectOptions(options) || validateFunctionOptions(options)
    if (optionsError !== null) return optionsError
  } else if (format === ANY) {
    // Do Nothing
  } else {
    return `Invalid Format`
  }
  if (options.hasOwnProperty('validate') && typeof options.validate !== 'function')
    return 'Expected a function for the validation option'
  if (options.hasOwnProperty('nullable') && typeof options.nullable !== 'boolean')
    return 'Expected a boolean for the nullable option'
  allowed = allowed.concat(allowedOptions.universal)

  const illegalKeys = Object.keys(options).filter(key => !allowed.includes(key))
  const illegalKey = illegalKeys[0]
  if (illegalKeys.length > 0) return `Invalid Option "${illegalKey}" for Format ${formatName}`

  return null
}

export default validateAny
