function validateNumberOptions(options) {
  const {allowNaN, finite, min, max, even, odd} = options

  if (options.hasOwnProperty('allowNaN')) {
    if (typeof allowNaN != 'boolean') return 'Invalid AllowNaN Option'
  }
  if (options.hasOwnProperty('finite')) {
    if (typeof finite != 'boolean') return 'Invalid Finite Option'
  }
  if (options.hasOwnProperty('min')) {
    if (typeof min != 'number' && !isFinite(min)) return 'Invalid Min Option'
  }
  if (options.hasOwnProperty('max')) {
    if (typeof max != 'number' || !isFinite(max)) return 'Invalid Max Option'
  }
  if (options.hasOwnProperty('even')) {
    if (typeof even != 'boolean') return 'Invalid Even Option'
  }
  if (options.hasOwnProperty('odd')) {
    if (typeof odd != 'boolean') return 'Invalid Odd Option'
  }
  return null
}

export default validateNumberOptions
