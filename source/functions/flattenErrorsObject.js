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

module.exports = flattenErrorsObject
