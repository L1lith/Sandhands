import sanitizeAny from '../sanitize/any'

function valid(...args) {
  return sanitizeAny(...args) === null
}

export default valid
