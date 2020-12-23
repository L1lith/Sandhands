import sanitizeAny from '../sanitize/any'
import firstError from '../functions/firstError'
import ensureValidArguments from '../functions/ensureValidArguments'
import interpretCustomFormats from '../functions/interpretCustomFormats'
import interpretFormatShorthand from '../functions/interpretFormatShorthand'

function sanitize(...args) {
  args[1] = interpretFormatShorthand(args[1])
  args[1] = interpretCustomFormats(args[1])
  ensureValidArguments(...args)
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
