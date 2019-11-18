function sanitizeNumber(input, options) {
    if (typeof input != 'number') return 'Expected Number'
    const { allowNaN, finite, min, max, even, odd, integer } = options

    if (options.hasOwnProperty('allowNaN')) {
        if (typeof allowNaN != 'boolean') throw new Error('Invalid AllowNaN Option')
        if (allowNaN === false && isNaN(input)) return 'NaN not allowed'
    }
    if (options.hasOwnProperty('finite')) {
        if (typeof finite != 'boolean') throw new Error('Invalid Finite Option')
        if (finite === true && !isFinite(input) && !isNaN(input)) return 'Infinity not allowed'
    }
    if (options.hasOwnProperty('min')) {
        if (typeof min != 'number' && !isFinite(min)) throw new Error('Invalid Min Option')
        if (input < min) return 'Too small'
    }
    if (options.hasOwnProperty('max')) {
        if (typeof max != 'number' || !isFinite(max)) throw new Error('Invalid Max Option')
        if (input > max) return 'Too great'
    }
    if (options.hasOwnProperty('even')) {
        if (typeof even != 'boolean') throw new Error('Invalid Even Option')
        if (even === true && input % 2 != 0) return 'Not even'
    }
    if (options.hasOwnProperty('odd')) {
        if (typeof odd != 'boolean') throw new Error('Invalid Odd Option')
        if (odd === true && input % 2 != 1) return 'Not odd'
    }
    if (options.hasOwnProperty('integer')) {
      if (typeof integer != 'boolean') throw new Error("Invalid Integer Option")
      if (integer === true && input % 1 !== 0) return 'Not an integer'
    }
    return null
}

export default sanitizeNumber
