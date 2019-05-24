import validateAny from '../validate/any'

function ensureValidArguments(input, format, options) {
    if (arguments.length < 1) throw new Error('Missing Input Argument')
    if (arguments.length < 2) throw new Error('Missing Format Argument')
    if (arguments.length > 2 && (typeof options != 'object' || options === null))
        throw new Error('Options Invalid')
    const error = validateAny(format, options)
    if (error !== null) throw new Error(error)
}

export default ensureValidArguments
