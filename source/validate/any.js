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

const validPrimitives = [String, Number, Boolean, null, undefined, Function]
//prettier-ignore
const validatePrimitiveOptions = new Map([
  [String, string],
  [Number, number],
  [Function, validateFunctionOptions]
])

const primitiveNames = new Map([
    [String, 'String'],
    [Number, 'Number'],
    [Boolean, 'Boolean'],
    [null, 'Null'],
    [undefined, 'Undefined'],
    [Function, 'Function']
])

function validateAny(format, options = {}) {
    if (typeof options != 'object' || options === null) return 'Options Not Object'
    const inlineOptions = resolveInlineOptions(format, options)
    format = inlineOptions.format
    options = inlineOptions.options
    delete options.optional // Ignore Special Optional Option
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
    } else if (typeof format == 'object' && format !== null || format === Object) {
        formatName = 'Object'
        allowed = allowedOptions.object
        const optionsError = validateObjectOptions(options)
        if (optionsError !== null) return optionsError
    } else if (format === ANY) {
      // Do Nothing
    } else {
        return 'Invalid Format Type'
    }
    allowed = allowed.concat(allowedOptions.universal)

    const illegalKeys = Object.keys(options).filter(key => !allowed.includes(key))
    const illegalKey = illegalKeys[0]
    if (illegalKeys.length > 0) return `Invalid Option "${illegalKey}" for Format ${formatName}`

    return null
}

export default validateAny
