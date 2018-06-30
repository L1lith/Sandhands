const sanitizeObject = require('./object')
const valid = require('./valid')
const Sanitizer = require('./Sanitizer')

module.exports = Object.freeze({Sanitizer, valid, details: sanitizeObject})
