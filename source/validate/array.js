function validateArrayOptions(options) {
  const {firstAsStandard, minLength, maxLength, length} = options
  if (options.hasOwnProperty('minLength')) {
    if (typeof minLength != 'number' && !isFinite(minLength)) return 'Invalid MinLength Option'
  }
  if (options.hasOwnProperty('maxLength')) {
    if (typeof maxLength != 'number' && !isFinite(maxLength)) return 'Invalid MaxLength Option'
  }
  if (options.hasOwnProperty('length')) {
    if (typeof length != 'number' && !isFinite(length)) return 'Invalid Length Option'
  }
  if (options.hasOwnProperty('firstAsStandard')) {
    if (typeof firstAsStandard != 'boolean') return 'Invalid First As Standard Option'
  }
  return null
}

module.exports = validateArrayOptions
