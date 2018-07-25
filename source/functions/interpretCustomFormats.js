const customFormats = require('../customFormats')

function interpretCustomFormats(format) {
  if (typeof format == 'string' && customFormats.hasOwnProperty(format)) format = customFormats[format]
  if (typeof format == 'object' && format !== null) {
    if (Array.isArray(format)) {
      return format.map(interpretCustomFormats)
    } else {
      const output = {}
      Object.entries(format).forEach(([key, value]) => {
        output[key] = interpretCustomFormats(value)
      })
      return output
    }
  }
  return format
}

module.exports = interpretCustomFormats
