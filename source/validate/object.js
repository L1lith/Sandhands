function validateObjectOptions(options) {
  const { strict, optionalProps, allOptional, bannedProps } = options
  const classInput = options.class

  if (options.hasOwnProperty('strict')) {
    if (typeof strict != 'boolean') return 'Invalid Strict Option'
  }
  if (options.hasOwnProperty('allOptional')) {
    if (typeof allOptional != 'boolean') return 'Invalid All Optional Option'
  }
  if (options.hasOwnProperty('optionalProps')) {
    if (!Array.isArray(optionalProps) || optionalProps.some(value => typeof value != 'string'))
      return 'Optional Props must be an array of strings'
  }
  if (options.hasOwnProperty('bannedProps')) {
    if (!Array.isArray(bannedProps) || bannedProps.some(value => typeof value != 'string'))
      return 'Banned Props must be an array of strings'
  }
  // if (options.hasOwnProperty('nullableProps')) {
  //   if (!Array.isArray(nullableProps) || nullableProps.some(value => typeof value != 'string'))
  //     return 'Nullable Props must be an array of strings'
  // }
  if (options.hasOwnProperty('class')) {
    if (!(typeof classInput == 'object' || typeof classInput == 'function'))
      return 'A class must be a function or an object'
  }
  return null
}

export default validateObjectOptions
