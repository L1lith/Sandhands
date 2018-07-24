function validateStringOptions(options) {
  const errors = []
  const {regex, minLength, maxLength, length, allowed, banned, lowercase, uppercase, email, whitespace} = options

  if (options.hasOwnProperty('email')) {
    if (typeof email != 'boolean') errors.push('Invalid Email Option')
  }
  if (options.hasOwnProperty('minLength')) {
      if (typeof minLength != 'number' || !isFinite(minLength) || minLength < 0) errors.push('Invalid Minimum Length Option')
  }
  if (options.hasOwnProperty('maxLength')) {
    if (typeof options.maxLength != 'number' || !isFinite(options.maxLength) || options.maxLength < 0) errors.push('Invalid Maximum Length Option')
  }
  if (options.hasOwnProperty('length')) {
    if (typeof length != 'number' || !isFinite(length) || length < 0) errors.push('Invalid Length Option')
  }
  if (options.hasOwnProperty('allowed')) {
    if (typeof allowed != 'string' || allowed.length < 1) errors.push('Invalid Allowed Option')
  }
  if (options.hasOwnProperty('banned')) {
    if (typeof banned != 'string' || banned.length < 1) errors.push('Invalid Banned Option'
  }
  if (options.hasOwnProperty('lowercase')) {
    if (typeof lowercase != 'boolean') errors.push('Invalid Lowercase Option')
  }
  if (options.hasOwnProperty('uppercase')) {
    if (typeof uppercase != 'boolean') errors.push('Invalid Lowercase Option')
  }
  if (options.hasOwnProperty('whitespace')) {
    if (typeof whitespace != 'boolean') errors.push('Invalid Whitespace Option')
  }
  if (options.hasOwnProperty('regex')) {
    if (!(regex instanceof RegExp)) errors.push('Invalid Regex Option')
  }
  return errors
}

module.exports = validateStringOptions
