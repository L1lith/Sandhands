import validateAny from '../validate/any'

function ensureValidArguments(inlineOptions) {
  // This function has been disabled as it cannot handle deep formats
  //throw new Error('This feature has been temporarily disabled')
  const { format, options } = inlineOptions
  //if (arguments.length < 1) throw new Error('Missing Input Argument')
  //if (arguments.length < 2) throw new Error('Missing Format Argument')
  if (typeof options != 'object' || options === null) throw new Error(`Options Invalid`)
  const error = validateAny(inlineOptions)
  if (error !== null) {
    const err = new Error(error)
    err.inlineOptions = inlineOptions
    throw err
  }
  return true
}

export default ensureValidArguments
