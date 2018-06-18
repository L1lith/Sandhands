const sanitizeObject = require('./object')
const {sanitizePrimitive} = require('./primitive')

function validObject(...args) {
  return flattenErrorsObject(sanitizeObject(...args)).length < 1
}

function validPrimitive(...args) {
  return sanitizePrimitive(...args).length < 1
}

function flattenErrorsObject(object) {
  let output = []
  Object.values(object).forEach(value => {
    if (Array.isArray(object)) {
      output = output.concat(value)
    } else {
      output = output.concat(flattenErrorsObject(value))
    }
  })
  return output
}

module.exports = {validPrimitive, validObject}
