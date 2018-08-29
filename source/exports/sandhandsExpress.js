const validate = require('../validate/any')
const sanitize = require('../sanitize/any')
const details = require('./details')
const interpretCustomFormats = require('../functions/interpretCustomFormats')

function sandhandsExpress(format, options={}) {
  format = interpretCustomFormats(format)
  const formatError = validate(format, options)
  if (formatError !== null) throw new Error(formatError)
  return (req, res) => {
    if (!req.hasOwnProperty('body')) throw new Error('SandHands: Request Missing Body')
    const inputErrors = details(req.body, format, options)
    if (inputErrors !== null) return res.status(400).json(inputErrors)
    next()
  }
}

module.exports = sandhandsExpress
