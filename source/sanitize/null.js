function sanitizeNull(input, options) {
  if (input !== null) return 'Expected Null'
  return null
}

export default sanitizeNull
