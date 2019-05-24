import sanitizeAny from '../sanitize/any'
import firstError from '../functions/firstError'
import ensureValidArguments from '../functions/ensureValidArguments'
import interpretCustomFormats from '../functions/interpretCustomFormats'
import interpretFormatShorthand from '../functions/interpretFormatShorthand'

function sanitize(...args) {
    args[1] = interpretFormatShorthand(args[1])
    args[1] = interpretCustomFormats(args[1])
    ensureValidArguments(...args)
    const error = firstError(sanitizeAny(...args), true)
    if (error !== null) throw new Error(error)
}

export default sanitize
