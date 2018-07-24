const sanitizeAny = require('../sanitize/any')
const ensureValidArguments = require('../functions/ensureValidArguments')

function details(...args){
  ensureValidArguments(args)
  return sanitizeAny(...args)
}

module.exports = details
