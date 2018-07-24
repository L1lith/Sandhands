const sanitizeAny = require('../sanitize/any')
const ensureValidArguments = require('../functions/ensureValidArguments')

function valid(...args) {
  ensureValidArguments(...args)
  return sanitizeAny(...args) === null
}

module.exports = valid
