const sanitizeObject = require('./source/object')
const valid = require('./source/valid')
const sanitize = require('./source/sanitize')
const Sanitizer = require('./source/Sanitizer')

module.exports = Object.freeze({Sanitizer, sanitize, valid, details: sanitizeObject})
