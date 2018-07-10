const sanitizeObject = require('./object')
const {sanitizePrimitive} = require('./primitive')
const flattenErrorsObject = require('./flattenErrorsObject')

function valid(...args) {
  return flattenErrorsObject(sanitizeObject(...args)).length < 1
}

module.exports = valid
