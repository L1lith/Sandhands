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

    if (typeof input == 'object' && input !== null) {
        // Start Object Sanitation
        if (Array.isArray(input)) errors._.push('Invalid Type')

        const formatKeys = Object.keys(format)
        for (let i = 0; i < formatKeys.length; i++) {
          const property = formatKeys[i]
          // Calculate Format Child Properties
          let propertyFormat = format[property]
          let options = {}
          while (propertyFormat.hasOwnProperty('_')) {
            options = {...options, propertyFormat}
            propertyFormat = propertyFormat._
          }
          options = {...defaultChildOptions, ...options}
          if (options.hasOwnProperty('optional')) {
            const {optional} = options
            if (typeof optional != 'boolean') throw new Error('Invalid Optional Option')
            if (optional === false && !Object.prototype.hasOwnProperty.call(input, property)) {
              errors._.push('Property Missing')
              break
            }
          }

          const propertyErrors = sanitizeObject(input[property], format[property])
          errors[property] = propertyErrors
        }
        if (options.hasOwnProperty('strict')) {
          if (typeof options.strict != 'boolean') throw new Error('Invalid Strict Option')
          if (options.strict === true) {
            const inputKeys = Object.keys(input)
            for (let i = 0; i < inputKeys.length; i++) {
              if (!format.hasOwnProperty(inputKeys[i])) {
                errors._.push('Invalid Property')
                break
              }
            }
          }
        }
    } else {
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
