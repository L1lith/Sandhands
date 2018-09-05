const FormatClass = require('../exports/Format').Format

function interpretFormatShorthand(format) {
  if(typeof format == 'object' && format !== null) {
    if (format instanceof FormatClass) return interpretFormatShorthand(format.format)
    if (format.hasOwnProperty('_')) return {...format, _: interpretFormatShorthand(format._))}
    const output = {}
    Object.entries(format).forEach(([key, value]) => {
      output[key] = interpretFormatShorthand(value)
    })
    return output
  }
  return format
}

module.exports = interpretFormatShorthand
