function sanitizeString(input, options) {
  const {regex, minLength, maxLength, length, allowed, banned, lowercase, uppercase, email, whitespace} = options

  if (options.hasOwnProperty('email')) {
    if (typeof email != 'boolean') throw new Error('Invalid Email Option')
    if (email === true && !validEmail(input)) return 'Email Invalid'
  }
  if (options.hasOwnProperty('minLength')) {
      if (typeof minLength != 'number' || !isFinite(minLength) || minLength < 0) throw new Error('Invalid Minimum Length Option')
      if (input.length < minLength) return 'Too short'
  }
  if (options.hasOwnProperty('maxLength')) {
    if (typeof options.maxLength != 'number' || !isFinite(options.maxLength) || options.maxLength < 0) throw new Error('Invalid Maximum Length Option')
    if (input.length > options.maxLength) return 'Too long'
  }
  if (options.hasOwnProperty('length')) {
    if (typeof length != 'number' || !isFinite(length) || length < 0) throw new Error('Invalid Length Option')
    if (input.length != length) return 'Incorrect Length'
  }
  if (options.hasOwnProperty('allowed')) {
    if (typeof allowed != 'string' || allowed.length < 1) throw new Error('Invalid Allowed Option')
    if ([...input].some(letter => !allowed.includes(letter))) return 'Character not allowed'
  }
  if (options.hasOwnProperty('banned')) {
    if (typeof banned != 'string' || banned.length < 1) throw new Error('Invalid Banned Option'
    if ([...input].some(letter => banned.includes(letter))) return 'Character not allowed'
  }
  if (options.hasOwnProperty('lowercase')) {
    if (typeof lowercase != 'boolean') throw new Error('Invalid Lowercase Option')
    if (lowercase === true && input.toLowerCase() != input) return 'Lowercase only'
  }
  if (options.hasOwnProperty('uppercase')) {
    if (typeof uppercase != 'boolean') throw new Error('Invalid Lowercase Option')
    if (uppercase === true && input.toUpperCase() != input) return 'Uppercase only'
  }
  if (options.hasOwnProperty('whitespace')) {
    if (typeof whitespace != 'boolean') throw new Error('Invalid Whitespace Option')
    if (whitespace === false && input.includes(' ')) return 'No whitespace'
  }
  if (options.hasOwnProperty('regex')) {
    if (!(regex instanceof RegExp)) throw new Error('Invalid Regex Option')
    if (regex.test(input) !== true) return 'Failed regex'
  }
  return null
}

module.exports = sanitizeString
