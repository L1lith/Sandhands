function sanitizeUndefined(input, options) {
    if (input !== undefined) return 'Expected Undefined'
    return null
}

export default sanitizeUndefined
