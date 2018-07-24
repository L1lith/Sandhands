const {primitives, sanitizePrimitive} = require('./primitive')

const defaultOptions = { strict: true }
const defaultChildOptions = { optional: false }
const defaultArrayOptions = { strict: true }

const allowedOptions = [ 'strict', 'optional' ]

function sanitizeObject() {
  if (arguments.length < 2) throw new Error('Missing Arguments')
  if (arguments.length > 3) throw new Error('Too Many Arguments')
  let [input, format, options] = arguments
  if (arguments.hasOwnProperty('2')) {
    if (typeof options != 'object' || options === null) throw new Error('Invalid Options Type')
  } else {
    options = {}
  }

  // Handle options embedded in object
  if (typeof format == 'object' && format !== null && format.hasOwnProperty('_')) {
    const optionsFromFormat = {...format}
    delete optionsFromFormat._
    return sanitizeObject(input, format._, {...options, ...optionsFromFormat})
  }

  let errors

  if (primitives.includes(format)) {
    return sanitizePrimitive(input, format, options)
  } else if (Array.isArray(format)) {
    // Array Sanitation
    if (!Array.isArray(input)) {
      errors = ['Not an array']
    } else {
      options = {...defaultArrayOptions, ...options}
      const {strict} = options
      errors = []
      if (options.hasOwnProperty('strict')) {
        if (typeof strict != 'boolean') throw new Error('Invalid Strict Option')
        if (strict === true) {
          for (let i = 0; i < input.length; i++) {
            if (Object.prototype.hasOwnProperty.call(input, i) && !format.hasOwnProperty(i)) {
              errors[i] = ["Invalid Index"]
            }
          }
        }
      }
      format.forEach((formatValue, i) => {
        if (!errors.hasOwnProperty(i)) errors[i] = sanitizeObject(input[i], formatValue)
      })
    }
  } else if (typeof format == 'object' && format !== null) {
    Object.keys(options).forEach(key => {
      if (!allowedOptions.includes(key)) throw new Error('Invalid Option "' + key + '"')
    })

    // Set Default Options
    options = {...defaultOptions, ...options}

    errors = {_:[]}

     else {
      errors._.push('Not an object')
    }
  } else {
    throw new Error('Invalid Format Type')
  }

  const rootErrors = errors._ || errors

  const {validate} = options

  if (options.hasOwnProperty('validate')) {
    if (typeof validate == 'function') {
      if (validate(input) !== true) rootErrors.push('Invalid')
    } else if (Array.isArray(validate) && validate.every(value => typeof value == 'function')) {
      if (validate.some(func => func(input) !== true)) rootErrors.push('Invalid')
    } else {
      throw new Error('Invalid Validate Option')
    }
  }

  return errors
}

module.exports = sanitizeObject
