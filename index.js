const {sanitizePrimitive} = require('./primitive')
const sanitizeObject = require('./object')
const {validObject, validPrimitive} = require('./valid')
const sanitizer = require('./sanitizer')

module.exports = {sanitizer, sanitizePrimitive, sanitizeObject, validObject, validPrimitive}
