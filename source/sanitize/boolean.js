function sanitizeBoolean(input, options) {
    if (typeof input != 'boolean') return 'Expected Boolean'
    return null
}

export default sanitizeBoolean
