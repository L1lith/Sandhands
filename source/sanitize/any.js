const sanitizeArray = require('./array')
const sanitizeObject = require('./object')

const primitives = new Map([
  [String, require('./string')],
  [Number, require('./number')],
  [Boolean, require('./boolean')],
  [null, require('./null')],
  [undefined, require('./undefined')]
])

function sanitizeAny(input, format, options) {
  while (format.hasOwnProperty('_')) {
    const newOptions = {...format}
    delete newOptions._
    Object.assign(options, newOptions)
    format = format._
  }

  if (primitives.has(format)) {
    return primitives.get(format)(input, options)
  } else if (Array.isArray(format)) {
    return sanitizeArray(input, format, options)
  } else if (typeof format == 'object') {
    return sanitizeObject(input, format, options)
  } else {
    throw new Error('Invalid Format')
  }
}

module.exports = sanitizeAny
