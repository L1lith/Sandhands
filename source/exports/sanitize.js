const sanitizeAny = require('../sanitize/any')
const firstError = require('../functions/firstError')
const interpretCustomFormats = require('../functions/interpretCustomFormats')
const ensureValidArguments = require('../functions/ensureValidArguments')

function sanitize(...args) {
  args[1] = interpretCustomFormats(args[1])
  ensureValidArguments(...args)
  const error = firstError(sanitizeAny(...args), true)
  if (error !== null) throw new Error(error)
}

module.exports = sanitize
