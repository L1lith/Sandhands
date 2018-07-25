const sanitizeAny = require('../sanitize/any')
const interpretCustomFormats = require('../functions/interpretCustomFormats')
const ensureValidArguments = require('../functions/ensureValidArguments')

function details(...args) {
  args[1] = interpretCustomFormats(args[1])
  ensureValidArguments(...args)
  return sanitizeAny(...args)
}

module.exports = details
