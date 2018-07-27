const customFormats = require('../customFormats')

function interpretCustomFormats(format) {
  if (typeof format == 'string' ) {
    if (!customFormats.hasOwnProperty(format)) throw new Error(`Custom Format "${format}" Not Found`)
    return customFormats[format]
  }
  if (typeof format == 'object' && format !== null) {
    if (Array.isArray(format)) {
      return format.map(interpretCustomFormats)
    } else {
      if (format.hasOwnProperty('_')) {
        return {...format, _: interpretCustomFormats(format._)}
      } else {
        const output = {}
        Object.entries(format).forEach(([key, value]) => {
          output[key] = interpretCustomFormats(value)
        })
        return output
      }
    }
  }
  return format
}

module.exports = interpretCustomFormats
