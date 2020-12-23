function validateArrayOptions(options) {
  const { firstAsStandard, minLength, maxLength, length, strict } = options
  if (options.hasOwnProperty('strict')) {
    if (typeof strict != 'boolean') return 'Invalid Strict Option, expected a boolean'
  }
  if (options.hasOwnProperty('minLength')) {
    if (typeof minLength != 'number' && !isFinite(minLength))
      return 'Invalid MinLength Option, expected a number'
  }
  if (options.hasOwnProperty('maxLength')) {
    if (typeof maxLength != 'number' && !isFinite(maxLength))
      return 'Invalid MaxLength Option, expected a number'
  }
  if (options.hasOwnProperty('length')) {
    if (typeof length != 'number' && !isFinite(length))
      return 'Invalid Length Option, expected a number'
  }
  if (options.hasOwnProperty('firstAsStandard')) {
    if (typeof firstAsStandard != 'boolean')
      return 'Invalid First As Standard Option, expected a boolean'
  }
  if (options.hasOwnProperty('firstAsStandard') && options.hasOwnProperty('strict'))
    return 'Cannot Use First As Standard and Strict at the same time'
  return null
}

export default validateArrayOptions
