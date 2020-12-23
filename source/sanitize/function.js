function sanitizeFunction(input, options) {
  if (typeof input != 'function') return 'Expected Function'
  return null
}

export default sanitizeFunction
