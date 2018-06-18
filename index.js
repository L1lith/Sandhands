const {sanitizePrimitive} = require('./primitive')
const sanitizeObject = require('./object')
const {validObject, validPrimitive} = require('./valid')
const Sanitizer = require('./Sanitizer')

module.exports = {Sanitizer, sanitizePrimitive, sanitizeObject, validObject, validPrimitive, sanitize: sanitizeObject, valid: validObject}
