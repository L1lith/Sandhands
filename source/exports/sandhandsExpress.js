import validate from '../validate/any'
import sanitize from '../sanitize/any'
import details from './details'
import interpretCustomFormats from '../functions/interpretCustomFormats'
import interpretFormatShorthand from '../functions/interpretFormatShorthand'

function sandhandsExpress(format, options = {}) {
    format = interpretFormatShorthand(format)
    format = interpretCustomFormats(format)
    const formatError = validate(format, options)
    if (formatError !== null) throw new Error(formatError)
    return (req, res, next) => {
        if (!req.hasOwnProperty('body')) return res.status(500).send('Expected Body')
        const inputErrors = details(req.body, format, options)
        if (inputErrors !== null) return res.status(400).json(inputErrors)
        next()
    }
}

export default sandhandsExpress
