function sanitizeNull(input, options) {
  if (input !== null) return 'Expected Null'
  return null
}

module.exports = sanitizeNull
