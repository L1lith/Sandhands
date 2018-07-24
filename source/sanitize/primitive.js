const primitives = [String, Boolean, Number, null, undefined]
const sanitizeString = require('./string')
const sanitizeNumber = require('./number')

const defaultOptions = new Map([
  [String, {
    minLength: 1
  }],
  [Number, {
    allowNaN: false,
    finite: true
  }]
])

const allowedOptions = new Map([
  [String, ['allowed', 'banned', 'minLength', 'maxLength', 'lowercase', 'uppercase', 'equalTo', 'email', 'whitespace', 'regex']],
  [Number, ['min', 'max', 'even', 'odd', 'allowNaN', 'finite', 'equalTo']],
  [Boolean, ['equalTo']]
])

const typeofs = new Map([
  [String, 'string'],
  [Number, 'number'],
  [Boolean, 'boolean']
])

function sanitizePrimitive() {
  if (arguments.length < 2) throw new Error('Missing Arguments')
  if (arguments.length > 3) throw new Error('Too Many Arguments')
  let [input, format, options] = arguments
  // Validate Input Options
  if (arguments.hasOwnProperty('2')) {
    if (typeof options == 'object' && options !== null) {
      if (allowedOptions.has(format)) {
        const allowed = allowedOptions.get(format).concat('validate')
        const optionKeys = Object.keys(options)
        for (let i = 0; i < optionKeys.length; i++) {
          const option = optionKeys[i]
          if (!allowed.includes(option)) throw new Error('Invalid Option "'+option+'"')
        }
      } else {
        if (Object.keys(options.length) > 0) throw new Error('Options Not Allowed')
      }
    } else {
      if (typeof options != 'object' || options === null) throw new Error('Invalid Options Type')
    }
  } else {
    options = {}
  }

  const errors = []
  if (typeofs.has(format)) {
    options = { ...(defaultOptions.get(format) || {}), ...options}
    if (typeof input != typeofs.get(format)) {
      errors.push('Invalid Type')
    } else if (options.hasOwnProperty('equalTo') && input !== options.equalTo) {
      errors.push('Incorrect value')
    } else if (format === String) {
      const stringError = sanitizeString(input, options)
      if (stringError) errors.push(stringError)
    } else if (format === Number) {
      const numberError = sanitizeNumber(input, options)
      if (numberError) errors.push(numberError)
    }
  } else if ([null, undefined].includes(format)) {
    if (input !== format) errors.push('Invalid Type')
  } else {
    throw new Error('Invalid Primitive Format')
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

module.exports = {sanitizePrimitive, primitives}
