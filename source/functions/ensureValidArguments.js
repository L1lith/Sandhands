import validateAny from '../validate/any'

function ensureValidArguments(input, inlineOptions) {
  const { format, options } = inlineOptions
  //if (arguments.length < 1) throw new Error('Missing Input Argument')
  //if (arguments.length < 2) throw new Error('Missing Format Argument')
  if (typeof options != 'object' || options === null) throw new Error('Options Invalid')
  const error = validateAny(format, options)
  if (error !== null) throw new Error(error)
  return true
}

export default ensureValidArguments
