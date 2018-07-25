const validate = require('../validate/any')
const customFormats = require('../customFormats')

function customFormat(name, format) {
  if (arguments.length === 1 && typeof arguments[0] == 'object' && arguments[0] !== null) {
    Object.entries(arguments[0]).forEach(([key, value]) => {
      customFormat(key, value)
    })
    return
  }
  if (typeof name != 'string' || name.length < 1) throw new Error('Custom Format Name Invalid')
  const formatError = validate(format)
  if (formatErrors !== null) throw new Error(`Custom Format Invalid, "${format}"`)

  customFormats[name] = format
}

module.exports = customFormat
