function validateObjectOptions(options) {
  const {strict} = options

  if (options.hasOwnProperty('strict')) {
    if (typeof strict != 'boolean') return 'Invalid Strict Option'
  }
}

module.exports = validateObjectOptions
