import sanitizeAny from '../sanitize/any'
import firstError from '../functions/firstError'

function sanitize(...args) {
  const sanitationDetails = sanitizeAny(...args)
  const error = firstError(sanitationDetails, true)

  if (error !== null) {
    const finalError = new Error(error)
    finalError.sanitationDetails = sanitationDetails
    throw finalError
  }
  return true
}

export default sanitize
