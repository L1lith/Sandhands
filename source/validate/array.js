function validateArrayOptions(options) {
  const {firstAsStandard} = options
  if (options.hasOwnProperty('firstAsStandard')) {
    if (typeof firstAsStandard != 'boolean') return 'Invalid First As Standard Option'
  }
  return null
}

module.exports = validateArrayOptions
