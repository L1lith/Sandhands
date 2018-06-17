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
  [String, ['allowed', 'banned', 'minLength', 'maxLength', 'lowercase', 'uppercase', 'equalTo']],
  [Number, ['min', 'max', 'even', 'odd', 'allowNaN', 'finite', 'equalTo']],
  [Boolean, ['equalTo']]
])

const types = new Map([
  [String, 'string'],
  [Number, 'number'],
  [Boolean, 'boolean']
])

function sanitizePrimitive(input, format, options) {
  // Validate Input Options
  if (typeof options == 'object' && options !== null) {
    if (allowedOptions.has(format)) {
      const allowed = allowedOptions.get(format)
      const optionKeys = Object.keys(options)
      for (let i = 0; i < optionKeys.length; i++) {
        const option = optionKeys[i]
        if (!allowed.includes(option)) throw new Error('Invalid Option "'+option+'"')
      }
    } else {
      if (Object.keys(options.length) > 0) throw new Error('Options Not Allowed')
    }
  } else {
    options = {}
  }

  const errors = []
  if (types.has(format)) {
    options = { ...(defaultOptions.get(format) || {}), ...options}
    if (typeof input != types.get(format)) {
      errors.push('Invalid Type')
    } else if (options.hasOwnProperty('equalTo') && input !== options.equalTo) {
      errors.push('Incorrect value')
    } else if (format === String) {
      const {minLength, maxLength, length, allowed, banned, lowercase, uppercase} = options
      if (options.hasOwnProperty('minLength')) {
          if (typeof minLength == 'number' && isFinite(minLength) && minLength >= 0) {
            if (input.length < minLength) errors.push('Too short')
          } else {
            throw new Error('Invalid Minimum Length Option')
          }
      }
      if (options.hasOwnProperty('maxLength')) {
        if (typeof options.maxLength == 'number' && isFinite(options.maxLength) && options.maxLength >= 0) {
          if (input.length > options.maxLength) errors.push('Too long')
        } else {
          throw new Error('Invalid Maximum Length Option')
        }
      }
      if (options.hasOwnProperty('length')) {
        if (typeof length == 'number' && isFinite(length) && length >= 0) {
          if (input.length != length) errors.push('Incorrect Length')
        } else {
          throw new Error('Invalid Length Option')
        }
      }
      if (options.hasOwnProperty('allowed')) {
        if (typeof allowed == 'string' && allowed.length > 0) {
          if ([...input].some(letter => !allowed.includes(letter))) errors.push('Character not allowed')
        } else {
          throw new Error('Invalid Allowed Option')
        }
      }
      if (options.hasOwnProperty('banned')) {
        if (typeof banned == 'string' && banned.length > 0) {
          if ([...input].some(letter => banned.includes(letter))) errors.push('Character not allowed')
        } else {
          throw new Error('Invalid Banned Option')
        }
      }
      if (options.hasOwnProperty('lowercase')) {
        if (typeof lowercase == 'boolean') {
          if (lowercase === true && input.toLowerCase() != input) errors.push('Lowercase Only')
        } else {
          throw new Error('Invalid Lowercase Option')
        }
      }
      if (options.hasOwnProperty('uppercase')) {
        if (typeof uppercase == 'boolean') {
          if (uppercase === true && input.toUpperCase() != input) errors.push('Uppercase Only')
        } else {
          throw new Error('Invalid Lowercase Option')
        }
      }
    } else if (format === Number) {
      const {allowNaN, finite, min, max, even, odd} = options
      if (options.hasOwnProperty('allowNaN')) {
        if (typeof allowNaN == 'boolean') {
          if (allowNaN === false && isNaN(input)) errors.push('NaN not allowed')
        } else {
          throw new Error('Invalid AllowNaN Option')
        }
      }
      if (options.hasOwnProperty('finite')) {
        if (typeof finite == 'boolean') {
          if (finite === true && !isFinite(input) && !isNaN(input)) errors.push('Infinity not allowed')
        } else {
          throw new Error('Invalid Finite Option')
        }
      }
      if (options.hasOwnProperty('min')) {
        if (typeof min == 'number' && isFinite(min)) {
          if (input < min) errors.push('Too small')
        } else {
          throw new Error('Invalid Min Option')
        }
      }
      if (options.hasOwnProperty('max')) {
        if (typeof max == 'number' && isFinite(max)) {
          if (input > max) errors.push('Too great')
        } else {
          throw new Error('Invalid Max Option')
        }
      }
      if (options.hasOwnProperty('even')) {
        if (typeof even == 'boolean') {
          if (even === true && input % 2 != 0) errors.push('Not even')
        } else {
          throw new Error('Invalid Even Option')
        }
      }
      if (options.hasOwnProperty('odd')) {
        if (typeof odd == 'boolean') {
          if (odd === true && input % 2 != 1) errors.push('Not odd')
        } else {
          throw new Error('Invalid Odd Option')
        }
      }
    }
  } else if ([null, undefined].includes(format)) {
    if (input !== format) errors.push('Invalid Type')
  } else {
    throw new Error('Invalid Primitive Format')
  }
  return errors
}

module.exports = sanitizePrimitive
