const {primitives, sanitizePrimitive} = require('./primitive')

const defaultOptions = { strict: true }
const defaultChildOptions = { optional: false }

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
    return sanitizeArray(input, format, options)
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

  return errors
}

module.exports = sanitizeObject
