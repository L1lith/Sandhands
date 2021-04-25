import sanitizeArray from './array'
import sanitizeObject from './object'
import defaultOptions from '../defaultOptions'
import { Format as FormatClass } from '../exports/Format'
import string from './string'
import number from './number'
import boolean from './boolean'
import booleanFormats from './booleanFormats'
import sanitizeNull from './null'
import sanitizeFunction from './function'
import sanitizeUndefined from './undefined'
import deepEqual from '../functions/deepEqual'
import ANY from '../exports/ANY'
import resolveFormat from '../functions/resolveFormat'
import { inspect } from 'util'

const primitives = new Map([
  [String, string],
  [Number, number],
  [Boolean, boolean],
  [null, sanitizeNull],
  [undefined, sanitizeUndefined]
])

function sanitizeAny(input, ...args) {
  const inlineOptions = resolveFormat(...args)
  let { format, options } = inlineOptions

  //throw require('util').inspect(format)

  // Start Section for handling Boolean Logic
  let { ORFormats, ANDFormats, NOTFormats } = inlineOptions
  if (options.nullable === true && input === null) return null
  if (ORFormats.length > 0 || ANDFormats.length > 0 || NOTFormats.length > 0)
    return booleanFormats(sanitizeAny, input, inlineOptions)
  // End section for handling Boolean Logic

  if (options.hasOwnProperty('equalTo') && !deepEqual(input, options.equalTo))
    return 'Input Not Equal'
  if (format === ANY) {
    // Do Nothing
  } else if (primitives.has(format)) {
    if (defaultOptions.has(format)) options = Object.assign({}, defaultOptions.get(format), options)
    const primitiveError = primitives.get(format)(input, options)
    if (primitiveError !== null) return primitiveError
  } else if (Array.isArray(format) || format === Array) {
    options = Object.assign({}, defaultOptions.get(Array), options)
    const arrayErrors = sanitizeArray(sanitizeAny, input, format, options)
    if (arrayErrors !== null) return arrayErrors
  } else if (typeof format == 'object' || format === Object) {
    if (typeof input != 'object' || input === null || Array.isArray(input))
      return 'Expected an Object' // We had to move this check outside so we could re-use the sanitizeObject method for the functions as well
    options = Object.assign({}, defaultOptions.get(Object), options)
    const objectErrors = sanitizeObject(sanitizeAny, input, format, options)
    if (objectErrors !== null) return objectErrors
  } else if (typeof format == 'function' || format === Function) {
    const functionErrors = sanitizeFunction(sanitizeAny, input, format, options)
    if (functionErrors !== null) return functionErrors
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
          if (output.length < 1)
            throw new Error('Custom Error Message Must be longer than 0 characters.')
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
        if (output.length < 1)
          throw new Error('Custom Error Message Must be longer than 0 characters.')
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

export default sanitizeAny
