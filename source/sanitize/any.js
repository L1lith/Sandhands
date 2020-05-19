import sanitizeArray from './array'
import sanitizeObject from './object'
import resolveInlineOptions from '../functions/resolveInlineOptions'
import interpretCustomFormats from '../functions/interpretCustomFormats'
import defaultOptions from '../defaultOptions'
import { Format as FormatClass } from '../exports/Format'
import string from './string'
import number from './number'
import boolean from './boolean'
import sanitizeNull from './null'
import sanitizeFunction from './function'
import sanitizeUndefined from './undefined'
import deepEqual from '../functions/deepEqual'
import ANY from '../exports/ANY'

const primitives = new Map([
    [String, string],
    [Number, number],
    [Boolean, boolean],
    [null, sanitizeNull],
    [undefined, sanitizeUndefined],
    [Function, sanitizeFunction]
])

function sanitizeAny(input, format, options = {}) {
    if (format instanceof FormatClass) format = format.format

    const inlineOptions = resolveInlineOptions(format, options)
    format = inlineOptions.format
    options = inlineOptions.options

    // Start Section for handling Boolean Logic
    // Handling OR
    let {ORFormats, ANDFormats, NOTFormats} = inlineOptions
    if (ORFormats.length > 0) {
      let firstError = sanitizeAny(input, format, options)
      if (firstError === null) return null
      for (let i = 0, l=ORFormats.length; i < l; i++) { // Store the length instead of retrieving it every time for optimal performance
        const error = sanitizeAny(input, ORFormats[i])
        if (error === null) return null
        if (firstError === null) firstError = error
      }
      return firstError
    }
    // Handling AND
    if (ANDFormats.length > 0) {
      let firstError = sanitizeAny(input, format, options)
      if (firstError !== null) return firstError
      for (let i = 0, l=ANDFormats.length; i < l; i++) { // Store the length instead of retrieving it every time for optimal performance
        const error = sanitizeAny(input, ANDFormats[i])
        if (error !== null) return error
      }
      return null
    }
    // Handling NOT
    if (NOTFormats.length > 0) {
      let firstError = sanitizeAny(input, format, options)
      if (firstError !== null) return firstError
      for (let i = 0, l=NOTFormats.length; i < l; i++) { // Store the length instead of retrieving it every time for optimal performance
        const error = sanitizeAny(input, NOTFormats[i])
        if (error === null) return "Something was NOT allowed"
      }
      return null
    }
    // End section for handling Boolean Logic

    if (options.hasOwnProperty('equalTo') && !deepEqual(input, options.equalTo)) return 'Input Not Equal'
    if (primitives.has(format)) {
        if (defaultOptions.has(format))
            options = Object.assign({}, defaultOptions.get(format), options)
        const primitiveError = primitives.get(format)(input, options)
        if (primitiveError !== null) return primitiveError
    } else if (Array.isArray(format) || format === Array) {
        options = Object.assign({}, defaultOptions.get(Array), options)
        const arrayErrors = sanitizeArray(sanitizeAny, input, format, options)
        if (arrayErrors !== null) return arrayErrors
    } else if (typeof format == 'object' || format === Object) {
        options = Object.assign({}, defaultOptions.get(Object), options)
        const objectErrors = sanitizeObject(sanitizeAny, input, format, options)
        if (objectErrors !== null) return objectErrors
    } else if (format === ANY) {
      // Do Nothing
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

// Iterate through the data and replace any strings for custom formats with the actual format itself before performing sanitation
function sanitizeAnyWithCustomFormats(input, format, options) {
    arguments[1] = interpretCustomFormats(arguments[1])
    return sanitizeAny(...arguments)
}

export default sanitizeAnyWithCustomFormats
