const validEmail = require('./email')

const primitives = [String, Boolean, Number, null, undefined]

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
      const {regex, minLength, maxLength, length, allowed, banned, lowercase, uppercase, email, whitespace} = options

      if (options.hasOwnProperty('email')) {
        if (typeof email != 'boolean') throw new Error('Invalid Email Option')
        if (email === true && !validEmail(input)) errors.push('Email Invalid')
      }
      if (options.hasOwnProperty('minLength')) {
          if (typeof minLength != 'number' || !isFinite(minLength) || minLength < 0) throw new Error('Invalid Minimum Length Option')
          if (input.length < minLength) errors.push('Too short')
      }
      if (options.hasOwnProperty('maxLength')) {
        if (typeof options.maxLength != 'number' || !isFinite(options.maxLength) || options.maxLength < 0) throw new Error('Invalid Maximum Length Option')
        if (input.length > options.maxLength) errors.push('Too long')
      }
      if (options.hasOwnProperty('length')) {
        if (typeof length != 'number' || !isFinite(length) || length < 0) throw new Error('Invalid Length Option')
        if (input.length != length) errors.push('Incorrect Length')
      }
      if (options.hasOwnProperty('allowed')) {
        if (typeof allowed != 'string' || allowed.length < 1) throw new Error('Invalid Allowed Option')
        if ([...input].some(letter => !allowed.includes(letter))) errors.push('Character not allowed')
      }
      if (options.hasOwnProperty('banned')) {
        if (typeof banned != 'string' || banned.length < 1) throw new Error('Invalid Banned Option')
        if ([...input].some(letter => banned.includes(letter))) errors.push('Character not allowed')
      }
      if (options.hasOwnProperty('lowercase')) {
        if (typeof lowercase != 'boolean') throw new Error('Invalid Lowercase Option')
        if (lowercase === true && input.toLowerCase() != input) errors.push('Lowercase only')
      }
      if (options.hasOwnProperty('uppercase')) {
        if (typeof uppercase != 'boolean') throw new Error('Invalid Lowercase Option')
        if (uppercase === true && input.toUpperCase() != input) errors.push('Uppercase only')
      }
      if (options.hasOwnProperty('whitespace')) {
        if (typeof whitespace != 'boolean') throw new Error('Invalid Whitespace Option')
        if (whitespace === false && input.includes(' ')) errors.push('No whitespace')
      }
      if (options.hasOwnProperty('regex')) {
        if (!(regex instanceof RegExp)) throw new Error('Invalid Regex Option')
        if (regex.test(input) !== true) errors.push('Failed regex')
      }
    } else if (format === Number) {
      const {allowNaN, finite, min, max, even, odd} = options
      if (options.hasOwnProperty('allowNaN')) {
        if (typeof allowNaN != 'boolean') throw new Error('Invalid AllowNaN Option')
        if (allowNaN === false && isNaN(input)) errors.push('NaN not allowed')
      }
      if (options.hasOwnProperty('finite')) {
        if (typeof finite != 'boolean') throw new Error('Invalid Finite Option')
        if (finite === true && !isFinite(input) && !isNaN(input)) errors.push('Infinity not allowed')
      }
      if (options.hasOwnProperty('min')) {
        if (typeof min != 'number' && !isFinite(min)) throw new Error('Invalid Min Option')
        if (input < min) errors.push('Too small')
      }
      if (options.hasOwnProperty('max')) {
        if (typeof max != 'number' || !isFinite(max)) throw new Error('Invalid Max Option')
        if (input > max) errors.push('Too great')
      }
      if (options.hasOwnProperty('even')) {
        if (typeof even != 'boolean') throw new Error('Invalid Even Option')
        if (even === true && input % 2 != 0) errors.push('Not even')
      }
      if (options.hasOwnProperty('odd')) {
        if (typeof odd != 'boolean') throw new Error('Invalid Odd Option')
        if (odd === true && input % 2 != 1) errors.push('Not odd')
      }
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
