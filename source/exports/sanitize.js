const sanitizeAny = require('../sanitize/any')
const firstError = require('../functions/firstError')
const ensureValidArguments = require('../functions/ensureValidArguments')
const interpretCustomFormats = require('../functions/interpretCustomFormats')
const interpretFormatShorthand = require('../functions/interpretFormatShorthand')

function sanitize(...args) {
  args[1] = interpretFormatShorthand(args[1])
  args[1] = interpretCustomFormats(args[1])
  ensureValidArguments(...args)
  const error = firstError(sanitizeAny(...args), true)
  if (error !== null) throw new Error(error)
}

module.exports = sanitize
