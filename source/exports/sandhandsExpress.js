const validate = require('../validate/any')
const sanitize = require('../sanitize/any')
const details = require('./details')
const interpretCustomFormats = require('../functions/interpretCustomFormats')
const interpretFormatShorthand = require('../functions/interpretFormatShorthand')

function sandhandsExpress(format, options={}) {
  format = interpretFormatShorthand(format)
  format = interpretCustomFormats(format)
  const formatError = validate(format, options)
  if (formatError !== null) throw new Error(formatError)
  return (req, res, next) => {
    if (!req.hasOwnProperty('body')) return res.status(400).send("Expected Body")
    const inputErrors = details(req.body, format, options)
    if (inputErrors !== null) return res.status(400).json(inputErrors)
    next()
  }
}

module.exports = sandhandsExpress
