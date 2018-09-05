const FormatClass = require('../exports/Format').Format

function interpretFormatShorthand(format) {
  if(format instanceof FormatClass) return format.format
  return format
}

module.exports = interpretFormatShorthand
