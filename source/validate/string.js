function validateStringOptions(options) {
  const {regex, minLength, maxLength, length, allowed, banned, lowercase, uppercase, email, whitespace} = options

  if (options.hasOwnProperty('email')) {
    if (typeof email != 'boolean') return 'Invalid Email Option'
  }
  if (options.hasOwnProperty('minLength')) {
      if (typeof minLength != 'number' || !isFinite(minLength) || minLength < 0) return 'Invalid Minimum Length Option'
  }
  if (options.hasOwnProperty('maxLength')) {
    if (typeof options.maxLength != 'number' || !isFinite(options.maxLength) || options.maxLength < 0) return 'Invalid Maximum Length Option'
  }
  if (options.hasOwnProperty('length')) {
    if (typeof length != 'number' || !isFinite(length) || length < 0) return 'Invalid Length Option'
  }
  if (options.hasOwnProperty('allowed')) {
    if (typeof allowed != 'string' || allowed.length < 1) return 'Invalid Allowed Option'
  }
  if (options.hasOwnProperty('banned')) {
    if (typeof banned != 'string' || banned.length < 1) return 'Invalid Banned Option'
  }
  if (options.hasOwnProperty('lowercase')) {
    if (typeof lowercase != 'boolean') return 'Invalid Lowercase Option'
  }
  if (options.hasOwnProperty('uppercase')) {
    if (typeof uppercase != 'boolean') return 'Invalid Lowercase Option'
  }
  if (options.hasOwnProperty('whitespace')) {
    if (typeof whitespace != 'boolean') return 'Invalid Whitespace Option'
  }
  if (options.hasOwnProperty('regex')) {
    if (!(regex instanceof RegExp)) return 'Invalid Regex Option'
  }
  return null
}

module.exports = validateStringOptions
