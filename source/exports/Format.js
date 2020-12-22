import validate from '../validate/any'
import sanitize from './sanitize'
import valid from './valid'
import details from './details'

class Format {
    constructor(format, options) {
      validate(format, options)
      this.format = { ...(options || {}), _: format }
    }
    setOptions(options) {
      if (typeof options !== 'object' || options === null) throw new Error("Options must be an object")
      if (options.hasOwnProperty("_")) console.warn("Warning: Setting the primary format (the \"_\" property) through the setOptions, this could cause unintended behavior.")
      Object.assign(this.format, options)
    }
    setOption(optionName, value) {
      if (typeof optionName != 'string') throw new Error("option name must be a string")
      this.format[optionName] = value
    }
    getOption(optionName) {
      if (typeof optionName != 'string') throw new Error("option name must be a string")
      return this.format[optionName]
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
    Or(...formats) {
      //throw new Error("This feature has been temporarily disabled.")
      if (formats.length < 1) throw new Error("Must supply at least 1 format")
      formats.forEach(format => validate(format))
      this.setOption("_or", (this.getOption("_or") || []).concat(formats))
    }
    And(...formats) {
      //throw new Error("This feature has been temporarily disabled.")
      if (formats.length < 1) throw new Error("Must supply at least 1 format")

      formats.forEach(format => validate(format))
      this.setOption("_and", (this.getOption("_and") || []).concat(formats))
    }
    Not(...formats) {
      //throw new Error("This feature has been temporarily disabled.")
      if (formats.length < 1) throw new Error("Must supply at least 1 format")
      formats.forEach(format => validate(format))
      this.setOption("_not", (this.getOption("not") || []).concat(formats))
    }
}

const nonSelfReturningFunctions = ["details", "valid", "sanitize"]

const formatProxy = {
    get: (target, prop) => {
        if (target === createFormat) return createFormat[prop]
        if (!(target instanceof Format)) {
            throw new Error('Expected Format Instance')
        }
        if (prop === "constructor") throw new Error("Cannot retrieve the contructor")
        //if (prop === '_') throw new Error('You must assign the format in the constructor')
        if (prop === 'format') return target.format
        if (typeof target[prop] == 'function') {
          const func = target[prop]
          if (nonSelfReturningFunctions.includes(prop)) return func.bind(target)
          return (...args) => {
            func.apply(target, args)
            return new Proxy(target, formatProxy)
          }
        }
        //if (prop === "And") throw require('util').inspect([target, target[prop], prop])
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
