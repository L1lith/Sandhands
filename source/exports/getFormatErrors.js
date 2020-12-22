import validate from '../validate/any'

function getFormatErrors(format) {
    if (arguments.length < 1) throw new Error('Must supply a format')
    return validate(format)
}

export default getFormatErrors
