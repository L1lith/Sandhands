const {sanitizePrimitive} = require('./primitive')
const sanitizeObject = require('./object')
const {validObject, validPrimitive} = require('./valid')
const Sanitizer = require('./Sanitizer')

module.exports = Object.freeze({Sanitizer, sanitizePrimitive, sanitizeObject, validObject, validPrimitive, sanitize: sanitizeObject, valid: validObject})
