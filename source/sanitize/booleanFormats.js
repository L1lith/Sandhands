function sanitizeBooleanFormats(sanitizeAny, input, inlineOptions) {
  const { ORFormats, ANDFormats, NOTFormats, options, format } = inlineOptions
  // Handling NOT
  if (NOTFormats.length > 0) {
    for (let i = 0, l = NOTFormats.length; i < l; i++) {
      // Store the length instead of retrieving it every time for optimal performance
      const error = sanitizeAny(input, NOTFormats[i])
      if (error === null) return 'Something was NOT allowed'
    }
  }
  // Handling AND
  if (ANDFormats.length > 0) {
    for (let i = 0, l = ANDFormats.length; i < l; i++) {
      // Store the length instead of retrieving it every time for optimal performance
      const error = sanitizeAny(input, ANDFormats[i])
      if (error !== null) return error
    }
  }
  const firstError = sanitizeAny(input, format, options)
  if (firstError === null) return null
  if (ORFormats.length > 0) {
    for (let i = 0, l = ORFormats.length; i < l; i++) {
      // Store the length instead of retrieving it every time for optimal performance
      const error = sanitizeAny(input, ORFormats[i])
      if (error === null) return null
    }
    return firstError
  }
  throw new Error('Function not supposed to reach the end')
}

export default sanitizeBooleanFormats
