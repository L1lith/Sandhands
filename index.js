const sanitizeObject = require('./object')
const valid = require('./valid')
const sanitize = require('./sanitize')
const Sanitizer = require('./Sanitizer')

module.exports = Object.freeze({Sanitizer, sanitize, valid, details: sanitizeObject})
