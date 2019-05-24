import sanitizeAny from '../sanitize/any'
import ensureValidArguments from '../functions/ensureValidArguments'
import interpretCustomFormats from '../functions/interpretCustomFormats'
import interpretFormatShorthand from '../functions/interpretFormatShorthand'

function valid(...args) {
    args[1] = interpretFormatShorthand(args[1])
    args[1] = interpretCustomFormats(args[1])
    ensureValidArguments(...args)
    return sanitizeAny(...args) === null
}

export default valid
