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

  if (primitives.includes(format)) {
    return sanitizePrimitive(input, format, options)
  } else if (Array.isArray(format)) {
    // Array Sanitation
    if (!Array.isArray(input)) {
      return ['Not an array']
    } else {
      options = {...defaultArrayOptions, ...options}
      const {strict} = options
      const arrayErrors = []
      if (options.hasOwnProperty('strict')) {
        if (typeof strict == 'boolean') {
          if (strict === true) {
            for (let i = 0; i < input.length; i++) {
              if (input.hasOwnProperty(i) && !format.hasOwnProperty(i)) {
                arrayErrors[i] = ["Invalid Index"]
              }
            }
          }
        } else {
          throw new Error('Invalid Strict Option')
        }
      }
      format.forEach((formatValue, i) => {
        if (!arrayErrors.hasOwnProperty(i)) arrayErrors[i] = sanitizeObject(input[i], formatValue)
      })

      const {validate} = options

      if (options.hasOwnProperty('validate') && arrayErrors.length < 1) {
        if (typeof validate == 'function') {
          if (validate(input) !== true) arrayErrors.push('Invalid')
        } else if (Array.isArray(validate) && validate.every(value => typeof value == 'function')) {
          if (validate.some(func => func(input) !== true)) arrayErrors.push('Invalid')
        } else {
          throw new Error('Invalid Validate Option')
        }
      }

      return arrayErrors
    }
  } else if (typeof format != 'object' || format === null) {
    throw new Error('Invalid Format Type')
  }

  Object.keys(options).forEach(key => {
    if (!allowedOptions.includes(key)) throw new Error('Invalid Option "' + key + '"')
  })

  // Set Default Options
  options = {...defaultOptions, ...options}

  const errors = {_:[]}

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
          if (typeof optional == 'boolean') {
            if (optional === false && !input.hasOwnProperty(property)) {
              errors._.push('Property Missing')
              break
            }
          } else {
            throw new Error('Invalid Optional Option')
          }
        }

        const propertyErrors = sanitizeObject(input[property], format[property])
        errors[property] = propertyErrors
      }
      if (options.hasOwnProperty('strict')) {
        if (typeof options.strict == 'boolean') {
          if (options.strict === true) {
            const inputKeys = Object.keys(input)
            for (let i = 0; i < inputKeys.length; i++) {
              if (!format.hasOwnProperty(inputKeys[i])) {
                errors._.push('Invalid Property')
                break
              }
            }
          }
        } else {
          throw new Error('Invalid Strict Option')
        }
      }
  } else {
    errors._.push('Not an object')
  }

  const {validate} = options

  if (options.hasOwnProperty('validate') && errors.length < 1) {
    if (typeof validate == 'function') {
      if (validate(input) !== true) errors.push('Invalid')
    } else if (Array.isArray(validate) && validate.every(value => typeof value == 'function')) {
      if (validate.some(func => func(input) !== true)) errors.push('Invalid')
    } else {
      throw new Error('Invalid Validate Option')
    }
  }

  return errors
}

module.exports = sanitizeObject
