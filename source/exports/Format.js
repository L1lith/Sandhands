import validate from '../validate/any'
import sanitize from './sanitize'
import valid from './valid'
import details from './details'

class Format {
    constructor(format, options) {
        validate(format, options)
        this.format = { ...(options || {}), _: format }
    }
    details(input) {
        return details(input, this.format)
    }
    valid(input) {
        return valid(input, this.format)
    }
    sanitize(input) {
        return sanitize(input, this.format)
    }
}

const formatProxy = {
    get: (target, prop) => {
        if (target === createFormat) return createFormat[prop]
        if (!(target instanceof Format)) {
            throw new Error('Expected Format Instance')
        }
        if (prop === '_') throw new Error('You must assign the format in the constructor')
        if (prop === 'format') return target.format
        if (target.hasOwnProperty(prop) && typeof target[prop] == 'function')
            return target[prop].bind(target)
        return (newValue = true) => {
            target.format[prop] = newValue
            return new Proxy(target, formatProxy)
        }
    },
    construct(target, args) {
        return createFormat(...args)
    }
}

function createFormat(...args) {
    if (args.length < 1) throw new Error('Must supply a format.')
    const [format, options] = args
    return new Proxy(new Format(format, options), formatProxy)
}
const format = new Proxy(createFormat, formatProxy)
export { format, Format }
