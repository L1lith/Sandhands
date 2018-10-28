const validEmail = require('../functions/validEmail')

function sanitizeString(input, options) {
  const {regex, minLength, maxLength, length, allowed, banned, lowercase, uppercase, email, whitespace, trimmed} = options

  if (typeof input != 'string') return 'Expected String'

  if (options.hasOwnProperty('email')) {
    if (email === true && !validEmail(input)) return 'Email Invalid'
  }
  if (options.hasOwnProperty('minLength')) {
      if (input.length < minLength) return 'Too short'
  }
  if (options.hasOwnProperty('maxLength')) {
    if (input.length > options.maxLength) return 'Too long'
  }
  if (options.hasOwnProperty('length')) {
    if (input.length != length) return 'Incorrect Length'
  }
  if (options.hasOwnProperty('allowed')) {
    if ([...input].some(letter => !allowed.includes(letter))) return 'Character not allowed'
  }
  if (options.hasOwnProperty('banned')) {
    if ([...input].some(letter => banned.includes(letter))) return 'Character not allowed'
  }
  if (options.hasOwnProperty('lowercase')) {
    if (lowercase === true && input.toLowerCase() != input) return 'Lowercase only'
  }
  if (options.hasOwnProperty('uppercase')) {
    if (uppercase === true && input.toUpperCase() != input) return 'Uppercase only'
  }
  if (options.hasOwnProperty('whitespace')) {
    if (whitespace === false && /\s/.test(input)) return 'No whitespace'
  }
  if (options.hasOwnProperty('regex')) {
    if (regex.test(input) !== true) return 'Failed regex'
  }
  if (options.hasOwnProperty('trimmed')) {
    if (trimmed === true) {
      if (/^\s/.test(input)) return 'Cannot start with whitespace'
      if (/\s$/.test(input)) return 'Cannot end with whitespace'
    }
  }
  return null
}

module.exports = sanitizeString
