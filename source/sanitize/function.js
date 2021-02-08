function sanitizeFunction(sanitizeAny, input, format, options) {
  if (typeof input != 'function') return 'Expected Function'
  return null
}

export default sanitizeFunction
