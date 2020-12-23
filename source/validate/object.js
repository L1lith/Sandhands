function validateObjectOptions(options) {
  const { strict, optionalProps } = options

  if (options.hasOwnProperty('strict')) {
    if (typeof strict != 'boolean') return 'Invalid Strict Option'
  }

  if (options.hasOwnProperty('optionalProps')) {
    if (!Array.isArray(optionalProps) || optionalProps.some(value => typeof value != 'string'))
      return 'Optional Props must be an array of strings'
  }

  return null
}

export default validateObjectOptions
