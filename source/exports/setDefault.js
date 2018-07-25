const validate = require('../validate/any')
const isEmptyObject = require('../functions/isEmptyObject')
const firstError = require('../functions/firstError')
const defaultOptions = require('../defaultOptions')

function setDefault(type, defaults) {
  if (isEmptyObject(type)) type = Object
  if (Array.isArray(type) && type.length === 0) type = []

  if (!defaultOptions.has(type)) throw new Error("Invalid Type")

  const formatError = validate(type === Object ? {} : type === Array ? [] : type, defaults)
  if (formatError !== null) throw new Error(`Invalid Default Options, Error: "${formatError}"`)

  defaultOptions.set(type, Object.assign({}, defaultOptions.get(type), defaults))
}

module.exports = setDefault
