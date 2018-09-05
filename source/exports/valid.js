const sanitizeAny = require('../sanitize/any')
const ensureValidArguments = require('../functions/ensureValidArguments')
const interpretCustomFormats = require('../functions/interpretCustomFormats')
const interpretFormatShorthand = require('../functions/interpretFormatShorthand')

function valid(...args) {
  args[1] = interpretFormatShorthand(args[1])
  args[1] = interpretCustomFormats(args[1])
  ensureValidArguments(...args)
  return sanitizeAny(...args) === null
}

module.exports = valid
