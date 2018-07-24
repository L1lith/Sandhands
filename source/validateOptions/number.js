function validateNumberOptions(options) {
  const errors = []
  const {allowNaN, finite, min, max, even, odd} = options

  if (options.hasOwnProperty('allowNaN')) {
    if (typeof allowNaN != 'boolean') errors.push('Invalid AllowNaN Option')
  }
  if (options.hasOwnProperty('finite')) {
    if (typeof finite != 'boolean') errors.push('Invalid Finite Option')
  }
  if (options.hasOwnProperty('min')) {
    if (typeof min != 'number' && !isFinite(min)) errors.push('Invalid Min Option')
  }
  if (options.hasOwnProperty('max')) {
    if (typeof max != 'number' || !isFinite(max)) errors.push('Invalid Max Option')
  }
  if (options.hasOwnProperty('even')) {
    if (typeof even != 'boolean') errors.push('Invalid Even Option')
  }
  if (options.hasOwnProperty('odd')) {
    if (typeof odd != 'boolean') errors.push('Invalid Odd Option')
  }
  return errors
}

module.exports = validateNumberOptions
