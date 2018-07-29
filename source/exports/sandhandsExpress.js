const validate = require('../../validate/any')
const sanitize = require('../../sanitize/any')
const stripNullValues = require('../../functions/stripNullValues')
const details = require('../details')

function sandhandsExpress(format, options={}) {
  const formatError = validate(format, options)
  if (formatError !== null) throw new Error(formatError)
  return (req, res, next) => {
    if (!req.hasOwnProperty('body')) throw new Error('SandHands: Request Missing Body')
    const inputErrors = details(req.body, format, options)
    stripNullValues(inputErrors)
    if (inputErrors !== null) return res.status(400).json(inputErrors)
    next()
  }
}

module.exports = sandhandsExpress
