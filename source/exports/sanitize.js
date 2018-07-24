const sanitizeAny = require('../sanitize/any')
const firstError = require('../functions/firstError')
const ensureValidArguments = require('../functions/ensureValidArguments')

function sanitize(...args) {
  ensureValidArguments(args)
  const error = firstError(sanitizeObject(...args), true)
  if (error !== null) throw new Error(error)
}

module.exports = sanitize
