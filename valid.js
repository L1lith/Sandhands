const sanitizeObject = require('./object')
const {sanitizePrimitive} = require('./primitive')

function valid(...args) {
  const errors = flattenErrorsObject(sanitizeObject(...args))
  if (errors.length > 0) throw new Error(errors[0])
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

module.exports = valid
